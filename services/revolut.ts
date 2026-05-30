export type RevolutRate = {
  rate: number;
  timestamp: number;
};

export type RevolutQuote = {
  rate: RevolutRate;
};

export type CurrencyPair = {
  BYNtoPLN: RevolutQuote;
  PLNtoBYN: RevolutQuote;
};

const REVOLUT_QUOTE_URL = 'https://www.revolut.com/api/exchange/quote';

export async function getCurrencyQuote(from: string, to: string): Promise<RevolutQuote> {
  const params = new URLSearchParams({
    amount: '50000',
    country: 'PL',
    isRecipientAmount: 'false',
    fromCurrency: from,
    toCurrency: to,
  });

  const response = await fetch(`${REVOLUT_QUOTE_URL}?${params}`, {
    headers: { 'accept-language': 'en' },
    cache: 'no-cache',
  });

  if (!response.ok) {
    throw new Error(`Revolut API error: ${response.status}`);
  }

  return response.json();
}

export async function getCurrencyPair(): Promise<CurrencyPair> {
  const [BYNtoPLN, PLNtoBYN] = await Promise.all([
    getCurrencyQuote('BYN', 'PLN'),
    getCurrencyQuote('PLN', 'BYN'),
  ]);

  return { BYNtoPLN, PLNtoBYN };
}
