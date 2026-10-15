-- Apply once through the Supabase SQL editor. All shared writes enforce identity here.
create extension if not exists pgcrypto with schema extensions;
create table public.profiles (
 id uuid primary key references auth.users(id) on delete cascade,
 display_name text not null check (length(trim(display_name)) between 1 and 80),
 hours integer not null default 8 check (hours between 1 and 80),
 selected_domains text[] not null default array['python','engineering','math-data'] check (cardinality(selected_domains)>0),
 known_lessons text[] not null default '{}', last_lesson text not null default '', onboarded boolean not null default false
);
create table public.teams (id uuid primary key default gen_random_uuid(),name text not null check(length(trim(name)) between 1 and 80),owner_id uuid not null references public.profiles(id));
create table public.memberships (user_id uuid primary key references public.profiles(id) on delete cascade,team_id uuid not null references public.teams(id) on delete cascade,role text not null check(role in ('owner','member')));
create index memberships_team on public.memberships(team_id);
create table public.invitations (id uuid primary key default gen_random_uuid(),team_id uuid not null references public.teams(id) on delete cascade,token_hash text not null unique,expires_at timestamptz not null,revoked boolean not null default false);
create table public.lesson_progress (
 user_id uuid not null references public.profiles(id) on delete cascade,team_id uuid references public.teams(id) on delete cascade,lesson_id text not null check(length(lesson_id) between 1 and 180),
 status text not null check(status in ('Not started','Learning','Completed','Already known','Skipped')),checked text[] not null default '{}',evidence text not null default '' check(evidence='' or evidence ~ '^https?://'),confidence integer check(confidence between 0 and 100),concept_confidence jsonb not null default '{}',updated_at timestamptz not null default now(),primary key(user_id,lesson_id)
);
create table public.private_notes (user_id uuid not null references public.profiles(id) on delete cascade,lesson_id text not null,notes text not null default '' check(length(notes)<=20000),primary key(user_id,lesson_id));
create table public.custom_topics (id uuid primary key,user_id uuid not null references public.profiles(id) on delete cascade,team_id uuid references public.teams(id) on delete cascade,payload jsonb not null check(jsonb_typeof(payload)='object' and length(trim(payload->>'title')) between 1 and 120 and jsonb_typeof(payload->'checklist')='array'));
create table public.projects (
 id uuid primary key,team_id uuid not null references public.teams(id) on delete cascade,owner_id uuid not null references public.profiles(id),brief jsonb not null,
 status text not null default 'Planned' check(status in ('Planned','In progress','Completed')),milestones text[] not null default '{}',repo_url text not null default '' check(repo_url='' or repo_url ~ '^https?://'),demo_url text not null default '' check(demo_url='' or demo_url ~ '^https?://'),evidence text not null default '' check(length(evidence)<=20000),revision integer not null default 0
);
create table public.project_participants (project_id uuid not null references public.projects(id) on delete cascade,user_id uuid not null references public.profiles(id) on delete cascade,primary key(project_id,user_id));

create function public.valid_checklist(p_nodes jsonb,p_depth integer default 0) returns boolean language plpgsql immutable set search_path='' as $$
declare n jsonb;
begin
 if p_depth>10 or jsonb_typeof(p_nodes) is distinct from 'array' then return false;end if;
 for n in select value from jsonb_array_elements(p_nodes) loop
  if jsonb_typeof(n) is distinct from 'object' or jsonb_typeof(n->'id') is distinct from 'string' or jsonb_typeof(n->'label') is distinct from 'string' or length(trim(n->>'label')) not between 1 and 1000 or jsonb_typeof(n->'done') is distinct from 'boolean' or not public.valid_checklist(n->'children',p_depth+1) then return false;end if;
 end loop;
 return true;
