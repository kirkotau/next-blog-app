'use client';

import { LanguageMenu } from '@/components/LanguageMenu';
import { useLanguage } from '@/components/LanguageProvider';
import { ThemeToggle } from '@/components/ThemeToggle';

type Props = {
  className?: string;
};

export function ToolbarNav({ className = '' }: Props) {
  const { t } = useLanguage();

  return (
    <nav aria-label={t.nav.toolbar} className={`flex items-center gap-2 ${className}`.trim()}>
      <LanguageMenu />
      <ThemeToggle />
    </nav>
  );
}
