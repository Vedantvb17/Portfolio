'use client';

import {
  useEffect,
  useState,
} from 'react';

import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      className='p-2 rounded transition-colors duration-300 cursor-pointer'
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor =
          resolvedTheme === 'dark'
            ? 'rgba(255,255,255,0.1)'
            : 'rgba(0,0,0,0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <span className='text-xl'>{resolvedTheme === 'dark' ? '🌞' : '🌙'}</span>
    </button>
  );
}
