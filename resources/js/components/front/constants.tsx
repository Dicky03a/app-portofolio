import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Certificate, EducationItem, Project, Skill, SocialLink, Testimonial } from '../../types';

export const HERO_CONTENT = {
    greeting: "Hello, I'm",
    name: 'Dicky Adi Saputra',
    role: 'Information Systems Student',
    description: 'I love exploring the world of programming. I continue to learn and build modern, responsive website projects.',
};

export const ABOUT_CONTENT = `I am an Information Systems student with a deep passion for technology. My journey involves constantly exploring new programming languages and frameworks to build efficient solution. I specialize in creating modern web applications and enjoy solving complex problems through code.`;

export const SKILLS: Skill[] = [
    { name: 'React.js', level: 85, icon: '⚛️' },
    { name: 'TypeScript', level: 80, icon: 'ts' },
    { name: 'Tailwind CSS', level: 90, icon: '🎨' },
    { name: 'Node.js', level: 75, icon: '🟢' },
    { name: 'UI/UX Design', level: 70, icon: '✨' },
    { name: 'Database Mgmt', level: 65, icon: '🗄️' },
];

export const EDUCATION: EducationItem[] = [
    {
        id: 1,
        institution: 'University of Technology',
        degree: 'Bachelor of Information Systems',
        year: '2021 - Present',
        description: 'Specializing in Software Engineering and Database Systems. Active member of the Computer Science Society.',
    },
    {
        id: 2,
        institution: 'Tech Academy Bootcamp',
        degree: 'Full Stack Web Development',
        year: '2020',
        description: 'Intensive 12-week program covering modern web technologies including React, Node.js, and Cloud Infrastructure.',
    },
    {
        id: 3,
        institution: 'State High School 1',
        degree: 'Science Major',
        year: '2018 - 2021',
        description: 'Graduated with honors. Participated in National Computer Olympiad.',
    },
];

export const CERTIFICATES: Certificate[] = [
    {
        id: 1,
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        date: '2023',
        link: '#',
    },
    {
        id: 2,
        title: 'Google UX Design Professional',
        issuer: 'Coursera',
        date: '2022',
        link: '#',
    },
    {
        id: 3,
        title: 'Meta Front-End Developer',
        issuer: 'Meta',
        date: '2022',
        link: '#',
    },
    {
        id: 4,
        title: 'JavaScript Algorithms & Data Structures',
        issuer: 'freeCodeCamp',
        date: '2021',
        link: '#',
    },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Project Manager at TechCorp',
        content:
            'Dicky is an exceptional developer who delivers high-quality code. His attention to detail and ability to solve complex problems is impressive.',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Senior Developer',
        content: 'Working with Dicky was a pleasure. He is a quick learner and always stays up-to-date with the latest technologies.',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    },
    {
        id: 3,
        name: 'Emily Davis',
        role: 'Startup Founder',
        content:
            'Dicky transformed our vision into a stunning reality. His design sense coupled with technical skills makes him a unicorn developer.',
        avatar: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
    },
];

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive dashboard for managing online store inventory and analytics using React and Recharts.',
        image: 'https://picsum.photos/600/400?random=1',
        tags: ['React', 'Tailwind', 'Recharts'],
        link: '#',
        github: '#',
    },
    {
        id: 2,
        title: 'Student Portal',
        description: 'An academic information system for students to track grades and schedules.',
        image: 'https://picsum.photos/600/400?random=2',
        tags: ['TypeScript', 'Node.js', 'PostgreSQL'],
        link: '#',
        github: '#',
    },
    {
        id: 3,
        title: 'Portfolio v1',
        description: 'My first personal portfolio website showcasing early web development experiments.',
        image: 'https://picsum.photos/600/400?random=3',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: '#',
        github: '#',
    },
    {
        id: 4,
        title: 'Task Management App',
        description: 'A productivity tool with drag-and-drop features to manage daily tasks efficiently.',
        image: 'https://picsum.photos/600/400?random=4',
        tags: ['React', 'Redux', 'Framer Motion'],
        link: '#',
        github: '#',
    },
];

export const SOCIALS: SocialLink[] = [
    { platform: 'GitHub', url: 'https://github.com', icon: <Github size={20} /> },
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: <Linkedin size={20} /> },
    { platform: 'Twitter', url: 'https://twitter.com', icon: <Twitter size={20} /> },
    { platform: 'Email', url: 'mailto:contact@dicky.com', icon: <Mail size={20} /> },
];

export const SYSTEM_INSTRUCTION = `You are an AI assistant for Dicky Adi Saputra's portfolio website. 
Your goal is to answer visitor questions about Dicky professionally and creatively.
Here is some information about Dicky:
- Name: Dicky Adi Saputra
- Role: Information Systems Student & Web Developer
- Interests: Programming, Web Development, UI/UX, Technology trends.
- Skills: React, TypeScript, Tailwind CSS, Node.js, Database Management.
- Education: Bachelor of Information Systems at University of Technology.
- Personality: Passionate, curious, constant learner, friendly.
- Contact: contact@dicky.com
- Background: Currently studying Information Systems. Loves building projects to solve real-world problems.

If asked about something not in this list, answer that you are an AI focused on Dicky's professional work but you'd be happy to pass a message along via email.
Keep answers concise (under 100 words) unless requested otherwise.
`;
