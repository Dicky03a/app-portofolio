'use client';

import { usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
    id: number;
    name: string;
    percentage: number;
    icon?: string; // URL atau emoji
}

// Component for rendering individual skill icons with error handling
const SkillIcon = ({ skill }: { skill: Skill }) => {
    const [hasError, setHasError] = useState(false);

    if (hasError || !skill.icon) {
        return '⚡';
    }

    // Check if the icon is an image URL (external URL or asset path)
    const isImageUrl = skill.icon.startsWith('http') ||
        skill.icon.startsWith('/') ||
        skill.icon.startsWith('data:image/');

    if (isImageUrl) {
        return (
            <img
                src={skill.icon}
                alt={skill.name}
                className="h-8 w-8 object-contain"
                onError={() => setHasError(true)}
            />
        );
    } else {
        // Treat as emoji or text icon
        return <span>{skill.icon}</span>;
    }
};

export default function Skills() {
    const { skills } = usePage().props as {
        skills: Skill[];
    };

    if (!skills || skills.length === 0) {
        return null;
    }

    return (
        <section id="skills" className="relative py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <span className="text-sm font-medium tracking-wider text-primary uppercase">Expertise</span>
                    <h2 className="mt-2 mb-4 text-3xl font-bold md:text-5xl">Technical Skills</h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="glass-panel rounded-[2rem] border border-white/10 p-6 hover:bg-white/5"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-3xl">
                                    <SkillIcon skill={skill} />
                                </div>

                                <span className="text-2xl font-bold text-white/90">{skill.percentage}%</span>
                            </div>

                            <h3 className="mb-3 text-xl font-bold">{skill.name}</h3>

                            <div className="bg-dark/30 h-3 w-full rounded-full border border-white/5 p-0.5">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.percentage}%` }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1.5,
                                        ease: 'easeOut',
                                        delay: 0.2 + index * 0.1,
                                    }}
                                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
