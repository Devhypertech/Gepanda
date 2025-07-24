'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function FlipCard({ frontImage, backText, index }: { frontImage: string; backText: string; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current) return;

        const ctx = gsap.context(() => {
            gsap.to(cardRef.current, {
                rotateY: 180,
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: true,
                },
            });
        }, cardRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="perspective my-10">
            <div
                ref={cardRef}
                className="flip-card w-72 h-96 relative transition-transform duration-700 transform-style-preserve-3d"
            >
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden">
                    <Image src={frontImage} alt="front" fill className="object-cover rounded-xl" />
                </div>

                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-emerald-600 flex items-center justify-center text-white rounded-xl p-6">
                    <p className="text-lg font-semibold">{backText}</p>
                </div>
            </div>
        </div>
    );
}
