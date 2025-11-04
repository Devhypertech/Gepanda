'use client';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <header className="relative z-50 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-end gap-3 sm:gap-4">
                <motion.a
                    href="https://myaccount.gepanda.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base text-white transition-all duration-300"
                    style={{ backgroundColor: '#00bc7d' }}
                    whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(0, 188, 125, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Login
                </motion.a>
                <motion.a
                    href="https://myaccount.gepanda.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base text-black transition-all duration-300"
                    style={{ backgroundColor: '#fdfd74' }}
                    whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(253, 253, 116, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Sign Up
                </motion.a>
            </div>
        </header>
    );
}
