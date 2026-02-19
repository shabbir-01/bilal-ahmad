'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const experiences = [
        {
            role: 'Senior Full Stack Developer',
            company: 'TechCorp Solutions',
            period: '2024 - Present',
            type: 'Full-time',
            description: 'Leading development of enterprise-scale web applications using Next.js and microservices architecture. Mentoring junior developers and implementing best practices.',
            achievements: [
                'Architected and deployed 5+ production applications serving 100K+ users',
                'Reduced application load time by 60% through optimization techniques',
                'Led a team of 4 developers in agile environment',
            ],
        },
        {
            role: 'Full Stack Developer',
            company: 'Digital Innovations Inc',
            period: '2022 - 2024',
            type: 'Full-time',
            description: 'Developed and maintained multiple client-facing applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver high-quality solutions.',
            achievements: [
                'Built RESTful APIs serving 50K+ daily requests',
                'Implemented CI/CD pipelines reducing deployment time by 40%',
                'Contributed to open-source projects used by the company',
            ],
        },
        {
            role: 'Frontend Developer Intern',
            company: 'StartupHub',
            period: '2021 - 2022',
            type: 'Internship',
            description: 'Assisted in building responsive web interfaces and implementing new features for the company\'s SaaS platform using React and TypeScript.',
            achievements: [
                'Developed 15+ reusable React components',
                'Improved mobile responsiveness across the platform',
                'Participated in code reviews and sprint planning',
            ],
        },
        {
            role: 'Freelance Web Developer',
            company: 'Self-Employed',
            period: '2020 - 2021',
            type: 'Freelance',
            description: 'Delivered custom web solutions for small businesses and startups. Managed complete project lifecycle from requirements gathering to deployment.',
            achievements: [
                'Successfully completed 20+ client projects',
                'Maintained 5-star rating on freelance platforms',
                'Built long-term relationships with repeat clients',
            ],
        },
    ];

    return (
        <section id="experience" className="relative min-h-screen py-40 px-6 flex flex-col justify-center" ref={ref}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-5xl"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-white/20 mx-auto mb-32 rounded-full" />

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-white/10" />

                        <div className="space-y-48">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.role}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        } flex-col gap-8`}
                                >
                                    {/* Content */}
                                    <div className="w-full md:w-[calc(50%-2rem)]">
                                        <div className="pop-card rounded-3xl p-12 group">
                                            <div className="flex items-start justify-between mb-8">
                                                <div>
                                                    <h3 className="text-3xl font-bold text-white mb-2 transition-colors duration-300">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-xl text-gray-400 font-semibold">{exp.company}</p>
                                                </div>
                                                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                                                    💼
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 mb-8">
                                                <span className="px-4 py-2 text-sm font-medium bg-white/5 rounded-full text-gray-400 border border-white/10">
                                                    {exp.period}
                                                </span>
                                                <span className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full font-bold">
                                                    {exp.type}
                                                </span>
                                            </div>

                                            <p className="text-gray-400 leading-loose mb-8 text-lg">
                                                {exp.description}
                                            </p>

                                            <div className="space-y-4">
                                                <p className="text-base font-semibold text-white mb-4">Key Achievements:</p>
                                                {exp.achievements.map((achievement, i) => (
                                                    <div key={i} className="flex items-start gap-3 text-gray-500">
                                                        <span className="text-white mt-1.5">▹</span>
                                                        <p className="text-base leading-relaxed">{achievement}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline dot */}
                                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-black z-10" />

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
