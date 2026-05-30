export function formatInputValue(inputValue: string): string {
  return inputValue
    .replace(/[^0-9.,]/g, '')
    .replace(',', '.')
    .replace(/(\.[^.]*)\./g, '$1');
}

export function clampDecimalInput(inputValue: string): string {
  const decimalIndex = inputValue.indexOf('.');

  if (decimalIndex === -1) {
    return inputValue;
  }

  const decimalPart = inputValue.substring(decimalIndex + 1, decimalIndex + 3);
  return inputValue.substring(0, decimalIndex + 1) + decimalPart;
}

export function sanitizeAmountInput(raw: string): string {
  return clampDecimalInput(formatInputValue(raw));
}

function multiplyRate(value: number, rate: number): string {
  return (value * rate).toFixed(2);
}

/** Mid-market PLN from BYN using direct and reverse Revolut quotes. */
export function averagePlnFromByn(
  byn: number,
  bynToPlnRate: number,
  plnToBynRate: number
): string {
  const direct = byn * bynToPlnRate;
  const reverse = byn / plnToBynRate;
  return ((direct + reverse) / 2).toFixed(2);
}

/** Mid-market BYN from PLN using direct and reverse Revolut quotes. */
export function averageBynFromPln(
  pln: number,
  bynToPlnRate: number,
  plnToBynRate: number
): string {
  const direct = pln * plnToBynRate;
  const reverse = pln / bynToPlnRate;
  return ((direct + reverse) / 2).toFixed(2);
}

export function plnViaDirectRate(byn: number, bynToPlnRate: number): string {
  return multiplyRate(byn, bynToPlnRate);
}

export function plnViaReverseRate(byn: number, plnToBynRate: number): string {
  return multiplyRate(byn, 1 / plnToBynRate);
}

export function parseAmount(value: string): number {
  const parsed = Number(value);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function formatDisplayAmount(value: string): string {
  if (value === '') {
    return '0.00';
  }

  return parseAmount(value).toFixed(2);
}

export function formatRate(rate: number): string {
  return rate.toFixed(4);
}
