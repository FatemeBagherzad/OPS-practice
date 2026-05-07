export const topicMenuItems = [
  { key: 'mccss-accessibility', title: 'MCCSS / Accessibility' },
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
