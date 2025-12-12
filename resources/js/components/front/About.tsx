'use client';
import { motion } from 'framer-motion';
import { Code, Cpu, Terminal } from 'lucide-react';
import React from 'react';
import { ABOUT_CONTENT } from './constants';

const About: React.FC = () => {
    return (
        <section id="about" className="relative py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel relative overflow-hidden rounded-[3rem] p-8 text-center md:p-16"
                >
                    {/* Background decoration inside card */}
                    <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />
                    <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-secondary/10 blur-[80px]" />

                    <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-primary">
                        Who I Am
                    </span>
                    <h2 className="font-display mb-8 text-4xl font-bold text-white md:text-5xl">About Me</h2>

                    <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed font-light text-gray-300 md:text-xl">{ABOUT_CONTENT}</p>

                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="rounded-3xl border border-white/5 bg-black/20 p-6 shadow-sm transition-colors hover:bg-black/30">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                                <Code size={24} />
                            </div>
                            <h3 className="mb-1 text-2xl font-bold text-white">5+</h3>
                            <p className="text-sm tracking-wider text-gray-400 uppercase">Projects Built</p>
                        </div>
                        <div className="rounded-3xl border border-white/5 bg-black/20 p-6 shadow-sm transition-colors hover:bg-black/30">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/20 text-secondary">
                                <Terminal size={24} />
                            </div>
                            <h3 className="mb-1 text-2xl font-bold text-white">3+</h3>
                            <p className="text-sm tracking-wider text-gray-400 uppercase">Years Coding</p>
                        </div>
                        <div className="rounded-3xl border border-white/5 bg-black/20 p-6 shadow-sm transition-colors hover:bg-black/30">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-500">
                                <Cpu size={24} />
                            </div>
                            <h3 className="mb-1 text-2xl font-bold text-white">24/7</h3>
                            <p className="text-sm tracking-wider text-gray-400 uppercase">Learner Mindset</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
