'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function StackScroll() {
    useEffect(() => {
        // Clean up any existing ScrollTriggers
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        const cards = gsap.utils.toArray<HTMLElement>('.card');

        cards.forEach((card, i) => {
            // Set initial state for each card
            gsap.set(card, {
                scale: 0.8,
                y: 100,
                opacity: 0,
                rotationX: 15,
            });

            // Create scroll-triggered animation
            gsap.to(card, {
                scale: 1,
                y: 0,
                opacity: 1,
                rotationX: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top center+=100",
                    end: "bottom center-=100",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                }
            });

            // Add parallax effect to images
            const image = card.querySelector('.step-image');
            if (image) {
                gsap.to(image, {
                    y: -30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    }
                });
            }
        });

        ScrollTrigger.refresh();
        
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="w-full py-36 px-4 md:px-12">
            <div className="card one">
                <div className="step-box">
                    <div className="step-content">
                        <div className="step-text">
                            <span className="step-label">Step 1</span>
                            <h2 className="font-heading">DOWNLOAD THE<br /> TRUELY APP</h2>
                            <p>
                                Find us on the App Store or Google Play.<br />
                                Tell us where you're headed and how many days of unlimited you need.
                            </p>
                        </div>
                        <div className="step-image">
                            <Image
                                src="/step1.png"
                                width={300}
                                height={60}
                                alt="App Preview" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="card two">
                <div className="step-box2">
                    <div className="step-content">
                        <div className="step-text">
                            <span className="step-label">Step 2</span>
                            <h2 className="font-heading">DOWNLOAD THE<br /> TRUELY APP</h2>
                            <p>
                                Find us on the App Store or Google Play.<br />
                                Tell us where you're headed and how many days of unlimited you need.
                            </p>
                        </div>
                        <div className="step-image">
                            <Image
                                src="/step2.png"
                                width={300}
                                height={60}
                                alt="App Preview" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="card three">
                <div className="step-box3">
                    <div className="step-content">
                        <div className="step-text">
                            <span className="step-label">Step 3</span>
                            <h2 className="font-heading">DOWNLOAD THE<br /> TRUELY APP</h2>
                            <p>
                                Find us on the App Store or Google Play.<br />
                                Tell us where you're headed and how many days of unlimited you need.
                            </p>
                        </div>
                        <div className="step-image">
                            <Image
                                src="/step3.png"
                                width={300}
                                height={60}
                                alt="App Preview" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="card four">
                <div className="step-box4">
                    <div className="step-content">
                        <div className="step-text">
                            <span className="step-label">Step 4</span>
                            <h2 className="font-heading">DOWNLOAD THE<br /> TRUELY APP</h2>
                            <p>
                                Find us on the App Store or Google Play.<br />
                                Tell us where you're headed and how many days of unlimited you need.
                            </p>
                        </div>
                        <div className="step-image">
                            <Image
                                src="/step1.png"
                                width={300}
                                height={60}
                                alt="App Preview" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
