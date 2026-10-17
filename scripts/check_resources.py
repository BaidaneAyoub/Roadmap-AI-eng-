"""Check unique lesson URLs; report failures without silently replacing resources."""
import concurrent.futures, datetime, json, pathlib, urllib.request
root = pathlib.Path(__file__).resolve().parents[1]
catalog = json.loads((root / 'src/data/catalog.json').read_text(encoding='utf-8'))
urls = {r['url']:r['title'] for l in catalog['lessons'] for r in l['resources']}
urls.update({v['source']:v['title']+' — publisher verification' for v in catalog['videos'].values()})
project_catalog = root / 'src/data/project-library.json'
if project_catalog.exists():
    projects = json.loads(project_catalog.read_text(encoding='utf-8'))['projects']
    urls.update({r['url']:r['title'] for p in projects for r in p.get('resources', [])})
def check(item):
    url,title = item
    try:
        req = urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0 (Curriculum resource verification)'})
        with urllib.request.urlopen(req, timeout=25) as response:
            body = response.read(120000).decode('utf-8',errors='ignore')
            return {'url':url,'title':title,'status':response.status,'finalUrl':response.url,'containsTitle':title.split(':')[0].lower() in body.lower()}
    except Exception as e:
        return {'url':url,'title':title,'status':'REVIEW','error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
    results = list(pool.map(check,urls.items()))
stamp = datetime.datetime.now(datetime.timezone.utc).isoformat()
(root/'docs/resource-checks.json').write_text(json.dumps({'checkedAt':stamp,'results':results},indent=2)+'\n',encoding='utf-8')
lines = ['# Resource verification','',f'Checked {stamp}. HTTP reachability is separate from relevance and access terms. Bot blocks/timeouts are reported for manual review; they do not establish that a page is unavailable to people. YouTube video provenance is recorded in VIDEOS.md and content/video-research.json; direct YouTube requests may be rate-limited. No transcripts or video media are downloaded.','', '| Resource | HTTP | Final URL / note |','|---|---|---|']
lines += [f"| [{r['title']}]({r['url']}) | {r['status']} | {r.get('error',r.get('finalUrl',''))} |" for r in results]
(root/'docs/RESOURCE_CHECKS.md').write_text('\n'.join(lines)+'\n',encoding='utf-8')
print(f"Checked {len(results)} URLs; {sum(r['status']=='REVIEW' for r in results)} need review")
