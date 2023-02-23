# Design Blocks Colors

A set of open-source color systems to design your apps beautiful and accessible.

Use the color scheme that you like best for your project

- [Tailwindcss Colors](https://tailwindcss.com/docs/customizing-colors)
- [Radix Colors](https://www.radix-ui.com/colors)

## Super quick start

```bash
// with yarn
yarn add @design-blocks/colors

// with npm
npm add  @design-blocks/colors

// with pnpm
pnpm add  @design-blocks/colors
```

```tsx
import { colorSchemes } from '@design-blocks/colors';

const { tailwindCss } = colorSchemes;

<Text styles={{ color: tailwindCss.amber[500] }} />;
```
