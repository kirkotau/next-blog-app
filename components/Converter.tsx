'use client';

import { ConverterPanel } from '@/components/converter/ConverterPanel';
import { RatesPanel } from '@/components/converter/RatesPanel';
import { Providers } from '@/components/Providers';
import { useCurrencyConverter } from '@/hooks/useCurrencyConverter';
import type { CurrencyPair } from '@/services/revolut';

type Props = {
  currency: CurrencyPair;
};

function ConverterContent({ currency }: Props) {
  const converterState = useCurrencyConverter(currency);

  return (
    <div className='lg:grid lg:min-h-screen lg:grid-cols-2'>
      <ConverterPanel
        activeField={converterState.activeField}
        bynInput={converterState.bynInput}
        plnInput={converterState.plnInput}
        handleBynChange={converterState.handleBynChange}
        handlePlnChange={converterState.handlePlnChange}
      />
      <RatesPanel
        bynToPlnRate={converterState.bynToPlnRate}
        plnToBynRate={converterState.plnToBynRate}
        updatedAt={converterState.updatedAt}
        displayByn={converterState.displayByn}
        directPlnAmount={converterState.directPlnAmount}
        reversePlnAmount={converterState.reversePlnAmount}
      />
    </div>
  );
}

export function Converter({ currency }: Props) {
  return (
    <Providers>
      <ConverterContent currency={currency} />
    </Providers>
  );
}
