'use client';
import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Cpu, Mail, Code2, GraduationCap, Award, MessageSquareQuote } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('#home');

  // Scroll spy to update activeTab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Order must match the visual order in App.tsx
      const sections = ['home', 'about', 'education', 'skills', 'certificates', 'projects', 'testimonials', 'contact'];
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
    { id: '#skills', icon: Cpu, label: 'Skills' },
    { id: '#certificates', icon: Award, label: 'Certificates' },
    { id: '#projects', icon: Briefcase, label: 'Projects' },
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
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-[95vw]"
      >
        <div className="bg-[#0f0f0f]/80 border border-white/10 rounded-full px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center gap-1 sm:gap-2 backdrop-blur-xl">
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
                        className={`
                            relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 group
                            ${isActive 
                                ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-110' 
                                : 'text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110'}
                        `}
                        aria-label={item.label}
                    >
                        <Icon size={18} strokeWidth={isActive ? 2.5 : 2} className="transition-transform duration-300" />
                        
                        {/* Tooltip on Hover */}
                        <span className="absolute -top-12 scale-0 group-hover:scale-100 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs px-2 py-1 rounded-md transition-all duration-200 pointer-events-none whitespace-nowrap">
                            {item.label}
                        </span>
                        
                        {/* Active Indicator for Mobile */}
                         {isActive && <span className="absolute -bottom-1 w-1 h-1 bg-white rounded-full sm:hidden"></span>}
                    </a>
                )
            })}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;