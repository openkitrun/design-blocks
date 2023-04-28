import type { Theme, ThemeOptions } from '@design-blocks/theme';
import { baseTheme } from '@design-blocks/theme';

import { systemMerge } from './systemMerge';

/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @param args Deep merge the arguments with the about to be returned theme.
 * @returns A complete, ready-to-use theme object.
 */
export function makeTheme(themeOptions: ThemeOptions = {}): Theme {
  const {
    colors: colorsOverrides = {},
    spacings: spacingsOverrides = {},
    fontSizes: fontSizesOverrides = {},
    fontWeights: fontWeightsOverrides = {},
    radii: radiiOverrides = {},

    extend = {
      colors: {},
      spacings: {},
      fontSizes: {},
      fontWeights: {},
      radii: {},
    },

    devTools: devToolsOverrides = {},
    ...other
  } = themeOptions;

  const colors = systemMerge(baseTheme.colors, { ...colorsOverrides, ...extend.colors });
  const spacings = systemMerge(baseTheme.spacings, { ...spacingsOverrides, ...extend.spacings });
  const fontSizes = systemMerge(baseTheme.fontSizes, { ...fontSizesOverrides, ...extend.fontSizes });
  const fontWeights = systemMerge(baseTheme.fontWeights, { ...fontWeightsOverrides, ...extend.fontWeights });
  const radii = systemMerge(baseTheme.radii, { ...radiiOverrides, ...extend.radii });
  const devTools = systemMerge(baseTheme.devTools, { ...devToolsOverrides });

  const blocksTheme = {
    colors,
    spacings,
    fontSizes,
    fontWeights,
    radii,
    extend,
    devTools,
    ...other,
  } as Theme;

  return blocksTheme;
}
