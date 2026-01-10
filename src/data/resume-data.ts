export const RESUME_DATA = {
  name: "Tushar Kumar Gautam",

  about:
    "Data Scientist & ML Engineer specializing in GenAI, NLP, and MLOps. Built scalable ML systems impacting 2M+ users and production-grade NLP pipelines.",

  contact: {
    email: "tushargautamiitr@gmail.com",
    resume: "/resume.pdf",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Tushar973",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tushar-kumar-gautam-696873277/",
      },
    ],
  },

  highlights: [
    { value: "2M+", label: "Users Analyzed" },
    { value: "50K+", label: "Reviews Processed" },
    { value: "3+", label: "Production Projects" },
    { value: "GenAI", label: "NLP · RAG · MLOps" },
  ],

  skillGroups: {
    Programming: ["Python", "SQL", "C++"],
    "ML & Deep Learning": [
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
    ],
    "GenAI & NLP": ["Transformers", "RAG", "LangChain", "spaCy"],
    "MLOps & Backend": [
      "Docker",
      "GitHub Actions",
      "FastAPI",
      "Flask",
      "Streamlit",
    ],
  },

  work: [
    {
      title: "Data Scientist Intern",
      company: "PocketFM",
      start: "May 2025",
      end: "July 2025",
      badges: ["Remote", "Data Science", "Churn Modeling"],
      bullets: [
        "Analyzed large-scale user behavior data to identify early churn indicators",
        "Segmented 2M+ users into behavior-based cohorts for personalization",
        "Evaluated A/B experiments using session, impression, and click metrics",
        "Built NLP pipelines processing 50K+ user reviews for sentiment insights",
      ],
    },
  ],

  projects: [
    {
      title: "AI Resume Analyzer & Job Matcher",
      impact: "Automated resume–job matching at scale",
      description:
        "Built an NLP system comparing 800+ resumes against 200+ job descriptions using TF-IDF and Cosine Similarity. Used spaCy NER for skill extraction.",
      techStack: ["Python", "ML", "Flask", "Streamlit"],
      link: {
        href: "https://github.com/Tushar973/AI-RESUME-ANALYZER",
      },
    },
    {
      title: "NLP WebApp (Full-Stack NLP Intelligence Platform)",
      impact: "Real-time NLP system for instant text intelligence",
      description:
        "Engineered a secure web app with session-based authentication and real-time NLP inference using spaCy and TextBlob.",
      techStack: ["Python", "Flask", "spaCy", "GroqAPI"],
      link: {
        href: "https://github.com/Tushar973/NLP-WEBAPP",
      },
    },
    {
      title: "Credit Card Default Prediction",
      impact: "High-recall risk modeling system",
      description:
        "Developed an end-to-end ML pipeline handling class imbalance using SMOTE and optimized with F2-score (Random Forest).",
      techStack: ["Python", "XGBoost", "SMOTE", "Risk Modeling"],
      link: {
        href: "https://github.com/Tushar973/Credit-Card-Default-Prediction",
      },
    },
  ],
};
