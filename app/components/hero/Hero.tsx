'use client';

import Image from 'next/image';
import Sidebar from '../Sidebar';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import useGsapScroll from '@/hooks/useGsapScroll';
import MobileMenu from '../../components/MobileMenu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);
    useGsapScroll('.hero-fade');

    if (!mounted) return null;

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
                            <div className="mb-6 md:mb-10">
                                <Image
                                    src="/logo.png"
                                    alt="GePanda Logo"
                                    width={188}
                                    height={70}
                                    className="w-32 sm:w-40 md:w-48"
                                />
                            </div>

                            {/* Hero Image */}

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
                                    <Image
                                        src="/slide1.png"
                                        alt="Slide 1"
                                        width={1690}
                                        height={804}
                                        className="w-full h-auto object-cover"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        src="/slide2.png"
                                        alt="Slide 2"
                                        width={1690}
                                        height={804}
                                        className="w-full h-auto object-cover"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        src="/slide3.png"
                                        alt="Slide 3"
                                        width={1690}
                                        height={804}
                                        className="w-full h-auto object-cover"
                                    />
                                </SwiperSlide>

                            </Swiper>
                        </div>

                        {/* Bottom CTA Card */}
                        <div className="relative overflow-hidden md:bottom-60 md:left-10 w-full max-w-[1440px] mx-auto mt-10 md:mt-6 lg:mt-20 flex flex-col sm:flex-row items-center gap-6 px-2 sm:px-6 md:px-8 lg:px-0">
                            <Image
                                src="/choose-img.png"
                                alt="Choose Destination"
                                width={180}
                                height={90}
                                className="rounded-xl w-28 sm:w-32 md:w-40"
                            />
                            <div className="text-center sm:text-left">
                                <h2 className="text-xl sm:text-lg md:text-xl font-extrabold">
                                    CHOOSE YOUR DESTINATION
                                </h2>
                                <p className="text-sm md:text-base text-white/70 mt-1">
                                    Pick a data plan for your trip.
                                </p>

                            </div>
                            <button className="relative overflow-hidden md:top-0 md:left-185 bg-emerald-500 text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full text-2xl md:text-3xl shadow-lg">
                                ↗
                            </button>
                        </div>

                        {/* Arrow Button CTA */}
                    </div>
                </section>

            </div>
            {/* Mobile + Tablet Hero */}
            <section className="bg-gradient-to-b from-[#02584b] to-black text-white pb-10 px-4 flex flex-col items-center lg:hidden">
                <div className="absolute top-4 left-4 z-50">
                    <MobileMenu />
                </div>

                {/* Logo */}
                <Image src="/logo.png" alt="GePanda Logo" width={140} height={50} className="mx-auto" />

                {/* Hero Image with overlay text */}
                <div className="relative w-full max-w-sm rounded-xl overflow-hidden">
                    <Image
                        src="/hero.png"
                        alt="Hero Image"
                        width={400}
                        height={240}
                        className="w-full h-auto object-cover rounded-xl"
                    />
                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                        <div className="inline-block bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                            GET 1 FREE DAY WITH A PURCHASE
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center space-y-1 px-2">
                    <h2 className="text-xl font-extrabold uppercase">CHOOSE YOUR DESTINATION</h2>
                    <p className="text-sm text-white/80">Pick a data plan for your trip.</p>
                    {/* <button className="bg-yellow-300 text-black text-base font-semibold px-6 py-2 rounded-full shadow-md w-full max-w-xs">
                        View All Destinations
                    </button> */}
                </div>
            </section>
        </section>
    );
}
