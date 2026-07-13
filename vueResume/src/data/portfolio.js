export const folders = [
  {
    id: "about",
    label: "About Me",
    icon: "/assets/profileFolder.png",
  },
  {
    id: "skills",
    label: "Skills",
    icon: "/assets/skillsFolder.png",
  },
  {
    id: "education",
    label: "Education",
    icon: "/assets/educationFolder.png",
  },
  {
    id: "projects",
    label: "Projects",
    icon: "/assets/projectsFolder.png",
  },
  {
    id: "contact",
    label: "Contact",
    icon: "/assets/contactFolder.png",
  },
];

export const dockLinks = [
  {
    id: "github",
    label: "GitHub",
    icon: "/assets/github.png",
    alt: "Github",
    url: "https://github.com/conxant0",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: "/assets/linkedin.png",
    alt: "Linkedin",
    url: "https://www.linkedin.com/in/jezreelchadlumbab/",
  },
  {
    id: "email",
    label: "Email",
    icon: "/assets/gmail.png",
    alt: "Gmail",
    url: "mailto:jglumbab@gmail.com",
  },
  {
    id: "resume",
    label: "Resume",
    icon: "/assets/resume.png",
    alt: "Resume",
    url: "https://drive.google.com/file/d/1-3NNxwtmYo1BzhltLqZ_vTLB6Aj3u4Kf/view?usp=sharing",
  },
];

export const aboutSection = {
  title: "Hi there!",
  photo: "/assets/me.png",
  paragraphs: [
    "I'm Jezreel, Founder and Backend Developer of Baggo, an early-stage startup preparing for a pilot launch. I focus on backend architecture, REST APIs, and cloud-native systems using tools like Django, AWS, React, Flutter, and C#.",
    "I’m also AWS Cloud Club CTO and a Computer Science student at UP Cebu. Outside of tech, I go to the gym regularly, enjoy single-player RPGs, and spent three years as varsity for our university Valorant team.",
  ],
};

export const skillsSection = {
  title: "Skills & Tools",
  intro:
    "A snapshot of the technologies I use to build, ship, and manage software projects.",
  groups: [
    {
      title: "Languages",
      text: "Python, C/C++, JavaScript, TypeScript, SQL, C#",
    },
    {
      title: "Frameworks & Libraries",
      text: "Django, Node.js, Express.js, React, Next.js, Flutter, ASP.NET",
    },
    {
      title: "Databases",
      text: "PostgreSQL, MySQL, MongoDB",
    },
    {
      title: "Cloud & Infrastructure",
      text: "AWS EC2, S3, RDS, Cognito, Linux, Bash scripting, cloud-native deployment",
    },
    {
      title: "Tools & Version Control",
      text: "Git, GitHub, Docker, GitHub Actions, Trello, Notion",
    },
    {
      title: "Project Management",
      text: "Agile/Scrum, sprint planning, cross-functional team coordination",
    },
    {
      title: "AI / LLM",
      text: "OpenAI API, Gemini API, Groq/Llama, prompt workflows, agentic tool-use loops, AI workflow automation",
    },
  ],
};

export const educationSection = {
  title: "Education",
  cards: [
    {
      heading: "University of the Philippines – Cebu",
      location: "Cebu, Philippines",
      dates: "Expected Graduation: July 2027",
      lines: [
        {
          strong: "Bachelor of Science in Computer Science",
          text: " (GWA: 1.33)",
        },
        {
          strong: "Honors & Scholarships:",
          text: " Dean’s Lister (All Semesters), DOST-SEI S&T Merit Scholar",
        },
        {
          strong: "Relevant Coursework:",
          text: " Data Structures, File Processing and Database Systems, Operating Systems, Software Engineering, Design and Analysis of Algorithms, Systems Analysis and Design",
        },
      ],
    },
  ],
  organizationsTitle: "Organizations",
  organizations: [
    {
      heading: "UP Computer Science Guild (UPCSG)",
      location: "Cebu, Philippines",
      dates: "July 2025 – May 2026",
      role: "Education & Development Director",
      lines: [
        "Spearheaded large-scale technical outreach programs, tutoring 50+ students per session and orchestrating two major regional competitions — a Game Jam and the 2026 Innovation Cup — coordinating a total of 77 teams.",
      ],
    },
    {
      heading: "AWS Cloud Club – UP Cebu",
      location: "Cebu, Philippines",
      dates: "November 2025 – Present",
      role: "Chief Technology Officer (CTO)",
      lines: [
        "Designed and delivered cloud infrastructure workshops covering AWS EC2, S3, RDS, and cloud-native deployment practices, upskilling 100+ students and driving hands-on platform adoption across the university.",
      ],
    },
  ],
};

