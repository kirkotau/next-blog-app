'use client';

import { ToolbarNav } from '@/components/ToolbarNav';
import { useLanguage } from '@/components/LanguageProvider';
import { formatRate } from '@/lib/converter';
import { formatMessage } from '@/lib/i18n';
import type { useCurrencyConverter } from '@/hooks/useCurrencyConverter';
import { ScrollNavButton } from './ScrollNavButton';
import { PANEL_INNER_CLASS } from './styles';

type ConverterState = ReturnType<typeof useCurrencyConverter>;

type Props = Pick<
  ConverterState,
  'bynToPlnRate' | 'plnToBynRate' | 'updatedAt' | 'displayByn' | 'directPlnAmount' | 'reversePlnAmount'
>;

export function RatesPanel({
  bynToPlnRate,
  plnToBynRate,
  updatedAt,
  displayByn,
  directPlnAmount,
  reversePlnAmount,
}: Props) {
  const { t } = useLanguage();

  return (
    <section
      id='rates-panel'
      aria-labelledby='rates-heading'
      className='snap-panel relative flex min-h-[100dvh] flex-col section-x section-y bg-surface-raised/80 lg:min-h-screen lg:bg-transparent'
    >
      <ToolbarNav className='absolute right-[clamp(1.25rem,5vw,4rem)] top-[clamp(1rem,3vh,2.5rem)] z-10 hidden lg:flex' />

      <div className={PANEL_INNER_CLASS}>
        <ScrollNavButton
          targetId='converter-panel'
          ariaLabel={t.converter.scrollToConverterAria}
          className='mb-[clamp(0.75rem,2vh,1.25rem)] lg:hidden'
        >
          <svg aria-hidden='true' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M5 10l7-7m0 0l7 7m-7-7v18' />
          </svg>
          <span>{t.converter.scrollToConverter}</span>
        </ScrollNavButton>

        <div className='flex flex-1 flex-col justify-center'>
          <header className='mb-[clamp(1rem,3vh,2rem)] lg:mb-[clamp(1.5rem,4vh,2.5rem)]'>
            <p className='text-fluid-meta font-medium uppercase tracking-[0.18em] text-ink-faint'>{t.rates.eyebrow}</p>
            <h2
              id='rates-heading'
              className='text-fluid-display mt-[clamp(0.25rem,1vh,0.75rem)] font-semibold tracking-tight text-ink'
            >
              {t.rates.title}
            </h2>
          </header>

          <dl className='grid grid-cols-1 gap-[clamp(0.875rem,2.5vh,1.5rem)] rounded-2xl border border-line bg-surface p-[clamp(1rem,3vw,2rem)] lg:rounded-3xl lg:p-[clamp(1.25rem,3vw,2.5rem)]'>
            <div className='grid grid-cols-1 gap-[clamp(0.875rem,2vh,1.25rem)] sm:grid-cols-2'>
              <div>
                <dt className='text-fluid-meta text-ink-faint'>{t.rates.bynToPln}</dt>
                <dd className='text-fluid-rate mt-1 font-medium tabular-nums text-ink'>
                  1 BYN = {formatRate(bynToPlnRate)} PLN
                </dd>
              </div>
              <div>
                <dt className='text-fluid-meta text-ink-faint'>{t.rates.plnToByn}</dt>
                <dd className='text-fluid-rate mt-1 font-medium tabular-nums text-ink'>
                  1 PLN = {formatRate(plnToBynRate)} BYN
                </dd>
              </div>
            </div>

            <div className='border-t border-line pt-[clamp(0.875rem,2vh,1.25rem)]'>
              <div className='grid grid-cols-1 gap-[clamp(0.875rem,2vh,1.25rem)] sm:grid-cols-2'>
                <div>
                  <dt className='text-fluid-meta text-ink-faint'>{t.rates.directConversion}</dt>
                  <dd className='text-fluid-rate mt-1 font-medium tabular-nums text-ink'>
                    {displayByn} BYN = {directPlnAmount} PLN
                  </dd>
                </div>
                <div>
                  <dt className='text-fluid-meta text-ink-faint'>{t.rates.reverseConversion}</dt>
                  <dd className='text-fluid-rate mt-1 font-medium tabular-nums text-ink'>
                    {displayByn} BYN = {reversePlnAmount} PLN
                  </dd>
                </div>
              </div>
            </div>
          </dl>

          <footer className='mt-[clamp(1rem,3vh,2rem)] flex flex-col gap-3 border-t border-line pt-[clamp(0.875rem,2vh,1.5rem)] sm:flex-row sm:items-center sm:justify-between'>
            <span className='text-fluid-meta text-ink-faint'>
              {formatMessage(t.rates.updated, { date: updatedAt })}
            </span>
            <span className='text-fluid-meta w-fit rounded-full bg-surface px-3 py-1 font-medium text-ink-muted'>
              {t.rates.revolutApi}
            </span>
          </footer>

          <p className='text-fluid-meta mt-[clamp(0.75rem,2vh,1.25rem)] text-center text-ink-faint lg:text-left'>
            {t.rates.attribution}
          </p>
        </div>
      </div>
    </section>
  );
}
