export const topicMenuItems = [
  { key: 'mccss-accessibility', title: 'MCCSS / Accessibility' },
  { key: 'python', title: 'Python' },
  { key: 'power-bi', title: 'Power BI' },
  { key: 'dax', title: 'DAX' },
  { key: 'azure', title: 'Azure' },
  { key: 'databricks', title: 'Databricks' },
  { key: 'data-modeling', title: 'Data Modeling' },
  { key: 'reddit-ops-research', title: 'Reddit / OPS Research' },
  { key: 'interview', title: 'Interview' },
];

export const topicSheets = {
  'mccss-accessibility': {
    title: '📋 MCCSS / Accessibility Cheat Sheet',
    sections: [
      {
        title: '1. MCCSS Programs to Know',
        variant: 'cheat-card--sky',
        list: [
          {
            label: 'Ontario Works (OW):',
            text: 'Social assistance for people in financial need - money for food, housing, health benefits, and employment participation.',
          },
          {
            label: 'ODSP:',
            text: 'Support for adults with disabilities - income support, health/disability benefits, and employment supports.',
          },
          {
            label: 'Ontario Autism Program (OAP):',
            text: 'Support for children/youth under 18 with ASD - foundational family services, clinical services, entry-to-school supports, and urgent response.',
          },
          {
            label: 'Anti-Human Trafficking:',
            text: "Ontario's strategy focuses on awareness, early intervention, protecting victims, supporting survivors, and holding offenders accountable.",
          },
          {
            label: 'Broader MCCSS mandate:',
            text: "Supports children, youth, families, low-income Ontarians, adults with developmental disabilities, survivors of violence, and women's economic opportunity.",
          },
        ],
        paragraphs: [],
      },
      {
        title: '2. What MCCSS Does Overall',
        variant: 'cheat-card--sky',
        list: [
          'Improves outcomes for children, youth, families, and individuals who need support.',
          'Oversees child/youth programs, social assistance, developmental services, community supports, and anti-human trafficking services.',
          'Works in a policy-heavy, privacy-sensitive environment where public trust, service quality, accessibility, and evidence-based decisions matter.',
        ],
      },
      {
        title: '3. Data Strategy and Solutions Platform Branch',
        variant: 'cheat-card--green',
        list: [
          'Modernizes how Social Assistance data is modeled, governed, validated, and used.',
          'Builds and supports integrated reporting platforms, cloud-based analytics, and data products.',
          'Cares about: data correctness, version control, validation, maintainability, user-centred analytics, and accessibility.',
        ],
        note: '💬 “This branch focuses on building reliable, accessible analytics products on top of governed data models so policy and operational teams can make evidence-based decisions.”',
      },
      {
        title: '4. GO-ITS Standards',
        variant: 'cheat-card--yellow',
        paragraphs: [
          {
            label: 'GO-ITS',
            text: "= Government of Ontario Information Technology Standards - the government's internal IT framework covering security, accessibility, privacy, architecture, governance, and delivery practices.",
          },
        ],
        list: [
          {
            label: 'GO-ITS 25 (Security):',
            text: 'Systems handling government data must be designed with security controls, access control, risk awareness, and protection of sensitive data throughout design, development, and operations.',
          },
          {
            label: 'GO-ITS 54 (Accessibility):',
            text: 'Accessibility is mandatory in public-sector digital services - it must be considered in design, implementation, testing, and delivery, aligned with AODA and WCAG.',
          },
        ],
        note: '💬 “GO-ITS standards ensure accessibility, security, privacy, and consistency are built into delivery expectations - not treated as afterthoughts.”',
      },
      {
        title: '5. WCAG 2.1 - The Essentials',
        variant: 'cheat-card--violet',
        paragraphs: [
          'WCAG is organized around 4 principles: POUR',
          {
            label: 'Levels:',
            text: 'A (basic) - AA (standard public-sector target) - AAA (enhanced)',
          },
          {
            label: 'Key WCAG 2.1 items:',
            text: 'keyboard access, contrast (4.5:1), focus visibility, labels, error identification, reflow, non-text contrast, text spacing, content on hover/focus, status messages, touch/pointer accessibility.',
          },
        ],
        list: [
          {
            label: 'Perceivable:',
            text: 'Users must be able to perceive content (text alternatives, captions, contrast, adaptable layout).',
          },
          {
            label: 'Operable:',
            text: 'Users must be able to operate the interface (keyboard access, no traps, visible focus, navigation).',
          },
          {
            label: 'Understandable:',
            text: 'Content must be understandable (clear labels, predictable behavior, error messages).',
          },
          {
            label: 'Robust:',
            text: 'Content must work with assistive technologies (semantics, name/role/value, status messages).',
          },
        ],
      },
      {
        title: '6. AODA Overview',
        variant: 'cheat-card--orange',
        paragraphs: [
          {
            label: 'AODA',
            text: "= Accessibility for Ontarians with Disabilities Act - Ontario's law for identifying, removing, and preventing barriers.",
          },
          {
            label: 'Covers:',
            text: 'customer service, information & communications, employment, transportation, design of public spaces.',
          },
        ],
        note: "💬 “AODA sets Ontario's accessibility requirements, and in digital delivery that means accessibility needs to be built into information, communication, employment processes, and user-facing services - it is a legal requirement, not a best practice.”",
      },
      {
        title: '7. Key Terms to Remember',
        variant: 'cheat-card--neutral',
        tags: [
          'evidence-based decision-making',
          'user-centred analytics',
          'data governance',
          'data quality',
          'validation',
          'semantic models',
          'accessibility compliance',
          'public trust',
          'privacy and security',
          'maintainability',
          'version control',
          'inclusive design',
          'sensitive ministry data',
          'public service delivery',
        ],
      },
      {
        title: '8. 30-Second Interview Answer',
        variant: 'cheat-card--green-strong',
        note: '"I understand MCCSS supports critical programs like Ontario Works, ODSP, autism services, and anti-human trafficking supports, so the work has direct public impact. The Data Strategy and Solutions Platform Branch appears to focus on reliable, governed, cloud-based analytics products that support evidence-based decisions. I also understand accessibility is essential in this environment, including AODA, WCAG 2.1, and GO-ITS expectations around accessible and secure digital delivery."',
      },
      {
        title: '9. Fast Study - Memorize These 5 Lines',
        variant: 'cheat-card--red',
        orderedList: [
          'MCCSS supports vulnerable Ontarians through OW, ODSP, autism services, and anti-human trafficking services.',
          'The branch builds governed, reliable, cloud-based analytics and reporting products.',
          'GO-ITS = Ontario government IT standards - security, accessibility, and delivery consistency.',
          'WCAG 2.1 = POUR: Perceivable, Operable, Understandable, Robust.',
          'AODA makes accessibility a legal requirement in Ontario.',
        ],
      },
      {
        title:
          '10. Top 15 Likely Interview Questions + Strong Answer Direction',
        variant: 'cheat-card--green-strong',
        paragraphs: [
          {
            label: '1) Why this MCCSS role?',
            text: 'Connect to public impact, evidence-based decision-making, and your interest in building reliable data solutions that improve social assistance programs.',
          },
          {
            label: '2) Tell us about your technical background.',
            text: 'Give a concise journey: math foundation, software engineering diploma, full-stack + data work, QA automation, and deployment experience.',
          },
          {
            label: '3) How do you ensure data quality?',
            text: 'Mention validation rules, profiling, null checks, consistency checks, reconciliation with source totals, and documenting assumptions.',
          },
          {
            label: '4) How do you design a useful dashboard?',
            text: 'Start from user questions and decisions, define KPIs, model data cleanly, keep visuals accessible, and validate results with stakeholders.',
          },
          {
            label: '5) How would you apply GO-ITS 25 (Security)?',
            text: 'Use least-privilege access, secure secrets handling, auditability, sensitive-data controls, and security considerations across design/dev/ops.',
          },
          {
            label:
              '6) How would you apply GO-ITS 54, WCAG, and AODA in analytics work?',
            text: 'Describe keyboard accessibility, contrast, clear labels, error messaging, semantic structure, and testing with accessibility requirements as non-negotiable.',
          },
          {
            label: '7) How do you handle unclear requirements?',
            text: 'Clarify outcomes first, confirm assumptions early, create small checkpoints, and iterate with stakeholders to reduce rework.',
          },
          {
            label: '8) Describe a complex problem you solved.',
            text: 'Use STAR: situation, your role, technical + collaboration actions, measurable outcome, and what you improved for maintainability.',
          },
          {
            label: '9) How do you work with non-technical teams?',
            text: 'Translate technical topics into business language, focus on decisions and impact, and communicate trade-offs clearly.',
          },
          {
            label: '10) How do you prioritize speed vs quality?',
            text: 'Ship iteratively but protect trust: baseline checks, version control, peer feedback, and clear acceptance criteria.',
          },
          {
            label: '11) What is your approach to data modeling?',
            text: 'Use a business-first grain, clear fact/dimension design, consistent definitions, and model decisions that support reporting performance and clarity.',
          },
          {
            label: '12) How do you test and validate analytics outputs?',
            text: 'Cross-check metrics, compare with known baselines, test edge cases, and involve domain users before release.',
          },
          {
            label: '13) How do you keep solutions maintainable?',
            text: 'Use modular design, consistent naming, documentation, version control discipline, and reusable patterns.',
          },
          {
            label: '14) What strengths will you bring to this team?',
            text: 'Highlight fast learning, structured problem-solving, cross-functional collaboration, and hands-on end-to-end delivery across dev/data/testing.',
          },
          {
            label: '15) Why should we hire you?',
            text: 'Combine role fit + mission fit: you can build practical data products with quality and accessibility in mind, and you care about outcomes for Ontarians.',
          },
        ],
        note: 'Practice each answer in two versions: 30-45 seconds and 90 seconds, then keep examples specific and measurable.',
      },
    ],
  },
  python: {
    title: 'Python Cheat Sheet',
    sections: [
      {
        title: '1. Getting Started / Introduction',
        variant: 'cheat-card--sky',
        list: [
          'Official docs: python.org',
          'Quick reference: https://quickref.me/python.html',
          'Python supports scripts, REPL, and notebooks.',
          'Strong standard library and readable syntax.',
        ],
      },
      {
        title: '2. Hello World',
        variant: 'cheat-card--sky',
        code: '>>> print("Hello, World!")\nHello, World!',
      },
      {
        title: '3. Variables',
        variant: 'cheat-card--green',
        code: 'age = 18      # age is of type int\nname = "John" # name is now of type str\nprint(name)',
      },
      {
        title: '4. Data Types',
        variant: 'cheat-card--yellow',
        list: [
          'str -> Text',
          'int, float, complex -> Numeric',
          'list, tuple, range -> Sequence',
          'dict -> Mapping',
          'set, frozenset -> Set',
          'bool -> Boolean',
          'bytes, bytearray, memoryview -> Binary',
        ],
      },
      {
        title: '5. Slicing String',
        variant: 'cheat-card--violet',
        code: '>>> msg = "Hello, World!"\n>>> print(msg[2:5])\nllo',
      },
      {
        title: '6. Lists',
        variant: 'cheat-card--orange',
        code: 'mylist = []\nmylist.append(1)\nmylist.append(2)\nfor item in mylist:\n    print(item) # prints out 1,2',
      },
      {
        title: '7. If Else',
        variant: 'cheat-card--red',
        code: 'num = 200\nif num > 0:\n    print("num is greater than 0")\nelse:\n    print("num is not greater than 0")',
      },
      {
        title: '8. Loops',
        variant: 'cheat-card--neutral',
        code: 'for item in range(6):\n    if item == 3: break\n    print(item)\nelse:\n    print("Finally finished!")',
      },
      {
        title: '9. Functions',
        variant: 'cheat-card--green-strong',
        code: '>>> def my_function():\n...     print("Hello from a function")\n...\n>>> my_function()\nHello from a function',
      },
      {
        title: '10. File Handling',
        variant: 'cheat-card--sky',
        code: 'with open("myfile.txt", "r", encoding=\'utf8\') as file:\n    for line in file:\n        print(line)',
      },
      {
        title: '11. Arithmetic',
        variant: 'cheat-card--green',
        code: 'result = 10 + 30 # => 40\nresult = 40 - 10 # => 30\nresult = 50 * 5  # => 250\nresult = 16 / 4  # => 4.0\nresult = 16 // 4 # => 4\nresult = 25 % 2  # => 1\nresult = 5 ** 3  # => 125',
      },
      {
        title: '12. Plus-Equals',
        variant: 'cheat-card--yellow',
        code: 'counter = 0\ncounter += 10           # => 10\ncounter = 0\ncounter = counter + 10  # => 10\n\nmessage = "Part 1."\nmessage += "Part 2."',
      },
      {
        title: '13. f-Strings (Python 3.6+)',
        variant: 'cheat-card--violet',
        code: ">>> website = 'Quickref.ME'\n>>> f\"Hello, {website}\"\n\"Hello, Quickref.ME\"\n\n>>> num = 10\n>>> f'{num} + 10 = {num + 10}'\n'10 + 10 = 20'",
      },
      {
        title: '14. Python Built-in Data Types',
        variant: 'cheat-card--sky',
        subsections: [
          {
            title: 'Strings',
            code: 'hello = "Hello World"\nhello = \'Hello World\'\n\nmulti_string = """Multiline Strings\nLorem ipsum dolor sit amet\n"""',
          },
          {
            title: 'Numbers',
            code: 'x = 1    # int\ny = 2.8  # float\nz = 1j   # complex\nprint(type(x))',
          },
          {
            title: 'Booleans',
            code: 'my_bool = True\nmy_bool = False\n\nbool(0)  # => False\nbool(1)  # => True',
          },
          {
            title: 'Lists / Tuple / Set',
            code: 'list1 = ["apple", "banana", "cherry"]\nmy_tuple = (1, 2, 3)\nset1 = {"a", "b", "c"}',
          },
          {
            title: 'Dictionary',
            code: 'empty_dict = {}\na = {"one": 1, "two": 2, "three": 3}\na["one"]\na.update({"four": 4})\na["four"]',
            note: 'Key: Value pair, JSON-like object.',
          },
        ],
      },
      {
        title: '15. Casting',
        variant: 'cheat-card--green',
        subsections: [
          {
            title: 'Integers',
            code: 'x = int(1)\ny = int(2.8)\nz = int("3")',
          },
          {
            title: 'Floats',
            code: 'x = float(1)\ny = float(2.8)\nz = float("3")\nw = float("4.2")',
          },
          {
            title: 'Strings',
            code: 'x = str("s1")\ny = str(2)\nz = str(3.0)',
          },
        ],
      },
      {
        title: '16. Python Advanced Data Types',
        variant: 'cheat-card--yellow',
        subsections: [
          {
            title: 'Heaps',
            code: 'import heapq\nnums = [9, 5, 4, 1, 3, 2]\nheapq.heapify(nums)\nheapq.heappush(nums, 10)\nsmallest = heapq.heappop(nums)',
          },
          {
            title: 'Max Heap Trick (negate)',
            code: 'nums = [9, 5, 4, 1, 3, 2]\nnums = [-x for x in nums]\nheapq.heapify(nums)\nmax_val = -heapq.heappop(nums)',
          },
          {
            title: 'Stacks and Queues (deque)',
            code: 'from collections import deque\nq = deque([1, 2, 3])\nq.append(4)\nq.appendleft(0)\nright = q.pop()\nleft = q.popleft()',
          },
        ],
      },
      {
        title: '17. Python Strings',
        variant: 'cheat-card--violet',
        subsections: [
          {
            title: 'Array-like / Looping',
            code: 'hello = "Hello, World"\nprint(hello[1])\nprint(hello[-1])\n\nfor char in "foo":\n    print(char)',
          },
          {
            title: 'Slicing',
            code: 's = "mybacon"\nprint(s[2:5])\nprint(s[:2])\nprint(s[2:])\nprint(s[-5:-1])\nprint(s[::-1])',
          },
          {
            title: 'Utilities',
            code: 'len("Hello")\n"spam" in "I saw spamalot!"\n"#".join(["John", "Peter", "Vicky"])\n"Hello, world!".endswith("!")',
          },
          {
            title: 'Formatting and Input',
            code: 'name = "John"\nprint("Hello, %s!" % name)\nprint("{} is {} years old".format("John", 23))\nuser = input("Enter your name: ")',
          },
        ],
      },
      {
        title: '18. Python F-Strings (Deep Dive)',
        variant: 'cheat-card--orange',
        subsections: [
          {
            title: 'Fill / Align',
            code: 'f"{"text":10}"\nf"{"test":*>10}"\nf"{"test":*<10}"\nf"{"test":*^10}"',
          },
          {
            title: 'Type Format',
            code: 'f"{10:b}"\nf"{10:o}"\nf"{200:x}"\nf"{200:X}"\nf"{345600000000:e}"\nf"{65:c}"',
          },
          {
            title: 'Sign / Precision / Percent',
            code: 'f"{12345:+}"\nf"{-12345:+010}"\nf"{3.1415926535:.2f}"\nf"{1000000:,.2f}"\nf"{0.25:.0%}"',
          },
        ],
      },
      {
        title: '19. Python Lists (Deep Dive)',
        variant: 'cheat-card--red',
        subsections: [
          {
            title: 'Defining / Generate / Append',
            code: 'li1 = []\nli2 = [4, 5, 6]\nli3 = list((1, 2, 3))\nodd_sq = [x ** 2 for x in range(1, 11) if x % 2 == 1]\nli1.append(1)',
          },
          {
            title: 'Slicing',
            code: 'a = ["spam", "egg", "bacon", "tomato", "ham", "lobster"]\na[2:5]\na[:4]\na[::2]\na[::-1]',
          },
          {
            title: 'Remove / Access / Concat',
            code: 'li = ["bread", "butter", "milk"]\nli.pop()\ndel li[0]\nodd = [1, 3, 5]\nodd.extend([9, 11, 13])',
          },
          {
            title: 'Sort / Reverse / Count / Repeat',
            code: 'li = [3, 1, 3, 2, 5]\nli.sort()\nli.reverse()\nli.count(3)\n["re"] * 3',
          },
        ],
      },
      {
        title: '20. Python Flow Control',
        variant: 'cheat-card--neutral',
        subsections: [
          {
            title: 'Basic if/elif/else',
            code: 'num = 5\nif num > 10:\n    print("big")\nelif num < 10:\n    print("small")\nelse:\n    print("ten")',
          },
          {
            title: 'One line',
            code: 'a = 330\nb = 200\nr = "a" if a > b else "b"',
          },
          {
            title: 'Boolean branch',
            code: 'value = True\nif not value:\n    print("False")\nelif value is None:\n    print("None")\nelse:\n    print("True")',
          },
        ],
      },
      {
        title: '21. Python Loops (Deep Dive)',
        variant: 'cheat-card--green-strong',
        subsections: [
          {
            title: 'Basic / enumerate / while',
            code: 'for prime in [2, 3, 5, 7]:\n    print(prime)\n\nfor i, value in enumerate(["dog", "cat", "mouse"]):\n    print(i, value)\n\nx = 0\nwhile x < 4:\n    print(x)\n    x += 1',
          },
          {
            title: 'break / continue / range',
            code: 'for index in range(10):\n    if index == 5:\n        break\n\nfor index in range(3, 8):\n    if index == 5:\n        continue\n\nfor i in range(4, 10, 2):\n    print(i)',
          },
          {
            title: 'zip / for-else',
            code: 'words = ["Mon", "Tue", "Wed"]\nnums = [1, 2, 3]\nfor w, n in zip(words, nums):\n    print(f"{n}:{w}")\n\nnums2 = [60, 70, 30]\nfor n in nums2:\n    if n > 100:\n        break\nelse:\n    print("Not found!")',
          },
        ],
      },
      {
        title: '22. Python Functions (Deep Dive)',
        variant: 'cheat-card--sky',
        subsections: [
          {
            title: 'Basic / Return',
            code: 'def hello_world():\n    print("Hello, World!")\n\ndef add(x, y):\n    return x + y',
          },
          {
            title: 'Arguments',
            code: 'def varargs(*args):\n    return args\n\ndef keyword_args(**kwargs):\n    return kwargs',
          },
          {
            title: 'Multiple return / Default / Lambda',
            code: 'def swap(x, y):\n    return y, x\n\ndef add2(x, y=10):\n    return x + y\n\n(lambda x: x > 2)(3)',
          },
        ],
      },
      {
        title: '23. Python Modules',
        variant: 'cheat-card--green',
        subsections: [
          {
            title: 'Import patterns',
            code: 'import math\nfrom math import ceil, floor\nimport math as m\nfrom math import *',
          },
          {
            title: 'Use / inspect',
            code: 'print(math.sqrt(16))\nprint(ceil(3.7))\nprint(floor(3.7))\ndir(math)',
          },
        ],
      },
      {
        title: '24. Python File Handling (Deep Dive)',
        variant: 'cheat-card--yellow',
        subsections: [
          {
            title: 'Read file',
            code: 'with open("myfile.txt") as file:\n    for line in file:\n        print(line)\n\nfor i, line in enumerate(open("myfile.txt"), start=1):\n    print(i, line)',
          },
          {
            title: 'Write / Read string',
            code: 'contents = {"aa": 12, "bb": 21}\nwith open("myfile1.txt", "w+") as file:\n    file.write(str(contents))\n\nwith open("myfile1.txt", "r+") as file:\n    print(file.read())',
          },
          {
            title: 'Write / Read object (json)',
            code: 'import json\ncontents = {"aa": 12, "bb": 21}\nwith open("myfile2.txt", "w+") as file:\n    file.write(json.dumps(contents))\n\nwith open("myfile2.txt", "r+") as file:\n    data = json.load(file)',
          },
          {
            title: 'Delete file / folder',
            code: 'import os\nif os.path.exists("myfile.txt"):\n    os.remove("myfile.txt")\n\nos.rmdir("myfolder")',
          },
        ],
      },
      {
        title: '25. Python Classes & Inheritance',
        variant: 'cheat-card--violet',
        subsections: [
          {
            title: 'Defining / Constructor / Method',
            code: 'class MyNewClass:\n    pass\n\nclass Animal:\n    def __init__(self, voice):\n        self.voice = voice\n\nclass Dog:\n    def bark(self):\n        print("Ham-Ham")',
          },
          {
            title: 'Class variables / super()',
            code: 'class ParentClass:\n    def print_test(self):\n        print("Parent Method")\n\nclass ChildClass(ParentClass):\n    def print_test(self):\n        print("Child Method")\n        super().print_test()',
          },
          {
            title: 'repr / exceptions / overriding',
            code: 'class Employee:\n    def __init__(self, name):\n        self.name = name\n    def __repr__(self):\n        return self.name\n\nclass CustomError(Exception):\n    pass',
          },
          {
            title: 'Inheritance / polymorphism',
            code: 'class Animal:\n    def __init__(self, name, legs):\n        self.name = name\n        self.legs = legs\n\nclass Dog(Animal):\n    def sound(self):\n        print("Woof!")',
          },
        ],
      },
      {
        title: '26. Miscellaneous',
        variant: 'cheat-card--orange',
        subsections: [
          {
            title: 'Comments',
            code: '# single line comment\n"""multiline doc-style comment"""\n\'\'\'another multiline\'\'\'',
          },
          {
            title: 'Generators',
            code: 'def double_numbers(iterable):\n    for i in iterable:\n        yield i + i\n\nvals = (-x for x in [1, 2, 3, 4, 5])\nprint(list(vals))',
          },
          {
            title: 'Handle exceptions',
            code: 'try:\n    raise IndexError("This is an index error")\nexcept IndexError:\n    pass\nexcept (TypeError, NameError):\n    pass\nelse:\n    print("All good!")\nfinally:\n    print("Cleanup")',
          },
        ],
        note: 'This page mirrors the quickref-style layout and coverage with app-native formatting.',
      },
    ],
  },
  'power-bi': {
    title: '📊 Power BI Cheat Sheet',
    sections: [
      {
        title: '1. Core Building Blocks',
        variant: 'cheat-card--sky',
        list: [
          {
            label: 'Dataset (semantic model):',
            text: 'Your tables + relationships + measures.',
          },
          { label: 'Report:', text: 'Interactive pages built from visuals.' },
          {
            label: 'Dashboard:',
            text: 'Single-page pinned tiles in Power BI Service.',
          },
          { label: 'Workspace:', text: 'Collaboration and publishing space.' },
        ],
      },
      {
        title: '2. Typical Workflow',
        variant: 'cheat-card--green',
        orderedList: [
          'Get data (CSV, Excel, SQL, APIs).',
          'Transform in Power Query (clean, rename, type, merge).',
          'Model data (star schema, keys, relationships).',
          'Create measures with DAX.',
          'Build visuals and slicers.',
          'Publish to Power BI Service and share securely.',
        ],
      },
      {
        title: '3. Data Modeling Essentials',
        variant: 'cheat-card--yellow',
        list: [
          'Use star schema: one fact table, multiple dimensions.',
          'Avoid many-to-many unless truly needed.',
          'Set correct data types and mark date table for time intelligence.',
          'Hide technical keys from report view to keep UX clean.',
        ],
      },
      {
        title: '4. Visual Design Rules',
        variant: 'cheat-card--violet',
        list: [
          'Start with KPI cards for top metrics.',
          'Use bar/column charts for comparisons.',
          'Use line charts for trends over time.',
          'Limit colors and keep consistent labels/units.',
          'Use tooltips and drill-through for deeper detail.',
        ],
      },
      {
        title: '5. Performance Quick Wins',
        variant: 'cheat-card--orange',
        list: [
          'Keep model lean: remove unused columns/tables.',
          'Prefer measures over calculated columns when possible.',
          'Avoid high-cardinality columns in visuals and slicers.',
          'Reduce heavy custom visuals on one page.',
        ],
      },
      {
        title: '6. Interview Talking Points',
        variant: 'cheat-card--neutral',
        note: '"I use Power BI with a model-first approach: clean data in Power Query, design a star schema, build reusable DAX measures, and present clear KPI-driven reports with accessible visual choices."',
      },
    ],
  },
  dax: {
    title: '🧮 DAX Cheat Sheet',
    sections: [
      {
        title: '1. What DAX Is',
        variant: 'cheat-card--sky',
        list: [
          'DAX = Data Analysis Expressions used in Power BI models.',
          {
            label: 'Mostly used for',
            text: 'measures and calculated columns.',
          },
          'Measures are calculated at query time and respond to filters.',
        ],
      },
      {
        title: '2. Context Basics',
        variant: 'cheat-card--green',
        list: [
          {
            label: 'Row context:',
            text: 'Calculation per row (common in calculated columns).',
          },
          {
            label: 'Filter context:',
            text: 'Current report filters/slicers/visual scope.',
          },
          { label: 'CALCULATE():', text: 'changes filter context.' },
        ],
      },
      {
        title: '3. Most Useful Functions',
        variant: 'cheat-card--yellow',
        list: [
          'SUM(), AVERAGE(), COUNT(), DISTINCTCOUNT()',
          'CALCULATE() for context transition and custom filters',
          'FILTER() for row-level filter logic',
          'ALL(), REMOVEFILTERS(), ALLEXCEPT()',
          'DIVIDE(a,b,0) for safe division',
        ],
      },
      {
        title: '4. Time Intelligence Pattern',
        variant: 'cheat-card--violet',
        list: [
          'Create and mark a proper Date table.',
          'Common measures: YTD, MTD, same period last year.',
          'Functions: TOTALYTD(), DATEADD(), SAMEPERIODLASTYEAR()',
        ],
      },
      {
        title: '5. Practical Measure Examples',
        variant: 'cheat-card--orange',
        paragraphs: [
          { label: 'Total Sales:', text: 'SUM(Sales[Amount])' },
          {
            label: 'Avg Order Value:',
            text: 'DIVIDE([Total Sales], [Order Count], 0)',
          },
          {
            label: 'Sales YTD:',
            text: "TOTALYTD([Total Sales], 'Date'[Date])",
          },
          {
            label: 'YoY %:',
            text: 'DIVIDE([Total Sales] - [Sales LY], [Sales LY], 0)',
          },
        ],
      },
      {
        title: '6. Common Mistakes to Avoid',
        variant: 'cheat-card--red',
        list: [
          'Using calculated columns where measures are better.',
          'Ignoring filter context when results look wrong.',
          'Not using DIVIDE() for denominator safety.',
          'Building time-intelligence without a valid Date table.',
        ],
        note: 'Tip: Start simple, test measure output in a table visual, then optimize.',
      },
    ],
  },
  azure: {
    title: 'Azure Cheat Sheet',
    sections: [
      {
        title: '1. Core Azure Data Services',
        variant: 'cheat-card--sky',
        list: [
          {
            label: 'Azure SQL Database:',
            text: 'Managed relational database.',
          },
          {
            label: 'Azure Data Lake Storage Gen2:',
            text: 'Scalable data lake.',
          },
          {
            label: 'Azure Data Factory:',
            text: 'ETL/ELT pipelines and orchestration.',
          },
          {
            label: 'Azure Synapse Analytics:',
            text: 'Integrated analytics workspace.',
          },
        ],
      },
      {
        title: '2. Typical Data Flow',
        variant: 'cheat-card--green',
        orderedList: [
          'Ingest data from source systems.',
          'Store raw data in Data Lake.',
          'Transform via ADF/Synapse/Databricks.',
          'Serve curated data to BI tools.',
          'Apply access control, monitoring, and governance.',
        ],
      },
      {
        title: '3. Security Essentials',
        variant: 'cheat-card--yellow',
        list: [
          'Use Entra ID (Azure AD) for identity and RBAC.',
          'Prefer managed identities over secrets in code.',
          'Encrypt data at rest and in transit.',
          'Use Key Vault for secrets/certificates.',
        ],
      },
      {
        title: '4. Interview Soundbite',
        variant: 'cheat-card--orange',
        note: '"I use Azure with a lakehouse mindset: secure ingestion, governed storage, reliable transformation pipelines, and curated datasets for Power BI reporting."',
      },
    ],
  },
  databricks: {
    title: 'Databricks Cheat Sheet',
    sections: [
      {
        title: '1. What Databricks Is',
        variant: 'cheat-card--sky',
        list: [
          'Unified platform for data engineering, analytics, and ML.',
          'Built on Apache Spark for distributed processing.',
          'Runs notebooks, jobs, SQL warehouses, and Delta Lake tables.',
        ],
      },
      {
        title: '2. Delta Lake Basics',
        variant: 'cheat-card--green',
        list: [
          'ACID transactions on data lake storage.',
          'Schema enforcement and schema evolution.',
          'Time travel for rollback and auditability.',
          'Optimized reads/writes for BI workloads.',
        ],
      },
      {
        title: '3. Medallion Architecture',
        variant: 'cheat-card--violet',
        list: [
          { label: 'Bronze:', text: 'Raw ingested data.' },
          { label: 'Silver:', text: 'Cleaned and standardized data.' },
          { label: 'Gold:', text: 'Business-ready aggregated data.' },
        ],
      },
      {
        title: '4. SQL + Notebook Workflow',
        variant: 'cheat-card--yellow',
        list: [
          'Use SQL for analytics and reporting transformations.',
          'Use Python notebooks for complex ETL and quality checks.',
          'Schedule production pipelines as Databricks Jobs.',
        ],
      },
      {
        title: '5. Practical Interview Points',
        variant: 'cheat-card--red',
        note: '"I use Databricks to transform raw data into trusted gold-layer data products using Delta Lake and medallion architecture, then serve analytics-ready datasets to Power BI."',
      },
    ],
  },
  'data-modeling': {
    title: 'Data Modeling Cheat Sheet',
    sections: [
      {
        title: '1. Core Concepts',
        variant: 'cheat-card--sky',
        list: [
          {
            label: 'Fact table:',
            text: 'Numeric business events (sales, claims, payments).',
          },
          {
            label: 'Dimension table:',
            text: 'Descriptive context (date, client, location).',
          },
          { label: 'Grain:', text: 'The exact level of detail for each row.' },
        ],
      },
      {
        title: '2. Star Schema Principles',
        variant: 'cheat-card--green',
        list: [
          'Single central fact table with surrounding dimensions.',
          'Use surrogate keys in dimensions where needed.',
          'Keep dimensions wide and human-readable.',
          'Minimize snowflaking for BI simplicity and speed.',
        ],
      },
      {
        title: '3. Modeling Quality Checks',
        variant: 'cheat-card--yellow',
        list: [
          'Validate one-to-many relationships and key uniqueness.',
          'Ensure null/unknown handling strategy exists.',
          'Standardize naming and business definitions.',
          'Create test queries for row counts and metric parity.',
        ],
      },
      {
        title: '4. ETL/ELT and OLTP/OLAP',
        variant: 'cheat-card--violet',
        list: [
          { label: 'ETL:', text: 'Transform before loading to warehouse.' },
          { label: 'ELT:', text: 'Load first, transform in modern platform.' },
          { label: 'OLTP:', text: 'Transactional systems (app operations).' },
          { label: 'OLAP:', text: 'Analytical systems (reporting/insights).' },
        ],
      },
      {
        title: '5. Interview Soundbite',
        variant: 'cheat-card--orange',
        note: '"I start with business grain, design a clean star schema, validate keys and relationships, and document metric logic so reporting is both trustworthy and easy to maintain."',
      },
    ],
  },
  'reddit-ops-research': {
    title: 'Reddit / OPS Research Cheat Sheet',
    sections: [
      {
        title: '1. What to Research',
        variant: 'cheat-card--sky',
        list: [
          'Interview format (panel, timing, question style).',
          'Scoring expectations and competency focus.',
          'Presentation/task components if included.',
          'Role-specific keywords from job posting language.',
        ],
      },
      {
        title: '2. Useful Sources',
        variant: 'cheat-card--green',
        list: [
          'Reddit: OPS, Ontario public service, interview prep threads.',
          'LinkedIn posts from current/former OPS employees.',
          'Government pages for ministry priorities and programs.',
          'Official standards pages (GO-ITS, accessibility references).',
        ],
      },
      {
        title: '3. Capture Notes in a Grid',
        variant: 'cheat-card--yellow',
        list: [
          'Source',
          'Signal (what it says about interview style)',
          'Reliability (high/medium/low)',
          'Action (what you will practice or prepare)',
        ],
      },
      {
        title: '4. Output You Should Produce',
        variant: 'cheat-card--orange',
        list: [
          'Top 8 likely interview questions.',
          'STAR bullet points for each competency.',
          '5-7 thoughtful questions for the hiring manager.',
          'One-page final prep summary before interview day.',
        ],
      },
    ],
  },
  interview: {
    title: 'Interview Cheat Sheet',
    sections: [
      {
        title: '1. STAR Response Structure',
        variant: 'cheat-card--sky',
        list: [
          { label: 'Situation:', text: 'Brief context.' },
          { label: 'Task:', text: 'What you needed to achieve.' },
          { label: 'Action:', text: 'Specific steps you took.' },
          { label: 'Result:', text: 'Measurable outcome and lesson learned.' },
        ],
      },
      {
        title: '2. High-Value Questions to Prepare',
        variant: 'cheat-card--green',
        list: [
          'Tell me about yourself.',
          'Why public service and why this role?',
          'Describe a complex data problem you solved.',
          'How do you ensure data quality and accessibility?',
          'Describe a difficult stakeholder situation.',
        ],
      },
      {
        title: '3. 60-Second Intro Template',
        variant: 'cheat-card--yellow',
        note: '"I am a data-focused professional with experience building reliable reporting and analytics solutions. I enjoy translating complex data into actionable insights, and I care deeply about accessibility, governance, and delivering measurable public impact."',
      },
      {
        title: '4. Interview Day Checklist',
        variant: 'cheat-card--violet',
        list: [
          'Review your 8 STAR stories.',
          'Keep one page of role-specific notes.',
          'Test audio/video and environment.',
          'Prepare concise closing statement.',
          'Have your questions ready for the panel.',
        ],
      },
      {
        title: '5. Closing Statement',
        variant: 'cheat-card--red',
        note: '"Thank you for the opportunity. I am excited about contributing to accessible, high-quality data solutions that support evidence-based decisions and better outcomes for Ontarians."',
      },
    ],
  },
};
