'use client';

import { motion } from 'framer-motion';

export default function FooterName() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center overflow-hidden select-none cursor-default mix-blend-difference">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-between items-center w-full px-4 md:px-10"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
                {/* First Column: S A Y */}
                <div className="flex flex-col items-center justify-center leading-[0.85]">
                    {['S', 'A', 'Y'].map((char, i) => (
                        <span key={i} className="text-[14vw] md:text-[18vw] font-black text-white transition-colors duration-500 hover:text-gray-400">
                            {char}
                        </span>
                    ))}
                </div>

                {/* Second Column: D A Y */}
                <div className="flex flex-col items-center justify-center leading-[0.85]">
                    {['D', 'A', 'Y'].map((char, i) => (
                        <span key={i} className="text-[14vw] md:text-[18vw] font-black text-white/50 transition-colors duration-500 hover:text-white">
                            {char}
                        </span>
                    ))}
                </div>

                {/* Third Column: BILAL JAWAD */}
                <div className="flex flex-col justify-center items-center leading-[0.85] text-center">
                    <span className="text-[14vw] md:text-[18vw] font-black text-white hover:text-gray-400 transition-colors duration-500 block">
                        BILAL
                    </span>
                    <span className="text-[14vw] md:text-[18vw] font-black text-white/50 hover:text-white transition-colors duration-500 block">
                        JAWAD
                    </span>
                </div>
            </motion.div>
        </div>
    );
}
