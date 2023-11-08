import type { Theme, ThemeOptions } from '@design-blocks/theme';
import { baseTheme } from '@design-blocks/theme';
import { deepMerge } from '@design-blocks/utils';

export function createTheme<ThemeTokens extends Theme>(tokens: ThemeOptions): [ThemeTokens];
export function createTheme(tokensArg: ThemeOptions) {
  const {
    colors: colorsOverrides = {},
    spacings: spacingsOverrides = {},
    fontSizes: fontSizesOverrides = {},
    fontWeights: fontWeightsOverrides = {},
    radii: radiiOverrides = {},
    utils: utilsOverrides = {},

    extend = {
      spacings: {},
      fontSizes: {},
      fontWeights: {},
      radii: {},
      utils: {},
    },
    ...other
  } = tokensArg;

  const colors = deepMerge(baseTheme.colors, { ...colorsOverrides });
  const spacings = deepMerge(baseTheme.spacings, {
    ...spacingsOverrides,
    ...extend.spacings,
  });
  const fontSizes = deepMerge(baseTheme.fontSizes, {
    ...fontSizesOverrides,
    ...extend.fontSizes,
  });
  const fontWeights = deepMerge(baseTheme.fontWeights, {
    ...fontWeightsOverrides,
    ...extend.fontWeights,
  });
  const radii = deepMerge(baseTheme.radii, {
    ...radiiOverrides,
    ...extend.radii,
  });
  const utils = deepMerge(baseTheme.utils, { ...utilsOverrides });

  const blocksTheme = {
    colors,
    spacings,
    fontSizes,
    fontWeights,
    radii,
    extend,
    utils,
    ...other,
  };

  return [blocksTheme];
}
