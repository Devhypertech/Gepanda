// hooks/useGsapScroll.ts
'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useGsapScroll(selector: string) {
    useEffect(() => {
        const elements = gsap.utils.toArray(selector);

        elements.forEach((el: any) => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    scrub: 1,
                    toggleActions: 'play none none reverse',
                },
            });

            timeline.fromTo(
                el,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }
            );
        });

        // Clean up on unmount
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, [selector]);
}
