import type { ActiveCurrencyField } from '@/hooks/useCurrencyConverter';
import { ChangeEvent } from 'react';
import {
  CURRENCY_BADGE_CLASS,
  CURRENCY_FIELD_SHELL_CLASS,
  CURRENCY_INPUT_CLASS,
  getActiveFieldBorderClass,
} from './styles';

type Props = {
  id: string;
  label: string;
  currencyCode: 'BYN' | 'PLN';
  value: string;
  activeField: ActiveCurrencyField;
  field: ActiveCurrencyField;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  hint?: string;
};

export function CurrencyAmountField({
  id,
  label,
  currencyCode,
  value,
  activeField,
  field,
  onChange,
  hint,
}: Props) {
  return (
    <div>
      <label htmlFor={id} className='text-fluid-label mb-[clamp(0.375rem,1vh,0.625rem)] block font-medium text-ink-muted'>
        {label}
      </label>
      <div className={`${CURRENCY_FIELD_SHELL_CLASS} ${getActiveFieldBorderClass(field, activeField)}`}>
        <input
          id={id}
          type='text'
          inputMode='decimal'
          value={value}
          onChange={onChange}
          placeholder='0.00'
          className={CURRENCY_INPUT_CLASS}
        />
        <div className={CURRENCY_BADGE_CLASS} aria-hidden='true'>
          <span className='text-fluid-label font-semibold tracking-wide text-ink-muted'>{currencyCode}</span>
        </div>
      </div>
      {hint ? (
        <p className='text-fluid-meta mt-[clamp(0.25rem,1vh,0.625rem)] text-ink-faint'>{hint}</p>
      ) : null}
    </div>
  );
}
