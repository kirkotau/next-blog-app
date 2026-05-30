'use client';

import { scrollToElement } from '@/lib/scroll';
import { ReactNode } from 'react';

type Props = {
  targetId: string;
  ariaLabel: string;
  className?: string;
  children: ReactNode;
};

export function ScrollNavButton({ targetId, ariaLabel, className = '', children }: Props) {
  return (
    <button
      type='button'
      onClick={() => scrollToElement(targetId)}
      aria-label={ariaLabel}
      className={`scroll-nav-btn ${className}`.trim()}
    >
      {children}
    </button>
  );
}