end$$;
create function public.valid_topic_payload(p jsonb) returns boolean language plpgsql immutable set search_path='' as $$
declare r jsonb;
begin
 if jsonb_typeof(p) is distinct from 'object' or octet_length(p::text)>200000 or jsonb_typeof(p->'title') is distinct from 'string' or length(trim(p->>'title')) not between 1 and 120 or jsonb_typeof(p->'hours') is distinct from 'number' or (p->>'hours')::numeric not between 1 and 500 or (p->>'hours')::numeric<>trunc((p->>'hours')::numeric) or jsonb_typeof(p->'mapping') is distinct from 'string' or jsonb_typeof(p->'resources') is distinct from 'array' then return false;end if;
 if jsonb_array_length(p->'resources')<1 or not public.valid_checklist(p->'checklist') or jsonb_array_length(p->'checklist')<1 then return false;end if;
 for r in select value from jsonb_array_elements(p->'resources') loop
  if jsonb_typeof(r->'title') is distinct from 'string' or length(trim(r->>'title'))<1 or jsonb_typeof(r->'url') is distinct from 'string' or r->>'url' !~ '^https?://' then return false;end if;
 end loop;
 return true;
end$$;
create function public.valid_project_brief(p jsonb) returns boolean language plpgsql immutable set search_path='' as $$
declare k text;n jsonb;
begin
 if jsonb_typeof(p) is distinct from 'object' or octet_length(p::text)>200000 then return false;end if;
 foreach k in array array['id','patternId','title','problem','data','output','difficulty'] loop
  if jsonb_typeof(p->k) is distinct from 'string' or length(p->>k)=0 then return false;end if;
 end loop;
 foreach k in array array['skills','milestones','acceptance','documentation'] loop
  if jsonb_typeof(p->k) is distinct from 'array' then return false;end if;
  if jsonb_array_length(p->k)<1 or exists(select 1 from jsonb_array_elements(p->k) e where jsonb_typeof(e) is distinct from 'string') then return false;end if;
 end loop;
 if jsonb_typeof(p->'hours') is distinct from 'number' or (p->>'hours')::numeric<1 or jsonb_typeof(p->'integration') is distinct from 'array' or jsonb_typeof(p->'general') is distinct from 'boolean' then return false;end if;
 if jsonb_array_length(p->'integration')<>jsonb_array_length(p->'skills') then return false;end if;
 for n in select value from jsonb_array_elements(p->'integration') loop
  foreach k in array array['skillId','skillTitle','task','check','deliverable'] loop
   if jsonb_typeof(n->k) is distinct from 'string' or length(n->>k)=0 then return false;end if;
  end loop;
  if not (p->'skills' ? (n->>'skillId')) then return false;end if;
 end loop;
 return true;
end$$;
alter table public.custom_topics add constraint valid_topic check(public.valid_topic_payload(payload));
alter table public.projects add constraint valid_brief check(public.valid_project_brief(brief));

create function public.is_team_member(p_team uuid) returns boolean language sql stable security definer set search_path='' as $$select exists(select 1 from public.memberships where user_id=auth.uid() and team_id=p_team)$$;
create function public.is_team_owner(p_team uuid) returns boolean language sql stable security definer set search_path='' as $$select exists(select 1 from public.memberships where user_id=auth.uid() and team_id=p_team and role='owner')$$;
create function public.is_project_member(p_project uuid) returns boolean language sql stable security definer set search_path='' as $$select exists(select 1 from public.project_participants p join public.projects j on j.id=p.project_id where p.project_id=p_project and p.user_id=auth.uid() and public.is_team_member(j.team_id))$$;
create function public.shares_team(p_user uuid) returns boolean language sql stable security definer set search_path='' as $$select exists(select 1 from public.memberships a join public.memberships b on a.team_id=b.team_id where a.user_id=auth.uid() and b.user_id=p_user)$$;

