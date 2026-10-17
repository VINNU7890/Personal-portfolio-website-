/**
 * Shreyash Chaudha - Portfolio Central Data Store
 * All portfolio information is maintained in this single file for easy updates.
 */

export const personalInfo = {
  name: "Shreyash Chaudha",
  firstName: "Shreyash",
  lastName: "Chaudha",
  title: "Data Science | SQL | Generative & Agentic AI",
  typewriterRoles: [
    "Data Science Student",
    "SQL & Data Analyst",
    "Generative AI Builder",
    "Agentic AI Engineer",
  ],
  bioTagline:
    "Engineering end-to-end solutions that link clean data pipelines, large-scale SQL storage, and autonomous LLM multi-agent systems.",
  summary:
    "Data Science and AI Engineering student with hands-on experience in three connected areas: data analysis (Python, Pandas, EDA, Power BI), SQL (MySQL, SQLite, cleaning and querying 1M+ records) and AI (RAG pipelines, multi-agent systems with LangGraph, Generative AI apps on Google Gemini). Currently completing a Data Science course while building end-to-end projects that link clean data, SQL-backed storage and LLM-powered applications. Runs a public 45-day AI Engineering challenge on LinkedIn.",
  email: "shreyashchaudha@gmail.com",
  phone: "+91 70670 99093",
  whatsapp: "https://wa.me/917067099093",
  location: "Bhopal, India",
  profilePhoto: "/assets/shreyash.png",
  resumePath: "/resume/Shreyash_Chaudha_Resume.pdf",
  resumeLastUpdated: "October 2026",
  socials: {
    github: {
      name: "GitHub",
      url: "https://github.com/VINNU7890",
      username: "VINNU7890",
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/shreyashchaudha",
      username: "shreyashchaudha",
    },
    email: {
      name: "Email",
      url: "mailto:shreyashchaudha@gmail.com",
      address: "shreyashchaudha@gmail.com",
    },
    whatsapp: {
      name: "WhatsApp",
      url: "https://wa.me/917067099093",
      phone: "+91 70670 99093",
    },
  },
};

export const metrics = [
  {
    value: 1000000,
    suffix: "+",
    label: "Records Cleaned & Queried",
    description: "Extensive data cleaning, preprocessing & EDA",
  },
  {
    value: 45,
    suffix: "-Day",
    label: "AI Engineering Challenge",
    description: "Daily technical breakdown series on LinkedIn",
  },
  {
    value: 3,
    suffix: "+",
    label: "Flagship AI & Data Systems",
    description: "End-to-end agentic workflows & RAG pipelines",
  },
  {
    value: 0,
    suffix: " Paid APIs",
    label: "Zero-Cost Agent Stack",
    description: "Built with Gemini, ChromaDB & open source",
  },
];

export const education = {
  degree: "B.Tech in Computer Science Engineering",
  institution: "LNCT University, Bhopal",
  period: "2023 – 2027",
  status: "Pursuing",
  coursework: [
    "Data Science",
    "Natural Language Processing",
    "Generative AI",
    "R Programming",
    "Design Thinking",
  ],
  highlights: [
    "Deep focus on computational intelligence & data-driven software architectures",
    "Practical capstones linking relational databases to autonomous agent workflows",
    "Active member of campus developer and AI study groups",
  ],
};

export const currentlyLearning = [
  {
    title: "Statistics & Machine Learning",
    description:
      "Hypothesis testing, probability distributions, regression models, classification algorithms, and feature engineering fundamentals.",
    level: "In-Depth Study",
    progress: 75,
  },
  {
    title: "Advanced LangGraph Architectures",
    description:
      "Hierarchical agent teams, human-in-the-loop validation, checkpointing, and dynamic state graphs with LangSmith tracing.",
    level: "Hands-on Projects",
    progress: 85,
  },
];

