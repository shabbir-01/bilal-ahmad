'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with real-time inventory management, payment integration, and advanced analytics dashboard.',
            tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind'],
            github: 'https://github.com',
            demo: 'https://demo.com',
        },
        {
            title: 'AI-Powered Chat Application',
            description: 'Real-time messaging platform with AI-powered chatbots, end-to-end encryption, and multimedia support.',
            tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'OpenAI'],
            github: 'https://github.com',
            demo: 'https://demo.com',
        },
        {
            title: 'Project Management Tool',
            description: 'Collaborative project management system with kanban boards, time tracking, and team analytics.',
            tech: ['Next.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
            github: 'https://github.com',
            demo: 'https://demo.com',
        },
        {
            title: 'Social Media Analytics Dashboard',
            description: 'Comprehensive analytics platform for tracking social media metrics across multiple platforms with data visualization.',
            tech: ['React', 'Python', 'FastAPI', 'MongoDB', 'Chart.js'],
            github: 'https://github.com',
            demo: 'https://demo.com',
        },
        {
            title: 'Fitness Tracking App',
            description: 'Mobile-first fitness application with workout planning, nutrition tracking, and progress visualization.',
            tech: ['Next.js', 'Node.js', 'MongoDB', 'PWA', 'Chart.js'],
            github: 'https://github.com',
            demo: 'https://demo.com',
        },
        {
            title: 'Real Estate Marketplace',
            description: 'Property listing platform with advanced search filters, virtual tours, and integrated mortgage calculator.',
            tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS S3', 'Mapbox'],
            github: 'https://github.com',
            demo: 'https://demo.com',
        },
    ];

    return (
        <section id="projects" className="relative min-h-screen py-40 px-6 flex flex-col justify-center" ref={ref}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-white/20 mx-auto mb-32 rounded-full" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-24">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="pop-card rounded-3xl overflow-hidden group"
                            >
                                <div className="h-1 bg-white/10 group-hover:bg-white/40 transition-colors duration-300" />

                                <div className="p-12">
                                    <div className="flex items-start justify-between mb-8">
                                        <h3 className="text-3xl font-bold text-white transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 text-white">
                                            🚀
                                        </div>
                                    </div>

                                    <p className="text-gray-400 leading-loose mb-10 min-h-[80px] text-lg">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 mb-12">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-5 py-2.5 text-sm font-medium bg-white/5 rounded-full text-gray-400 border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-6">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-white hover:text-black transition-all duration-300 border border-white/10"
                                        >
                                            <FaGithub className="text-xl" />
                                            <span className="text-base font-medium">Code</span>
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-black hover:bg-gray-200 transition-all duration-300"
                                        >
                                            <FaExternalLinkAlt className="text-xl" />
                                            <span className="text-base font-medium">Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
