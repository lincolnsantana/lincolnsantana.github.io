export const siteConfig = {
  name: "Lincoln Santana",
  title: "Software Developer and Educator",
  description: "Portfolio website of Lincoln",
  accentColor: "#1d4ed8",
  social: {
    linkedin: "https://linkedin.com/in/lincolnsant",
    github: "https://github.com/lincolnsantana",
  },
  aboutMe:
    "I hold a degree in Computer Science from the Federal Institute of Education, Science and Technology of Bahia (IFBA) and currently work as a Junior Developer Instructor at Rocketseat, focusing on the Rocketseat Faculty of Technology (FTR). My work centers on Artificial Intelligence and Data, aligning technical and educational knowledge to empower future professionals in the field.",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "Miauduino",
      description:
        "This is an embedded system developed to control the release of feed in a cat feeder at IFBA in Jacobina. This project automates a task previously performed by humans, providing greater effectiveness, efficiency, and contributing to the improvement of the quality of life of these animals.",
      link: "https://github.com/zolppy/miauduino",
      skills: ["Arduino", "C++"],
    },
    {
      name: "Legal chatbot using RAG as a knowledge base",
      description:
        "In this project, I developed a chatbot for legal inquiries using AWS, LangChain, ChromaDB, and Telegram. The data was stored in an S3 bucket and accessed through the AWS Bedrock query engine. Additionally, the system integrates AWS CloudWatch for monitoring and logging the processed data.",
      link: "https://github.com/",
      skills: ["LangChain", "ChromaDB", "AWS"],
    },
    {
      name: "Electronic Invoice Processing with AWS Lambda and Amazon Textract",
      description:
        "In this project, I developed a REST API to receive images of electronic invoices, transcribe them using Amazon Textract, process the data using NLTK for NLP, refine and format the data with Groq's LLM API, and store the processed invoices in an S3 bucket. Invoices paid in cash or PIX are moved to the 'cash' folder, while other payment methods are moved to the 'other' folder.",
      link: "https://github.com/",
      skills: ["API REST", "NLP", "AWS"],
    },
  ],
  experience: [
    {
      company: "Rocketseat",
      title: "Developer Instructor Jr.",
      dateRange: "May 2025 - Present",
      bullets: [
        "I work in the education team, specifically for the Rocketseat College of Technology (FTR).",
        "I produce, review, and seek improvements in content focused on Artificial Intelligence, Automation, and data."
      ],
    },
    {
      company: "CompassUOL",
      title: "Internship in Artificial Intelligence and Machine Learning",
      dateRange: "oct 2024 - Mar 2025",
      bullets: [
        "I developed skills focused on Artificial Intelligence through the AWS ecosystem.",
        "Projects developed focusing on the use of AI within AWS.",
        "AWS Certification (CLF-002) obtained through this internship program.",
      ],
    }
  ],
  education: [
    {
      school: "Federal Institute of Education, Science and Technology of Bahia (IFBA)",
      degree: "Bachelor's Degree in Computer Science",
      dateRange: "2017 - 2025",
      achievements: [
        "I participated in the founding of the Academic Center (CA) for my course.",
        "My final course project (TCC) has become a reference academic work in my course, helping beginning students understand how an academic paper is structured and written.",
      ],
    }
  ],
};