export const projectsSection = {
  title: "Projects",
  projects: [
    {
      heading: "Aegis",
      links: [
        {
          label: "Website",
          url: "https://aegis-culay.vercel.app/",
        },
      ],
      lines: [
        "Architected a dengue vulnerability scoring platform using React and Node.js, with NASA POWER and Gemini API to deliver real-time health risk scoring.",
        "Awarded 1st Place at the AI.DEAS Regional Hackathon.",
      ],
    },
    {
      heading: "Tipik",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/conxant0/Tipik",
        },
      ],
      lines: [
        "Engineered a cross-modal Flutter and Node.js application that processes handwritten image inputs and maps them to executable code using the ChatGPT API.",
        "Implemented image-text alignment pipelines, test-driven development, mock LLM clients, and structured run logs to evaluate reliability and debug AI workflows.",
      ],
    },
    {
      heading: "Codebase Archaeologist",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/conxant0/codebaseArchaeologist",
        },
      ],
      lines: [
        "Built a RAG-based CLI tool that ingests GitHub issues, pull requests, commits, and documentation to answer why code exists, using embeddings, vector search, retrieval-augmented generation, and source-cited responses.",
        "Generated historical context packs for Codex CLI, Claude Code, Cursor, and Gemini CLI to help developers understand architectural intent before modifying code.",
      ],
    },
    {
      heading: "ColdEmailinator",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/conxant0/ColdEmailinator",
        },
      ],
      lines: [
        "Built an agentic workflow automation system in Python that researches organizations via Tavily, drafts personalized messages using a Groq/Llama tool-use loop, integrates Gmail API with OAuth2, parses replies, evaluates goal completion, and sends threaded follow-ups.",
        "Persisted JSON run state for debugging and workflow inspection.",
      ],
    },
    {
      heading: "Internship Agent",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/conxant0/internshipAgent",
        },
      ],
      lines: [
        "Built an agentic job scraper using Playwright and a Groq/Llama tool-use loop that scrapes 200+ listings across Prosple and JobStreet, scores and ranks them against a candidate resume, and deduplicates results.",
        "Developed under TDD with a swappable LLM client architecture.",
      ],
    },
    {
      heading: "BillSplit",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/rokkunbruv/bill-splitter-web-app",
        },
      ],
      lines: [
        "Directed backend design for a receipt-parsing web app that splits group expenses automatically.",
        "Integrated ChatGPT API for intelligent parsing using the MERN stack: MongoDB, Express, React, and Node.",
      ],
    },
    {
      heading: "GorillaVsMen",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/mijimmi/GorillaVsMen",
        },
        {
          label: "Install",
          url: "https://drive.google.com/drive/u/1/folders/1kfc0M4l0GKtlzMDnC32CgKTk5zRrR3Va",
        },
      ],
      lines: [
        "Led design and logic implementation for a roguelike survival game built with GameMaker Studio.",
        "Supervised gameplay balance and AI systems to deliver optimized performance.",
      ],
    },
    {
      heading: "TulTul",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/rokkunbruv/hacktose-intolerant",
        },
      ],
      lines: [
        "Spearheaded the creation of a commute assistant Android app with live jeepney tracking and route visualization. Won 3rd place at a Cebu-based hackathon.",
        "Coordinated a 5-person team and built the backend using Django, Next.js, Flutter, AWS EC2, and Google Maps API.",
      ],
    },
  ],
};

export const contactSection = {
  title: "Contact",
  intro:
    "Feel free to reach out for internships, software development work, technical projects, or startup-related opportunities.",
  name: "Jezreel Chad Lumbab",
  rows: [
    {
      label: "Email",
      value: "jglumbab@gmail.com",
      href: "mailto:jglumbab@gmail.com",
    },
    {
      label: "Location",
      value: "Cebu, Philippines",
    },
    {
      label: "GitHub",
      value: "github.com/conxant0",
      href: "https://github.com/conxant0",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/jezreelchadlumbab",
      href: "https://www.linkedin.com/in/jezreelchadlumbab/",
    },
    {
      label: "Resume",
      value: "View Resume",
      href: "https://drive.google.com/file/d/1-3NNxwtmYo1BzhltLqZ_vTLB6Aj3u4Kf/view?usp=sharing",
    },
  ],
  closing: "Open to internships and software development work.",
};
