import type { Messages } from '../types';

export const pl: Messages = {
  meta: {
    title: 'Przelicznik BYN ↔ PLN',
    description: 'Przelicznik walut dla rubla białoruskiego i złotego polskiego oparty na kursach Revolut.',
  },
  nav: {
    appearance: 'Wygląd',
    language: 'Język',
    toolbar: 'Ustawienia',
  },
  theme: {
    toggle: 'Przełącz motyw kolorystyczny',
    switchToLight: 'Przełącz na jasny motyw',
    switchToDark: 'Przełącz na ciemny motyw',
  },
  language: {
    menu: 'Wybierz język',
    en: 'Angielski',
    pl: 'Polski',
    ru: 'Rosyjski',
  },
  converter: {
    eyebrow: 'Kurs na żywo',
    title: 'BYN ↔ PLN',
    description: 'Kursy Revolut — wpisz kwotę w dowolnej walucie.',
    formLabel: 'Formularz przewalutowania',
    bynLabel: 'Rubel białoruski',
    plnLabel: 'Złoty polski',
    plnHint: 'Drugie pole aktualizuje się na podstawie średniego kursu rynkowego obu kierunków',
    scrollToRates: 'Kursy i szczegóły',
    scrollToRatesAria: 'Przewiń do kursów i szczegółów',
    scrollToConverter: 'Wróć do przelicznika',
    scrollToConverterAria: 'Przewiń do przelicznika',
  },
  rates: {
    eyebrow: 'Szczegóły kursów',
    title: 'Zestawienie rynkowe',
    bynToPln: 'BYN → PLN',
    plnToByn: 'PLN → BYN',
    directConversion: 'Przewalutowanie bezpośrednie',
    reverseConversion: 'Przewalutowanie odwrotne',
    updated: 'Zaktualizowano {date}',
    revolutApi: 'Revolut API',
    attribution: 'Kursy wymiany dostarcza Revolut',
  },
};
