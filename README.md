![design-blocks](./docs/preview_beta.png)

<h1 align="center">
  Build your mobile applications React Native with blocks
</h1>

An open source UI component library that focuses on customization, developer experience, and building mobile apps with
react-native.

You can use these components as the base layer of your design system or adopt them incrementally.

- [🏄‍♀️ `@design-blocks/primitives`](https://github.com/wootsbot/design-blocks/tree/main/packages/%40blocks-primitives) -
  Unstyled components for building high‑quality design systems and mobile apps in React-Native.
- [💥 `@design-blocks/native`](https://github.com/wootsbot/design-blocks/tree/main/packages/native) - Use all the
  packages to create your design system or create your developments faster.
- [💅 `@design-blocks/colors`](https://github.com/wootsbot/design-blocks/tree/main/packages/%40blocks-colors) - A set of
  open-source color systems to design your apps beautiful and accessible.
  [Tailwindcss Colors](https://tailwindcss.com/docs/customizing-colors), [Radix Colors](https://www.radix-ui.com/colors)

## Documentation

For full documentation, visit [designblocks.dev](https://designblocks.dev).(WIP)

## Install

```sh
// with pnpm
pnpm add  @design-blocks/native

// with yarn
yarn add @design-blocks/native

// with npm
npm add  @design-blocks/native

// with bun
bun bun add @design-blocks/native
```

## Configure Design Blocks

### Create your config file

To configure Design Blocks, create a blocks.config.ts file (.js works too) and import the `createBlocks` function.

```ts
// blocks.config.ts
import { createBlocks } from '@design-blocks/native';
```

This function receives a configuration object:

- theme: Define your design theme, which map to CSS properties.
- devTools: Create custom utils to improve your developer experience.

And returns all the available functions above.

- block: The `block` function facilitates creating styled React-Native components, allowing clear and organized CSS styling within your projects.
- theme: The object from `theme` is passed to the `ThemeProvider`, enabling the use of accessible tokens in your project, facilitating style management and accessibility in your components.
- devTools: Create custom utils to improve your developer experience.
- css: Facilitates string interpolation for writing CSS in a readable and organized manner.
- makeTheme: The `makeTheme` function creates a theme object for your `@design-blocks`, organizing styling values for use in your components, promoting consistency across your project.

```tsx
// blocks.config.ts

import { createBlocks, createTheme } from '@design-blocks/native';
import colors from '@design-blocks/colors/tailwind-css';

export const themeDefault = {
  colors: {
    ...colors,
  },
  extend: {
    spacings: {
      '7xl': 76,
      '8xl': 80,
    },
    radii: {
      '6xl': 32,
      '7xl': 36,
    },
    fontSizes: {
      '10xl': 32,
    },
  },
} as const;

const [themeTokens] = createTheme(themeDefault);
export const { block, css, theme, utils } = createBlocks(themeTokens);
```

```tsx
// App.tsx index root application react-native

import React from 'react';

import RootNavigator from './RootNavigation';

import { ThemeProvider } from '@design-blocks/native';

import { theme } from './blocks.config';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigator />
    </ThemeProvider>
  );
};

export default App;
```

#### Import and use it

From this point onwards, you'll be importing `block` and other functions from blocks.config.

```tsx
import { block } from '[path-to]/blocks.config';

const Description = block.Text(({ theme }) => ({
  color: theme.colors.violet[400],
  fontSize: 30,
}));
```

> Use an alias for `blocks.config` this will help the developer experience

```js
// tsconfig.json or jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/blocks": ["./blocks.config.ts"],
    }
  }
}
```

```js
// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@blocks': './blocks.config.ts',
          ...
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};

```

And as a result has improved the development experience

```tsx
import { block } from '@/blocks';

const DescriptionBlock = block.Text(({ theme }) => ({
  color: theme.colors.violet[400],
  fontSize: 30,
}));
```

## Contributing

Please follow our [contributing guidelines](./.github/CONTRIBUTING.md).

## Authors

- Jorge Luis Calleja A. ([@wootsbot](https://twitter.com/wootsbot))
