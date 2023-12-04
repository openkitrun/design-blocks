import { baseTheme } from '@design-blocks/theme';
import { deepMerge } from '@design-blocks/utils';

import type { Theme, TokensOptions } from '@design-blocks/theme';

export function createTokens<ThemeTokens extends Theme = Theme>({ theme, utils }: TokensOptions): [ThemeTokens];
export function createTokens({ theme, utils: utilsTokens = {} }: TokensOptions) {
  const {
    colors: colorsOverrides = {},
    spacings: spacingsOverrides = {},
    fontSizes: fontSizesOverrides = {},
    fontWeights: fontWeightsOverrides = {},
    radii: radiiOverrides = {},
    borders: bordersOverrides = {},
    sizes: sizesOverrides = {},
    ...other
  } = theme.tokens;

  const utilsOverrides = utilsTokens;

  const {
    spacings: spacingsExtend = {},
    fontSizes: fontSizesExtend = {},
    fontWeights: fontWeightsExtend = {},
    radii: radiiExtend = {},
    borders: bordersExtend = {},
    sizes: sizesExtend = {},
  } = theme.extendTokens || {};

  const colors = deepMerge(baseTheme.colors, { ...colorsOverrides });
  const spacings = deepMerge(baseTheme.spacings, {
    ...spacingsOverrides,
    ...spacingsExtend,
  });

  const sizes = deepMerge(baseTheme.sizes, {
    ...sizesOverrides,
    ...sizesExtend,
  });

  const fontSizes = deepMerge(baseTheme.fontSizes, {
    ...fontSizesOverrides,
    ...fontSizesExtend,
  });

  const fontWeights = deepMerge(baseTheme.fontWeights, {
    ...fontWeightsOverrides,
    ...fontWeightsExtend,
  });

  const radii = deepMerge(baseTheme.radii, {
    ...radiiOverrides,
    ...radiiExtend,
  });

  const borders = deepMerge(baseTheme.borders, {
    ...bordersOverrides,
    ...bordersExtend,
  });

  const utils = deepMerge(baseTheme.utils, { ...utilsOverrides });

  const blocksTheme = {
    colors,
    spacings,
    sizes,
    fontSizes,
    fontWeights,
    radii,
    borders,
    utils,
    ...other,
  };

  return [blocksTheme];
}
