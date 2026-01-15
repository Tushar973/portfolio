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
      title: "End-to-End Quality Prediction MLOps",
      impact: "Automated Quality Prediction at scale",
      description:
        "Built a production-ready ML pipeline with automated data ingestion, validation, experiment tracking, and model versioning using Scikit-learn, MLflow, and DagsHub.",
      techStack: ["Python", "ML", "Flask", "MLFlow","Dagshub","DVC"],
      link: {
        href: "https://github.com/Tushar973/End-to-End-Quality-Prediction-MLOps",
      },
    },
    {
      title: "Streamlit-based RAG Configurator & Analyzer",
      impact: "Optimized RAG performance by automating strategy selection and LLM-based accuracy evaluation",
      description:
        "A Python-based RAG experimentation pipeline featuring semantic reranking, dynamic chunking, and automated accuracy scoring via Llama-3.",
      techStack: ["Python", "LangChain", "FAISS", "GroqAPI","Streamlit"],
      link: {
        href: "https://github.com/Tushar973/rag-optimizer",
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
