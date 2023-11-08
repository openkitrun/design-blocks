import { fonts, radii, spacings, utils } from './themeTokens';

export const baseTheme = {
  colors: {},
  spacings,
  fontSizes: fonts.fontSizes,
  fontWeights: fonts.fontWeights,
  radii,
  utils,
  /**
   * Extending the default theme
   *
   * @remarks
   * If you’d like to preserve the default values for a theme option but also add new values,
   * add your extensions under the extend key in the theme section of your configuration file
   */
  extend: {
    spacings: {},
    fontSizes: {},
    fontWeights: {},
    radii: {},
    utils: {},
  },
};
