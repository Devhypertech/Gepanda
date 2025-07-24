"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface StepSectionProps {
    step: string;
    title: string;
    description: string;
    image: string;
    bg: string;
    index: number;
}

export default function StepSection({
    step,
    title,
    description,
    image,
    bg,
    index,
}: StepSectionProps) {
    return (
        <div className="step-wrapper w-full max-w-5xl mx-auto px-6 md:px-12" style={{ marginBottom: 50 }}>
            <div
                className="step-card w-full py-16 px-8 rounded-[28px] relative z-10"
                style={{
                    background: bg,
                    minHeight: "420px",
                    marginTop: index === 0 ? 0 : -60,
                }}
            >
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="text-left md:w-1/2">
                        <p className="text-blue-800 font-semibold text-md mb-2">{step}</p>
                        <h2 className="text-3xl font-extrabold text-black mb-3">{title}</h2>
                        <p className="text-black text-base leading-relaxed">{description}</p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                        <Image src={image} alt={title} width={280} height={280} />
                    </div>
                </div>
            </div>
        </div>
    );
}
