'use client';
import { motion } from 'framer-motion';
import { MessageSquareQuote, Star } from 'lucide-react';
import React from 'react';

interface Testimonial {
    id: number;
    message: string;
    name: string;
    position: string;
    avatar: string | null;
    avatar_url: string;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials = [] }) => {
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
                    {testimonials && testimonials.length > 0 ? (
                        testimonials.map((testimonial, index) => (
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

                                <p className="relative z-10 mb-8 text-lg leading-relaxed text-gray-300 italic">"{testimonial.message}"</p>

                                <div className="mt-auto flex items-center gap-4">
                                    <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white/10">
                                        {testimonial.avatar_url ? (
                                            <img
                                                src={testimonial.avatar_url}
                                                alt={testimonial.name}
                                                className="h-full w-full object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.onerror = null; // prevents infinite loop
                                                    target.src = '/default-avatar.png'; // fallback
                                                }}
                                            />
                                        ) : (
                                            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                                                <span className="text-gray-500 text-xs">No Image</span>
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-white">{testimonial.name}</h4>
                                        <p className="text-xs tracking-wider text-primary uppercase">{testimonial.position}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-lg text-gray-400">No testimonials available at the moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
