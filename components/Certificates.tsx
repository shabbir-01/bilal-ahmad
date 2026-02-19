'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCertificate, FaAward } from 'react-icons/fa';

export default function Certificates() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const certificates = [
        {
            title: 'AWS Certified Solutions Architect',
            provider: 'Amazon Web Services',
            year: '2024',
            description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.',
        },
        {
            title: 'Meta Front-End Developer Professional',
            provider: 'Meta (Facebook)',
            year: '2023',
            description: 'Comprehensive program covering React, advanced JavaScript, and modern web development practices.',
        },
        {
            title: 'Full Stack Web Development',
            provider: 'Udemy',
            year: '2023',
            description: 'Complete bootcamp covering MERN stack, authentication, deployment, and best practices.',
        },
        {
            title: 'Advanced TypeScript',
            provider: 'Frontend Masters',
            year: '2023',
            description: 'Deep dive into TypeScript advanced types, generics, and design patterns.',
        },
        {
            title: 'Docker & Kubernetes',
            provider: 'Coursera',
            year: '2022',
            description: 'Container orchestration and microservices deployment with Docker and Kubernetes.',
        },
        {
            title: 'MongoDB Certified Developer',
            provider: 'MongoDB University',
            year: '2022',
            description: 'Official certification covering MongoDB fundamentals, aggregation, and performance optimization.',
        },
    ];

    return (
        <section id="certificates" className="relative min-h-screen py-40 px-6 flex flex-col justify-center" ref={ref}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                        Certificates & <span className="gradient-text">Achievements</span>
                    </h2>
                    <div className="w-24 h-1 bg-white/20 mx-auto mb-32 rounded-full" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-24">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="pop-card rounded-3xl p-12 group relative overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                                            <FaCertificate className="text-white" />
                                        </div>
                                        <span className="px-4 py-2 text-sm font-bold bg-white/10 rounded-full text-white border border-white/5">
                                            {cert.year}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300 leading-tight">
                                        {cert.title}
                                    </h3>

                                    <p className="text-gray-400 font-semibold mb-6 text-base">
                                        {cert.provider}
                                    </p>

                                    <p className="text-gray-500 text-base leading-relaxed">
                                        {cert.description}
                                    </p>

                                    <div className="mt-8 pt-8 border-t border-white/10">
                                        <div className="flex items-center gap-3 text-white/60 group-hover:text-white transition-colors duration-300">
                                            <FaAward className="text-xl" />
                                            <span className="text-sm font-medium">Verified Certificate</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional achievements */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-24 pop-card rounded-3xl p-12"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center text-white">Additional Achievements</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: '🏆', title: 'Hackathon Winner', desc: '1st Place - Tech Innovation 2023' },
                                { icon: '⭐', title: 'Top Contributor', desc: 'Open Source Projects' },
                                { icon: '📝', title: 'Tech Blogger', desc: '50+ Published Articles' },
                                { icon: '🎤', title: 'Speaker', desc: 'Tech Conferences & Meetups' },
                            ].map((achievement, index) => (
                                <motion.div
                                    key={achievement.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                                    className="text-center p-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
                                >
                                    <div className="text-4xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">{achievement.icon}</div>
                                    <h4 className="font-bold text-white mb-1">{achievement.title}</h4>
                                    <p className="text-sm text-gray-500">{achievement.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
