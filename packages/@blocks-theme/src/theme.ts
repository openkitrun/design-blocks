import type { FontSizes, FontWeights, Radii, Spacings, Utils } from './themeTokens';

export interface Colors {
  [key: string]: string | Colors;
}

export interface Theme {
  colors: Colors;
  spacings: Spacings;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  radii: Radii;
  utils: Utils;
}

export interface TokensOptions {
  theme: {
    tokens: {
      colors?: {
        [key: string]: string | TokensOptions['theme']['tokens']['colors'];
      };
      spacings?: Partial<Spacings>;
      fontSizes?: Partial<FontSizes>;
      fontWeights?: Partial<FontWeights>;
      radii?: Partial<Radii>;
    };

    extendTokens?: {
      spacings?: {
        [key: string]: string | number | TokensOptions['theme']['tokens']['spacings'];
      };
      fontSizes?: {
        [key: string]: string | number | TokensOptions['theme']['tokens']['fontSizes'];
      };
      fontWeights?: {
        [key: string]: string | number | TokensOptions['theme']['tokens']['fontWeights'];
      };
      radii?: {
        [key: string]: string | number | TokensOptions['theme']['tokens']['radii'];
      };
    };
  };
  utils?: Partial<Utils>;
}
