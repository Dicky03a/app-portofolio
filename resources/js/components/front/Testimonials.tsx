'use client';
import { motion } from 'framer-motion';
import { MessageSquareQuote, Star } from 'lucide-react';
import React from 'react';
import { TESTIMONIALS } from './constants';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="relative py-24">
            {/* Background decorative blob */}
            <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[120px]" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <span className="text-sm font-medium tracking-wider text-secondary uppercase">Feedback</span>
                    <h2 className="font-display mt-2 mb-4 text-3xl font-bold text-white md:text-5xl">Testimonials</h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel relative flex flex-col rounded-[2rem] border border-white/10 p-8"
                        >
                            <div className="absolute top-8 right-8 text-white/5">
                                <MessageSquareQuote size={48} />
                            </div>

                            <div className="mb-6 flex gap-1 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="relative z-10 mb-8 text-lg leading-relaxed text-gray-300 italic">"{testimonial.content}"</p>

                            <div className="mt-auto flex items-center gap-4">
                                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white/10">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-xs tracking-wider text-primary uppercase">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
