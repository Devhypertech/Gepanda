'use client';

import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Hamburger Button - visible on mobile */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={toggleMenu}
                    className="text-white bg-black/70 p-2 rounded-md"
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Slide-In Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-black text-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
                    {/* Logo */}
                    <Image src="/logo.png" alt="GePanda" width={120} height={40} className='mx-16 my-2' />
                    <button onClick={toggleMenu}>
                        <X size={28} />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col items-left gap-6 mt-10 mx-6 text-lg font-semibold">
                    <Link href="/" onClick={toggleMenu}>Home</Link>
                    <Link href="/" onClick={toggleMenu}>About</Link>
                    <Link href="/" onClick={toggleMenu}>Plans</Link>
                    <Link href="/" onClick={toggleMenu}>Coverage</Link>
                    <Link href="/" onClick={toggleMenu}>Contact</Link>
                </nav>

                {/* Login/Signup */}
                <div className="mt-10 flex items-left mx-6 gap-4">
                    <a href="https://myaccount.gepanda.com/" target="_blank" rel="noopener noreferrer">
                        <button className="px-5 py-2 border bg-[#007e68]  rounded-full">
                            Login
                        </button>
                    </a>
                    <a href="https://myaccount.gepanda.com/" target="_blank" rel="noopener noreferrer">
                        <button className="px-5 py-2 bg-[#2EFECC] text-black font-bold rounded-full">
                            Sign Up
                        </button>
                    </a>
                </div>

                {/* Social Icons */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-5 text-white/70">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </>
    );
}
