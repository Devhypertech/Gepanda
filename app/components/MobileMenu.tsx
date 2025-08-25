'use client';

import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants: Variants = {
        closed: {
            x: "-100%",
            opacity: 0
        },
        open: {
            x: 0,
            opacity: 1
        }
    };

    const itemVariants: Variants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    const buttonVariants: Variants = {
        hover: { 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0, 126, 104, 0.3)"
        },
        tap: { scale: 0.95 }
    };

    return (
        <>
            {/* Hamburger Button - visible on mobile */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <motion.button
                    onClick={toggleMenu}
                    className="text-white bg-black/70 p-2 rounded-md"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                >
                    <Menu size={28} />
                </motion.button>
            </div>

            {/* Slide-In Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="fixed top-0 left-0 w-full h-full bg-black text-white z-40"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <motion.div 
                            className="flex justify-between items-center px-6 py-4 border-b border-white/10"
                            variants={itemVariants}
                        >
                            {/* Logo */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Image src="/logo.png" alt="GePanda" width={120} height={40} className='mx-16 my-2' />
                            </motion.div>
                            <motion.button 
                                onClick={toggleMenu}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={28} />
                            </motion.button>
                        </motion.div>

                        {/* Navigation Links */}
                        <motion.nav 
                            className="flex flex-col items-left gap-6 mt-10 mx-6 text-lg font-semibold"
                            variants={itemVariants}
                        >
                            {['Home', 'About', 'Plans', 'Coverage', 'Contact'].map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                >
                                    <Link href="/" onClick={toggleMenu}>
                                        <motion.span
                                            className="block cursor-pointer"
                                            whileHover={{ x: 10, color: "#00ffe1" }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {item}
                                        </motion.span>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.nav>

                        {/* Login/Signup */}
                        <motion.div 
                            className="mt-10 flex items-left mx-6 gap-4"
                            variants={itemVariants}
                        >
                            <motion.a 
                                href="https://myaccount.gepanda.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.button 
                                    className="px-5 py-2 border bg-[#007e68] rounded-full"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    Login
                                </motion.button>
                            </motion.a>
                            <motion.a 
                                href="https://myaccount.gepanda.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.button 
                                    className="px-5 py-2 bg-[#2EFECC] text-black font-bold rounded-full"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    Sign Up
                                </motion.button>
                            </motion.a>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div 
                            className="absolute bottom-6 left-0 right-0 flex justify-center gap-5 text-white/70"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            {['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-instagram'].map((icon, index) => (
                                <motion.a 
                                    key={icon}
                                    href="#"
                                    whileHover={{ 
                                        scale: 1.2, 
                                        color: "#00ffe1",
                                        y: -2
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                                >
                                    <i className={icon}></i>
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
