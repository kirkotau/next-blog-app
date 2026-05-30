'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { TOOLBAR_BUTTON_CLASS } from '@/components/toolbar-styles';
import { readThemeFromDocument, THEME_STORAGE_KEY, type Theme } from '@/lib/theme';
import { useEffect, useState } from 'react';

function SunIcon() {
  return (
    <svg aria-hidden='true' className='h-[18px] w-[18px]' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.75}>
      <circle cx='12' cy='12' r='4' />
      <path strokeLinecap='round' d='M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41' />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden='true' className='h-[18px] w-[18px]' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.75}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { t } = useLanguage();
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(readThemeFromDocument());
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  };

  const label = mounted
    ? theme === 'dark'
      ? t.theme.switchToLight
      : t.theme.switchToDark
    : t.theme.toggle;

  return (
    <button
      type='button'
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={mounted ? theme === 'dark' : undefined}
      className={`group ${TOOLBAR_BUTTON_CLASS}`}
    >
      <span className='transition-transform duration-300 group-hover:scale-110'>
        {mounted ? (theme === 'dark' ? <SunIcon /> : <MoonIcon />) : <MoonIcon />}
      </span>
    </button>
  );
}
