import { createBlocks, createTokens } from '@design-blocks/native';
import colors from '@design-blocks/colors/tailwind-css';

export const lightTheme = {
  tokens: {
    colors: {
      ...colors,
    },
  },
  extendTokens: {
    spacings: {
      '7xl': 76,
      '8xl': 80,
    },
    radii: {
      '6xl': 32,
      '7xl': 36,
    },
    fontSizes: {
      '10xl': 80,
    },
  },
} as const;

export const darkTheme = {
  tokens: {
    colors: {
      ...colors,
    },
  },
  extendTokens: {
    spacings: {
      '7xl': 76,
      '8xl': 80,
    },
    radii: {
      '6xl': 32,
      '7xl': 36,
    },
    fontSizes: {
      '10xl': 80,
    },
  },
} as const;

const [themeTokens] = createTokens({ theme: lightTheme });
const [darkThemeTokens] = createTokens({ theme: darkTheme });

export const { block, css, themes } = createBlocks({
  themes: { light: themeTokens, dark: darkThemeTokens },
});
