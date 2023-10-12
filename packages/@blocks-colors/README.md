# Design Blocks Colors

A set of open-source color systems to design your apps beautiful and accessible.

Choose the color scheme that best fits your project:

- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [Radix Colors](https://www.radix-ui.com/colors)

## Super quick start

```bash
// with pnpm
pnpm add  @design-blocks/colors

// with yarn
yarn add @design-blocks/colors

// with npm
npm add  @design-blocks/colors
```

### Tailwind CSS

```tsx
import colors from '@design-blocks/colors/tailwind-css';

<Text styles={{ color: colors.amber[500] }} />;
```
`or`

```tsx
import {tailwindCssColors} from '@design-blocks/colors';

<Text styles={{ color: tailwindCssColors.colors.amber[500] }} />;
```

### Radix Colors
```tsx
import colors from '@design-blocks/colors/radix-ui';

<Text styles={{ color: colors.amber[500] }} />;
```

`or`

```tsx
import {radixUiColors} from '@design-blocks/colors';

<Text styles={{ color: radixUiColors.colors.amber[500] }} />;
```

## with `@design-blocks`;

```ts
import '@design-blocks/native';
import type { Colors } from '@design-blocks/colors/tailwind-css';

declare module '@design-blocks/native' {
  export interface Theme {
    colors: Colors;
  }
}
```
