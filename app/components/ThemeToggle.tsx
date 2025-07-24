'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react'; // optional icons

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    console.log(resolvedTheme)

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 border rounded"
        >
            {resolvedTheme === 'dark' ? '🌞 Light' : '🌙 Dark'}
        </button>
    );
}
