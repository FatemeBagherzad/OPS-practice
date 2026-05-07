export const coffeeChatMenuItems = [
  { key: 'myself', title: 'Myself' },
  { key: 'rabva-ui', title: 'Rabva UI' },
  { key: 'my-q', title: 'my Q' },
  { key: 'alan', title: 'Alan' },
  { key: 'peter', title: 'Peter' },
  { key: 'luke', title: 'Luke' },
];

export const coffeeChatSheets = {
  myself: {
    title: '☕ Myself - Talking Points',
    sections: [
      {
        title: 'Tell me about yourself.',
        variant: 'cheat-card--sky',
        list: [
          "Starting from university, I got my bachelor's degree in Pure Mathematics, and then worked as a math teacher. Then I had an opportunity to join a car company, and I had an earlier experience working with my father and started doing technical drawings.",
          'I learned tools like AutoCAD, 3ds Max, CATIA, Adobe software, and Microsoft Office to create 2D and 3D designs and animations while working on my own. Over time, I moved into a Design Manager role. In that position, I noticed many repetitive tasks, so I learned scripting in 3ds Max to automate work and save time.',
          'Then I immigrated to Canada, and I got a Software Engineering diploma and they offered me to be a TA for 11 months. After I joined AutoForm as a developer.',
          'At AutoForm, I worked on front-end, back-end, and databases. I also handled QA in a small team, using Playwright and AI tools for UI testing. I learned Docker and used it to deploy demo projects to AWS EC2.',
          "After the war in Iran affected half of our team, I began looking for new opportunities. Now I'm focused on continuing my career as a software developer in Canada.",
        ],
      },
      {
        title: 'What kind of role are you looking for?',
        variant: 'cheat-card--green',
        list: [
          "I'm open to full-stack, front-end, or back-end roles - I really enjoy working across the stack.",
          'At my last company, the team was small, so beyond writing UI code I was also responsible for testing my own work end-to-end with Playwright, backend integration, and setting up Docker for production deployments.',
          "I'd be happy contributing in any of those areas.",
        ],
      },
      {
        title: "What's a project you're proud of? (STAR story)",
        variant: 'cheat-card--yellow',
        list: [
          "One project I'm proud of was at my last job, where we were building a very complex feature with a lot of state management.",
          'Our team had started using GitHub Copilot to move faster, but over time the code became messy and inconsistent. Different prompts gave different coding styles, and sometimes new changes would break previous work.',
          'I researched a better way to guide the AI and created shared instructions in project files that defined coding standards, structure, and best practices.',
          'After we shared this with the whole team, the code became much more stable, consistent, and easier to maintain.',
          "I'm proud of it because it improved the workflow for everyone, not just my own work.",
        ],
      },
      {
        title: 'What are your strengths/weaknesses?',
        variant: 'cheat-card--orange',
        paragraphs: [
          {
            label: 'Strength:',
            text: 'I would say my main strength is being a quick learner with an open mindset, backed by a math background that taught me to break problems down and approach new things in a structured way. Early in my design career, I was asked to build a product I had never worked on before; I learned it and delivered. That mindset is a big part of how I moved into software development too.',
          },
          {
            label: 'Weakness (and improvement):',
            text: 'A weakness I am actively working on is that I care about details a bit too much - sometimes I go so deep that I tire myself out and need to step back to see the bigger picture. I have gotten better at catching that early and pausing to re-prioritize, but it is still something I am refining.',
          },
        ],
      },
    ],
  },
  'rabva-ui': {
    title: '☕ Rabva UI - Project Overview',
    sections: [
      {
        title: 'Rabva At A Glance',
        variant: 'cheat-card--sky',
        paragraphs: [
          'Rabva is a Quran study, memorization, and research web app built with React 18 + Vite.',
        ],
      },
      {
        title: 'Core Features - Holy books Reading & Display',
        variant: 'cheat-card--green',
        list: [
          'Page-by-page Holy books view matching the traditional Mushaf layout.',
          'Word-by-word view with translations under each Arabic word (QuranTxtByWord).',
          'Configurable typography: font size for Quran text, translation text, and UI menus all controlled separately via CSS variables.',
          'Adjustable spacing between Quran text and translation.',
        ],
      },
      {
        title: 'Core Features - Audio & Recitation',
        variant: 'cheat-card--yellow',
        list: [
          'Built-in Quran player (QuranPlayer) for listening to recitations.',
          'Synchronized with the displayed text for memorization practice.',
        ],
      },
      {
        title: 'Core Features - Memorization Aids',
        variant: 'cheat-card--violet',
        list: [
          'Ayah selection/highlighting: single click selects an ayah, double-click deselects.',
          'Highlight by font color (theme-consistent), never background fill, for clean readability.',
        ],
      },
      {
        title: 'Core Features - Search',
        variant: 'cheat-card--orange',
        list: [
          'Full Holy books search (Search) with results view (SearchResult).',
          'Root-word matching that finds and highlights all ayahs sharing the same Arabic root.',
        ],
      },
      {
        title: 'Core Features - Ayah Map / Canvas (Research View)',
        variant: 'cheat-card--neutral',
        list: [
          'Interactive graph/canvas editor (AyahMapCanvas) for visually exploring relationships between ayahs.',
          'Pan, zoom, drag, marquee selection, contextual menus, deep-link focus.',
          'Full desktop and touch (mobile) support.',
          'Memoized caches and animation-frame batching for smooth performance.',
          'Incremental SVG re-routing for connections.',
        ],
      },
      {
        title: 'Core Features - Theming & Personalization',
        variant: 'cheat-card--green-strong',
        list: [
          'Multi-theme engine powered by CSS variables.',
          'Theme options: Default (white background, sky-blue highlight), Sepia (warm background, royal-blue highlight), Night (dark background, bright-green highlight).',
          'Theme switching through AuthContext.',
          'Server-persisted user preferences: language, theme, font sizes, spacing saved per user.',
        ],
      },
      {
        title: 'Core Features - Internationalization',
        variant: 'cheat-card--sky',
        list: [
          'Full i18n + RTL (right-to-left) support for Arabic and other RTL languages.',
          'Multi-language UI labels.',
        ],
      },
      {
        title: 'Core Features - Authentication & User Management',
        variant: 'cheat-card--yellow',
        list: [
          'End-to-end auth flow: registration with captcha, login/logout, password recovery/reset, session restore on reload.',
          'User profile management with avatar upload.',
          'All auth handled through a single shared AuthContext.',
        ],
      },
      {
        title: 'Core Features - Navigation',
        variant: 'cheat-card--violet',
        list: [
          'Top navigation bar (TopNavigation).',
          'Main menu (MainMenu) with quick access to surahs, settings, user profile.',
          'Quran header (QuranHeader) showing current surah, page, juz info.',
        ],
      },
      {
        title: 'Core Features - Shared UI Components',
        variant: 'cheat-card--orange',
        list: [
          'LoadingDots: single shared loading component used everywhere (animated 6-step green gradient), enforcing DRY across the app.',
          'CompactScrollSelect: custom scroll-based picker for font sizes (no native <select>).',
          'Consistent theming and selection styling across all views.',
        ],
      },
      {
        title: 'Engineering Highlights (good to mention to Alan)',
        variant: 'cheat-card--red',
        list: [
          'Modular architecture: Ayah Map Canvas is isolated as a standalone module behind a single component + service contract.',
          'Optimistic, transactional save pipeline with delta updates and idempotent reload.',
          'Server-driven data model: no client-side parsing of opaque IDs.',
          'Playwright test matrix covering desktop + mobile, largely generated through an agentic AI workflow (custom instructions + skills).',
          'Containerized deployment via Docker Compose with environment-scoped builds (local, dev, staging).',
          'Custom AI-agent customization layer (copilot-instructions.md + skill files) enforcing DRY, theming, and architectural rules across the codebase.',
        ],
      },
    ],
  },
  'my-q': {
    title: '☕ my Q - Questions To Ask',
    sections: [
      {
        title: 'Opening',
        variant: 'cheat-card--green',
        paragraphs: [
          'Hi ..., thank you so much for taking the time to meet with me today - I really appreciate it.',
        ],
      },
      {
        title: 'Questions',
        variant: 'cheat-card--sky',
        orderedList: [
          'With the AI era affecting everything, what kinds of skills or backgrounds tend to grow on your teams? Where do you see the biggest skill gaps the OPS is trying to fill right now?',
          'What skills or experiences have been most valuable in your role?',
          'For someone coming from the private sector, what is the biggest mindset shift when moving into OPS technical work?',
          'Are there other people you would recommend I speak with to better understand the landscape?',
          'Based on our conversation and my background, is there anyone else in your network you would recommend I speak with to learn more?',
        ],
      },
      {
        title: 'Closing',
        variant: 'cheat-card--orange',
        paragraphs: [
          "Thank you again for taking the time, ... - I really appreciated the conversation and learned a lot. If anything comes up that you think might be a fit, I'd be grateful to be considered.",
        ],
      },
    ],
  },
  alan: {
    title: '☕ Alan Coffee Chat Notes',
    sections: [
      {
        title: 'Alan',
        variant: 'cheat-card--neutral',
        paragraphs: [
          'Add notes, background research, and follow-up questions here.',
        ],
      },
    ],
  },
  peter: {
    title: '☕ Peter Coffee Chat Notes',
    sections: [
      {
        title: 'Peter',
        variant: 'cheat-card--neutral',
        paragraphs: [
          'Add notes, background research, and follow-up questions here.',
        ],
      },
    ],
  },
  luke: {
    title: '☕ Luke Coffee Chat Prep',
    sections: [
      {
        title: '0. About Luke (Everything We Know So Far)',
        variant: 'cheat-card--sky',
        list: [
          {
            label: 'Luke direct response to you:',
            text: 'He replied positively and invited you to email him directly to coordinate time.',
          },
          {
            label: 'Availability he shared:',
            text: 'Weekdays after 4pm are usually flexible.',
          },
          {
            label: 'Current organization:',
            text: 'City of Toronto.',
          },
          {
            label: 'Current role (profile info):',
            text: 'Senior Policy Analyst, IT.',
          },
          {
            label: 'Relevant previous public-sector/civic background:',
            text: 'Worked in Ontario government settings and held leadership roles connected to digital strategy, service modernization, and change management.',
          },
          {
            label: 'Code for Canada background:',
            text: 'Former Director of Outreach and also served as Co-Executive Director (Acting).',
          },
          {
            label: 'Earlier background:',
            text: 'Journalism/media leadership experience before moving deeper into digital public-service work.',
          },
          {
            label: 'Themes he is likely to care about:',
            text: 'Public impact, user-centred service design, cross-functional collaboration, digital transformation, and practical policy-to-delivery execution.',
          },
          {
            label: 'How to position yourself with him:',
            text: 'Show a practical builder mindset: full-stack + data + QA automation + deployment + accessibility awareness, and strong interest in meaningful public outcomes.',
          },
        ],
        note: 'Use this as your quick pre-chat brief so you can tailor your examples and questions to his background.',
      },
      {
        title: '1. What This Conversation Likely Is',
        variant: 'cheat-card--sky',
        list: [
          'This is likely a directional networking conversation, not a formal interview.',
          "Luke's background suggests he may care about public impact, civic tech, accessibility, user-centred delivery, and collaboration across policy and operations.",
          'Your goal is to come across as thoughtful, prepared, technically credible, and genuinely interested in public-sector digital work.',
        ],
      },
      {
        title: '2. Strong Opening',
        variant: 'cheat-card--green',
        note: '“Thanks again for making time to chat. I really appreciate Alan connecting us. I’m a software developer and data analyst, and I’ve been very interested in how digital and data work can support better public services. Given your experience across OPS, Code for Canada, and now the City of Toronto, I’d love to learn more about how people with technical backgrounds can contribute effectively in this space, and what skills and mindsets matter most.”',
      },
      {
        title: '3. Questions Luke May Ask You',
        variant: 'cheat-card--yellow',
        list: [
          'Tell me about yourself.',
          'Why are you interested in public service or civic tech?',
          'What kind of work are you hoping to do?',
          'What experience do you have working with stakeholders or non-technical teams?',
          'Why software development and data analysis together?',
          'What do you know about working in government?',
          "What's a project you're proud of?",
          'What are your strengths and weaknesses?',
        ],
      },
      {
        title: '4. Sample Answers To Luke Questions',
        variant: 'cheat-card--violet',
        paragraphs: [
          {
            label: 'Tell me about yourself:',
            text: "I started with a bachelor's degree in Pure Mathematics, then worked as a math teacher and later moved into technical drawing and design. I learned tools like AutoCAD, 3ds Max, CATIA, Adobe, and Office, and over time became a Design Manager. In that role, I noticed repetitive work, so I learned scripting in 3ds Max to automate tasks. After immigrating to Canada, I completed a Software Engineering diploma, worked as a TA for about 11 months, and then joined AutoForm as a developer. At AutoForm I worked across front-end, back-end, and databases, and also handled QA in a small team using Playwright and AI-assisted UI testing. I also used Docker to deploy demo projects to AWS EC2. Now I am focused on continuing my software developer career in Canada, especially in roles where I can combine development and data analysis.",
          },
          {
            label: 'Why public service or civic tech:',
            text: 'What attracts me is the chance to build technology that improves services for people at scale. I like that public-sector digital work is not only about speed, it is also about trust, accessibility, policy context, and long-term value. That environment fits how I work: structured, user-focused, and impact-driven.',
          },
          {
            label: 'What role are you looking for:',
            text: 'I am open to full-stack, front-end, or back-end roles. I enjoy working across the stack, and in my last role I did UI implementation, backend integration, end-to-end testing with Playwright, and deployment setup with Docker. I can contribute where the team needs me most.',
          },
          {
            label: 'Working with stakeholders and non-technical teams:',
            text: 'I focus on translating technical details into clear business language, validating requirements early, and keeping short feedback loops. In small teams, this helps avoid rework and keeps everyone aligned. I have found that the best technical decisions come from understanding the real operational problem first.',
          },
          {
            label: 'Why software development and data analysis together:',
            text: 'For me they are complementary. Data analysis helps identify where the real problem is and how success should be measured. Software development turns those insights into practical solutions that people can use every day. Combining both helps me move from insight to implementation.',
          },
          {
            label: 'What do you know about working in government:',
            text: 'My understanding is that government work requires balancing service outcomes with accessibility, privacy, accountability, and policy constraints. It often involves more cross-functional coordination, but it also creates opportunities to deliver meaningful long-term impact if solutions are built thoughtfully.',
          },
          {
            label: "Project you're proud of:",
            text: 'At AutoForm, we were building a complex feature with heavy state management. As the team used Copilot more, coding style and structure became inconsistent and changes sometimes broke existing behavior. I researched a better approach and created shared AI instruction files with coding standards, architectural rules, and best practices. After the team adopted it, output became more stable, consistent, and maintainable. I am proud of this because it improved team-wide productivity and code quality, not just my own work.',
          },
          {
            label: 'Strengths and weaknesses:',
            text: 'A key strength is fast learning with a structured problem-solving mindset from my math background. I have repeatedly adapted to new domains and tools, from design systems to full-stack development and QA automation. A weakness I continue improving is that I can go too deep on details. I now manage this better by timeboxing tasks and stepping back earlier to re-check priorities and overall impact.',
          },
        ],
      },
      {
        title: '5. Good Questions To Ask Luke',
        variant: 'cheat-card--orange',
        orderedList: [
          'You’ve worked across OPS, Code for Canada, and now the City of Toronto. What differences have stood out to you in how digital work gets done across those environments?',
          'From your perspective, what makes someone effective in public-sector digital or data work beyond technical ability?',
          'For someone with a software and data background, what kinds of teams or roles tend to be the best fit in government or civic-tech settings?',
          'What challenges do public organizations most often face when trying to become more user-centred or data-informed?',
          'Where do technical people usually underestimate the realities of government work?',
          'If you were in my position trying to build a path into this space, what would you focus on over the next six to twelve months?',
        ],
      },
      {
        title: '6. Stories You Should Be Ready With',
        variant: 'cheat-card--neutral',
        list: [
          'A project where you improved reporting, dashboards, or data quality.',
          'A time you worked with ambiguity or shifting stakeholder requirements.',
          'A time you improved a process, workflow, or tool for end users.',
        ],
        note: 'Use a compact structure: problem, what you did, impact, what you learned.',
      },
      {
        title: '7. How To Close The Chat',
        variant: 'cheat-card--green-strong',
        note: '“This has been really helpful. I appreciate how candid and practical your advice has been. You’ve given me a much clearer sense of how to think about this space and where I should focus next.”',
      },
      {
        title: '8. Follow-Up Email',
        variant: 'cheat-card--red',
        note: '“Hi Luke, thank you again for taking the time to speak with me today. I really appreciated your insights on public-sector digital work, especially your perspective on [specific point]. It was very helpful, and I’m grateful for your advice. I hope we can stay in touch. Best, Fateme”',
      },
    ],
  },
};