export const skillCategories = [
  {
    id: "data-science",
    title: "Data Science & Analytics",
    icon: "BarChart3",
    description: "Transforming raw figures into actionable business signals",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "Pandas", level: "Advanced" },
      { name: "NumPy", level: "Proficient" },
      { name: "EDA (Exploratory Data Analysis)", level: "Advanced" },
      { name: "Data Cleaning", level: "Advanced" },
      { name: "Data Visualization", level: "Advanced" },
      { name: "Power BI", level: "Proficient" },
      { name: "Excel", level: "Proficient" },
      { name: "Statistics & ML (Learning)", level: "In Progress" },
    ],
  },
  {
    id: "sql-databases",
    title: "SQL & Databases",
    icon: "Database",
    description: "Relational storage, schema design & high-volume querying",
    skills: [
      { name: "SQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "SQLite", level: "Advanced" },
      { name: "Data Extraction & Transformation", level: "Advanced" },
      { name: "Query Optimization", level: "Proficient" },
      { name: "Relational Schema Design", level: "Proficient" },
    ],
  },
  {
    id: "gen-agentic-ai",
    title: "Generative & Agentic AI",
    icon: "Bot",
    description: "Multi-agent orchestration and dynamic LLM reasoning",
    skills: [
      { name: "LLMs (Large Language Models)", level: "Advanced" },
      { name: "Prompt Engineering", level: "Advanced" },
      { name: "LangChain", level: "Advanced" },
      { name: "LangGraph", level: "Advanced" },
      { name: "LangSmith", level: "Proficient" },
      { name: "Google Gemini API", level: "Advanced" },
      { name: "OpenAI API", level: "Proficient" },
      { name: "Multi-Agent Systems", level: "Advanced" },
    ],
  },
  {
    id: "rag-vector-db",
    title: "RAG & Vector Databases",
    icon: "Network",
    description: "Grounding LLMs with semantic search & private knowledge",
    skills: [
      { name: "RAG Pipelines", level: "Advanced" },
      { name: "ChromaDB", level: "Advanced" },
      { name: "Vector Embeddings", level: "Advanced" },
      { name: "Semantic Search", level: "Advanced" },
      { name: "Document Q&A", level: "Advanced" },
      { name: "Semantic Chunking", level: "Proficient" },
    ],
  },
  {
    id: "backend-tools",
    title: "Backend & Engineering Tools",
    icon: "Cpu",
    description: "APIs, containerization, version control & deployment",
    skills: [
      { name: "FastAPI", level: "Proficient" },
      { name: "REST APIs", level: "Advanced" },
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "Docker (Basics)", level: "Familiar" },
      { name: "SQLAlchemy", level: "Proficient" },
    ],
  },
];

export const marqueeSkillsRow1 = [
  { name: "Python", category: "Language", icon: "Code2" },
  { name: "LangGraph", category: "Agentic AI", icon: "Bot" },
  { name: "MySQL", category: "Database", icon: "Database" },
  { name: "RAG Pipelines", category: "Retrieval", icon: "Network" },
  { name: "Pandas", category: "Data Science", icon: "Table" },
  { name: "FastAPI", category: "Backend", icon: "Zap" },
  { name: "ChromaDB", category: "Vector DB", icon: "HardDrive" },
  { name: "Google Gemini", category: "LLM", icon: "Sparkles" },
  { name: "SQLite", category: "Database", icon: "Layers" },
  { name: "Power BI", category: "BI & Viz", icon: "BarChart3" },
];

export const marqueeSkillsRow2 = [
  { name: "Multi-Agent Systems", category: "AI Architecture", icon: "Users" },
  { name: "LangChain", category: "Framework", icon: "Link2" },
  { name: "NumPy", category: "Math & Arrays", icon: "Binary" },
  { name: "LangSmith", category: "Tracing & Eval", icon: "Activity" },
  { name: "Semantic Search", category: "NLP", icon: "Search" },
  { name: "Prompt Engineering", category: "GenAI", icon: "Terminal" },
  { name: "Git & GitHub", category: "DevOps", icon: "GitBranch" },
  { name: "Data Cleaning", category: "Pipelines", icon: "CheckCircle2" },
  { name: "Docker (Basics)", category: "Containers", icon: "Box" },
  { name: "SQLAlchemy", category: "ORM", icon: "Cpu" },
];

