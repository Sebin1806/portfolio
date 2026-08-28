export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  timeline: string;
  category: 'RAG & GenAI' | 'Healthcare AI' | 'NLP & ML' | 'Multi-Agent';
  featured: boolean;
  images: string[];
}

export interface Skill {
  name: string;
  category: 'AI & Machine Learning' | 'Generative AI & LLMs' | 'Programming & DB' | 'Data Analytics & Cloud' | 'Tools & Frameworks';
  level: number; // 0-100
  icon: string;
  highlight?: boolean;
  description: string;
}

export interface JourneyNode {
  id: string;
  title: string;
  subtitle: string;
  institution: string;
  location: string;
  period: string;
  type: 'root' | 'education' | 'milestone' | 'project' | 'future';
  description: string;
  achievements: string[];
  icon: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
  type: 'College' | 'School';
  badge: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: 'AWS' | 'Python' | 'AI' | 'Machine Learning' | 'Power BI' | 'Generative AI' | 'NPTEL' | 'Coursera' | 'Udemy' | 'Google' | 'Microsoft' | 'Infosys' | 'GUVI' | 'Data Analytics' | 'Hackathon' | 'Research' | 'Patent';
  credentialId?: string;
  verifyUrl: string;
  downloadUrl: string;
  previewColor: string;
  skillsCovered: string[];
  image?: string;
}

export interface Achievement {
  label: string;
  value: string;
  numericTarget?: number;
  suffix?: string;
  subtext: string;
  icon: string;
}

export interface Publication {
  id: string;
  title: string;
  type: 'research-paper' | 'patent';
  publisher: string;
  description: string;
  tags: string[];
  status: string;
  year: string;
  url?: string;
  image?: string;
}

export const PERSONAL_INFO = {
  name: 'Sebin S',
  role: 'Artificial Intelligence & Data Science Engineer',
  profileImage: '/sebin-profile.jpg',
  resumeUrl: 'https://drive.google.com/drive/folders/1sHTdch-tyl_7__Iq0KvuVEchrvteGOjX?usp=drive_link',
  tagline: 'Building Intelligent RAG Systems, Multi-Agent AI, and Machine Learning Solutions for Tomorrow.',
  education: 'B.Tech Artificial Intelligence & Data Science (Final Year)',
  college: 'V.S.B. College of Engineering Technical Campus, Coimbatore',
  school: 'Evans Matriculation Higher Secondary School, Kanniyakumari',
  email: 'sebinsebin180606@gmail.com',
  github: 'https://github.com/Sebin1806',
  linkedin: 'https://www.linkedin.com/in/sebin1806/',
  location: 'Coimbatore, Tamil Nadu, India',
  status: 'Open to Internship & Full-Time AI Engineering Roles (2023-2027 Batch)',
  typingTitles: [
    'Artificial Intelligence Student',
    'Python Developer',
    'Machine Learning Enthusiast',
    'Generative AI Developer',
    'RAG Developer',
    'Multi-Agent System Engineer',
    'Future AI Engineer'
  ],
  bio: `Hi, I'm Sebin S, a Final Year B.Tech Artificial Intelligence & Data Science student at V.S.B. College of Engineering Technical Campus, Coimbatore.

I'm deeply passionate about Artificial Intelligence, Machine Learning, Generative AI, Retrieval-Augmented Generation (RAG), Multi-Agent AI Systems (CrewAI), Cloud Computing (AWS), and Data Analytics. I enjoy designing intelligent, resilient software solutions that solve real-world problems and continuously expanding my knowledge by exploring emerging technologies.

My ambition is to build impactful AI applications that empower people and transform industries while contributing to world-class engineering teams at leading tech giants and innovative AI startups.`
};

