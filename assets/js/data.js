// Centralized Data Store
const portfolioData = {
    personal: {
        name: "Akhilesh Tiwari",
        handle: "asdtiwari",
        role: "Backend Developer & System Builder",
        tagline: "Building scalable enterprise systems. Top 1% in NPTEL Java.",
        email: "babitiwari9@hotmail.com",
        image: "assets/images/user.png"
    },

    experience: [
        {
            role: "Backend Engineering Intern",
            company: "MII Foundation",
            period: "Jan 2025 – Apr 2025",
            highlights: [
                "Engineered backend automation for a system serving 10,000+ users.",
                "Reduced manual paperwork by 90% through optimized workflows.",
                "Contributed to the development of the Mentor-Mentee System.",
                "Collaborated effectively in an Agile team environment."
            ]
        }
    ],

    projects: [
        {
            title: "AuthAPI",
            subtitle: "Passwordless Authentication System",
            description: "Designed a secure backend service enabling device-binding authentication, eliminating the need for passwords and mitigating brute-force and dictionary attacks. Enhanced user flow by preventing indefinite waiting states during network failures.",
            tech: ["Java", "Spring Boot", "MySQL", "Flutter Security"],
            link: "https://github.com/asdtiwari/auth-api"
        },
        {
            title: "DIAS",
            subtitle: "BLE Smart Attendance System",
            description: "Developed a Bluetooth Low Energy (BLE) based smart attendance architecture. Designed secure device verification backend logic, reducing spoofing attempts by 35% and improving overall attendance efficiency by 80%.",
            tech: ["Spring Boot", "Flutter", "BLE Architecture"],
            link: "https://github.com/asdtiwari/dias"
        }
    ],

    skills: [
        { 
            category: "Backend & Core", 
            items: ["Java", "Spring Boot", "C/C++", "REST APIs", "OOP", "DBMS", "Operating Systems"] 
        },
        { 
            category: "Database & Tools", 
            items: ["MySQL", "Git & GitHub", "Postman", "VS Code"] 
        },
        { 
            category: "Frontend", 
            items: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"] 
        },
        { 
            category: "Exploring & AI", 
            items: ["Python", "Flutter", "Generative AI", "Agentic AI"] 
        }
    ],

    resources: [
        {
            title: "Java Quick Revision",
            description: "Comprehensive handwritten notes for quick Java concept revision.",
            type: "Crafted Note",
            link: "https://drive.google.com/file/d/1sayj5XcaHmZVeQM5KTZzaLlGhygHqwOI/view?usp=drivesdk"
        },
        {
            title: "SQL Mastery",
            description: "Detailed notes covering Structured Query Language fundamentals to advanced queries.",
            type: "Crafted Note",
            link: "https://drive.google.com/file/d/1vM-HRGdup9SosAB5ybJauP93LMSw7Qro/view?usp=drivesdk"
        },
        {
            title: "Frontend Foundation",
            description: "Core concepts of HTML5, CSS3, and JavaScript.",
            type: "Crafted Note",
            link: "https://drive.google.com/file/d/1v1vIIjEBm0zI6x2_2sdht1iO0XQjdVvl/view?usp=drivesdk"
        },
        {
            title: "Referral Program",
            description: "I am building my network. Future referral opportunities will be posted here.",
            type: "Community",
            link: "#" // Placeholder for when you are ready to offer referrals
        }
    ],
    
    dashboard: {
        github: "asdtiwari",
        leetcode: {
            username: "asdtiwari",
            rank: "Top 42K",
            solved: 892,
            easy: 592,
            medium: 286,
            hard: 14,
            updatedAt: "Mar 21, 2026" 
        },
        hackerrank: {
            link: "https://hackerrank.com/astiwari",
            badges: ["5⭐ SQL", "4⭐ C", "Problem Solving"],
            updatedAt: "Mar 21, 2026" 
        },
        linkedinPosts: [
            {
                date: "Aug 19, 2024",
                title: "A Summer of Growth: From Engineering to Sales and Beyond",
                link: "https://www.linkedin.com/in/asdtiwari/recent-activity/all/"
            },
            {
                date: "Jun 28, 2024",
                title: "A Candid Reflection on My College Journey",
                link: "https://www.linkedin.com/in/asdtiwari/recent-activity/all/"
            }
        ]
    },
    
    contact: {
        phone: "+91 7000454120",
        email: "asdtiwari76@gmail.com",
        linkedin: "https://linkedin.com/in/asdtiwari",
        github: "https://github.com/asdtiwari"
    }
};