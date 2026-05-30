import type { Messages } from '../types';

export const en: Messages = {
  meta: {
    title: 'BYN ↔ PLN Converter',
    description: 'Currency converter for Belarusian ruble and Polish złoty, powered by Revolut rates.',
  },
  nav: {
    appearance: 'Appearance',
    language: 'Language',
    toolbar: 'Settings',
  },
  theme: {
    toggle: 'Toggle color theme',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
  },
  language: {
    menu: 'Select language',
    en: 'English',
    pl: 'Polish',
    ru: 'Russian',
  },
  converter: {
    eyebrow: 'Live exchange',
    title: 'BYN ↔ PLN',
    description: 'Revolut rates — enter an amount in either currency.',
    formLabel: 'Currency conversion form',
    bynLabel: 'Belarusian ruble',
    plnLabel: 'Polish złoty',
    plnHint: 'The other field updates using the mid-market average of both directions',
    scrollToRates: 'Rates & details',
    scrollToRatesAria: 'Scroll to rates and details',
    scrollToConverter: 'Back to converter',
    scrollToConverterAria: 'Scroll back to converter',
  },
  rates: {
    eyebrow: 'Rate details',
    title: 'Market breakdown',
    bynToPln: 'BYN → PLN',
    plnToByn: 'PLN → BYN',
    directConversion: 'Direct conversion',
    reverseConversion: 'Reverse conversion',
    updated: 'Updated {date}',
    revolutApi: 'Revolut API',
    attribution: 'Exchange rates provided by Revolut',
  },
};
