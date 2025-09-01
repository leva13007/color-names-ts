# 🎨 color-names-ts

A modern, ESM-friendly, **TypeScript-native** alternative to [`color-name`](https://www.npmjs.com/package/color-name).

> Includes all 147 CSS Level 4 named colors with both HEX and RGB representations, fully typed and tree-shakable.

---

## ✨ Features

- ✅ All 147 named CSS color keywords
- ✅ Typed `ColorName` union type
- ✅ ESM + CJS support (`exports` field)
- ✅ Dual representation: HEX and `[R, G, B]`
- ✅ Zero dependencies
- ✅ Works in Node.js, Bun, Deno, and modern browsers

---

## 📦 Install

```bash
npm install color-names-ts
```

---

## 🔧 Usage

```ts
import { colorsHex, colorsRgb, colorNames, type ColorName } from 'color-names-ts';

colorsHex.red; // '#ff0000'
colorsRgb.red; // [255, 0, 0]

const name: ColorName = 'orchid';
const hex = colorsHex[name]; // '#da70d6'
```

---

## 📁 Exports

```ts
// All color names
export const colorNames: readonly ColorName[];

// HEX mapping
export const colorsHex: Record<ColorName, string>;

// RGB mapping
export const colorsRgb: Record<ColorName, [number, number, number]>;

// Union type of all names
export type ColorName = 'red' | 'green' | 'blue' | ...;
```

---

## 🔍 Source

Based on the official [CSS Color Module Level 4](https://drafts.csswg.org/css-color-4/#named-colors)

---

## 🧠 Author

Oleh Levchenko ([@zloyleva](https://github.com/zloyleva))

---

## 📜 License

MIT
