import type { Borders, FontSizes, FontWeights, Radii, Sizes, Spacings, Utils } from './themeTokens';

export interface Colors {
  [key: string]: string | Colors;
}

export interface Theme {
  colors: Colors;
  spacings: Spacings;
  sizes: Sizes;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  radii: Radii;
  borders: Borders;
  utils: Utils;
}

type baseValue = string | number;

export interface TokensOptions {
  theme: {
    tokens: {
      colors?: {
        [key: string]: string | TokensOptions['theme']['tokens']['colors'];
      };
      spacings?: Partial<Spacings>;
      sizes?: Partial<Sizes>;
      fontSizes?: Partial<FontSizes>;
      fontWeights?: Partial<FontWeights>;
      radii?: Partial<Radii>;
      borders?: Partial<Borders>;
    };

    extendTokens?: {
      spacings?: {
        [key: string]: baseValue | TokensOptions['theme']['tokens']['spacings'];
      };
      sizes?: {
        [key: string]: baseValue | TokensOptions['theme']['tokens']['sizes'];
      };
      fontSizes?: {
        [key: string]: baseValue | TokensOptions['theme']['tokens']['fontSizes'];
      };
      fontWeights?: {
        [key: string]: string | TokensOptions['theme']['tokens']['fontWeights'];
      };
      radii?: {
        [key: string]: baseValue | TokensOptions['theme']['tokens']['radii'];
      };
      borders?: {
        [key: string]: baseValue | TokensOptions['theme']['tokens']['borders'];
      };
    };
  };
  utils?: Partial<Utils>;
}
