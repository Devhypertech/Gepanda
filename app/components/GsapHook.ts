// lib/useGsapStepStack.ts
'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapStepStack = (
    selector = '.step-card',
    wrapper = '.step-wrapper'
) => {
    useEffect(() => {
        const wrappers = gsap.utils.toArray<HTMLElement>(wrapper);
        const cards = gsap.utils.toArray<HTMLElement>(selector);

        // Safety: mismatch length check
        // if (cards.length !== wrappers.length) return;

        wrappers.forEach((wrap, i) => {
            const card = cards[i];
            const scale = i !== cards.length - 1 ? 0.9 + 0.025 * i : 1;
            const rotateX = i !== cards.length - 1 ? -10 : 0;

            gsap.set(card, {
                transformOrigin: 'top center',
                scale: 1,
                rotationX: 0,
            });

            gsap.to(card, {
                scale,
                rotationX: rotateX,
                ease: 'none',
                scrollTrigger: {
                    trigger: wrap,
                    start: `top ${60 + i * 10}`,
                    end: 'bottom 550',
                    scrub: true,
                    pin: wrap,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                    markers: true,
                },
            });
        });

        // Ensure GSAP recalculates sizes after hydration/layout shifts
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [selector, wrapper]);
};
