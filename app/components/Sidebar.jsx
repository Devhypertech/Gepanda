import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
// import ThemeToggle from './ThemeToggle';

const menuItems = [
    { name: 'home', icon: '/icons/Icon.png' },
    { name: 'profile', icon: '/icons/Icon1.png' },
    { name: 'wallet', icon: '/icons/Icon2.png' },
    { name: 'plans', icon: '/icons/Icon3.png' },
    { name: 'referral', icon: '/icons/Icon4.png' },
    { name: 'chat', icon: '/icons/Icon5.png' },
];

export default function Sidebar() {
    const [active, setActive] = useState('home');

    return (
        <motion.aside 
            className="w-[80px] bg-black flex flex-col items-center justify-between py-6 h-screen fixed left-0 top-0 z-50"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div 
                className="flex flex-col gap-6 items-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {menuItems.map((item, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setActive(item.name)}
                        className={`w-12 h-12 rounded-md flex items-center justify-center transition-all duration-300 relative overflow-hidden ${
                            active === item.name
                                ? 'bg-[#00ffe7]'
                                : 'bg-[#1c1c1c] hover:bg-[#00ffe7]/20'
                        }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ 
                            scale: 1.1,
                            boxShadow: active === item.name 
                                ? "0 10px 25px rgba(0, 255, 231, 0.4)"
                                : "0 5px 15px rgba(0, 0, 0, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Active state glow effect */}
                        {active === item.name && (
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#00ffe7]/20 to-transparent"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        )}
                        
                        <motion.div
                            className="relative z-10"
                            whileHover={{ rotate: active === item.name ? 360 : 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={item.icon}
                                alt={item.name}
                                width={24}
                                height={24}
                                className={`${active === item.name ? 'invert' : ''}`}
                            />
                        </motion.div>
                    </motion.button>
                ))}
            </motion.div>

            {/* Optional Bottom Dots */}
            <motion.div 
                className="flex flex-col gap-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-[8px] h-[8px] rounded-full bg-[#00ffe7]/30"
                        animate={{ 
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1, 0.8]
                        }}
                        transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                        }}
                    />
                ))}
            </motion.div>
        </motion.aside>
    );
}
