'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import React from 'react';
import { SOCIALS } from './constants';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="relative overflow-hidden py-24">
            {/* Decorational blur */}
            <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display mb-6 text-4xl font-bold text-white md:text-5xl">
                            Let's Work <br /> <span className="text-primary">Together</span>
                        </h2>
                        <p className="mb-10 text-lg leading-relaxed text-gray-400">
                            Have a project in mind or just want to say hi? I'm always open to new opportunities and interesting conversations.
                        </p>

                        <div className="mb-12 space-y-6">
                            <div className="group flex items-center gap-5 text-gray-300">
                                <div className="glass-modern rounded-2xl p-4 text-primary transition-transform group-hover:scale-110">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="mb-1 text-xs tracking-wider text-gray-500 uppercase">Email Me</p>
                                    <p className="text-lg font-medium text-white">contact@dicky.com</p>
                                </div>
                            </div>
                            <div className="group flex items-center gap-5 text-gray-300">
                                <div className="glass-modern rounded-2xl p-4 text-secondary transition-transform group-hover:scale-110">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="mb-1 text-xs tracking-wider text-gray-500 uppercase">Location</p>
                                    <p className="text-lg font-medium text-white">Indonesia</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    className="glass-modern flex h-14 w-14 items-center justify-center rounded-2xl text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white"
                                    aria-label={social.platform}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-panel relative rounded-[2.5rem] border border-white/10 p-8 sm:p-10"
                    >
                        {/* Decorative glow inside form */}
                        <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-secondary/20 blur-[50px]" />

                        <form className="relative z-10 space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="ml-1 text-sm font-medium text-gray-400">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full rounded-2xl border border-white/10 bg-black/20 px-6 py-4 text-white transition-all placeholder:text-gray-600 focus:border-primary/50 focus:bg-black/30 focus:outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="ml-1 text-sm font-medium text-gray-400">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full rounded-2xl border border-white/10 bg-black/20 px-6 py-4 text-white transition-all placeholder:text-gray-600 focus:border-primary/50 focus:bg-black/30 focus:outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="ml-1 text-sm font-medium text-gray-400">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-6 py-4 text-white transition-all placeholder:text-gray-600 focus:border-primary/50 focus:bg-black/30 focus:outline-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="text-dark flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-4 text-lg font-bold shadow-lg transition-colors hover:bg-gray-200"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
