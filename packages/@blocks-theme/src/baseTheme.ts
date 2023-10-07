/* eslint-disable @typescript-eslint/no-explicit-any */
//import type { Spacings, FontSizes, FontWeights, Radii, DevTools } from './themeTokens';
import { devTools, fonts, radii, spacings } from './themeTokens';

export const baseTheme = {
  colors: {},
  spacings,
  fontSizes: fonts.fontSizes,
  fontWeights: fonts.fontWeights,
  radii,
  /**
   * Extending the default theme
   *
   * @remarks
   * If you’d like to preserve the default values for a theme option but also add new values,
   * add your extensions under the extend key in the theme section of your configuration file
   */
  extend: {
    colors: {},
    spacings: {},
    fontSizes: {},
    fontWeights: {},
    radii: {},
  },
  devTools,
};

//export type ITheme = keyof typeof baseTheme;
//export type Theme = typeof baseTheme;
// export interface Theme {
//   colors: Record<string, any>;
//   spacings: Spacings;
//   fontSizes: FontSizes;
//   fontWeights: FontWeights;
//   radii: Radii;
//   extend: {
//     colors: Record<string, any>;
//     spacings: Spacings;
//     fontSizes: FontSizes;
//     fontWeights: FontWeights;
//     radii: Radii;
//   };
//   devTools: DevTools;
// }

// export interface ThemeOptions {
//   colors?: Record<string, any>;
//   spacings?: Spacings;
//   fontSizes?: FontSizes;
//   fontWeights?: FontWeights;
//   radii?: Radii;
//   extend?: {
//     colors?: Record<string, any>;
//     spacings?: Spacings;
//     fontSizes?: FontSizes;
//     fontWeights?: FontWeights;
//     radii?: Radii;
//   };
//   devTools?: DevTools;
// }
