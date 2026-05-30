import type { Messages } from '../types';

export const ru: Messages = {
  meta: {
    title: 'Конвертер BYN ↔ PLN',
    description: 'Конвертер беларуского рубля и польского злотого на курсах Revolut.',
  },
  nav: {
    appearance: 'Оформление',
    language: 'Язык',
    toolbar: 'Настройки',
  },
  theme: {
    toggle: 'Переключить тему',
    switchToLight: 'Переключить на светлую тему',
    switchToDark: 'Переключить на тёмную тему',
  },
  language: {
    menu: 'Выберите язык',
    en: 'Английский',
    pl: 'Польский',
    ru: 'Русский',
  },
  converter: {
    eyebrow: 'Курс в реальном времени',
    title: 'BYN ↔ PLN',
    description: 'Курсы Revolut — введите сумму в любой валюте.',
    formLabel: 'Форма конвертации валют',
    bynLabel: 'Беларуский рубль',
    plnLabel: 'Польский злотый',
    plnHint: 'Второе поле обновляется по среднерыночному курсу в обоих направлениях',
    scrollToRates: 'Курсы и детали',
    scrollToRatesAria: 'Прокрутить к курсам и деталям',
    scrollToConverter: 'Назад к конвертеру',
    scrollToConverterAria: 'Прокрутить к конвертеру',
  },
  rates: {
    eyebrow: 'Детали курсов',
    title: 'Рыночная сводка',
    bynToPln: 'BYN → PLN',
    plnToByn: 'PLN → BYN',
    directConversion: 'Прямая конвертация',
    reverseConversion: 'Обратная конвертация',
    updated: 'Обновлено {date}',
    revolutApi: 'Revolut API',
    attribution: 'Курсы валют предоставлены Revolut',
  },
};
