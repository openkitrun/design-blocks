![design-blocks](./docs/preview_beta.png)

<h1 align="center">
  Build your mobile applications React Native with blocks
</h1>

An open source UI component library that focuses on customization, developer experience, and building mobile apps with
react-native.

<!-- You can use these components as the base layer of your design system or adopt ##them incrementally. -->

### Packages

<!--
- [🏄‍♀️ `@design-blocks/primitives`](https://github.com/wootsbot/design-blocks/tree/main/packages/%40blocks-primitives) -
  Unstyled components for building high‑quality design systems and mobile apps in React-Native.
- [💥 `@design-blocks/native`](https://github.com/wootsbot/design-blocks/tree/main/packages/native) - Use all the
  packages to create your design system or create your developments faster.
- [💅 `@design-blocks/colors`](https://github.com/wootsbot/design-blocks/tree/main/packages/%40blocks-colors) - A set of
  open-source color systems to design your apps beautiful and accessible.
  [Tailwindcss Colors](https://tailwindcss.com/docs/customizing-colors), [Radix Colors](https://www.radix-ui.com/colors) -->

- [💥 `@design-blocks/native`](https://github.com/openkitrun/design-blocks/tree/main/packages/native) - Core of Design Blocks. Features ThemeProvider, block, and createBlocks for token configuration, essential for UI customization and consistency.
- [🏄‍♀️ `@design-blocks/primitives`](https://github.com/openkitrun/design-blocks/tree/main/packages/%40blocks-primitives) -
  Provides basic components and functions for custom UI creation. Includes elements like Box, Stack, and Text, essential for UI construction.
- [🏄‍♀️ `@design-blocks/unstyled`](https://github.com/openkitrun/design-blocks/tree/main/packages/%40blocks-unstyled) -
  Accessible, style-agnostic components, ideal for integration in any Design Blocks project. Maximizes accessibility and design flexibility.
- [💅 `@design-blocks/colors`](https://github.com/openkitrun/design-blocks/tree/main/packages/%40blocks-colors) - A set of
  open-source color systems to design your apps beautiful and accessible.
  [Tailwindcss Colors](https://tailwindcss.com/docs/customizing-colors), [Radix Colors](https://www.radix-ui.com/colors)

<br/>

## Documentation

For detailed information and usage instructions, visit our [official documentation](https://designblocks.dev). (Work in Progress)

## Installation

To integrate Design Blocks into your project, you can install the package using your preferred package manager. Choose one of the following commands:

```sh
// with pnpm
pnpm add @design-blocks/native

// with yarn
yarn add @design-blocks/native

// with npm
npm add @design-blocks/native

// with bun
bun add @design-blocks/native
```

## Configuring Design Blocks

### Creating Your Configuration File

To configure Design Blocks, create a blocks.config.ts file (.js works too) and import `createBlocks` and `createTokens` functions from `@design-blocks/native`.

```ts
// blocks.config.ts
import { createTokens, createBlocks } from "@design-blocks/native";
```

The createTokens function receives a configuration object:

- theme: defines the tokens for your theme, which map to CSS properties and style props.
- utils: creates custom utilities to enhance your development experience.

And returns an array with the available tokens and utils.

```tsx
// blocks.config.ts

import { createBlocks, createTokens } from "@design-blocks/native";

const [themeTokens] = createTokens({
  theme: {
    tokens: {
      colors: {
        text: {
          primary: "#000",
          secondary: "#fff",
        },
        red: {
          100: "#FFEEEE",
          200: "#FACDCD",
          ...
        },
      },
    },
    extendTokens: {
      spacings: {
        "7xl": 76,
      },
      radii: {
        "6xl": 32,
      },
      fontSizes: {
        "10xl": 80,
      },
    },
  },
  utils: {
    toPixels: (value: number) => `${value}px`,
    ...
  },
});

export const { block, css, theme, themes } = createBlocks({
  theme: themeTokens,
});
```

## Contributing

Please follow our [contributing guidelines](./.github/CONTRIBUTING.md).

## Authors

- Jorge Luis Calleja A. ([@wootsbot](https://twitter.com/wootsbot))
