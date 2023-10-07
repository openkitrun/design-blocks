import type { DevTools, FontSizes, FontWeights, Radii, Spacings } from './themeTokens';

export * from './themeTokens';
export * from './baseTheme';
export * from './themeKeys';
export * from './theming';

export interface OuterTheme {}

export interface Theme {
  spacings: Spacings;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  radii: Radii;
  devTools: DevTools;
}

export interface ITheme extends OuterTheme, Omit<Theme, keyof OuterTheme> {}
export interface ThemeOptions {
  colors?: Record<string, any>;
  spacings?: Theme['spacings'];
  fontSizes?: Theme['fontSizes'];
  fontWeights?: Theme['fontWeights'];
  radii?: Theme['radii'];
  extend?: {
    colors?: Record<string, any>;
    spacings?: Theme['spacings'];
    fontSizes?: Theme['fontSizes'];
    fontWeights?: Theme['fontWeights'];
    radii?: Theme['radii'];
  };
  devTools?: Theme['devTools'];
}
