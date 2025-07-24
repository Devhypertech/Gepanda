import Image from 'next/image';
import { useState } from 'react';
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
        <aside className="w-[80px] bg-black flex flex-col items-center justify-between py-6 h-screen fixed left-0 top-0 z-50">
            <div className="flex flex-col gap-6 items-center mt-8">

                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(item.name)}
                        className={`w-12 h-12 rounded-md flex items-center justify-center transition-all ${active === item.name
                            ? 'bg-[#00ffe7]'
                            : 'bg-[#1c1c1c] hover:bg-[#00ffe7]/20'
                            }`}
                    >
                        <Image
                            src={item.icon}
                            alt={item.name}
                            width={24}
                            height={24}
                            className={`${active === item.name ? 'invert' : ''}`}
                        />
                    </button>
                ))}
            </div>

            {/* Optional Bottom Dots */}
            <div className="flex flex-col gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="w-[8px] h-[8px] rounded-full bg-[#00ffe7]/30"
                    />
                ))}
            </div>
        </aside>
    );
}
