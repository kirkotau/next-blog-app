'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { TOOLBAR_BUTTON_CLASS } from '@/components/toolbar-styles';
import { locales } from '@/lib/i18n';
import { useEffect, useId, useRef, useState } from 'react';

export function LanguageMenu() {
  const { locale, setLocale, t, mounted } = useLanguage();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  return (
    <div ref={rootRef} className='relative'>
      <button
        type='button'
        aria-label={t.language.menu}
        aria-haspopup='listbox'
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((current) => !current)}
        className={TOOLBAR_BUTTON_CLASS}
      >
        <span className='text-[11px] font-semibold uppercase tracking-wide'>
          {mounted ? locale : 'en'}
        </span>
      </button>

      {open ? (
        <ul
          id={menuId}
          role='listbox'
          aria-label={t.language.menu}
          className='absolute right-0 top-[calc(100%+0.5rem)] z-20 min-w-[10.5rem] overflow-hidden rounded-2xl border border-line bg-surface-raised py-1 shadow-[0_8px_24px_rgb(0_0_0/0.08)] dark:shadow-[0_8px_24px_rgb(0_0_0/0.35)]'
        >
          {locales.map((option) => {
            const isActive = option === locale;

            return (
              <li key={option} role='presentation'>
                <button
                  type='button'
                  role='option'
                  aria-selected={isActive}
                  onClick={() => {
                    setLocale(option);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-3.5 py-2.5 text-left text-fluid-label transition hover:bg-surface-inset ${
                    isActive ? 'font-semibold text-ink' : 'text-ink-muted'
                  }`}
                >
                  <span>{t.language[option]}</span>
                  {isActive ? (
                    <svg aria-hidden='true' className='h-4 w-4 text-accent' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                    </svg>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
