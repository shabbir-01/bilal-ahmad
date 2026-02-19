'use client';

import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Hero() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-48 pb-64">
            {/* Animated background elements - Monochrome */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-20"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.1, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center w-full"
                >
                    <motion.p
                        className="text-gray-400 text-lg md:text-2xl mb-12 font-medium tracking-[0.2em] uppercase text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        className="text-6xl md:text-8xl lg:text-9xl font-bold mb-16 gradient-text text-center"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            backgroundSize: '200% 200%',
                            animation: 'gradient-shift 3s ease infinite',
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Sayyad Bilal Jawad
                    </motion.h1>

                    <motion.h2
                        className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Full Stack Developer
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-32 leading-relaxed text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Crafting exceptional digital experiences with modern technologies. Passionate about building scalable applications and solving complex problems with elegant, efficient code.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-16 justify-center items-center mb-48"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="group inline-flex items-center justify-center px-[40px] py-5 bg-white text-black rounded-full font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.7)] text-xl"
                        >
                            <span className="relative z-10">Hire Me</span>
                        </button>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center px-[40px] py-5 bg-white/5 border border-white/10 hover:border-white/50 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/10 backdrop-blur-md text-xl"
                        >
                            <span>View Resume</span>
                        </a>
                    </motion.div>

                    <motion.div
                        className="flex gap-10 justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        {[
                            { icon: <FaGithub />, href: 'https://github.com' },
                            { icon: <FaLinkedin />, href: 'https://linkedin.com' },
                            { icon: <FaTwitter />, href: 'https://twitter.com' },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>


        </section>
    );
}
