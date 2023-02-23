export const fonts = {
  fontSizes: {
    xs: 9,
    sm: 10,
    md: 12,
    lg: 14,
    xl: 16,
    '2xl': 18,
    '3xl': 24,
    '4xl': 32,
    '5xl': 40,
    '6xl': 48,
    '7xl': 56,
    '8xl': 64,
    '9xl': 72,
  },

  fontWeights: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
};

export type IFonts = keyof typeof fonts;
export type Fonts = Partial<typeof fonts>;

export type IFontSizes = keyof typeof fonts.fontSizes;
export type FontSizes = Partial<typeof fonts.fontSizes>;

export type IFontWeights = keyof typeof fonts.fontWeights;
export type FontWeights = Partial<typeof fonts.fontWeights>;
