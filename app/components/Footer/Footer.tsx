'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white text-sm border-t border-white/10">


            {/* ✅ Logo Section */}
            <div className="md:col-span-5 flex flex-col items-start md:items-left justify-between max-w-7xl mx-auto px-6 py-8">
                <Image
                    src="/logofooter.png"
                    alt="GePanda Logo"
                    width={220}
                    height={50}
                    className="object-contain"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
                {/* ✅ Footer Navigation Columns */}
                <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Popular Destinations */}
                    <div>
                        <h4 className="font-semibold mb-3">Popular Destinations</h4>
                        <ul className="space-y-3 text-white/60">
                            {['Spain', 'Greece', 'Italy', 'Turkey', 'United Kingdom', 'Portugal', 'France', 'Germany', 'Netherlands', 'Canada'].map((item) => (
                                <li key={item}><Link href="#">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Gepanda */}
                    <div>
                        <h4 className="font-semibold mb-3">Gepanda</h4>
                        <ul className="space-y-3 text-white/60">
                            {['Business', 'About Us', 'Careers', 'Refer a Friend', 'Become an Affiliate'].map((item) => (
                                <li key={item}><Link href="#">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* eSIM */}
                    <div>
                        <h4 className="font-semibold mb-3">eSIM</h4>
                        <ul className="space-y-3 text-white/60">
                            {['What is an eSIM', 'Supported Devices', 'Download App', 'Security Features', 'Blog'].map((item) => (
                                <li key={item}><Link href="#">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h4 className="font-semibold mb-3">Help</h4>
                        <ul className="space-y-3 text-white/60">
                            {['Help Center', 'Getting Started', 'Plans and Payments', 'Troubleshooting', 'FAQ'].map((item) => (
                                <li key={item}><Link href="#">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h4 className="font-semibold mb-3">Follow Us</h4>
                        <ul className="space-y-3 text-white/60">
                            {['Facebook', 'Twitter (now X)', 'LinkedIn', 'YouTube', 'Instagram', 'Reddit'].map((item) => (
                                <li key={item}><Link href="#">{item}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* ✅ Bottom Bar */}
            <div className="border-t border-white/10 py-4 px-6 text-xs flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
                <div className="text-white/50 text-center md:text-left">
                    © 2025 Gepanda. All rights reserved.&nbsp;
                    <Link href="#" className="underline mr-2">Privacy Policy</Link>
                    <Link href="#" className="underline mr-2">Terms of Service</Link>
                    <Link href="#" className="underline">Cookie Preference</Link>
                </div>

                <div className="mt-4 md:mt-0">
                    <Image src="/paymentcard.png" alt="Payment Methods" width={240} height={30} />
                </div>
            </div>
        </footer>
    );
}

