// src/data/resume-data.ts

export const RESUME_DATA = {
  name: "Tushar Kumar Gautam",
  initials: "TG",
  location: "Uttarakhand, India",
  locationLink: "https://www.google.com/maps/place/Roorkee",
  about:
    "Data Scientist & ML Engineer focused on GenAI, NLP, and building scalable data-driven systems.",
  summary:
    "Bachelor of Technology in Electrical Engineering from IIT Roorkee. Experienced in analyzing large-scale user behavior data and building end-to-end ML pipelines. Passionate about applying Generative AI and MLOps to solve real-world problems.",
  avatarUrl: "https://avatars.githubusercontent.com/u/123456?v=4", // You can replace this later
  personalWebsiteUrl: "https://tushar.dev",
  contact: {
    email: "tushargautamiitr@gmail.com",
    tel: "+91 9927639137",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/tushar",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/tushar",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Indian Institute of Technology, Roorkee",
      degree: "Bachelor of Technology in Electrical Engineering",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "PocketFM",
      link: "https://pocketfm.com",
      badges: ["Remote", "Data Science", "Churn Modeling"],
      title: "Data Scientist Intern",
      start: "May 2025",
      end: "July 2025",
      description:
        "Analyzed large-scale user behavior data to identify early churn indicators. Segmented 2M+ users into behavior-based cohorts. Evaluated A/B experiments and built an NLP pipeline for 50K+ user reviews.",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "C++",
    "Machine Learning",
    "Deep Learning",
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "NLP",
    "Transformers",
    "RAG",
    "LangChain",
    "MLOps",
    "Docker",
    "GitHub Actions",
    "FastAPI",
    "Flask",
    "Streamlit",
  ],
  projects: [
    {
      title: "Full-Stack NLP Intelligence Platform",
      techStack: ["Python", "Flask", "spaCy", "GroqAPI"],
      description:
        "Engineered a secure web app with session-based authentication. Developed a real-time NLP inference pipeline integrating spaCy and TextBlob for instant text analysis.",
      link: {
        label: "GitHub",
        href: "https://github.com/tushar",
      },
    },
    {
      title: "AI Resume Analyzer & Job Matcher",
      techStack: ["Python", "ML", "Flask", "Streamlit"],
      description:
        "Built an NLP system comparing 800+ resumes against 200+ job descriptions using TF-IDF and Cosine Similarity. Used spaCy NER for skill extraction.",
      link: {
        label: "GitHub",
        href: "https://github.com/tushar",
      },
    },
    {
      title: "Credit Card Default Prediction",
      techStack: ["Python", "XGBoost", "SMOTE", "Risk Modeling"],
      description:
        "Developed an end-to-end credit default prediction model. Handled class imbalance using SMOTE and optimized the model using the F2-score (Random Forest).",
      link: {
        label: "GitHub",
        href: "https://github.com/tushar",
      },
    },
  ],
} as const;