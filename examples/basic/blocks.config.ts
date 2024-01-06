import colors from '@design-blocks/colors/tailwind-css';
import { createBlocks, createTokens } from '@design-blocks/native';

// export const lightTheme = {
//   tokens: {
//     colors: {
//       ...colors,
//     },
//   },
//   extendTokens: {
//     spacings: {
//       '7xl': 76,
//       '8xl': 80,
//     },
//     radii: {
//       '6xl': 32,
//       '7xl': 36,
//     },
//     fontSizes: {
//       '10xl': 80,
//     },
//   },
// } as const;

// export const darkTheme = {
//   tokens: {
//     colors: {
//       ...colors,
//     },
//   },
//   extendTokens: {
//     spacings: {
//       '7xl': 76,
//       '8xl': 80,
//     },
//     radii: {
//       '6xl': 32,
//       '7xl': 36,
//     },
//     fontSizes: {
//       '10xl': 80,
//     },
//   },
// } as const;

// const [themeTokens] = createTokens({ theme: lightTheme });
// const [darkThemeTokens] = createTokens({ theme: darkTheme });

// export const { block, css, themes } = createBlocks({
//   themes: { light: themeTokens, dark: darkThemeTokens },
// });

const tokens = createTokens({
  colors: {
    ...colors,
    red: {
      50: '#ffe3e3',
      100: '#ffc9c9',
      200: '#ffa8a8',
    },
  },
  sizes: {
    xl: 50,
  },
  spacings: {
    xl: 50,
    sm: 10,
  },
  fontSizes: {},
  fontWeights: {},
  borders: {},
  radii: {},
} as const);

const { themes } = createBlocks({ themes: { light: tokens } });

// biome-ignore lint/suspicious/noConsoleLog: <explanation>
console.log(themes.light.colors.orange);
