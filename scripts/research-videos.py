"""Collect official public video link metadata, without downloading video media."""
import concurrent.futures, html, json, pathlib, re, urllib.request
pages = [
 *[f'https://cs50.harvard.edu/python/2022/weeks/{i}/' for i in range(10)],
 'https://statquest.org/video_index.html',
 'https://karpathy.ai/zero-to-hero.html',
 'https://cs229.stanford.edu/syllabus-summer2019.html',
 'https://www.freecodecamp.org/news/learn-pytorch-for-deep-learning-in-day/',
 'https://www.freecodecamp.org/news/learn-how-to-build-apis-with-python/',
 'https://www.freecodecamp.org/news/docker-simplified/',
 'https://www.freecodecamp.org/news/git-and-github-for-beginners/',
 'https://www.freecodecamp.org/news/learn-sql-in-4-hours/',
 'https://www.freecodecamp.org/news/learn-object-oriented-programming-with-python/',
 'https://www.freecodecamp.org/news/learn-python-free-python-courses-for-beginners/',
 'https://www.freecodecamp.org/news/learn-langgraph-build-complex-ai-agents-with-python/',
 'https://www.3blue1brown.com/topics/neural-networks',
 'https://www.3blue1brown.com/topics/linear-algebra',
 'https://missing.csail.mit.edu/2020/course-shell/',
 'https://missing.csail.mit.edu/2020/version-control/',
 'https://course.fast.ai/Lessons/lesson1.html'
 ,'https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/'
 ,'https://www.freecodecamp.org/news/docker-full-course/'
 ,'https://www.freecodecamp.org/news/git-and-github-crash-course/'
 ,'https://www.freecodecamp.org/news/posgresql-course-for-beginners/'
 ,'https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/'
 ,'https://www.freecodecamp.org/news/machine-learning-for-everybody/'
 ,'https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/'
 ,'https://www.freecodecamp.org/news/linear-algebra-full-course/'
 ,'https://www.freecodecamp.org/news/free-statistics-course/'
 ,'https://www.freecodecamp.org/news/api-documentation-best-practices-course/'
 ,'https://www.freecodecamp.org/news/learn-python-and-build-autonomous-agents/'
 ,'https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/'
 ,'https://www.freecodecamp.org/news/local-ai-development-with-ollama-course/'
 ,'https://www.freecodecamp.org/news/ci-cd-in-production-with-jenkins/'
 ,'https://www.3blue1brown.com/lessons/gradient-descent'
 ,'https://www.3blue1brown.com/lessons/neural-networks'
 ,'https://www.3blue1brown.com/lessons/backpropagation'
]
def fetch(url):
 try:
  with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=25) as response:
   body=response.read().decode('utf-8',errors='replace')
  links=[]
  for href,text in re.findall(r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>',body,re.S):
   if 'youtu' in href:
    links.append({'url':html.unescape(href),'title':html.unescape(re.sub('<[^>]+>','',text)).strip()})
  ids=list(dict.fromkeys(re.findall(r'(?:youtube(?:-nocookie)?\.com/(?:embed/|watch\?v=)|youtu\.be/)([a-zA-Z0-9_-]{11})',body)))
  title=re.search('<title>(.*?)</title>',body,re.S)
  return {'source':url,'title':html.unescape(title.group(1)) if title else '', 'videos':ids,'links':links}
 except Exception as e:return {'source':url,'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:results=list(pool.map(fetch,pages))
root=pathlib.Path(__file__).resolve().parents[1]
(root/'content/video-research.json').write_text(json.dumps(results,indent=2)+'\n',encoding='utf-8')
for r in results:
 print(r['source'],str(r.get('videos',r.get('error')))[:180])
