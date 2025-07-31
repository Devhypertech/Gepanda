// 'use client';

// import { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const cards = [
//     {
//         title: 'Always Fast',
//         description:
//             'No bars? Never. Our 700+ network partnerships ensure your connection never skips a beat.',
//         image: '/assets/3.svg',
//         gradient: 'linear-gradient(142deg, #8ED6D8 0%, #E1ECC9 51.91%, #F6CB70 100%)',
//         textColor: '#092927',
//     },
//     {
//         title: 'Reliable Coverage',
//         description:
//             'Stay online across continents with the best local carriers automatically selected for you.',
//         image: '/assets/2.svg',
//         gradient: 'linear-gradient(142deg, #F6CB70 0%, #E1ECC9 51.91%, #8ED6D8 100%)',
//         textColor: '#092927',
//     },
//     {
//         title: 'Instant Activation',
//         description:
//             'Activate your eSIM in seconds and start browsing without delays — even before takeoff.',
//         image: '/assets/1.svg',
//         gradient: 'red',
//         textColor: '#092927',
//     },
// ];

// export default function StackScroll() {
//     useEffect(() => {
//         ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//         const cardEls = gsap.utils.toArray<HTMLElement>('.card-wrapper');

//         cardEls.forEach((card, i) => {
//             const content = card.querySelector('.card-content');
//             const image = card.querySelector('img');

//             gsap.set(card, {
//                 transformOrigin: 'top center',
//                 zIndex: 10 + i,
//                 opacity: 0,
//                 y: 100,
//                 scale: 0.9,
//             });

//             gsap.to(card, {
//                 opacity: 1,
//                 y: 0,
//                 scale: 1 + 0.05 * i,
//                 ease: 'sine.in',
//                 duration: 0.6,
//                 scrollTrigger: {
//                     trigger: card,
//                     // start: 'top center-=80',
//                     start: 'top center-=80',
//                     end: '-=100%',
//                     scrub: 1.2,
//                     toggleActions: 'play reverse play reverse',
//                     pin: true,
//                     pinSpacing: false,
//                 },
//             });
//             if (image) {
//                 gsap.fromTo(
//                     image,
//                     { y: 40 },
//                     {
//                         y: -40,
//                         ease: 'none',
//                         scrollTrigger: {
//                             trigger: card,
//                             start: 'top bottom',
//                             end: 'bottom top',
//                             scrub: true,
//                         },
//                     }
//                 );
//             }

//             if (content) {
//                 gsap.fromTo(
//                     content,
//                     { opacity: 0, y: 50 },
//                     {
//                         opacity: 1,
//                         y: 0,
//                         ease: 'power1.inOut',
//                         duration: 0.8,
//                         scrollTrigger: {
//                             trigger: card,
//                             start: 'top center+=60',
//                             end: 'top center-=60',
//                             scrub: 1.2,
//                         },
//                     }
//                 );
//             }
//         });

//         ScrollTrigger.refresh();
//         return () => ScrollTrigger.getAll().forEach(t => t.kill());
//     }, []);

//     return (
//         <div className="relative bg-black  text-white py-10">
//             <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
//                 {cards.map((card, i) => (
//                     <div
//                         className="card-wrapper -mt-[260px] first:mt-0 perspective-[1000px] relative"
//                         key={i}
//                     >
//                         <div
//                             className="stack-card card-content flex flex-col lg:flex-row items-center justify-between rounded-md p-6 lg:p-12 w-full h-[28rem] max-w-full sm:max-w-5xl mx-auto shadow-xl"
//                             style={{
//                                 background: card.gradient,
//                                 color: card.textColor,
//                             }}
//                         >
//                             <div className="space-y-4 text-center lg:text-left max-w-lg">
//                                 <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{card.title}</h1>
//                                 <p className="text-sm sm:text-base md:text-lg">{card.description}</p>
//                             </div>
//                             <div className="mt-6 lg:mt-0">
//                                 <img
//                                     src={card.image}
//                                     alt={card.title}
//                                     width={240}
//                                     height={220}
//                                     className="object-contain max-w-[140px] sm:max-w-[160px] lg:max-w-xs"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {/* <div className="h-[20vh] sm:h-[40vh]" /> */}
//         </div>
//     );
// }
'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function StackScroll() {
    useEffect(() => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        const cards = gsap.utils.toArray<HTMLElement>('.card');

        cards.forEach((card, i) => {
            gsap.set(card, {
                scale: 0.9 - i * 0.03,
                yPercent: -i * 10,
                zIndex: cards.length + i,
            });

            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top center+=100',
                    end: 'bottom top',
                    scrub: true,
                },
                scale: 1,
                yPercent: 0,
            });
        });

        ScrollTrigger.refresh();
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <div className="stack-container py-36">
            <div className="card one">
                <div className="step-box">
                    <div className="step-content">
                        <div className="step-text">
                            <span className="step-label">Step 1</span>
                            <h2>DOWNLOAD THE<br /> TRUELY APP</h2>
                            <p>
                                Find us on the App Store or Google Play.<br />
                                Tell us where you’re headed and how many days of unlimited you need.
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
                            <h2>DOWNLOAD THE<br /> TRUELY APP</h2>
                            <p>
                                Find us on the App Store or Google Play.<br />
                                Tell us where you’re headed and how many days of unlimited you need.
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
                </div></div>
            <div className="card three">
                <div className="step-box3">
                    <div className="step-content">
                        <div className="step-text">
                            <span className="step-label">Step 3</span>
                            <h2>DOWNLOAD THE<br /> TRUELY APP</h2>
                            <p>
                                Find us on the App Store or Google Play.<br />
                                Tell us where you’re headed and how many days of unlimited you need.
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
                </div></div>
            <div className="card four">
                <div className="step-box4">
                    <div className="step-content">
                        <div className="step-text">
                            <span className="step-label">Step 4</span>
                            <h2>DOWNLOAD THE<br /> TRUELY APP</h2>
                            <p>
                                Find us on the App Store or Google Play.<br />
                                Tell us where you’re headed and how many days of unlimited you need.
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
                </div></div>
        </div>
    );
}