export const projects = [
  {
    id: "shreygpt",
    title: "ShreyGPT — Personal Agentic AI Assistant",
    shortTitle: "ShreyGPT",
    year: "2025 – Present",
    category: "Agentic AI & RAG",
    tagline: "Autonomous multi-node LangGraph agent with real-time streaming",
    description:
      "A complete production-grade personal agentic assistant orchestrating dynamic multi-tool routing, semantic document retrieval, and persistent conversational memory.",
    tech: [
      "LangGraph",
      "LangChain",
      "ChromaDB",
      "SQLite",
      "FastAPI",
      "Google Gemini",
      "SQLAlchemy",
      "LangSmith",
    ],
    bullets: [
      "Multi-node LangGraph agent orchestrating Web Search, RAG document Q&A, Math and Memory in one cohesive agent loop.",
      "RAG pipeline with ChromaDB supporting PDF, DOCX and TXT ingestion with semantic chunking and dense vector embeddings.",
      "Persistent conversation memory in SQLite via SQLAlchemy for context-aware multi-turn interactive sessions.",
      "Served through FastAPI with real-time streaming response tokens and LangSmith tracing for telemetry, built with zero paid APIs.",
    ],
    github: "https://github.com/VINNU7890",
    live: "https://github.com/VINNU7890",
    featured: true,
    stats: {
      nodes: "4 Specialized Agent Nodes",
      vectorDB: "ChromaDB Embedded",
      cost: "$0 (Zero Paid APIs)",
    },
    accentColor: "from-blue-500 to-indigo-600",
  },
  {
    id: "data-cleaning-eda",
    title: "Data Cleaning & EDA on 1M+ User Records",
    shortTitle: "1M+ Records EDA",
    year: "2025",
    category: "Data Science & SQL",
    tagline: "Big data transformation and behavioral analytics at scale",
    description:
      "Comprehensive end-to-end data pipeline cleaning over one million raw transactional user records, extracting behavioral trends and business intelligence.",
    tech: ["Python", "MySQL", "Pandas", "NumPy", "EDA", "Data Visualization"],
    bullets: [
      "Cleaned and transformed 1M+ user records, systematically handling duplicate records, missing values, inconsistent datetime formatting, and extreme statistical outliers.",
      "Performed in-depth exploratory data analysis (EDA) to surface core behavioral trends, cohort retention, correlations, and actionable business insights.",
      "Authored optimized MySQL analytical queries and indexing schemas for low-latency aggregated reporting.",
    ],
    github: "https://github.com/VINNU7890",
    live: "https://github.com/VINNU7890",
    featured: true,
    stats: {
      volume: "1,000,000+ Records",
      engine: "MySQL & Pandas",
      accuracy: "99.9% Cleaned Output",
    },
    accentColor: "from-cyan-500 to-blue-600",
  },
  {
    id: "friday",
    title: "FRIDAY — Personal AI Agent",
    shortTitle: "FRIDAY Agent",
    year: "2025",
    category: "Agentic AI & NLP",
    tagline: "Voice-capable personal assistant with autonomous tool dispatch",
    description:
      "Voice and text-driven autonomous agent built to translate natural language intents into automated computer tasks, calculations, and informational queries.",
    tech: ["Python", "Agentic AI", "LangChain", "NLP", "Speech Recognition"],
    bullets: [
      "Built an AI assistant with natural language understanding, voice interaction and modular task management.",
      "Applied multi-agent concepts for dynamic tool routing and autonomous decision-making based on user intent.",
      "Engineered flexible fallback loops and execution logs for seamless workflow recovery.",
    ],
    github: "https://github.com/VINNU7890",
    live: "https://github.com/VINNU7890",
    featured: true,
    stats: {
      interface: "Voice & Text NLP",
      logic: "Intent Dispatcher",
      routing: "Multi-Agent Concepts",
    },
    accentColor: "from-violet-500 to-purple-600",
  },
];

