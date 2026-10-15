-- Disposable test fixtures. Use after migration; all data rolls back.
begin;
insert into auth.users(id,email) values
 ('11111111-1111-4111-8111-111111111111','forge-owner@example.invalid'),
 ('22222222-2222-4222-8222-222222222222','forge-member@example.invalid'),
 ('33333333-3333-4333-8333-333333333333','forge-outsider@example.invalid');
set local role authenticated;
select set_config('request.jwt.claim.sub','11111111-1111-4111-8111-111111111111',true);
insert into public.profiles(id,display_name) values(auth.uid(),'QA owner');
select set_config('qa.team',public.create_team('QA test team')::text,true);
select set_config('qa.token',public.create_invitation(),true);
select public.save_lesson_progress('python-values','Completed',array['Types'],'PRIVATE owner note','https://example.com/evidence');
select public.save_lesson_progress('python-values','Completed',array['Types'],'PRIVATE owner note','https://example.com/evidence',40,'{"Types":80}'::jsonb);
select public.start_project('44444444-4444-4444-8444-444444444444', '{"id":"qa:project","patternId":"support","title":"QA project","problem":"A test-only project for checking authorization.","data":"Generated fixture records only.","output":"A reproducible fixture result.","skills":["ml"],"difficulty":"Beginner","hours":6,"integration":[{"skillId":"ml","skillTitle":"Machine learning","task":"Train a small baseline.","check":"Verify held-out predictions.","deliverable":"A model report","general":false}],"milestones":["Define scope","Implement","Evaluate","Document"],"acceptance":["Fixture check passes"],"documentation":["README"],"general":false}'::jsonb);
do $$begin
 assert (select count(*)=1 from public.private_notes),'Owner must read own notes';
 assert (select confidence=40 and concept_confidence->>'Types'='80' from public.lesson_progress where lesson_id='python-values'),'Ratings not saved separately';
 begin perform public.save_lesson_progress('bad-rating','Completed','{}','','',101,'{}');raise exception 'Invalid confidence accepted';exception when check_violation then null;end;
 begin perform public.save_lesson_progress('bad-concept','Completed','{}','','',10,'{"Types":200}');raise exception 'Invalid concept rating accepted';exception when others then if sqlerrm='Invalid concept rating accepted' then raise;end if;end;
 assert not public.valid_project_brief('{"id":"bad","title":"bad","milestones":[]}'::jsonb),'Malformed project accepted';
 assert not public.valid_topic_payload('{"title":"unsafe","hours":1,"mapping":"","resources":[{"title":"bad","url":"javascript:alert(1)"}],"checklist":[{"id":"x","label":"x","done":false,"children":[]}]}'::jsonb),'Unsafe custom URL accepted';
 begin perform public.create_team('Duplicate team');raise exception 'Duplicate team unexpectedly accepted';exception when others then if sqlerrm='Duplicate team unexpectedly accepted' then raise;end if;end;
end$$;

select set_config('request.jwt.claim.sub','33333333-3333-4333-8333-333333333333',true);
insert into public.profiles(id,display_name) values(auth.uid(),'QA outsider');
do $$begin
 assert (select count(*)=0 from public.teams),'Outsider read team';
 assert (select count(*)=0 from public.projects),'Outsider read project';
 assert (select count(*)=0 from public.lesson_progress),'Outsider read progress';
 assert (select count(*)=0 from public.private_notes),'Outsider read private notes';
 assert (select count(*)=1 from public.profiles),'Outsider read another profile';
 begin perform public.join_project('44444444-4444-4444-8444-444444444444');raise exception 'Unauthorized join accepted';exception when others then if sqlerrm='Unauthorized join accepted' then raise;end if;end;
 begin perform public.accept_invitation('invalid');raise exception 'Invalid invitation accepted';exception when others then if sqlerrm='Invalid invitation accepted' then raise;end if;end;
 begin insert into public.memberships values(auth.uid(),current_setting('qa.team')::uuid,'owner');raise exception 'Forged membership accepted';exception when insufficient_privilege then null;end;
end$$;

select set_config('request.jwt.claim.sub','22222222-2222-4222-8222-222222222222',true);
insert into public.profiles(id,display_name) values(auth.uid(),'QA member');
select public.accept_invitation(current_setting('qa.token'));
do $$begin
 assert (select count(*)=1 from public.projects),'Member cannot read team project';
 assert (select count(*)=1 from public.lesson_progress),'Member cannot read team progress';
 assert (select count(*)=0 from public.private_notes),'Member read owner notes';
 assert (select count(*)=0 from public.invitations),'Member read owner invitations';
 begin perform public.create_invitation();raise exception 'Member invitation creation accepted';exception when others then if sqlerrm='Member invitation creation accepted' then raise;end if;end;
 begin perform public.update_project('44444444-4444-4444-8444-444444444444','In progress','{}','','','',0);raise exception 'Nonparticipant edit accepted';exception when others then if sqlerrm='Nonparticipant edit accepted' then raise;end if;end;
 begin insert into public.lesson_progress(user_id,lesson_id,status) values('11111111-1111-4111-8111-111111111111','forged','Completed');raise exception 'Forged progress accepted';exception when insufficient_privilege then null;end;
 update public.profiles set display_name='FORGED' where id='11111111-1111-4111-8111-111111111111';
 assert (select display_name='QA owner' from public.profiles where id='11111111-1111-4111-8111-111111111111'),'Member edited owner profile';
end$$;
select public.join_project('44444444-4444-4444-8444-444444444444');
select public.join_project('44444444-4444-4444-8444-444444444444');
select public.update_project('44444444-4444-4444-8444-444444444444','In progress',array['step-0'],'https://example.com/repo','','QA result',0);
do $$begin
 assert (select count(*)=2 from public.project_participants),'Join is not idempotent';
 assert (select revision=1 from public.projects where id='44444444-4444-4444-8444-444444444444'),'Project revision not advanced';
 begin perform public.update_project('44444444-4444-4444-8444-444444444444','Completed','{}','','','',0);raise exception 'Stale revision accepted';exception when others then if sqlerrm='Stale revision accepted' then raise;end if;end;
end$$;

select set_config('request.jwt.claim.sub','11111111-1111-4111-8111-111111111111',true);
update public.invitations set revoked=true where team_id=current_setting('qa.team')::uuid;
select set_config('request.jwt.claim.sub','33333333-3333-4333-8333-333333333333',true);
do $$begin
 begin perform public.accept_invitation(current_setting('qa.token'));raise exception 'Revoked invitation accepted';exception when others then if sqlerrm='Revoked invitation accepted' then raise;end if;end;
 assert (select count(*)=0 from public.projects),'Revoked invitation granted access';
end$$;
reset role;
update public.invitations set revoked=false,expires_at=now()-interval '1 second' where team_id=current_setting('qa.team')::uuid;
set local role authenticated;
do $$begin
 begin perform public.accept_invitation(current_setting('qa.token'));raise exception 'Expired invitation accepted';exception when others then if sqlerrm='Expired invitation accepted' then raise;end if;end;
end$$;
set local role anon;
do $$begin
 begin perform public.create_team('Anonymous team');raise exception 'Anonymous write accepted';exception when insufficient_privilege then null;end;
end$$;
reset role;
rollback;
select 'PASS: RLS, private notes, invites, participant edits, idempotent joins, stale revisions and anonymous access' as result;
