'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import FooterName from './FooterName';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'sayyad.bilal@example.com',
            link: 'mailto:sayyad.bilal@example.com',
        },
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/sayyad-bilal',
            link: 'https://linkedin.com',
        },
        {
            icon: <FaGithub />,
            label: 'GitHub',
            value: 'github.com/sayyad-bilal',
            link: 'https://github.com',
        },
        {
            icon: <FaTwitter />,
            label: 'Twitter',
            value: '@sayyad_bilal',
            link: 'https://twitter.com',
        },
    ];

    return (
        <section id="contact" className="relative min-h-screen py-40 flex flex-col justify-center" ref={ref}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-5xl"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-white/20 mx-auto mb-16 rounded-full" />
                    <p className="text-center text-gray-500 text-lg mb-32 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-24">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-12"
                        >
                            <div className="pop-card rounded-3xl p-12">
                                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                                <div className="space-y-4">
                                    {contactInfo.map((info, index) => (
                                        <motion.a
                                            key={info.label}
                                            href={info.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl text-white group-hover:scale-110 transition-transform duration-300">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">{info.label}</p>
                                                <p className="text-white font-medium group-hover:text-gray-300 transition-colors duration-300">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <div className="pop-card rounded-3xl p-12">
                                <h3 className="text-2xl font-bold mb-4 text-white">Let's Connect!</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Whether you have a question, want to collaborate, or just want to say hi,
                                    I'll try my best to get back to you as soon as possible!
                                </p>
                                <div className="flex gap-6">
                                    {[
                                        { icon: <FaGithub />, link: 'https://github.com' },
                                        { icon: <FaLinkedin />, link: 'https://linkedin.com' },
                                        { icon: <FaTwitter />, link: 'https://twitter.com' },
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-2xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <form onSubmit={handleSubmit} className="pop-card rounded-3xl p-12">
                                <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>

                                <div className="space-y-8">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white focus:bg-white/10 transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white focus:bg-white/10 transition-all duration-300"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white focus:bg-white/10 transition-all duration-300 resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-white rounded-xl font-bold text-black hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-gray-200 flex items-center justify-center gap-2 group"
                                    >
                                        <span>Send Message</span>
                                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                </motion.div>
            </div>

            {/* Name Signature - Full Width */}
            <div className="w-full">
                <FooterName />
            </div>


        </section>
    );
}
