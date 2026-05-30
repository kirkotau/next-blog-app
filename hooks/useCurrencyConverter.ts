'use client';

import { useLanguage } from '@/components/LanguageProvider';
import {
  averageBynFromPln,
  averagePlnFromByn,
  formatDisplayAmount,
  parseAmount,
  plnViaDirectRate,
  plnViaReverseRate,
  sanitizeAmountInput,
} from '@/lib/converter';
import { getLocaleTag } from '@/lib/i18n';
import type { CurrencyPair } from '@/services/revolut';
import { ChangeEvent, useMemo, useState } from 'react';

export type ActiveCurrencyField = 'byn' | 'pln';

export function useCurrencyConverter(currency: CurrencyPair) {
  const { locale } = useLanguage();
  const [bynInput, setBynInput] = useState('');
  const [plnInput, setPlnInput] = useState('');
  const [activeField, setActiveField] = useState<ActiveCurrencyField>('byn');

  const bynToPlnRate = currency.BYNtoPLN.rate.rate;
  const plnToBynRate = currency.PLNtoBYN.rate.rate;

  const updatedAt = useMemo(
    () =>
      new Date(currency.BYNtoPLN.rate.timestamp).toLocaleString(getLocaleTag(locale), {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
    [currency.BYNtoPLN.rate.timestamp, locale]
  );

  const bynValue = parseAmount(bynInput);
  const displayByn = formatDisplayAmount(bynInput);
  const directPlnAmount = plnViaDirectRate(bynValue, bynToPlnRate);
  const reversePlnAmount = plnViaReverseRate(bynValue, plnToBynRate);

  const handleBynChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formatted = sanitizeAmountInput(event.target.value);
    setActiveField('byn');
    setBynInput(formatted);

    if (formatted === '') {
      setPlnInput('');
      return;
    }

    setPlnInput(averagePlnFromByn(parseAmount(formatted), bynToPlnRate, plnToBynRate));
  };

  const handlePlnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formatted = sanitizeAmountInput(event.target.value);
    setActiveField('pln');
    setPlnInput(formatted);

    if (formatted === '') {
      setBynInput('');
      return;
    }

    setBynInput(averageBynFromPln(parseAmount(formatted), bynToPlnRate, plnToBynRate));
  };

  return {
    activeField,
    bynInput,
    plnInput,
    bynToPlnRate,
    plnToBynRate,
    updatedAt,
    displayByn,
    directPlnAmount,
    reversePlnAmount,
    handleBynChange,
    handlePlnChange,
  };
}
