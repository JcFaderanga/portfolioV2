
export const position = 'Web Developer';
export const aboutMe = "Hi, I'm Jc Faderanga a web developer and software tester currently studying Bachelor of Science in Information Technology at Pamantasan ng Lungsod ng Muntinlupa. I’m really passionate about coding and enjoy the process of building and learning through it. For me, programming is not just about codes, it's about life.";
export const helloWorld = "Wrote my first line of code, marking the start of my journey, experience, and passion as a developer.";
export const personalInfo = {
    first_name: 'JC',
    last_name: 'Faderanga',
    birth_date: '01-21-2003',
    email: 'jcfaderanga@gmail.com',
    number: '09911445131',
    address: 'Muntinlupa City, Philippines',
}

export const socialMedia = {
    github: 'https://github.com/JcFaderanga',
    linkedin: 'https://www.linkedin.com/in/janrey-cyril-faderanga-692190280/',
    twitter: 'https://twitter.com/JcFaderanga',
    instagram: 'https://www.instagram.com/jeysi_faderanga/',
    facebook: 'https://www.facebook.com/janreycyril.faderanga/',
}

export const education = [
    {
        school: 'Pamantasan ng Lungsod ng Muntinlupa',
        year: '2024 - Present',
        level: 'College',
        course: 'Bachelor of Science in Information Technology',
    },
    {
        school: 'Pamantasan ng Lungsod ng Muntinlupa',
        year: '2021 - 2023',
        level: 'Vocational',
        course: 'Associate in Computer Technology',
    },
    {
        school: 'Muntinlupa National High School',
        year: '2019 - 2021',
        level: 'Senior High School',
        course: 'Senior High School',
    },
    {
        school: 'Lakeview Integrated School',
        year: '2016 - 2019',
        level: 'Junior High School',
        course: 'Junior High School',
    },
    // {
    //     school: 'Muntinlupa Elementary School',
    //     year: '2010 - 2016',
    //     level: 'Elementary',
    //     course: 'Muntinlupa Elementary School',
    // },
]

export const workExperience = [
    {
        company: 'Muntinlupa City Police Station',
        date: 'February 2025 - May 2025',
        position: 'Internship - Tech/IT Support',
        description: "Provided IT support for technical-related complaints, assisting with troubleshooting, system maintenance, and network management. "
    },
    {
        company: 'Teleperformance',
        date: 'September 2023 - January 2024',
        position: 'Customer Service Representative',
        description: "Managed inbound calls on a health care account, addressing a wide range of customer inquiries including billing, account maintenance, general support, claim and benefits.  "
    },
]
export const skills = [
    { name: 'html', image: '/assets/html.png', exp: '4yrs Exp.', category: 'frontend' },
    { name: 'css', image: '/assets/css.png', exp: '4yrs Exp.', category: 'frontend' },
    { name: 'javascript', image: '/assets/javascript.png', exp: '4yrs Exp.', category: 'frontend' },
    { name: 'react', image: '/assets/react.png',exp: '1yrs Exp.', category: 'frontend' },
    { name: 'node', image: '/assets/nodejs.png',exp: '1yrs Exp.', category: 'backend' },
    // { name: 'express', image: '/assets/express.png',exp: '1yrs Exp.', category: 'backend' },
    { name: 'mongo', image: '/assets/mongodb.png',exp: '1mo Exp.', category: 'backend' },
    { name: 'mysql', image: '/assets/mysql.png',exp: '5yrs Exp.', category: 'backend' },
    // { name: 'postgres', image: '/assets/postgresql.png',exp: '6mos Exp.', category: 'backend' },
    { name: 'typescript', image: '/assets/typescript.png',exp: '1mo Exp.', category: 'frontend' },
    { name: 'tailwind', image: '/assets/tailwindcss.png',exp: '2yrs Exp.', category: 'frontend' },
    { name: 'nextjs', image: '/assets/nextjs.png',exp: '3mos Exp.', category: 'frontend' },
    { name: 'vscode', image: '/assets/vscode.png',exp: '3yrs Exp.', category: 'tools' },
    { name: 'figma', image: '/assets/figma.png',exp: '2yrs Exp.', category: 'tools' },
    { name: 'canva', image: '/assets/canva.png',exp: '6mos Exp.', category: 'tools' },
    { name: 'expo', image: '/assets/expo.png',exp: '4mos Exp.', category: 'frontend' },
    { name: 'git', image: '/assets/git.png',exp: '2yrs Exp.', category: 'tools' },
    { name: 'trello', image: '/assets/trello.png',exp: '3yrs Exp.', category: 'tools' },
];

export const projects = [
    {
        title: 'Personal Finance/Social Management',
        projectType: 'Personal Project',
        description:
          '"A personal management web app that helps users stay organized by tracking expenses, managing bills, and securely storing important account information for easy access."',
        image: '/assets/under_construction_transparent.png',
        tech: [
            'TypeScript',
            'Vite',
            'React.js',
            'TailwindCSS',
            'Node.js',
            'Express.js',
            'PostgreSQL',
            'Supabase',
            'Zustand',
            'Netlify',
        ],
        demoLink: 'https://jcfaderanga.vercel.app',
        complete: false,
    },
    {
        title: 'My Portfolio',
        projectType: 'Personal Project',
        description:
            '"A personal portfolio website showcasing my skills, projects, and experiences as a Web developer. Designed with a clean, responsive layout, it highlights my work in React, JavaScript, TypeScript, and modern web technologies to demonstrate my passion for building user-friendly and efficient web applications."',
        image: '/assets/portfolio.png',
        tech: [
            'Next.js',
            'TailwindCSS',
            'JavaScript',
            'Vercel',
        ],
        demoLink: 'https://jcfaderanga.vercel.app',
        complete: true,
    },
    {
        title: 'BloodLink: Mobile Hybrid Blood Bank System',
        projectType: 'Capstone Project',
        description:
            '"A mobile-based hybrid application designed to streamline blood donation management. The system features user registration, health pre-screening, appointment scheduling, real-time inventory updates, and educational resources to enhance donor engagement and optimize blood bank operations."',
        image: '/assets/bloodLink.png',
        tech: [
            'JavaScript',
            'Node.js',
            'React Native',
            'TailwindCSS',
            'Expo',
            'PostgreSQL',
            'Supabase',
        ],
        demoLink: '',
        complete: true,
    },
    {
        title: 'JAVA HUB Landing Page',
        projectType: 'School Project',
        description:
          '"A coffee shop landing page created for a school activity to showcase my basic web development skills. It features a clean layout and cozy design. The site is not responsive, as the focus was on layout and design implementation."',
        image: '/assets/javaHub.png',
        tech: [
            'HTML',
            'CSS',
            'JavaScript',
            'GitHubPages',
        ],
        demoLink: 'https://jcfaderanga.github.io/WebTech-landing-page/',
        complete: true,
      },

  ];
export const interests = [{  }]
export const languages = [ {  } ]
export const certifications = [ {  } ] 
export const awards = [  {}  ]
export const hobbies = [  {}  ]
export const references = [  {}  ]
export const about = [  {}  ]