alter table public.profiles enable row level security;
alter table public.teams enable row level security;
alter table public.memberships enable row level security;
alter table public.invitations enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.private_notes enable row level security;
alter table public.custom_topics enable row level security;
alter table public.projects enable row level security;
alter table public.project_participants enable row level security;
create policy profile_read on public.profiles for select to authenticated using(id=auth.uid() or public.shares_team(id));
create policy profile_insert on public.profiles for insert to authenticated with check(id=auth.uid());
create policy profile_update on public.profiles for update to authenticated using(id=auth.uid()) with check(id=auth.uid());
create policy team_read on public.teams for select to authenticated using(public.is_team_member(id));
create policy membership_read on public.memberships for select to authenticated using(user_id=auth.uid() or public.is_team_member(team_id));
create policy invitation_read on public.invitations for select to authenticated using(public.is_team_owner(team_id));
create policy invitation_revoke on public.invitations for update to authenticated using(public.is_team_owner(team_id)) with check(public.is_team_owner(team_id));
create policy progress_read on public.lesson_progress for select to authenticated using(user_id=auth.uid() or public.is_team_member(team_id));
create policy notes_read on public.private_notes for select to authenticated using(user_id=auth.uid());
create policy custom_read on public.custom_topics for select to authenticated using(user_id=auth.uid() or public.is_team_member(team_id));
create policy custom_insert on public.custom_topics for insert to authenticated with check(user_id=auth.uid() and (team_id is null or public.is_team_member(team_id)));
create policy custom_update on public.custom_topics for update to authenticated using(user_id=auth.uid()) with check(user_id=auth.uid() and (team_id is null or public.is_team_member(team_id)));
create policy project_read on public.projects for select to authenticated using(public.is_team_member(team_id));
create policy participant_read on public.project_participants for select to authenticated using(exists(select 1 from public.projects j where j.id=project_id and public.is_team_member(j.team_id)));

create function public.create_team(p_name text) returns uuid language plpgsql security definer set search_path='' as $$
declare v_team uuid;
begin
 if auth.uid() is null then raise exception 'Sign in first'; end if;
 if exists(select 1 from public.memberships where user_id=auth.uid()) then raise exception 'You already belong to a team'; end if;
 insert into public.teams(name,owner_id) values(trim(p_name),auth.uid()) returning id into v_team;
 insert into public.memberships values(auth.uid(),v_team,'owner');
 update public.lesson_progress set team_id=v_team where user_id=auth.uid();
 update public.custom_topics set team_id=v_team where user_id=auth.uid();
 return v_team;
end $$;
create function public.create_invitation() returns text language plpgsql security definer set search_path='' as $$
declare v_team uuid;v_token text;
begin
 select team_id into v_team from public.memberships where user_id=auth.uid() and role='owner';
 if v_team is null then raise exception 'Only the team owner can invite'; end if;
 v_token:=encode(extensions.gen_random_bytes(32),'hex');
 insert into public.invitations(team_id,token_hash,expires_at) values(v_team,encode(extensions.digest(v_token,'sha256'),'hex'),now()+interval '7 days');
 return v_token;
end $$;
create function public.accept_invitation(p_token text) returns uuid language plpgsql security definer set search_path='' as $$
declare v_team uuid;
begin
 if auth.uid() is null then raise exception 'Sign in first'; end if;
 if exists(select 1 from public.memberships where user_id=auth.uid()) then raise exception 'You already belong to a team'; end if;
 select team_id into v_team from public.invitations where token_hash=encode(extensions.digest(p_token,'sha256'),'hex') and not revoked and expires_at>now() for update;
 if v_team is null then raise exception 'Invitation invalid, expired or revoked'; end if;
 insert into public.memberships values(auth.uid(),v_team,'member');
 update public.lesson_progress set team_id=v_team where user_id=auth.uid();
 update public.custom_topics set team_id=v_team where user_id=auth.uid();
 return v_team;
end $$;
create function public.save_lesson_progress(p_lesson text,p_status text,p_checked text[],p_notes text,p_evidence text,p_confidence integer default null,p_concept_confidence jsonb default '{}') returns void language plpgsql security definer set search_path='' as $$
declare v_team uuid;
begin
 if auth.uid() is null then raise exception 'Sign in first'; end if;
 if jsonb_typeof(p_concept_confidence) is distinct from 'object' then raise exception 'Invalid concept ratings';end if;
 if exists(select 1 from jsonb_each(p_concept_confidence) e where jsonb_typeof(e.value) is distinct from 'number') then raise exception 'Concept ratings must be numbers';end if;
 if exists(select 1 from jsonb_each_text(p_concept_confidence) e where e.value::numeric not between 0 and 100 or e.value::numeric<>trunc(e.value::numeric)) then raise exception 'Concept ratings must be integers from 0 to 100';end if;
 select team_id into v_team from public.memberships where user_id=auth.uid();
 insert into public.lesson_progress(user_id,team_id,lesson_id,status,checked,evidence,confidence,concept_confidence) values(auth.uid(),v_team,p_lesson,p_status,p_checked,p_evidence,p_confidence,p_concept_confidence)
 on conflict(user_id,lesson_id) do update set status=excluded.status,checked=excluded.checked,evidence=excluded.evidence,confidence=excluded.confidence,concept_confidence=excluded.concept_confidence,team_id=excluded.team_id,updated_at=now();
 insert into public.private_notes values(auth.uid(),p_lesson,p_notes) on conflict(user_id,lesson_id) do update set notes=excluded.notes;
