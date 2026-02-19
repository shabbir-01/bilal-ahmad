'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="relative min-h-screen py-40 flex flex-col justify-center" ref={ref}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-4xl"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-white/20 mx-auto mb-32 rounded-full" />

                    <div className="grid md:grid-cols-2 gap-24 items-start">
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="pop-card rounded-3xl p-12 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-8 text-white">Who I Am</h3>
                                    <p className="text-gray-400 leading-relaxed mb-8">
                                        I'm a passionate Full Stack Developer with a keen eye for creating
                                        seamless user experiences and robust backend systems. My journey in
                                        software development has equipped me with a diverse skill set spanning
                                        modern web technologies.
                                    </p>
                                    <p className="text-gray-400 leading-relaxed mb-8">
                                        With expertise in React, Next.js, Node.js, and cloud technologies,
                                        I specialize in building scalable applications that solve real-world
                                        problems. I believe in writing clean, maintainable code and following
                                        best practices.
                                    </p>
                                    <p className="text-gray-400 leading-relaxed">
                                        When I'm not coding, you'll find me exploring new technologies,
                                        contributing to open-source projects, or sharing knowledge with
                                        the developer community.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="space-y-12"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="pop-card rounded-3xl p-12 group">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                                        🎯
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-4 text-white">Professional Summary</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Dedicated developer with 3+ years of experience building modern web
                                            applications. Proven track record of delivering high-quality solutions
                                            that exceed client expectations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pop-card rounded-3xl p-12 group">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                                        🚀
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-4 text-white">Career Goals</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Aspiring to lead innovative projects that push the boundaries of web
                                            development. Committed to continuous learning and staying ahead of
                                            industry trends.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pop-card rounded-3xl p-12 group">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                                        💡
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-4 text-white">What Drives Me</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Passionate about creating impactful solutions that make a difference.
                                            I thrive on challenges and believe that great software is built through
                                            collaboration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
