'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    const footerSections = [
        {
            title: 'Popular Destinations',
            items: [
                { name: 'United Arab Emirates', url: 'https://esim.gepanda.com/packages/?bundle=united-arab-emirates' },
                { name: 'United State', url: 'https://esim.gepanda.com/packages/?bundle=united-states' },
                { name: 'Thailand', url: 'https://esim.gepanda.com/packages/?bundle=339' },
                { name: 'Malaysia', url: 'https://esim.gepanda.com/packages/?bundle=malaysia' },
                { name: 'France', url: 'https://esim.gepanda.com/packages/?bundle=france' },
                { name: 'Turkey', url: 'https://esim.gepanda.com/packages/?bundle=turkey' },
                { name: 'Japan', url: 'https://esim.gepanda.com/packages/?bundle=335' },
                { name: 'China', url: 'https://esim.gepanda.com/packages/?bundle=334' },
                { name: 'India', url: 'https://esim.gepanda.com/packages/?bundle=india' }
            ]
        },
        {
            title: 'Resources',
            items: [
                { name: 'How It Works', url: 'https://esim.gepanda.com/how-it-works/' },
                { name: 'Press Room', url: 'https://esim.gepanda.com/articles/' },
                { name: 'Packages', url: 'https://esim.gepanda.com/packages/?nocache' },
                { name: 'About Us', url: 'https://esim.gepanda.com/about-us-3/' },
                { name: 'Blogs', url: 'https://esim.gepanda.com/blogs/' },
                { name: 'FAQs', url: 'https://esim.gepanda.com/faq/' }
            ]
        },
        {
            title: 'Partnership',
            items: [
                { name: 'Partner With Us', url: 'https://esim.gepanda.com/partner-with-us/' },
                { name: 'Become an Affiliate', url: 'https://esim.gepanda.com/affiliate-program/' }
            ]
        },
        {
            title: 'Tools',
            items: [
                { name: 'Data Calculator', url: 'https://esim.gepanda.com/mobile-data-usage-calculator/' },
                { name: 'GePanda GPT', url: 'https://chatgpt.com/g/g-67bf1315afb481919246e253f7094e40-gepanda-esim-ai-travel-connectivity' }
            ]
        },
        {
            title: 'Follow Us',
            items: [
                { name: 'Facebook', url: 'https://www.facebook.com/people/GePanda/61574959115702/' },
                { name: 'Instagram', url: 'https://www.instagram.com/gepanda.official/' },
                { name: 'X', url: 'https://x.com/GePanda_eSIM' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/gepanda' }
            ]
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
                                className="font-semibold mb-3 font-heading"
                                whileHover={{ color: "#00ffe1" }}
                                transition={{ duration: 0.2 }}
                            >
                                {section.title}
                            </motion.h4>
                            <ul className="space-y-3 text-white/60">
                                {section.items.map((item, itemIndex) => {
                                    return (
                                        <motion.li 
                                            key={item.name}
                                            variants={itemVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                                        >
                                            <a 
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <motion.span
                                                    className="block cursor-pointer"
                                                    whileHover={{ 
                                                        color: "#00ffe1",
                                                        x: 5
                                                    }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {item.name}
                                                </motion.span>
                                            </a>
                                        </motion.li>
                                    );
                                })}
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
                    <a href="https://esim.gepanda.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline mr-2">
                        <motion.span
                            whileHover={{ color: "#00ffe1" }}
                            transition={{ duration: 0.2 }}
                        >
                            Privacy Policy
                        </motion.span>
                    </a>
                    <a href="https://esim.gepanda.com/terms-conditions/" target="_blank" rel="noopener noreferrer" className="underline">
                        <motion.span
                            whileHover={{ color: "#00ffe1" }}
                            transition={{ duration: 0.2 }}
                        >
                            Terms of Service
                        </motion.span>
                    </a>
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