export const PROJECTS: Project[] = [
  {
    id: 'rag-chatbot',
    title: 'RAG Chatbot',
    subtitle: 'Retrieval-Augmented Generation System with Semantic Vector Search',
    description: 'Developed a Retrieval-Augmented Generation chatbot that retrieves relevant information from custom knowledge sources before generating responses using LLMs to reduce hallucinations and optimize accuracy.',
    fullDescription: `The RAG Chatbot is an enterprise-grade information retrieval and question-answering platform. It seamlessly ingests proprietary documents (PDFs, Markdown, text datasets), chunking them into semantic fragments and indexing them into vector space embeddings. When queried, it executes cosine-similarity vector retrieval to extract precise context windows, injecting them into Large Language Models for grounded, hallucination-free answer synthesis.`,
    features: [
      'Document indexing & semantic text chunking',
      'Contextual multi-turn conversation memory',
      'High-dimensional vector embeddings & cosine retrieval',
      'Hallucination prevention with source attribution',
      'Interactive chat UI with stream response simulation'
    ],
    techStack: ['Python', 'LangChain', 'OpenAI API', 'ChromaDB', 'FAISS', 'Streamlit', 'RAG Engine'],
    githubUrl: 'https://github.com/Sebin1806/rag-chatbot',
    timeline: '2025',
    category: 'RAG & GenAI',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'ai-healthcare-chatbot',
    title: 'AI Healthcare Chatbot',
    subtitle: 'Intelligent Medical Guidance & Symptom Assistant',
    description: 'Built an AI-powered healthcare assistant capable of understanding health-related queries using NLP and Machine Learning, providing symptom awareness while encouraging medical consultation.',
    fullDescription: `The AI Healthcare Chatbot provides safe, informative, and empathetic medical triage guidance. Utilizing fine-tuned Natural Language Processing models, it analyzes user symptom inputs, cross-references medical knowledge repositories, and presents potential health insights alongside safety disclaimers and emergency advice.`,
    features: [
      'Natural Language Processing for medical terminology understanding',
      'Symptom assessment and awareness guidance',
      'Pre-processed medical decision tree & intent classifier',
      'Empathetic conversational response generation',
      'Strict medical disclaimer and safety protocol bounds'
    ],
    techStack: ['Python', 'NLP', 'Scikit-Learn', 'NLTK', 'Transformers', 'Flask/FastAPI'],
    githubUrl: 'https://github.com/Sebin1806/AI-Healthcare-Chatbot',
    timeline: '2024 - 2025',
    category: 'Healthcare AI',
    featured: true,
    images: [
      '/healthcare-chatbot-1.png',
      '/healthcare-chatbot-2.png'
    ]
  },
  {
    id: 'multi-agent-data-analysis',
    title: 'Multi-Agent Data Analysis System',
    subtitle: 'Autonomous Collaborative AI Agents powered by CrewAI',
    description: 'Created an advanced Multi-Agent AI platform using CrewAI where specialized AI agents collaborate to perform automated data analysis, generate reports, summarize datasets, and assist decision-making.',
    fullDescription: `This system leverages CrewAI multi-agent orchestration. A network of specialized AI agents—Data Analyst Agent, Research Agent, Quality Auditor Agent, and Executive Report Writer Agent—work synchronously and asynchronously. The Data Analyst agent executes statistical code on raw datasets, the Research agent finds domain context, and the Report Writer synthesizes automated PDF/Markdown summaries for business stakeholders.`,
    features: [
      'Multi-agent role assignment & delegation using CrewAI',
      'Automated EDA (Exploratory Data Analysis) code execution',
      'Autonomous report synthesis and trend visualization',
      'Coordinated multi-step task execution pipelines',
      'Interactive dashboard for monitoring agent communications'
    ],
    techStack: ['Python', 'CrewAI', 'LangChain', 'Pandas', 'Matplotlib', 'Generative AI', 'Agentic AI'],
    githubUrl: 'https://github.com/Sebin1806/Multi-Agent-Data-Analysis-System-with-CrewAI',
    timeline: '2025',
    category: 'Multi-Agent',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'email-spam-shield',
    title: 'Email Spam Shield',
    subtitle: 'Machine Learning Text Classifier & Intelligent Spam Filter',
    description: 'Designed a machine learning email spam detection system classifying emails as spam or legitimate using text preprocessing, TF-IDF feature extraction, and supervised classification algorithms.',
    fullDescription: `Email Spam Shield is a robust ML security application engineered to protect inboxes from malicious phishing and spam attacks. It implements tokenization, stop-word removal, and TF-IDF n-gram vectorization paired with Naive Bayes and Support Vector Machines, achieving over 98% detection precision.`,
    features: [
      'Advanced text preprocessing (stemming, lemmatization, tokenization)',
      'TF-IDF (Term Frequency-Inverse Document Frequency) feature extraction',
      'Multi-model comparison (Naive Bayes, SVM, Logistic Regression)',
      'Real-time email content scan & risk score calculation',
      'Interactive confusion matrix & precision metrics UI'
    ],
    techStack: ['Python', 'Scikit-Learn', 'NLTK', 'Pandas', 'Streamlit', 'Machine Learning'],
    githubUrl: 'https://github.com/Sebin1806/Email-spam-shield',
    timeline: '2024',
    category: 'NLP & ML',
    featured: true,
    images: [
      '/email-spam-1.png',
      '/email-spam-2.png'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'Programming & DB', level: 95, icon: 'python', highlight: true, description: 'Core language for AI, Data Structures, ML scripts, and Backend APIs.' },
  { name: 'Artificial Intelligence', category: 'AI & Machine Learning', level: 92, icon: 'cpu', highlight: true, description: 'Theoretical foundation, searching algorithms, neural networks, heuristic search.' },
  { name: 'Machine Learning', category: 'AI & Machine Learning', level: 90, icon: 'brain', highlight: true, description: 'Supervised/Unsupervised models, Scikit-Learn, Regression, SVM, Random Forest.' },
  { name: 'Deep Learning', category: 'AI & Machine Learning', level: 85, icon: 'layers', highlight: true, description: 'Neural networks, PyTorch/TensorFlow basics, CNNs, Transformers architecture.' },
  { name: 'Generative AI', category: 'Generative AI & LLMs', level: 90, icon: 'sparkles', highlight: true, description: 'Prompt engineering, OpenAI API, HuggingFace Transformers, fine-tuning concepts.' },
  { name: 'Large Language Models (LLMs)', category: 'Generative AI & LLMs', level: 88, icon: 'bot', highlight: true, description: 'Llama, GPT-4, Claude, LangChain, LlamaIndex integration.' },
  { name: 'Retrieval-Augmented Gen (RAG)', category: 'Generative AI & LLMs', level: 92, icon: 'database', highlight: true, description: 'Vector databases (ChromaDB, FAISS), embeddings, semantic retrieval chunking.' },
  { name: 'CrewAI & Multi-Agent Systems', category: 'Generative AI & LLMs', level: 88, icon: 'users', highlight: true, description: 'Agentic workflows, task delegation, autonomous crew orchestration.' },
  { name: 'Natural Language Processing (NLP)', category: 'AI & Machine Learning', level: 88, icon: 'message-square', description: 'Tokenization, NLTK, spaCy, Sentiment analysis, Text summarization.' },
  { name: 'Data Analytics & Power BI', category: 'Data Analytics & Cloud', level: 85, icon: 'bar-chart-3', highlight: true, description: 'Interactive dashboards, DAX queries, trend reporting, dataset cleanup.' },
  { name: 'MySQL & Relational Databases', category: 'Programming & DB', level: 85, icon: 'server', description: 'Complex SQL queries, joins, relational schema design, database optimization.' },
  { name: 'Cloud Computing (AWS)', category: 'Data Analytics & Cloud', level: 80, icon: 'cloud', highlight: true, description: 'AWS EC2, S3, IAM, Cloud deployment basics for AI models.' },
  { name: 'Git & GitHub', category: 'Tools & Frameworks', level: 90, icon: 'git-branch', description: 'Version control, collaborative pull requests, GitHub actions & portfolio projects.' },
  { name: 'VS Code & Jupyter Notebook', category: 'Tools & Frameworks', level: 95, icon: 'code-2', description: 'Primary IDEs for rapid prototyping, EDA notebooks, and Python debugging.' }
];

export const JOURNEY: JourneyNode[] = [
  {
    id: 'college',
    title: 'B.Tech AI & Data Science',
    subtitle: 'Undergraduate Degree',
    institution: 'V.S.B. College of Engineering Technical Campus',
    location: 'Coimbatore, Tamil Nadu',
    period: '2023 - 2027 Batch',
    type: 'education',
    description: 'Specializing in Artificial Intelligence, Machine Learning algorithms, Statistics, and Database Systems.',
    achievements: ['Consistently strong academic performance', 'Focus on GenAI & Data Science'],
    icon: 'graduation-cap'
  },
  {
    id: 'ml-breakthrough',
    title: 'Machine Learning & Data Intelligence',
    subtitle: 'Email Spam Shield & Predictive ML',
    institution: 'V.S.B. College Technical Campus',
    location: 'Coimbatore',
    period: '2024',
    type: 'project',
    description: 'Applied supervised learning to text classification. Built Email Spam Shield with 98%+ accuracy using TF-IDF & Naive Bayes.',
    achievements: ['98%+ Accuracy on spam classification', 'Mastered Scikit-Learn & NLTK'],
    icon: 'shield-check'
  },
  {
    id: 'genai-crewai',
    title: 'Generative AI, RAG & Multi-Agent Systems',
    subtitle: 'LLMs, Vector DBs & Autonomous CrewAI',
    institution: 'Hands-on AI Engineering',
    location: 'Coimbatore',
    period: '2024 - 2025',
    type: 'project',
    description: 'Engineered RAG Chatbots with vector embeddings, AI Healthcare bot, and multi-agent automated data analytics using CrewAI.',
    achievements: ['End-to-end vector search pipelines', 'Multi-agent dataset analysis workflows'],
    icon: 'sparkles'
  },
  {
    id: 'future-ai-engineer',
    title: 'Final Year AI/ML Engineer',
    subtitle: 'Ready for Internship & Tech Roles',
    institution: 'V.S.B. College & Beyond',
    location: 'Open to Relocation',
    period: 'Present (2023-2027)',
    type: 'future',
    description: 'Preparing for graduation. Actively seeking AI/ML, Generative AI, and Data Engineering roles at tech enterprises & startups.',
    achievements: ['4+ Production AI projects ready', 'Certified in AI, Python & Data Analytics'],
    icon: 'rocket'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'V.S.B. College of Engineering Technical Campus',
    degree: 'Bachelor of Technology (B.Tech)',
    location: 'Coimbatore, Tamil Nadu, India',
    period: '2023 - 2027',
    status: 'Currently Pursuing Final Year',
    description: 'Specializing in Artificial Intelligence & Data Science. Intensive curriculum covering Deep Learning, Natural Language Processing, Big Data Analytics, Computer Vision, Cloud Computing, and Software Engineering.',
    highlights: [
      'Department of Artificial Intelligence & Data Science',
      'Focus areas: Generative AI, RAG Systems, Multi-Agent Orchestration',
      'Hands-on practical labs and industry project presentations'
    ],
    type: 'College',
    badge: 'Final Year Undergrad'
  },
  {
    institution: 'Evans Matriculation Higher Secondary School',
    degree: 'Higher Secondary Certificate (HSC) - Computer Science Track',
    location: 'Kanniyakumari, Tamil Nadu, India',
    period: 'Completed',
    status: 'Graduated with Distinction',
    description: 'Completed higher secondary education focusing on Physics, Chemistry, Mathematics, and Computer Science foundation.',
    highlights: [
      'Distinction in Mathematics & Computer Applications',
      'Foundational grounding in logical reasoning and basic programming'
    ],
    type: 'School',
    badge: 'Schooling'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-nptel-safe-ai',
    title: 'Responsible & Safe AI Systems',
    issuer: 'NPTEL (MoE, Govt. of India / IIIT Hyderabad)',
    issueDate: 'Jul-Oct 2025',
    category: 'NPTEL',
    credentialId: 'NPTEL25CS118S554302909',
    verifyUrl: 'https://nptel.ac.in/noc',
    downloadUrl: '#',
    previewColor: 'from-rose-500/20 to-red-600/20',
    skillsCovered: ['AI Safety', 'AI Ethics', 'Responsible AI', 'Alignment Frameworks'],
    image: '/cert-nptel-safe-ai.jpg'
  },
  {
    id: 'cert-indiaai-yuva-ai',
    title: 'Yuva AI for All',
    issuer: 'INDIAai & NASSCOM FutureSkills Prime',
    issueDate: '01 May 2025',
    category: 'AI',
    verifyUrl: 'https://futureskillsprime.in',
    downloadUrl: '#',
    previewColor: 'from-red-700/20 to-rose-900/20',
    skillsCovered: ['AI Fundamentals', 'Generative AI', 'Ethical AI', 'Digital Skilling'],
    image: '/cert-indiaai-yuva-ai.jpg'
  },
  {
    id: 'cert-infosys-aiml',
    title: 'Artificial Intelligence and Machine Learning Training Course',
    issuer: 'Infosys Springboard',
    issueDate: 'May 2025',
    category: 'AI',
    verifyUrl: 'https://verify.onwingspan.com',
    downloadUrl: '#',
    previewColor: 'from-sky-500/20 to-blue-600/20',
    skillsCovered: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks', 'Deep Learning'],
    image: '/cert-infosys-aiml.jpg'
  },
  {
    id: 'cert-guvi-matplotlib',
    title: 'Data Visualization with Matplotlib Using Python',
    issuer: 'GUVI / HCL (Google for Education Partner)',
    issueDate: 'June 2025',
    category: 'Python',
    credentialId: '066N15mGq567I28fn0',
    verifyUrl: 'https://www.guvi.in/certificate?id=066N15mGq567I28fn0',
    downloadUrl: '#',
    previewColor: 'from-teal-500/20 to-emerald-500/20',
    skillsCovered: ['Matplotlib', 'Data Visualization', 'Python', 'Charts & Graphs'],
    image: '/cert-guvi-matplotlib.jpg'
  },
  {
    id: 'cert-guvi-mysql',
    title: 'MySQL',
    issuer: 'GUVI / HCL (Google for Education Partner)',
    issueDate: 'October 2025',
    category: 'GUVI',
    credentialId: 'e75ny1992888t9519N',
    verifyUrl: 'https://www.guvi.in/certificate?id=e75ny1992888t9519N',
    downloadUrl: '#',
    previewColor: 'from-blue-500/20 to-indigo-500/20',
    skillsCovered: ['MySQL', 'SQL Queries', 'Database Design', 'Relational Databases'],
    image: '/cert-guvi-mysql.png'
  },
  {
    id: 'cert-guvi-powerbi',
    title: 'Advanced Data Visualization using Power BI',
    issuer: 'GUVI / HCL (Google for Education Partner)',
    issueDate: 'October 2025',
    category: 'Power BI',
    credentialId: '1I30F791s3A4my9355',
    verifyUrl: 'https://www.guvi.in/certificate?id=1I30F791s3A4my9355',
    downloadUrl: '#',
    previewColor: 'from-red-800/20 to-rose-900/20',
    skillsCovered: ['Power BI', 'Advanced Visualizations', 'DAX', 'Business Intelligence'],
    image: '/cert-guvi-powerbi.png'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    label: 'Projects Completed',
    value: '4+',
    numericTarget: 4,
    suffix: '+',
    subtext: 'Full-stack AI, RAG & Multi-Agent systems developed',
    icon: 'folder-code'
  },
  {
    label: 'Technologies Learned',
    value: '15+',
    numericTarget: 15,
    suffix: '+',
    subtext: 'Across AI, ML, GenAI, Python, Cloud & DBs',
    icon: 'cpu'
  },
  {
    label: 'GitHub Repositories',
    value: 'Dynamic',
    subtext: 'Open source AI projects & code repositories',
    icon: 'git-repo'
  },
  {
    label: 'AI Models Built',
    value: 'Multiple',
    subtext: 'RAG engines, Healthcare bots, Spam classifiers, CrewAI',
    icon: 'brain-circuit'
  },
  {
    label: 'Learning Every Day',
    value: '∞',
    subtext: 'Constant curiosity for cutting-edge AI breakthroughs',
    icon: 'sparkles'
  }
];

export const TECH_STACK_GROUPS = [
  {
    category: 'Artificial Intelligence & GenAI',
    icon: 'sparkles',
    items: ['Python', 'PyTorch', 'TensorFlow', 'LangChain', 'LlamaIndex', 'CrewAI', 'OpenAI API', 'ChromaDB', 'FAISS', 'HuggingFace']
  },
  {
    category: 'Machine Learning & NLP',
    icon: 'brain',
    items: ['Scikit-Learn', 'NLTK', 'spaCy', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SciPy']
  },
  {
    category: 'Data & Databases & Cloud',
    icon: 'database',
    items: ['MySQL', 'PostgreSQL', 'Power BI', 'AWS EC2', 'AWS S3', 'Vector DBs', 'REST APIs', 'FastAPI', 'Flask']
  },
  {
    category: 'Tools & Development Environment',
    icon: 'terminal',
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Streamlit', 'Docker', 'Vite', 'React', 'Tailwind CSS']
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-ijcrt-cybercrime',
    title: 'A Comprehensive Analysis of Cyber Crimes and Cyber Security Tools',
    type: 'research-paper',
    publisher: 'International Journal of Creative Research Thoughts (IJCRT)',
    description: 'Published a comprehensive research paper analyzing the evolving landscape of cyber crimes, threat vectors, and modern cyber security tools. The study covers attack taxonomies, defense mechanisms, and emerging security frameworks for digital infrastructure protection.',
    tags: ['Cyber Security', 'Cyber Crimes', 'Threat Analysis', 'Security Tools', 'Research'],
    status: 'Published (IJCRT Vol. 12 Issue 11, Nov 2024)',
    year: '2024',
    image: '/research-ijcrt-cert.jpg'
  },
  {
    id: 'pub-patent-smart-dustbin',
    title: 'Smart Dustbin System with Automated Dust Collection, Waste Management, and IoT Integration',
    type: 'patent',
    publisher: 'Patent Office Journal (App No: 202541009764 A)',
    description: 'Designed and filed an official patent for an innovative IoT-powered smart dustbin system featuring automated dust collection, real-time waste level monitoring, and intelligent management capabilities for smart city waste infrastructure.',
    tags: ['IoT', 'Smart City', 'Automation', 'Patent', 'Embedded Systems'],
    status: 'Patent Filed & Published (Feb 2025)',
    year: '2025',
    image: '/patent-smart-dustbin.jpg'
  }
];
