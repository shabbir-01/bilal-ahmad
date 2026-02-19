'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/" // Placeholder as requested
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-green-500/50 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: 'spring' }}
        >
            <FaWhatsapp className="text-3xl" />
        </motion.a>
    );
}
