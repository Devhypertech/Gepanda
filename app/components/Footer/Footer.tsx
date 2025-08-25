'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    const footerSections = [
        {
            title: 'Popular Destinations',
            items: ['Spain', 'Greece', 'Italy', 'Turkey', 'United Kingdom', 'Portugal', 'France', 'Germany', 'Netherlands', 'Canada']
        },
        {
            title: 'Gepanda',
            items: ['Business', 'About Us', 'Careers', 'Refer a Friend', 'Become an Affiliate']
        },
        {
            title: 'eSIM',
            items: ['What is an eSIM', 'Supported Devices', 'Download App', 'Security Features', 'Blog']
        },
        {
            title: 'Help',
            items: ['Help Center', 'Getting Started', 'Plans and Payments', 'Troubleshooting', 'FAQ']
        },
        {
            title: 'Follow Us',
            items: ['Facebook', 'Twitter (now X)', 'LinkedIn', 'YouTube', 'Instagram', 'Reddit']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.footer 
            className="bg-black text-white text-sm border-t border-white/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            {/* Logo Section */}
            <motion.div 
                className="md:col-span-5 flex flex-col items-start md:items-left justify-between max-w-7xl mx-auto px-6 py-8"
                variants={itemVariants}
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    <Image
                        src="/logofooter.png"
                        alt="GePanda Logo"
                        width={220}
                        height={50}
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>

            <motion.div 
                className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10"
                variants={containerVariants}
            >
                {/* Footer Navigation Columns */}
                <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-5 gap-8">
                    {footerSections.map((section, sectionIndex) => (
                        <motion.div 
                            key={section.title}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: sectionIndex * 0.1 }}
                        >
                            <motion.h4 
                                className="font-semibold mb-3"
                                whileHover={{ color: "#00ffe1" }}
                                transition={{ duration: 0.2 }}
                            >
                                {section.title}
                            </motion.h4>
                            <ul className="space-y-3 text-white/60">
                                {section.items.map((item, itemIndex) => (
                                    <motion.li 
                                        key={item}
                                        variants={itemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                                    >
                                        <Link href="#">
                                            <motion.span
                                                className="block cursor-pointer"
                                                whileHover={{ 
                                                    color: "#00ffe1",
                                                    x: 5
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {item}
                                            </motion.span>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Bottom Bar */}
            <motion.div 
                className="border-t border-white/10 py-4 px-6 text-xs flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div 
                    className="text-white/50 text-center md:text-left"
                    whileHover={{ color: "rgba(255, 255, 255, 0.8)" }}
                    transition={{ duration: 0.2 }}
                >
                    © 2025 Gepanda. All rights reserved.&nbsp;
                    <Link href="#" className="underline mr-2">
                        <motion.span
                            whileHover={{ color: "#00ffe1" }}
                            transition={{ duration: 0.2 }}
                        >
                            Privacy Policy
                        </motion.span>
                    </Link>
                    <Link href="#" className="underline mr-2">
                        <motion.span
                            whileHover={{ color: "#00ffe1" }}
                            transition={{ duration: 0.2 }}
                        >
                            Terms of Service
                        </motion.span>
                    </Link>
                    <Link href="#" className="underline">
                        <motion.span
                            whileHover={{ color: "#00ffe1" }}
                            transition={{ duration: 0.2 }}
                        >
                            Cookie Preference
                        </motion.span>
                    </Link>
                </motion.div>

                <motion.div 
                    className="mt-4 md:mt-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    <Image 
                        src="/paymentcard.png" 
                        alt="Payment Methods" 
                        width={240} 
                        height={30} 
                    />
                </motion.div>
            </motion.div>
        </motion.footer>
    );
}

