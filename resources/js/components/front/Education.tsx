'use client';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap } from 'lucide-react';
import React from 'react';
import { EDUCATION } from './constants';

const Education: React.FC = () => {
    return (
        <section id="education" className="relative py-24">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <span className="text-sm font-medium tracking-wider text-secondary uppercase">Academic Journey</span>
                    <h2 className="font-display mt-2 mb-4 text-3xl font-bold text-white md:text-5xl">Education</h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute top-0 bottom-0 left-0 hidden w-px bg-white/10 md:left-1/2 md:block" />

                    <div className="space-y-12">
                        {EDUCATION.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col items-center gap-8 md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content Card */}
                                <div className="w-full flex-1">
                                    <div className="glass-panel group relative rounded-3xl border border-white/10 p-8 transition-colors hover:bg-white/5">
                                        <div
                                            className={`absolute top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-black bg-primary md:block ${index % 2 === 0 ? '-left-[42px]' : '-right-[41px]'}`}
                                        />

                                        <div className="mb-2 flex items-center gap-3 text-primary">
                                            <GraduationCap size={20} />
                                            <span className="text-sm font-bold tracking-wide">{item.degree}</span>
                                        </div>
                                        <h3 className="mb-2 text-2xl font-bold text-white">{item.institution}</h3>
                                        <p className="mb-4 text-sm leading-relaxed text-gray-400">{item.description}</p>

                                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                                            <Calendar size={12} />
                                            {item.year}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Spacer for Timeline Balance */}
                                <div className="hidden flex-1 md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
