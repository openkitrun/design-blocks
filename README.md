![design-blocks](./docs/preview_beta.png)

<h1 align="center">
  Build your mobile applications React Native with blocks
</h1>

An open source library with tools for creating dynamic user interfaces for applications written in React Native, focused on the developer experience.

You can use these components as the base layer of your design system or adopt them incrementally.

### Packages

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
pnpm add @design-blocks/native@beta

// with yarn
yarn add @design-blocks/native@beta

// with npm
npm add @design-blocks/native@beta

// with bun
bun add @design-blocks/native@beta
```

## Configuring Design Blocks

### Creating Your Configuration File

``To configure Design Blocks, create a blocks.config.ts file (.js works too) and import`createBlocks`and`createTokens`functions from`@design-blocks/native`.

```ts
// blocks.config.ts
import { createTokens, createBlocks } from "@design-blocks/native";
```

The `createTokens` function receives a configuration object:

- theme: defines the tokens for your theme, mapping to CSS properties and style props.
- utils: creates custom utilities to enhance your development experience.

And returns an array with the following:

- theme: at position 0 of the array is the theme with tokens generated by `createTokens`.
- utils: at position 1 of the array are the utils generated by `createTokens`.

The `createBlocks` function receives a configuration object:

- themes: or it can receive an object with multiple themes generated by `createTokens`.

And returns all the available functions:

- block: Facilitates creating styled React-Native components.
- themes: The `themes` object is passed to the `ThemeProvider`, allowing the use of multiple themes.
- utils: Create custom utils to improve your developer experience.
- css: Facilitates string interpolation for writing CSS in a readable manner.

```ts
// blocks.config.ts

import { createTokens, createBlocks } from "@design-blocks/native";

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

export const { block, css, themes } = createBlocks({
  themes: {
    light: themeTokens,
  },
});
```

### Using Your Configuration File

From this point onwards, you'll be importing block and other functions from blocks.config.

```tsx
// App.tsx index root application react-native

import React from "react";

import { ThemeProvider } from "@design-blocks/native";

import RootNavigator from "./RootNavigation";
import { themes } from "./blocks.config";

const App = () => {
  return (
    <ThemeProvider theme={themes.light}>
      <RootNavigator />
    </ThemeProvider>
  );
};

export default App;
```

```tsx
import { block } from "[path-to]/blocks.config";

const Description = block.Text(({ theme }) => ({
  color: theme.colors.violet[400],
  fontSize: 30,
}));
```

## Contributing

Please follow our [contributing guidelines](./.github/CONTRIBUTING.md).

## Authors

- Jorge Luis Calleja A. ([@wootsbot](https://twitter.com/wootsbot))
