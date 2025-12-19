import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Certificate, EducationItem, Skill, SocialLink } from '../../types';

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
