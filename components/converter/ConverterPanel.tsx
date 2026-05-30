'use client';

import { ToolbarNav } from '@/components/ToolbarNav';
import { useLanguage } from '@/components/LanguageProvider';
import type { useCurrencyConverter } from '@/hooks/useCurrencyConverter';
import { CurrencyAmountField } from './CurrencyAmountField';
import { ScrollNavButton } from './ScrollNavButton';
import { SwapDivider } from './SwapDivider';
import { PANEL_INNER_CLASS } from './styles';

type ConverterState = ReturnType<typeof useCurrencyConverter>;

type Props = Pick<
  ConverterState,
  'activeField' | 'bynInput' | 'plnInput' | 'handleBynChange' | 'handlePlnChange'
>;

export function ConverterPanel({
  activeField,
  bynInput,
  plnInput,
  handleBynChange,
  handlePlnChange,
}: Props) {
  const { t } = useLanguage();

  return (
    <section
      id='converter-panel'
      aria-labelledby='converter-heading'
      className='snap-panel flex min-h-[100dvh] flex-col section-x section-y lg:min-h-screen lg:border-r lg:border-line'
    >
      <div className={PANEL_INNER_CLASS}>
        <ToolbarNav className='mb-[clamp(1.25rem,4vh,2.5rem)] justify-end lg:hidden' />

        <div className='flex flex-1 flex-col justify-center'>
          <header className='mb-[clamp(1rem,3vh,2.5rem)]'>
            <p className='text-fluid-meta font-medium uppercase tracking-[0.18em] text-ink-faint lg:tracking-[0.22em]'>
              {t.converter.eyebrow}
            </p>
            <h1
              id='converter-heading'
              className='text-fluid-display mt-[clamp(0.25rem,1vh,0.75rem)] font-semibold tracking-tight text-ink'
            >
              {t.converter.title}
            </h1>
            <p className='text-fluid-body mt-[clamp(0.375rem,1.5vh,0.875rem)] text-ink-muted'>
              {t.converter.description}
            </p>
          </header>

          <form
            className='flex flex-col gap-fluid'
            onSubmit={(event) => event.preventDefault()}
            aria-label={t.converter.formLabel}
          >
            <CurrencyAmountField
              id='amount-byn'
              label={t.converter.bynLabel}
              currencyCode='BYN'
              value={bynInput}
              activeField={activeField}
              field='byn'
              onChange={handleBynChange}
            />

            <SwapDivider />

            <CurrencyAmountField
              id='amount-pln'
              label={t.converter.plnLabel}
              currencyCode='PLN'
              value={plnInput}
              activeField={activeField}
              field='pln'
              onChange={handlePlnChange}
              hint={t.converter.plnHint}
            />
          </form>
        </div>

        <ScrollNavButton
          targetId='rates-panel'
          ariaLabel={t.converter.scrollToRatesAria}
          className='mt-auto pt-6 lg:hidden'
        >
          <span>{t.converter.scrollToRates}</span>
          <svg aria-hidden='true' className='h-4 w-4 animate-bounce' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M19 14l-7 7m0 0l-7-7m7 7V3' />
          </svg>
        </ScrollNavButton>
      </div>
    </section>
  );
}
