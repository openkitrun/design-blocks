![design-blocks](./docs/preview.png)

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

## Super quick start

```sh
// with pnpm
pnpm add  @design-blocks/native

// with yarn
yarn add @design-blocks/native

// with npm
npm add  @design-blocks/native
```

### Configure Design Blocks

#### Create your config file

To configure Design Blocks, create a blocks.config.ts file (.js works too) and import the `createBlocks` function.

```ts
// blocks.config.ts
import { createBlocks } from '@design-blocks/native';
```

This function receives a configuration object:

- theme: Define your design theme, which map to CSS properties.
- devTools: Create custom utils to improve your developer experience.

And returns all the available functions above.

```tsx
// blocks.config.ts

import { createBlocks } from '@design-blocks/native';

export const { theme, block, makeTheme, devTools } = createBlocks({
  theme: {
    colors: {
      pink: {
        300: '#000',
      },
    },
  },

  devTools: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});
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

```
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

And as a result has improved the development experience

```tsx
import { block } from '@/blocks';

const Description = block.Text(({ theme }) => ({
  color: theme.colors.violet[400],
  fontSize: 30,
}));
```
