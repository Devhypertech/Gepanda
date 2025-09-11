"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface StepProps {
    step: number;
    title: string;
    desc: string;
    image: string;
    bg: string;
}

export default function StepBlock({ step, title, desc, image, bg }: StepProps) {
    return (
        <motion.div
            className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10"
            style={{ background: bg }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: true }}
            transition={{ type: "spring", duration: 0.8 }}
        >
            <div className="max-w-lg text-center md:text-left">
                <p className="font-semibold text-lg mb-2 text-black">Step {step}</p>
                <h2 className="text-4xl font-extrabold mb-4 text-black font-heading">{title}</h2>
                <p className="text-base md:text-lg text-black">{desc}</p>
            </div>
            <div className="mt-10 md:mt-0">
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={600}
                    className="rounded-xl shadow-lg"
                />
            </div>
        </motion.div>
    );
}
