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

export interface ThemeOptions {
  colors?: {
    [key: string]: string | ThemeOptions['colors'];
  };
  spacings?: Partial<Spacings>;
  fontSizes?: Partial<FontSizes>;
  fontWeights?: Partial<FontWeights>;
  radii?: Partial<Radii>;
  utils?: Partial<Utils>;
  extend?: {
    spacings?: {
      [key: string]: string | number | ThemeOptions['spacings'];
    };
    fontSizes?: {
      [key: string]: string | number | ThemeOptions['fontSizes'];
    };
    fontWeights?: {
      [key: string]: string | number | ThemeOptions['fontWeights'];
    };
    radii?: {
      [key: string]: string | number | ThemeOptions['radii'];
    };
    utils?: {
      [key: string]: any | ThemeOptions['utils'];
    };
  };
}
