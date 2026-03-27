import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

export const personalDetails = {
    name: "Gedela Neelima",
    role: "CSE (AI & ML) Student",
    tagline: "Turning ideas into real-world applications using code.",
    email: "neelimagedela3738@gmail.com",
    phone: "+91-9392446531",
    socials: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/neelima-gedela-92ba68330",
            icon: Linkedin,
        },
        {
            name: "GitHub",
            url: "https://github.com/neelimagedela",
            icon: Github,
        },
        {
            name: "Email",
            url: "mailto:neelimagedela3738@gmail.com",
            icon: Mail,
        },
        {
            name: "Phone",
            url: "tel:+919392446531",
            icon: Phone,
        }
    ]
};

export const about = {
    description: "A passionate B. Tech CSE (AI & ML) student who enjoys turning ideas into real-world applications using code. My interests include programming, web development, and artificial intelligence. I have experience working with technologies such as C, Python, Java, HTML, CSS, JavaScript, and SQL, and I regularly use tools like VS Code and Git for development. I love exploring AI and machine learning concepts and applying them to practical projects. I am always eager to learn new technologies, work on challenging projects, and contribute creative, problem-solving solutions to the tech industry."
};

export const skills = [
    { category: "Programming", items: ["Python", "Java", "C", "SQL"] },
    { category: "Web Development", items: ["React", "TypeScript", "HTML", "CSS", "JavaScript", "Tailwind CSS"] },
    { category: "Tools & Platforms", items: ["VS Code", "Git", "GitHub"] },
    { category: "Soft Skills", items: ["Problem-Solving", "Teamwork", "Communication"] }
];

export const projects = [
    {
        title: "Customer Churn Prediction",
        description: "End-to-End Machine Learning Web App. Loads and analyzes the Telco Customer Churn dataset. Uses Streamlit to create an easy-to-use front-end.",
        tech: ["Machine Learning", "Python", "Streamlit", "Web"],
        link: "#" // Placeholder or GitHub link if available
    },
    {
        title: "AI-Driven Automatic Volume Adjustment",
        description: "AI-based system that automatically adjusts volume levels based on environmental noise. Implemented machine learning models using Python and Flask for real-time processing.",
        tech: ["Python", "Flask", "AI", "Machine Learning"],
        link: "#"
    },
    {
        title: "Spam Email Detection",
        description: "Machine learning model to classify emails as spam or non-spam using the Naive Bayes algorithm. Performed data preprocessing and model evaluation to improve accuracy.",
        tech: ["Python", "Machine Learning", "Naive Bayes"],
        link: "#"
    }
];

export const education = [
    {
        degree: "B. Tech in CSE (AI & ML)",
        school: "Gayatri Vidya Parishad College of Engineering for Women",
        year: "2023 - 2027",
        score: "CGPA: 8.4",
        description: "Specialization in Artificial Intelligence and Machine Learning. Covers Data Structures, ML, Deep Learning, Database Systems, Computer Networks, Cloud Technologies, and Web Development."
    },
    {
        degree: "Intermediate (MPC)",
        school: "Narayana Junior College",
        year: "2021 - 2023",
        description: "Developed a strong foundation in Mathematics, Physics, and Chemistry."
    }
];

export const internships = [
    {
        role: "Full Stack Web Development Intern",
        company: "Sure Trust",
        duration: "Ongoing",
        description: "Learning to build dynamic and responsive web applications. Working with frontend and backend technologies on real-time projects."
    },
    {
        role: "AI & Prompt Engineering Intern",
        company: "VaultofCodes (AICTE Portal)",
        description: "Gained practical experience in prompt engineering for AI models. Learned how effective prompts improve generative AI responses."
    },
    {
        role: "Python Full Stack Developer Intern",
        company: "Edu skills",
        description: "Gained hands-on experience in frontend and backend development using Python and web technologies. Worked on building complete web applications with database integration."
    },
    {
        role: "AI & ML Virtual Intern",
        company: "Edu skills",
        description: "Learned core concepts of artificial intelligence and machine learning. Worked on data preprocessing and basic model development."
    },
    {
        role: "Cloud Virtual Intern",
        company: "Edu skills",
        description: "Gained knowledge of cloud computing fundamentals and cloud service models. Learned how applications are deployed and managed on cloud platforms."
    },
    {
        role: "Cybersecurity Virtual Intern",
        company: "Cisco Networking Academy",
        description: "Learned network security basics, cyber threats, and security best practices."
    }
];

export const certifications = [
    "The Joy of Computing Using Python – NPTEL"
];

export const extracurricular = [
    "Member of the AI/ML Club at GVP College.",
    "Participated in Coding Competitions on Hackathons and CodeChef."
];

export const languages = ["English (Proficient)", "Telugu (Native)"];
