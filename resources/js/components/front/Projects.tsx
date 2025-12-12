'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import React from 'react';
import { PROJECTS } from './constants';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="relative py-24">
            {/* Background decorative blobs */}
            <div className="pointer-events-none absolute top-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row"
                >
                    <div>
                        <h2 className="font-display mb-4 text-4xl font-bold text-white md:text-5xl">
                            Featured <br /> <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="max-w-md text-lg text-gray-400">My latest work, designed with precision and built for performance.</p>
                    </div>
                </motion.div>

                {/* Projects Grid - Affitto Style */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-[450px] overflow-hidden rounded-[2.5rem] shadow-xl transition-shadow hover:shadow-2xl sm:h-[500px]"
                        >
                            {/* Full background image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

                            {/* Top Right Icon */}
                            <div className="absolute top-6 right-6 z-10">
                                <a
                                    href={project.github}
                                    className="hover:text-dark flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white"
                                >
                                    <Github size={20} />
                                </a>
                            </div>

                            {/* Floating Glass Panel at Bottom */}
                            <div className="glass-panel absolute right-4 bottom-4 left-4 rounded-[2rem] border border-white/20 bg-white/5 p-5 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-2 sm:p-6">
                                <div className="mb-2 flex items-start justify-between">
                                    <div>
                                        <h3 className="mb-1 text-xl leading-tight font-bold text-white sm:text-2xl">{project.title}</h3>
                                        <p className="text-xs font-medium tracking-wider text-gray-300 uppercase">
                                            {project.tags[0]} • {project.tags[1]}
                                        </p>
                                    </div>
                                </div>

                                <p className="mb-6 line-clamp-2 text-sm font-light text-gray-300">{project.description}</p>

                                <div className="flex items-center justify-between gap-4">
                                    <a
                                        href={project.link}
                                        className="text-dark flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold shadow-lg transition-colors hover:bg-gray-100"
                                    >
                                        Take a look
                                        <ArrowUpRight size={18} />
                                    </a>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md">
                                        <span className="text-xs font-bold text-white">{index + 1}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
