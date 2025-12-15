'use client';
import { usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Code, Cpu, Terminal } from 'lucide-react';

interface AboutData {
    bio: string;
    projects_built: number;
    years_coding: number;
    learner_mindset: string;
}

export default function About() {
    const { about } = usePage().props as { about?: AboutData };

    if (!about) return null;

    return (
        <section id="about" className="relative py-24">
            <div className="mx-auto max-w-6xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel rounded-[3rem] p-8 text-center md:p-16"
                >
                    <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-primary">Who I Am</span>

                    <h2 className="mb-8 text-4xl font-bold md:text-5xl">About Me</h2>

                    <p className="mx-auto mb-12 max-w-3xl text-gray-300 md:text-xl">{about.bio}</p>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <Stat icon={<Code />} value={`${about.projects_built}+`} label="Projects Built" />
                        <Stat icon={<Terminal />} value={`${about.years_coding}+`} label="Years Coding" />
                        <Stat icon={<Cpu />} value={about.learner_mindset} label="Learner Mindset" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

const Stat = ({ icon, value, label }: any) => (
    <div className="rounded-3xl bg-black/20 p-6">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">{icon}</div>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-sm text-gray-400 uppercase">{label}</p>
    </div>
);
