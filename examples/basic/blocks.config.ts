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
      '10xl': 80,
    },
  },
} as const;

export type AppTheme = typeof themeDefault;

const [themeTokens] = createTheme(themeDefault);
export const { block, css, theme, utils } = createBlocks(themeTokens);
