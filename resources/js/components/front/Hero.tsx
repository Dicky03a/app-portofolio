'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import React from 'react';
import { HERO_CONTENT } from './constants';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
            {/* Background Gradient Blobs */}
            <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
                <div className="absolute top-[10%] left-[15%] h-[500px] w-[500px] animate-pulse rounded-full bg-primary/20 mix-blend-screen blur-[120px]" />
                <div className="absolute right-[15%] bottom-[10%] h-[500px] w-[500px] animate-pulse rounded-full bg-secondary/20 mix-blend-screen blur-[120px] delay-1000" />
                <div className="absolute top-[40%] left-[60%] h-[300px] w-[300px] animate-pulse rounded-full bg-blue-500/20 mix-blend-screen blur-[100px] delay-2000" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
                {/* Glass Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glass-modern mb-8 flex items-center gap-2 rounded-full border border-white/10 px-4 py-2"
                >
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                    <span className="text-sm font-medium tracking-wide text-gray-200">Open To Dekstop</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-display mb-6 text-5xl leading-[1.1] font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
                >
                    {HERO_CONTENT.greeting} <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-primary text-white to-secondary bg-clip-text text-transparent drop-shadow-lg">
                        {HERO_CONTENT.name}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-10 max-w-2xl text-lg leading-relaxed font-light text-gray-300 md:text-xl"
                >
                    {HERO_CONTENT.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col gap-5 sm:flex-row"
                >
                    <a
                        href="#projects"
                        className="group glass-modern flex items-center justify-center gap-2 rounded-full border-2 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10"
                    >
                        View Projects
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                        href="#contact"
                        className="group glass-modern flex items-center justify-center gap-2 rounded-full border-2 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10"
                    >
                        Contact Me
                        <Sparkles size={18} className="text-yellow-400 transition-transform group-hover:rotate-12" />
                    </a>
                </motion.div>

                {/* Floating Cards Decoration (Desktop) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="pointer-events-none absolute top-1/2 left-10 hidden -translate-y-1/2 xl:block"
                >
                    <div className="glass-panel w-48 rotate-[-6deg] animate-[float_6s_ease-in-out_infinite] rounded-2xl border border-white/10 p-4">
                        <div className="mb-3 h-24 rounded-xl bg-gradient-to-br from-primary/40 to-purple-600/40"></div>
                        <div className="mb-2 h-2 w-2/3 rounded-full bg-white/20"></div>
                        <div className="h-2 w-1/2 rounded-full bg-white/10"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="pointer-events-none absolute top-1/2 right-10 hidden -translate-y-1/2 xl:block"
                >
                    <div className="glass-panel w-48 rotate-[6deg] animate-[float_7s_ease-in-out_infinite] rounded-2xl border border-white/10 p-4">
                        <div className="mb-3 h-24 rounded-xl bg-gradient-to-br from-secondary/40 to-blue-600/40"></div>
                        <div className="mb-2 h-2 w-2/3 rounded-full bg-white/20"></div>
                        <div className="h-2 w-1/2 rounded-full bg-white/10"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
