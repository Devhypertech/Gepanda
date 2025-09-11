"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface StepCardProps {
    step: string;
    title: string;
    desc: string;
    image: string;
    bgColor: string;
    zIndex: number;
}

export default function StepCard({
    step,
    title,
    desc,
    image,
    bgColor,
    zIndex,
}: StepCardProps) {
    return (
        <motion.div
            className="rounded-2xl p-8 md:p-12 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between"
            style={{
                background: bgColor,
                zIndex,
                marginTop: -100,
                position: "relative",
            }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
        >
            <div className="text-left md:w-1/2">
                <p className="text-blue-900 font-bold mb-2">{step}</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 font-heading">
                    {title}
                </h2>
                <p className="text-black text-md md:text-lg">{desc}</p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={400}
                    className="rounded-xl shadow-xl"
                />
            </div>
        </motion.div>
    );
}
