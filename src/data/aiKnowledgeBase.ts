import { PERSONAL_INFO, PROJECTS, SKILLS, EDUCATION, CERTIFICATES } from './portfolioData';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  suggestedAction?: {
    label: string;
    action: () => void;
  };
}

export const SUGGESTED_PROMPTS = [
  "Tell me about Sebin's RAG Chatbot project.",
  "What are Sebin's core AI skills?",
  "What is Sebin's educational background?",
  "Is Sebin available for internship or full-time roles?",
  "How can I contact Sebin or view his resume?",
  "Explain his Multi-Agent Data Analysis system."
];

export function generateAIResponse(input: string): string {
  const query = input.toLowerCase();

  if (query.includes('rag') || query.includes('retrieval') || query.includes('document')) {
    const ragProj = PROJECTS.find(p => p.id === 'rag-chatbot');
    return `🤖 **Sebin's RAG Chatbot Project**:\n\n${ragProj?.description}\n\n**Key Tech**: ${ragProj?.techStack.join(', ')}.\n\nIt features document indexing, semantic vector search using ChromaDB/FAISS, and hallucination-free LLM answer synthesis. You can view the code at: [GitHub Repo](${ragProj?.githubUrl})`;
  }

  if (query.includes('multi-agent') || query.includes('crewai') || query.includes('agent')) {
    const agentProj = PROJECTS.find(p => p.id === 'multi-agent-data-analysis');
    return `🤖 **Multi-Agent Data Analysis System (CrewAI)**:\n\n${agentProj?.description}\n\n**Role Collaboration**: Specialized AI agents (Analyst, Researcher, Reporter) perform autonomous EDA, summarizing datasets into structured reports. Tech stack includes Python, CrewAI, LangChain, and Pandas. Code link: [GitHub Repo](${agentProj?.githubUrl})`;
  }

  if (query.includes('health') || query.includes('medical') || query.includes('symptom')) {
    const healthProj = PROJECTS.find(p => p.id === 'ai-healthcare-chatbot');
    return `🤖 **AI Healthcare Chatbot**:\n\n${healthProj?.description}\n\nBuilt with Python, Scikit-Learn, and NLP techniques for symptom awareness and medical guidance. Code link: [GitHub Repo](${healthProj?.githubUrl})`;
  }

  if (query.includes('spam') || query.includes('email') || query.includes('filter')) {
    const spamProj = PROJECTS.find(p => p.id === 'email-spam-shield');
    return `🤖 **Email Spam Shield**:\n\n${spamProj?.description}\n\nAchieved 98%+ precision using TF-IDF feature extraction, Naive Bayes, and SVM classifiers. Code link: [GitHub Repo](${spamProj?.githubUrl})`;
  }

  if (query.includes('skill') || query.includes('tech') || query.includes('python') || query.includes('stack')) {
    const topSkills = SKILLS.filter(s => s.highlight).map(s => s.name).join(', ');
    return `⚡ **Sebin's Core Technical Skills**:\n\n- **Primary Focus**: ${topSkills}\n- **Languages & Databases**: Python (95%), MySQL, SQL\n- **AI & GenAI Frameworks**: LangChain, CrewAI, PyTorch, Transformers, ChromaDB, Scikit-Learn\n- **Cloud & Analytics**: AWS (Cloud Foundations), Power BI, Git/GitHub, Jupyter Notebooks.`;
  }

  if (query.includes('education') || query.includes('college') || query.includes('school') || query.includes('degree') || query.includes('vsb')) {
    const col = EDUCATION.find(e => e.type === 'College');
    const sch = EDUCATION.find(e => e.type === 'School');
    return `🎓 **Education Summary**:\n\n1. **College**: ${col?.degree} at ${col?.institution} (${col?.period}) - *${col?.status}*\n2. **Schooling**: ${sch?.degree} at ${sch?.institution} (${sch?.location}).`;
  }

  if (query.includes('hire') || query.includes('intern') || query.includes('job') || query.includes('available') || query.includes('role')) {
    return `🟢 **Career Status**: Sebin is **actively seeking Internship & Full-time AI / ML / Data Engineering roles** (2023-2027 Batch).\n\nHe is willing to relocate and works proficiently with remote/onsite engineering teams. You can directly reach out via email: **${PERSONAL_INFO.email}** or connect on LinkedIn!`;
  }

  if (query.includes('contact') || query.includes('email') || query.includes('resume') || query.includes('phone') || query.includes('github')) {
    return `📬 **Contact & Info**:\n\n- 📧 **Email**: ${PERSONAL_INFO.email}\n- 🐙 **GitHub**: [github.com/Sebin1806](${PERSONAL_INFO.github})\n- 💼 **LinkedIn**: [linkedin.com/in/sebin-s](${PERSONAL_INFO.linkedin})\n- 📍 **Location**: ${PERSONAL_INFO.location}\n\nYou can also click the **"Download Resume"** button in the Hero or Resume section!`;
  }

  if (query.includes('certificate') || query.includes('aws') || query.includes('certification') || query.includes('coursera') || query.includes('nptel')) {
    const certNames = CERTIFICATES.map(c => `- ${c.title} (${c.issuer})`).join('\n');
    return `🏆 **Sebin's Certifications**:\n\n${certNames}\n\nYou can explore preview cards and filter certificates by category in the Certificates section!`;
  }

  return `🤖 Hi! I'm **Sebin AI**, Sebin's virtual portfolio assistant.\n\nSebin S is a Final Year B.Tech AI & Data Science student at V.S.B. College of Engineering Technical Campus. He specializes in **Generative AI, RAG Systems, Multi-Agent CrewAI Workflows, and Machine Learning**.\n\nFeel free to ask me about his projects, technical stack, certifications, or hiring availability!`;
}
