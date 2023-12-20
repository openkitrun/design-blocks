import { baseTheme } from '@design-blocks/theme';

import { createTokens } from '..';

describe('createTokens', () => {
  it('should return default theme correctly', () => {
    const tokens = createTokens({ theme: { tokens: {} } });

    expect(tokens).toEqual([baseTheme]);
  });

  it('should return default theme and tokens "colors" added', () => {
    const tokens = createTokens({
      theme: {
        tokens: {
          colors: {
            red: {
              100: '#ff0000',
            },
          },
        },
      },
    });

    expect(tokens).toEqual([{ ...baseTheme, colors: { red: { 100: '#ff0000' } } }]);
  });

  it('should return default theme and tokens "spacings" added in "extendTokens"', () => {
    const tokens = createTokens({
      theme: {
        tokens: {},
        extendTokens: {
          spacings: {
            '7xl': 80,
          },
        },
      },
    });

    expect(tokens).toEqual([{ ...baseTheme, spacings: { ...baseTheme.spacings, '7xl': 80 } }]);
  });

  it('should return default theme and tokens "fontSizes" added in "extendTokens"', () => {
    const tokens = createTokens({
      theme: {
        tokens: {},
        extendTokens: {
          fontSizes: {
            '10xl': 80,
          },
        },
      },
    });

    expect(tokens).toEqual([{ ...baseTheme, fontSizes: { ...baseTheme.fontSizes, '10xl': 80 } }]);
  });

  it('should return default theme and tokens "fontWeights" added in "extendTokens"', () => {
    const tokens = createTokens({
      theme: {
        tokens: {},
        extendTokens: {
          fontWeights: {
            black: '900',
          },
        },
      },
    });

    expect(tokens).toEqual([{ ...baseTheme, fontWeights: { ...baseTheme.fontWeights, black: '900' } }]);
  });

  it('should return default theme and tokens "radii" added in "extendTokens"', () => {
    const tokens = createTokens({
      theme: {
        tokens: {},
        extendTokens: {
          radii: {
            '6xl': 32,
          },
        },
      },
    });

    expect(tokens).toEqual([{ ...baseTheme, radii: { ...baseTheme.radii, '6xl': 32 } }]);
  });

  it('should return default theme and tokens "borders" added in "extendTokens"', () => {
    const tokens = createTokens({
      theme: {
        tokens: {},
        extendTokens: {
          borders: {
            '6xl': 32,
          },
        },
      },
    });

    expect(tokens).toEqual([{ ...baseTheme, borders: { ...baseTheme.borders, '6xl': 32 } }]);
  });

  it('should return default theme and tokens "sizes" added in "extendTokens"', () => {
    const tokens = createTokens({
      theme: {
        tokens: {},
        extendTokens: {
          sizes: {
            '21xl': 192,
          },
        },
      },
    });

    expect(tokens).toEqual([{ ...baseTheme, sizes: { ...baseTheme.sizes, '21xl': 192 } }]);
  });

  it('should return default theme and tokens "utils" added', () => {
    const tokens = createTokens({
      theme: {
        tokens: {},
      },
      utils: {
        getValue: () => {},
      },
    });

    expect(tokens[0]).toHaveProperty('utils.getValue');
    expect(typeof tokens[0].utils.getValue).toBe('function');
  });
});
