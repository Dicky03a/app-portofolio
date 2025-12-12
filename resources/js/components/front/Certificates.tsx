'use client';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import React from 'react';
import { CERTIFICATES } from './constants';

const Certificates: React.FC = () => {
    return (
        <section id="certificates" className="bg-dark/30 relative overflow-hidden py-24 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row"
                >
                    <div>
                        <span className="text-sm font-medium tracking-wider text-primary uppercase">Credentials</span>
                        <h2 className="font-display mt-2 text-3xl font-bold text-white md:text-5xl">Certificates</h2>
                    </div>
                    <div className="mb-4 ml-10 hidden h-px flex-1 bg-white/10 md:block" />
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {CERTIFICATES.map((cert, index) => (
                        <motion.a
                            href={cert.link}
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="glass-panel group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 p-6 transition-all hover:bg-white/5"
                        >
                            {/* Hover Glow */}
                            <div className="absolute top-0 right-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-white/5 blur-[40px] transition-colors group-hover:bg-primary/10" />

                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 text-yellow-400 shadow-inner transition-transform group-hover:scale-110">
                                <Award size={24} />
                            </div>

                            <h3 className="mb-1 line-clamp-2 text-lg font-bold text-white">{cert.title}</h3>
                            <p className="mb-4 text-sm text-gray-400">{cert.issuer}</p>

                            <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                                <span className="font-mono text-xs text-gray-500">{cert.date}</span>
                                <ExternalLink size={16} className="text-gray-500 transition-colors group-hover:text-white" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
