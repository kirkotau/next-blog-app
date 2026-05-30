import type { ActiveCurrencyField } from '@/hooks/useCurrencyConverter';

export const PANEL_INNER_CLASS =
  'mx-auto flex w-full max-w-2xl flex-1 flex-col lg:max-w-3xl xl:max-w-4xl';

export const CURRENCY_INPUT_CLASS =
  'input-py-fluid min-w-0 flex-1 bg-transparent px-[clamp(0.875rem,3vw,1.25rem)] text-fluid-input font-semibold tabular-nums text-ink outline-none placeholder:text-ink-faint';

export const CURRENCY_FIELD_SHELL_CLASS =
  'flex items-stretch overflow-hidden rounded-2xl border bg-surface-inset transition focus-within:ring-2 lg:rounded-3xl';

export const CURRENCY_BADGE_CLASS =
  'flex min-w-[clamp(3.25rem,10vw,4.5rem)] items-center justify-center border-l border-line bg-surface px-[clamp(0.75rem,2vw,1.25rem)]';

export function getActiveFieldBorderClass(
  field: ActiveCurrencyField,
  activeField: ActiveCurrencyField
): string {
  return field === activeField
    ? 'border-accent/50 focus-within:border-accent/50 focus-within:ring-accent/20'
    : 'border-line focus-within:border-accent/50 focus-within:ring-accent/20';
}
