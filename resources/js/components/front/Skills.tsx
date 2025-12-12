'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { SKILLS } from './constants';

const Skills: React.FC = () => {
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
                    <h2 className="font-display mt-2 mb-4 text-3xl font-bold text-white md:text-5xl">Technical Skills</h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SKILLS.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="glass-panel group rounded-[2rem] border border-white/10 p-6 transition-all hover:bg-white/5"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-3xl shadow-inner">
                                    {skill.icon}
                                </div>
                                <span className="font-display text-2xl font-bold text-white/90">{skill.level}%</span>
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-white">{skill.name}</h3>

                            <div className="bg-dark/30 h-3 w-full overflow-hidden rounded-full border border-white/5 p-0.5">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 + index * 0.1 }}
                                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
