# BYN ↔ PLN Converter

A single-page currency converter for Belarusian ruble (BYN) and Polish złoty (PLN). Rates are fetched live from the Revolut public exchange API.

## Stack

- Next.js 13 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Setup

```bash
npm install
```

No environment variables are required — the app calls the Revolut API directly.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## Project structure

```
app/
  layout.tsx          Root layout, fonts, theme bootstrap
  page.tsx            Server page — fetches rates, renders converter
  globals.css         Design tokens + Tailwind utility layers

components/
  Converter.tsx       Composes converter and rates panels
  ThemeToggle.tsx     Light / dark theme control
  converter/          UI sections and shared field styles

hooks/
  useCurrencyConverter.ts   Input state and conversion logic

lib/
  converter.ts        Amount parsing and rate calculations
  theme.ts            Theme persistence helpers
  scroll.ts           Smooth scroll between mobile panels
  i18n/               Locales, messages, and language helpers

services/
  revolut.ts          Revolut API client
```

## Notes

- The home page is rendered dynamically (`force-dynamic`) so exchange rates are always fetched at request time.
- Theme preference is stored in `localStorage` under the key `theme`. On first visit, the OS color scheme is used.
- Language preference is stored in `localStorage` under the key `locale`. Supported locales: `en`, `pl`, `ru`. On first visit, the browser language is detected when possible.
