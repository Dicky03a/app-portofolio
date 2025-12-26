'use client';
import { motion } from 'framer-motion';
import { Award, FolderCode, Cpu, GraduationCap, Home, Mail, MessageSquareQuote, User, Network } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
    const [activeTab, setActiveTab] = useState('#home');

    // Scroll spy to update activeTab based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            // Order must match the visual order in App.tsx
            const sections = ['home', 'about', 'education', 'skills', 'pengalaman', 'certificates', 'projects', 'testimonials', 'contact'];

            // Trigger slightly before the section hits the middle of the screen
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveTab(`#${section}`);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: '#home', icon: Home, label: 'Home' },
        { id: '#about', icon: User, label: 'About' },
        { id: '#education', icon: GraduationCap, label: 'Education' },
        { id: '#pengalaman', icon: Network, label: 'Pengalaman' },
        { id: '#skills', icon: Cpu, label: 'Skills' },
        { id: '#certificates', icon: Award, label: 'Certificates' },
        { id: '#projects', icon: FolderCode, label: 'Projects' },
        { id: '#testimonials', icon: MessageSquareQuote, label: 'Testimonials' },
        { id: '#contact', icon: Mail, label: 'Contact' },
    ];

    return (
        <>
            {/* Bottom Navigation Dock - Centered Floating Pill */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="fixed bottom-6 left-1/2 z-50 w-auto max-w-[95vw] -translate-x-1/2 transform"
            >
                <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#0f0f0f]/80 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:gap-2">
                    {navItems.map((item) => {
                        const isActive = activeTab === item.id;
                        const Icon = item.icon;

                        return (
                            <a
                                key={item.id}
                                href={item.id}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTab(item.id);
                                    const element = document.querySelector(item.id);
                                    element?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`group relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 sm:h-12 sm:w-12 ${
                                    isActive
                                        ? 'scale-110 bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                                        : 'text-gray-400 hover:scale-110 hover:bg-white/10 hover:text-white'
                                } `}
                                aria-label={item.label}
                            >
                                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} className="transition-transform duration-300" />

                                {/* Tooltip on Hover */}
                                <span className="pointer-events-none absolute -top-12 scale-0 rounded-md border border-white/10 bg-white/10 px-2 py-1 text-xs whitespace-nowrap text-white backdrop-blur-md transition-all duration-200 group-hover:scale-100">
                                    {item.label}
                                </span>

                                {/* Active Indicator for Mobile */}
                                {isActive && <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-white sm:hidden"></span>}
                            </a>
                        );
                    })}
                </div>
            </motion.div>
        </>
    );
};

export default Navbar;
