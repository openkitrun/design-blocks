import { createBlocks } from '..';
import { createTokens } from '../../createTokens';

describe('createBlocks', () => {
  const lightTheme = {
    tokens: {
      colors: {
        blue: {
          950: 'blue',
        },
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
  };

  const darkTheme = {
    tokens: {
      colors: {
        blue: {
          950: 'red',
        },
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
  };

  const utils = {
    px: (value: number) => `${value}px`,
  };

  const [themeTokens] = createTokens({ theme: lightTheme, utils });
  const [darkThemeTokens] = createTokens({ theme: darkTheme, utils });

  it('should return themes.light', () => {
    const result = createBlocks({
      themes: { light: themeTokens },
    });

    expect(result).toHaveProperty('themes');
    expect(result).toHaveProperty('themes.light');
    expect(result).toHaveProperty('block');
    expect(result).toHaveProperty('css');
  });

  it('should return multi themes', () => {
    const result = createBlocks({
      themes: { light: themeTokens, dark: darkThemeTokens },
    });

    expect(result).toHaveProperty('themes');
    expect(result).toHaveProperty('themes.light');
    expect(result).toHaveProperty('themes.dark');
    expect(result).toHaveProperty('block');
    expect(result).toHaveProperty('css');
  });
});
