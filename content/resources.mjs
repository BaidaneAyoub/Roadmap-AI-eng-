// Each lesson references a chapter, tutorial, or video rather than a search result.
export const resource = (
  title,
  url,
  access = "Free; no registration required",
  extras = "No paid materials required",
) => ({ title, url, access, extras });
export const r = {
  python: resource("Python tutorial", "https://docs.python.org/3/tutorial/"),
  cs50: resource(
    "CS50P: free lectures and problem sets",
    "https://cs50.harvard.edu/python/",
    "Free OpenCourseWare; account optional for submissions",
    "Certificates on external platforms may cost money",
  ),
  git: resource("Pro Git: free book", "https://git-scm.com/book/en/v2"),
  linux: resource(
    "The Missing Semester: shell tools",
    "https://missing.csail.mit.edu/2020/course-shell/",
  ),
  http: resource(
    "MDN: overview of HTTP",
    "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview",
  ),
  numpy: resource(
    "NumPy absolute beginners",
    "https://numpy.org/doc/stable/user/absolute_beginners.html",
  ),
  pandas: resource(
    "pandas getting started tutorials",
    "https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html",
  ),
  math: resource(
    "Mathematics for Machine Learning: free book",
    "https://mml-book.github.io/",
  ),
  stat: resource(
    "StatQuest: indexed free video lessons",
    "https://statquest.org/video_index.html",
  ),
  ml: resource(
    "Inria scikit-learn MOOC",
    "https://inria.github.io/scikit-learn-mooc/",
  ),
  sklearn: resource(
    "scikit-learn user guide",
    "https://scikit-learn.org/stable/user_guide.html",
  ),
  dl: resource("Dive into Deep Learning: interactive book", "https://d2l.ai/"),
  fastai: resource(
    "Practical Deep Learning for Coders",
    "https://course.fast.ai/",
  ),
  torch: resource(
    "PyTorch: learn the basics",
    "https://docs.pytorch.org/tutorials/beginner/basics/intro.html",
  ),
  hf: resource(
    "Hugging Face LLM course",
    "https://huggingface.co/learn/llm-course/chapter1/1",
    "Free reading; Hugging Face account optional for sharing models",
  ),
  fastapi: resource(
    "FastAPI tutorial",
    "https://fastapi.tiangolo.com/tutorial/",
  ),
  sql: resource(
    "PostgreSQL tutorial",
    "https://www.postgresql.org/docs/current/tutorial.html",
  ),
  docker: resource(
    "Docker: run a container",
    "https://docs.docker.com/get-started/tutorials/run-an-app/",
  ),
  mcp: resource(
    "MCP: architecture",
    "https://modelcontextprotocol.io/docs/learn/architecture",
  ),
  security: resource(
    "OWASP Top 10 for LLM applications",
    "https://genai.owasp.org/llm-top-10/",
  ),
  product: resource(
    "Google PAIR: People + AI guidebook",
    "https://pair.withgoogle.com/guidebook/",
  ),
  docs: resource(
    "Google: technical writing essentials",
    "https://developers.google.com/tech-writing/one",
  ),
  agents: resource(
    "Hugging Face agents course",
    "https://huggingface.co/learn/agents-course/unit1/what-are-agents",
    "Free reading; optional account for course activities",
  ),
  testing: resource(
    "pytest: getting started",
    "https://docs.pytest.org/en/stable/getting-started.html",
  ),
  architecture: resource(
    "Google SRE book: free online",
    "https://sre.google/sre-book/table-of-contents/",
  ),
  coding: resource(
    "GitHub: responsible use of coding assistants",
    "https://docs.github.com/en/copilot/responsible-use/copilot-code-completion",
    "Free documentation",
    "The associated hosted coding product is optional and may be paid; exercises use manual code review",
  ),
  adr: resource("Architecture Decision Records", "https://adr.github.io/"),
};
export const chapter = (base, title, url) => ({ ...base, title, url });
