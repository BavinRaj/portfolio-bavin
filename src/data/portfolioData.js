import profilePhoto from '../assets/profile.jpg';

export const portfolioData = {
  personal: {
    name: "Bavin M",
    title: "Java Full Stack Developer",
    subtitle: "B.Tech Information Technology Graduate",
    location: "Velachery, Chennai, Tamil Nadu 600042",
    email: "bavinparvin156@gmail.com",
    phone: "+91 9360837010",
    github: "https://github.com/BavinRaj",
    linkedin: "https://linkedin.com/in/bavin-raj-m-823aa2268",
    resumeUrl: `${import.meta.env.BASE_URL}resume-bavin-m.pdf`,
    profileImage: profilePhoto,
    shortIntro:
      "I am an Information Technology graduate currently preparing for placements and developing skills in Java Full Stack Development. I enjoy building responsive web applications and mastering modern technologies across Java, Spring Boot, React, and MySQL.",
    aboutText:
      "My name is Bavin M, and I have completed my Undergraduate degree in Information Technology Engineering. I am currently preparing for placements and looking forward to building my career in the IT field. I am currently pursuing Java Full Stack Development at FITA Academy, building hands-on knowledge in Core Java, Spring Boot, React.js, JavaScript, and MySQL.",
    careerFocus: [
      "Java",
      "Spring Boot",
      "React.js",
      "JavaScript",
      "MySQL",
      "Full Stack Web Development",
    ],
  },

  aboutHighlights: [
    {
      title: "B.Tech – Information Technology",
      subtitle: "Kalasalingam University of Research and Education (CGPA: 7.81)",
      status: "Completed (2022 – 2026)",
      type: "degree",
      color: "blue",
    },
    {
      title: "Java Full Stack Development",
      subtitle: "FITA Academy, Velachery, Chennai",
      status: "Currently Pursuing (06/2026 – 12/2026)",
      type: "focus",
      color: "emerald",
    },
    {
      title: "Diploma in Computer Applications (DCA)",
      subtitle: "C, Python, HTML, CSS, MS Office",
      status: "Certified",
      type: "diploma",
      color: "purple",
    },
    {
      title: "Matriculation Higher Secondary (XII & X)",
      subtitle: "K S S Academy Matriculation Higher Secondary School",
      status: "Completed (74.3% & 69.8%)",
      type: "school",
      color: "amber",
    },
  ],

  skillCategories: [
    {
      category: "Programming Languages",
      description: "Core languages & algorithmic logic",
      skills: [
        { name: "Java", level: "Developing", highlight: true },
        { name: "JavaScript", level: "Developing", highlight: true },
        { name: "Python", level: "Familiar", highlight: false },
        { name: "C Language", level: "Familiar", highlight: false },
      ],
    },
    {
      category: "Frontend Development",
      description: "User interfaces & client-side rendering",
      skills: [
        { name: "React.js", level: "Developing", highlight: true },
        { name: "HTML5", level: "Proficient", highlight: false },
        { name: "CSS3", level: "Proficient", highlight: false },
        { name: "JavaScript", level: "Developing", highlight: true },
        { name: "Bootstrap", level: "Familiar", highlight: false },
      ],
    },
    {
      category: "Backend & Frameworks",
      description: "Server architecture & business logic",
      skills: [
        { name: "Java", level: "Developing", highlight: true },
        { name: "Spring Boot", level: "Developing", highlight: true },
        { name: "REST API Development", level: "Developing", highlight: true },
        { name: "CRUD Operations", level: "Developing", highlight: true },
        { name: "Node.js", level: "Learning", highlight: false },
      ],
    },
    {
      category: "Databases & Persistence",
      description: "Relational data modeling & queries",
      skills: [
        { name: "MySQL", level: "Developing", highlight: true },
        { name: "SQL Queries", level: "Developing", highlight: true },
        { name: "Database Connectivity", level: "Developing", highlight: true },
      ],
    },
    {
      category: "Tools & Developer Ecosystem",
      description: "Development environments & AI tools",
      skills: [
        { name: "Git", level: "Proficient", highlight: false },
        { name: "GitHub", level: "Proficient", highlight: true },
        { name: "VS Code", level: "Proficient", highlight: false },
        { name: "Eclipse IDE", level: "Familiar", highlight: false },
        { name: "Postman", level: "Familiar", highlight: false },
        { name: "Cursor AI / Claude AI", level: "Familiar", highlight: false },
      ],
    },
  ],

  projects: [
    {
      id: "udhavi-kural",
      title: "Udhavi Kural – Tamil Voice-Based Healthcare Assistance",
      category: "Healthcare & Accessibility",
      badge: "Featured Project",
      isComingSoon: false,
      period: "08/2025 – 12/2025",
      description:
        "A voice-assisted healthcare mobile application designed to improve healthcare accessibility for people in rural areas through Tamil voice commands. Focuses on reducing language, literacy, and mobility barriers.",
      features: [
        "Tamil voice command recognition using VOSK-ASR speech technology",
        "Natural Language Processing via Rasa NLU to interpret user intent",
        "Tamil Text-to-Speech feedback powered by Festival TTS",
        "Medicine reminders, emergency assistance alerts, and regional health tips",
        "High contrast, elder-centric mobile interface optimized for low literacy",
      ],
      technologies: [
        "React.js (Frontend)",
        "Java (Backend)",
        "VOSK-ASR",
        "Rasa NLU",
        "Festival TTS",
        "Python",
        "Mobile Development",
      ],
      links: {
        demo: "#",
        github: "https://github.com/BavinRaj",
      },
    },
    {
      id: "digital-nomad",
      title: "Digital Nomad – Freelancing Platform",
      category: "Full Stack Web Platform",
      badge: "Completed Project",
      isComingSoon: false,
      period: "01/2026 – 03/2026",
      description:
        "A web-based freelancing platform connecting independent freelancers with clients for project-based opportunities and remote technical work.",
      features: [
        "Job-matching concept linking freelancers to projects based on skills and client needs",
        "Project posting, proposal submission, and portfolio management",
        "Responsive interface designed for seamless desktop and mobile workflows",
        "Secure user authentication and role-based access for clients & freelancers",
      ],
      technologies: [
        "React.js",
        "Java",
        "Spring Boot",
        "MySQL",
        "REST API",
        "Bootstrap",
      ],
      links: {
        demo: "#",
        github: "https://github.com/BavinRaj",
      },
    },
    {
      id: "global-waste-trade",
      title: "Navigating the Global Waste Trade Network",
      category: "Real-Time Bidding Platform",
      badge: "Completed Project",
      isComingSoon: false,
      period: "11/2024 – 02/2025",
      description:
        "A web-based waste trading and bidding platform that connects waste generators with buyers and service providers to promote circular recycling and resource recovery.",
      features: [
        "Real-time bidding system for waste recycling auctions",
        "Item listing, live bidder details, and bid amount submission",
        "Live countdown timer and automated auction finalization",
        "Environmental impact tracking and resource recovery metrics",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js / Java",
        "MySQL",
        "Real-Time Bidding",
        "HTML5 / CSS3",
      ],
      links: {
        demo: "#",
        github: "https://github.com/BavinRaj",
      },
    },
  ],

  educationTimeline: [
    {
      title: "Bachelor of Technology (Information Technology)",
      organization: "Kalasalingam University of Research and Education",
      period: "2022 – 2026",
      status: "Graduated • CGPA: 7.81",
      statusColor: "blue",
      description:
        "Completed undergraduate studies in IT with a 7.81 CGPA. Coursework covered Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Software Engineering.",
    },
    {
      title: "Java Full Stack Development",
      organization: "FITA Academy, Velachery, Chennai",
      period: "06/2026 – 12/2026",
      status: "Currently Pursuing",
      statusColor: "emerald",
      description:
        "Comprehensive training in Core Java, OOP principles, Exception Handling, Spring Boot REST API development, React.js frontend, MySQL database queries, CRUD operations, and end-to-end connectivity.",
    },
    {
      title: "Diploma in Computer Applications (DCA)",
      organization: "Technical Certification",
      period: "Certified",
      status: "Completed",
      statusColor: "purple",
      description:
        "Certification covering C, Python programming, HTML, CSS, MS Windows, and advanced productivity suites (MS Word, MS Excel, MS PowerPoint).",
    },
    {
      title: "Higher Secondary & Secondary Education (Class XII & X)",
      organization: "K S S Academy Matriculation Higher Secondary School",
      period: "2019 – 2022",
      status: "Class XII: 74.3% • Class X: 69.8%",
      statusColor: "sky",
      description:
        "Completed senior secondary education with distinction in computer science and mathematics.",
    },
  ],

  publications: [
    {
      title: "Tamil Voice Based Smart Healthcare Assistant for Rural Elderly",
      authors: "M. Bavin",
      venue: "Research Publication",
      date: "11/12/2025",
      technologies: "Python, Natural Language Processing (NLP), Speech Recognition, Mobile Development",
    },
  ],
};
