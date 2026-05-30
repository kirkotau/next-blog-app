export type Locale = "en" | "pl" | "ru";

export type Messages = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    appearance: string;
    language: string;
    toolbar: string;
  };
  theme: {
    toggle: string;
    switchToLight: string;
    switchToDark: string;
  };
  language: {
    menu: string;
    en: string;
    pl: string;
    ru: string;
  };
  converter: {
    eyebrow: string;
    title: string;
    description: string;
    formLabel: string;
    bynLabel: string;
    plnLabel: string;
    plnHint: string;
    scrollToRates: string;
    scrollToRatesAria: string;
    scrollToConverter: string;
    scrollToConverterAria: string;
  };
  rates: {
    eyebrow: string;
    title: string;
    bynToPln: string;
    plnToByn: string;
    directConversion: string;
    reverseConversion: string;
    updated: string;
    revolutApi: string;
    attribution: string;
  };
};
