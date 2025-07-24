'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useHeroParallax() {
    useEffect(() => {
        // Logo fade down
        gsap.fromTo('#hero-logo',
            { opacity: 0, y: -50 },
            {
                opacity: 1, // ensure visible
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#hero-logo',
                    start: 'top 90%',
                    markers: true,
                },
            }
        );

        // Hero image parallax
        gsap.to('#hero-image', {
            y: -80,
            ease: 'none',
            scrollTrigger: {
                trigger: '#hero-image',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });

        // Destination Card
        gsap.fromTo('#hero-card',
            { opacity: 0, y: 80 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '#hero-card',
                    start: 'top 85%',
                },
            }
        );

        // CTA Button pop
        gsap.fromTo('#hero-cta',
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '#hero-cta',
                    start: 'top 95%',
                },
            }
        );

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);
}