export const certifications = [
  {
    title: "Data Science Specialist",
    issuer: "Internshala",
    year: "In progress",
    status: "In Progress",
    badge: "Specialization",
    skills: ["Python", "Pandas", "EDA", "Statistics", "Machine Learning"],
    description:
      "Comprehensive curriculum focusing on real-world data pipelines, statistical inference, and machine learning models.",
    color: "border-blue-500/30 text-blue-400 bg-blue-500/10",
  },
  {
    title: "Building AI Agents with Snowflake Cortex",
    issuer: "GeeksforGeeks",
    year: "2026",
    status: "Verified",
    badge: "Agentic AI",
    skills: ["Snowflake Cortex", "AI Agents", "SQL", "Cloud LLMs"],
    description:
      "Architecting enterprise-grade autonomous agents and generative workflows on top of Snowflake Cortex data warehouses.",
    color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
  },
  {
    title: "Building Generative AI Apps to Talk to Your Data",
    issuer: "GeeksforGeeks",
    year: "2026",
    status: "Verified",
    badge: "GenAI & RAG",
    skills: ["Talk to Data", "RAG", "Vector Search", "SQL Generation"],
    description:
      "Developing conversational interfaces enabling natural-language querying of relational databases and vector embeddings.",
    color: "border-purple-500/30 text-purple-400 bg-purple-500/10",
  },
  {
    title: "The Complete AI Coding Course (Cursor, Claude Code)",
    issuer: "Udemy",
    year: "2026",
    status: "Verified",
    badge: "AI Engineering",
    skills: ["Cursor", "Claude Code", "AI-Assisted Dev", "Agent Workflows"],
    description:
      "Mastering modern agentic code generation workflows, contextual prompt harnesses, and rapid AI-assisted development.",
    color: "border-violet-500/30 text-violet-400 bg-violet-500/10",
  },
];

export const communityContent = {
  title: "LinkedIn AI Engineering Blogger — 45-Day Public Learning Challenge",
  period: "2025 – Present",
  platform: "LinkedIn",
  link: "https://linkedin.com/in/shreyashchaudha",
  tagline: "45 Days of Deep Dives: Demystifying Agentic AI, RAG & Multi-Agent Loops",
  description:
    "I post daily technical breakdowns on RAG, LangGraph, Agentic AI, Multi-Agent Systems, and LLMs, simplifying complex architectures for a growing community of fellow developers, students, and engineers.",
  stats: [
    { label: "Challenge Duration", value: "45 Days" },
    { label: "Content Focus", value: "RAG & Agents" },
    { label: "Audience", value: "LinkedIn Developers" },
    { label: "Consistency", value: "Daily Technical Posts" },
  ],
  topics: [
    {
      name: "RAG Pipelines & Chunking",
      desc: "Semantic chunking strategies, embedding models, and hybrid keyword-vector retrieval.",
    },
    {
      name: "LangGraph Multi-Agent Loops",
      desc: "State graph cycles, conditional routing, human-in-the-loop, and sub-agents.",
    },
    {
      name: "Vector Databases & ChromaDB",
      desc: "HNSW indexing, metadata filtering, cosine similarity, and zero-cost persistence.",
    },
    {
      name: "SQL & 1M+ Big Data Querying",
      desc: "Index strategies, window functions, deduplication, and anomaly detection.",
    },
    {
      name: "LLM Observability with LangSmith",
      desc: "Token latency tracking, execution graphs, evaluation metrics, and error debugging.",
    },
    {
      name: "Prompt Engineering & Grounding",
      desc: "Few-shot techniques, system prompts, structured outputs, and hallucination reduction.",
    },
  ],
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Community", href: "#community" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];
