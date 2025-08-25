'use client';

import Image from 'next/image';
import Sidebar from '../Sidebar';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import useGsapScroll from '@/hooks/useGsapScroll';
import MobileMenu from '../../components/MobileMenu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);
    useGsapScroll('.hero-fade');

    if (!mounted) return null;

    // Animation variants
    const floatingAnimation: Variants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const textAnimation: Variants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 }
    };

    const logoAnimation: Variants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 }
    };

    return (
        <section className="relative overflow-hidden">
            {/* Desktop Hero Section */}
            <div className="hidden lg:block">
                <section className="flex flex-wrap flex-col md:flex-row min-h-screen bg-black text-white relative overflow-hidden">
                    {/* Sidebar for Desktop */}
                    <Sidebar />

                    {/* Mobile Menu Button */}
                    <div className="absolute top-4 left-4 z-50 block lg:hidden">
                        <MobileMenu />
                    </div>

                    {/* Hero Content */}
                    <div
                        className={`hero-fade flex-1 pt-16 px-4 sm:px-6 md:px-10 lg:px-20 transition-all duration-500 overflow-hidden relative
        ${resolvedTheme === 'dark'
                                ? 'bg-gradient-to-b from-[#02584b] to-black text-white'
                                : 'bg-gradient-to-b from-[#02584b] to-white text-black dark:from-[#02584b] dark:to-black'
                            }`}
                    >
                        {/* Main Logo & Hero Image */}
                        <div className="w-full max-w-[1440px] mx-auto relative">
                            {/* Logo */}
                            <motion.div 
                                className="mb-6 md:mb-10"
                                variants={logoAnimation}
                                initial="initial"
                                animate="animate"
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Image
                                        src="/logo.png"
                                        alt="GePanda Logo"
                                        width={188}
                                        height={70}
                                        className="w-32 sm:w-40 md:w-48"
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Hero Image */}
                            <motion.div
                                variants={floatingAnimation}
                                animate="animate"
                            >
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{ delay: 3000 }}
                                    pagination={{ clickable: true }}
                                    className="rounded-xl"
                                >
                                    <SwiperSlide>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Image
                                                src="/slide1.png"
                                                alt="Slide 1"
                                                width={1690}
                                                height={804}
                                                className="w-full h-auto object-cover"
                                            />
                                        </motion.div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Image
                                                src="/slide2.png"
                                                alt="Slide 2"
                                                width={1690}
                                                height={804}
                                                className="w-full h-auto object-cover"
                                            />
                                        </motion.div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Image
                                                src="/slide3.png"
                                                alt="Slide 3"
                                                width={1690}
                                                height={804}
                                                className="w-full h-auto object-cover"
                                            />
                                        </motion.div>
                                    </SwiperSlide>
                                </Swiper>
                            </motion.div>
                        </div>

                        {/* Bottom CTA Card */}
                        <motion.div 
                            className="relative overflow-hidden md:bottom-60 md:left-10 w-full max-w-[1440px] mx-auto mt-10 md:mt-6 lg:mt-20 flex flex-col sm:flex-row items-center gap-6 px-2 sm:px-6 md:px-8 lg:px-0"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image
                                    src="/choose-img.png"
                                    alt="Choose Destination"
                                    width={180}
                                    height={90}
                                    className="rounded-xl w-28 sm:w-32 md:w-40"
                                />
                            </motion.div>
                            
                            <motion.div 
                                className="text-center sm:text-left"
                                variants={textAnimation}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <motion.h2 
                                    className="text-xl sm:text-lg md:text-xl font-extrabold"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    CHOOSE YOUR DESTINATION
                                </motion.h2>
                                <motion.p 
                                    className="text-sm md:text-base text-white/70 mt-1"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    Pick a data plan for your trip.
                                </motion.p>
                            </motion.div>
                            
                            <motion.button 
                                className="relative overflow-hidden md:top-0 md:left-185 bg-emerald-500 text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full text-2xl md:text-3xl shadow-lg"
                                whileHover={{ 
                                    scale: 1.1, 
                                    boxShadow: "0 15px 35px rgba(16, 185, 129, 0.4)",
                                    rotate: 5
                                }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                            >
                                ↗
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </div>
            
            {/* Mobile + Tablet Hero */}
            <motion.section 
                className="bg-gradient-to-b from-[#02584b] to-black text-white pb-10 px-4 flex flex-col items-center lg:hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute top-4 left-4 z-50">
                    <MobileMenu />
                </div>

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16 sm:mt-20 lg:mt-24"
                >
                    <Image src="/logo.png" alt="GePanda Logo" width={140} height={50} className="mx-auto" />
                </motion.div>

                {/* Hero Image with overlay text */}
                <motion.div 
                    className="relative w-full max-w-sm rounded-xl overflow-hidden mt-8 sm:mt-12 lg:mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <Image
                        src="/hero.png"
                        alt="Hero Image"
                        width={400}
                        height={240}
                        className="w-full h-auto object-cover rounded-xl"
                    />
                    <motion.div 
                        className="absolute bottom-4 left-4 right-4 text-white space-y-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <motion.div 
                            className="inline-block bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            GET 1 FREE DAY WITH A PURCHASE
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                    className="text-center space-y-1 px-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <motion.h2 
                        className="text-xl font-extrabold uppercase"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        CHOOSE YOUR DESTINATION
                    </motion.h2>
                    <motion.p 
                        className="text-sm text-white/80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        Pick a data plan for your trip.
                    </motion.p>
                </motion.div>
            </motion.section>
        </section>
    );
}
