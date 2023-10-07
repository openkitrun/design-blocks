/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DevTools, FontSizes, FontWeights, Radii, Spacings } from './themeTokens';

export * from './themeTokens';
export * from './baseTheme';
export * from './themeKeys';
export * from './theming';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface OuterTheme {}

export interface Theme {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  colors: Record<string, any>;
  spacings: Spacings;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  radii: Radii;
  extend: {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    colors: Record<string, any>;
    spacings: Spacings;
    fontSizes: FontSizes;
    fontWeights: FontWeights;
    radii: Radii;
  };
  devTools: DevTools;
}

export interface ITheme extends OuterTheme, Omit<Theme, keyof OuterTheme> {}
export interface ThemeOptions {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  colors?: Record<string, any>;
  spacings?: Theme['spacings'];
  fontSizes?: Theme['fontSizes'];
  fontWeights?: Theme['fontWeights'];
  radii?: Theme['radii'];
  extend?: {
    colors?: Theme['colors'];
    spacings?: Theme['spacings'];
    fontSizes?: Theme['fontSizes'];
    fontWeights?: Theme['fontWeights'];
    radii?: Theme['radii'];
  };
  devTools?: Theme['devTools'];
}
