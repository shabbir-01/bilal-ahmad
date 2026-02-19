'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaReact, FaNode, FaDocker, FaGitAlt, FaDatabase, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiRedis, SiGraphql } from 'react-icons/si';

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', icon: <FaReact />, level: 95 },
                { name: 'Next.js', icon: <SiNextdotjs />, level: 90 },
                { name: 'TypeScript', icon: <SiTypescript />, level: 88 },
                { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 92 },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', icon: <FaNode />, level: 90 },
                { name: 'Express', icon: <SiExpress />, level: 85 },
                { name: 'GraphQL', icon: <SiGraphql />, level: 80 },
                { name: 'Python', icon: <FaPython />, level: 75 },
            ],
        },
        {
            title: 'Database',
            skills: [
                { name: 'MongoDB', icon: <SiMongodb />, level: 88 },
                { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85 },
                { name: 'Redis', icon: <SiRedis />, level: 78 },
                { name: 'SQL', icon: <FaDatabase />, level: 82 },
            ],
        },
        {
            title: 'DevOps & Tools',
            skills: [
                { name: 'Docker', icon: <FaDocker />, level: 85 },
                { name: 'Git', icon: <FaGitAlt />, level: 92 },
                { name: 'CI/CD', icon: <FaGitAlt />, level: 80 },
                { name: 'AWS', icon: <FaDatabase />, level: 75 },
            ],
        },
    ];

    return (
        <section id="skills" className="relative min-h-screen py-40 px-6 flex flex-col justify-center" ref={ref}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-white/20 mx-auto mb-32 rounded-full" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-24">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                className="pop-card rounded-3xl p-12 group"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-300">
                                        {category.title === 'Frontend' && '💻'}
                                        {category.title === 'Backend' && '⚙️'}
                                        {category.title === 'Database' && '🗄️'}
                                        {category.title === 'DevOps & Tools' && '🛠️'}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold mb-10 text-white">{category.title}</h3>

                                <div className="space-y-8">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skill.name}>
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-2xl text-gray-500 group-hover:text-white transition-colors duration-300">{skill.icon}</span>
                                                    <span className="text-base font-medium text-gray-400 group-hover:text-white transition-colors duration-300">{skill.name}</span>
                                                </div>
                                                <span className="text-sm text-gray-500">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-white"
                                                    initial={{ width: 0 }}
                                                    animate={isInView ? { width: `${skill.level}%` } : {}}
                                                    transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-24 pop-card rounded-3xl p-12"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center text-white">Other Professional Skills</h3>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {[
                                'RESTful APIs',
                                'Microservices',
                                'Agile/Scrum',
                                'Testing (Jest, Cypress)',
                                'Responsive Design',
                                'Performance Optimization',
                                'Security Best Practices',
                                'Code Review',
                                'Technical Documentation',
                                'Problem Solving',
                                'Team Collaboration',
                                'UI/UX Principles',
                            ].map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                                    className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-400 hover:bg-white hover:text-black transition-all duration-300 cursor-default border border-white/10"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
