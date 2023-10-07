import type { Theme, ThemeOptions } from '@design-blocks/theme';

import { baseTheme } from '@design-blocks/theme';
import { deepMerge } from '@design-blocks/utils';

/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @param args Deep merge the arguments with the about to be returned theme.
 * @returns A complete, ready-to-use theme object.
 */
export function makeTheme(themeOptions: ThemeOptions = {}): Theme {
  const {
    colors: colorsBase = {},
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

  const colors = deepMerge(colorsBase, { ...extend.colors });
  const spacings = deepMerge(baseTheme.spacings, { ...spacingsOverrides, ...extend.spacings });
  const fontSizes = deepMerge(baseTheme.fontSizes, { ...fontSizesOverrides, ...extend.fontSizes });
  const fontWeights = deepMerge(baseTheme.fontWeights, {
    ...fontWeightsOverrides,
    ...extend.fontWeights,
  });
  const radii = deepMerge(baseTheme.radii, { ...radiiOverrides, ...extend.radii });
  const devTools = deepMerge(baseTheme.devTools, { ...devToolsOverrides });

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