end $$;
create function public.start_project(p_id uuid,p_brief jsonb) returns uuid language plpgsql security definer set search_path='' as $$
declare v_team uuid;
begin
 select team_id into v_team from public.memberships where user_id=auth.uid();
 if v_team is null then raise exception 'Create or join a team first'; end if;
 if not public.valid_project_brief(p_brief) then raise exception 'Invalid project brief'; end if;
 insert into public.projects(id,team_id,owner_id,brief) values(p_id,v_team,auth.uid(),p_brief);
 insert into public.project_participants values(p_id,auth.uid());
 return p_id;
end $$;
create function public.join_project(p_project uuid) returns void language plpgsql security definer set search_path='' as $$
begin
 if not exists(select 1 from public.projects where id=p_project and public.is_team_member(team_id)) then raise exception 'Project unavailable'; end if;
 insert into public.project_participants values(p_project,auth.uid()) on conflict do nothing;
end $$;
create function public.update_project(p_id uuid,p_status text,p_milestones text[],p_repo text,p_demo text,p_evidence text,p_revision integer) returns void language plpgsql security definer set search_path='' as $$
begin
 if not public.is_project_member(p_id) then raise exception 'Only participants can edit this project'; end if;
 if exists(select 1 from unnest(p_milestones) m where m !~ '^step-[0-9]+$' or m is null) then raise exception 'Invalid milestone identifier'; end if;
 if exists(select 1 from unnest(p_milestones) m where substring(m from 6)::numeric >= (select jsonb_array_length(brief->'milestones') from public.projects where id=p_id)) then raise exception 'Milestone out of range';end if;
 update public.projects set status=p_status,milestones=p_milestones,repo_url=p_repo,demo_url=p_demo,evidence=p_evidence,revision=revision+1 where id=p_id and revision=p_revision;
 if not found then raise exception 'Project changed on another device. Refresh and retry.'; end if;
end $$;

-- No direct membership/project/progress writes. RPCs supply auth.uid() themselves.
revoke all on public.profiles,public.teams,public.memberships,public.invitations,public.lesson_progress,public.private_notes,public.custom_topics,public.projects,public.project_participants from anon,authenticated;
grant select on public.profiles,public.teams,public.memberships,public.invitations,public.lesson_progress,public.private_notes,public.custom_topics,public.projects,public.project_participants to authenticated;
grant insert,update on public.profiles,public.custom_topics to authenticated;
grant update(revoked) on public.invitations to authenticated;
revoke execute on function public.is_team_member(uuid),public.is_team_owner(uuid),public.is_project_member(uuid),public.shares_team(uuid),public.create_team(text),public.create_invitation(),public.accept_invitation(text),public.save_lesson_progress(text,text,text[],text,text,integer,jsonb),public.start_project(uuid,jsonb),public.join_project(uuid),public.update_project(uuid,text,text[],text,text,text,integer) from public,anon;
grant execute on function public.is_team_member(uuid),public.is_team_owner(uuid),public.is_project_member(uuid),public.shares_team(uuid),public.create_team(text),public.create_invitation(),public.accept_invitation(text),public.save_lesson_progress(text,text,text[],text,text,integer,jsonb),public.start_project(uuid,jsonb),public.join_project(uuid),public.update_project(uuid,text,text[],text,text,text,integer) to authenticated;
-- Realtime is optional; the app also refreshes on focus and every 30 seconds.
-- Enable these tables in Supabase Database > Replication for immediate updates:
-- profiles, lesson_progress, custom_topics, projects, project_participants.
