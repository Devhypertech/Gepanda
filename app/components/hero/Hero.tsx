'use client';

import Image from 'next/image';
import Sidebar from '../Sidebar';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import useGsapScroll from '@/hooks/useGsapScroll';
import MobileMenu from '../../components/MobileMenu';

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
                <section className="flex flex-col md:flex-row min-h-screen bg-black text-white relative overflow-hidden">
                    <Sidebar />
                    <div className="absolute top-4 left-4 z-50 block lg:hidden">
                        <MobileMenu />
                    </div>
                    <div className={`hero-fade ${resolvedTheme === 'dark'
                        ? "flex-1 pt-12 bg-gradient-to-b transition-all duration-500 from-[#02584b] to-black relative overflow-hidden px-2 text-white"
                        : "flex-1 pt-12 bg-gradient-to-b transition-all duration-500 from-[#02584b] to-white relative overflow-hidden px-2 text-black dark:from-[#02584b] dark:to-black"
                        }`}>

                        {/* Main Card with Image and Overlay Text */}
                        <div className="absolute top-20 left-4 right-4 md:top-14 md:left-40 md:right-40">
                            <Image
                                src="/logo.png"
                                alt="GePanda Logo"
                                width={188}
                                height={70}
                                className="mb-4 w-40 md:w-48"
                            />
                            <Image
                                src="/hero.png"
                                alt="Hero Girl"
                                width={1690}
                                height={804}
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>

                        {/* Bottom Card */}
                        <div className="absolute bottom-4 left-4 right-4 md:-bottom-24 md:left-40 md:w-[40%] rounded-[2rem] px-6 py-8 md:px-8 md:py-40 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                            <Image src="/choose-img.png" alt="Choose Destination" width={180} height={90} className="rounded-xl w-32 md:w-auto" />
                            <div className="text-center sm:text-left">
                                <h2 className="text-xl md:text-2xl font-extrabold">CHOOSE YOUR DESTINATION</h2>
                                <p className="text-sm text-white/70 mt-1">Pick a data plan for your trip.</p>
                                <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-3">
                                    <button className="bg-cyan-600 px-4 py-1 rounded-full text-sm">Country</button>
                                    <button className="bg-green-600 px-4 py-1 rounded-full text-sm">Region</button>
                                    <button className="bg-yellow-400 px-6 py-1 rounded-full text-sm text-black">View All Destinations</button>
                                </div>
                            </div>
                        </div>

                        {/* Arrow CTA Button */}
                        <button className="absolute bottom-4 right-4 md:bottom-5 md:right-16 bg-emerald-500 text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full text-2xl md:text-3xl shadow-lg">
                            ↗
                        </button>
                    </div>

                </section>
            </div>
            {/* Mobile + Tablet Hero */}
            <section className="bg-gradient-to-b from-[#02584b] to-black text-white py-10 px-4 flex flex-col items-center space-y-6 lg:hidden">
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
                    <button className="bg-yellow-300 text-black text-base font-semibold px-6 py-2 rounded-full shadow-md w-full max-w-xs">
                        View All Destinations
                    </button>
                </div>
            </section>
        </section>
    );
}
