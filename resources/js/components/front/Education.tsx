'use client';

import { usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap } from 'lucide-react';

interface EducationItem {
    id: number;
    jurusan: string;
    institusi: string;
    deskripsi?: string;
    start_year: number;
    end_year?: number | null;
}

export default function Education() {
    const { educations } = usePage().props as {
        educations: EducationItem[];
    };

    if (!educations || educations.length === 0) {
        return null;
    }

    return (
        <section id="education" className="relative py-24">
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
                    <h2 className="mt-2 mb-4 text-3xl font-bold md:text-5xl">Education</h2>
                </motion.div>

                <div className="relative">
                    <div className="absolute top-0 bottom-0 left-0 hidden w-px bg-white/10 md:left-1/2 md:block" />

                    <div className="space-y-12">
                        {educations.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col items-center gap-8 md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="w-full flex-1">
                                    <div className="glass-panel relative rounded-3xl border border-white/10 p-8 hover:bg-white/5">
                                        <div
                                            className={`absolute top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-black bg-primary md:block ${
                                                index % 2 === 0 ? '-left-[42px]' : '-right-[41px]'
                                            }`}
                                        />

                                        <div className="mb-2 flex items-center gap-3 text-primary">
                                            <GraduationCap size={20} />
                                            <span className="text-sm font-bold tracking-wide">{item.jurusan}</span>
                                        </div>

                                        <h3 className="mb-2 text-2xl font-bold">{item.institusi}</h3>

                                        {item.deskripsi && <p className="mb-4 text-sm text-gray-400">{item.deskripsi}</p>}

                                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                                            <Calendar size={12} />
                                            {item.start_year}
                                            {item.end_year ? ` - ${item.end_year}` : ' - Sekarang'}
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden flex-1 md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
