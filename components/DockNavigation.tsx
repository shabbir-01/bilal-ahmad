'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaLightbulb } from 'react-icons/fa';

export default function DockNavigation() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const navItems = [
        { icon: <FaHome />, label: 'Home', href: '#home' },
        { icon: <FaUser />, label: 'About', href: '#about' },
        { icon: <FaLightbulb />, label: 'Skills', href: '#skills' },
        { icon: <FaCode />, label: 'Projects', href: '#projects' },
        { icon: <FaBriefcase />, label: 'Experience', href: '#experience' },

        { icon: <FaEnvelope />, label: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
            <div className="glass rounded-3xl px-6 py-4 shadow-2xl border border-white/20 bg-black/50 backdrop-blur-xl">
                <div className="flex items-end gap-3">
                    {navItems.map((item, index) => {
                        const isHovered = hoveredIndex === index;
                        // Only scale if directly hovered
                        const scale = isHovered ? 1.5 : 1;
                        // Move up if hovered
                        const y = isHovered ? -10 : 0;

                        return (
                            <div key={item.label} className="relative group">
                                <motion.button
                                    onClick={() => scrollToSection(item.href)}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    animate={{ scale, y }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                    className={`w-14 h-14 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center text-2xl shadow-lg border border-white/10 transition-colors duration-300 relative overflow-hidden`}
                                >
                                    <motion.div
                                        animate={{ rotate: isHovered ? [0, -10, 10, -10, 0] : 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                </motion.button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Subtle white glow effect */}
            <div className="absolute inset-0 bg-white/5 blur-xl -z-10 rounded-3xl pointer-events-none" />
        </motion.div>
    );
}
