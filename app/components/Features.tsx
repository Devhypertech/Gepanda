'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
    {
        title: 'Global Coverage',
        description: 'Stay connected in over 200 countries without switching SIMs or worrying about roaming.',
    },
    {
        title: 'Instant Activation',
        description: 'No waiting. Install your eSIM and activate data within minutes after purchase.',
    },
    {
        title: 'Eco-Friendly',
        description: 'Ditch the plastic. Our digital eSIMs help reduce waste and carbon emissions.',
    },
];

export default function Features() {
    return (
        <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 font-heading"
                >
                    Why Choose Us?
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-10 text-left">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <CheckCircle className="text-indigo-600 w-6 h-6 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-heading">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
