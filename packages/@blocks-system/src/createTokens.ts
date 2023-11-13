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
    ...other
  } = theme.tokens;

  const utilsOverrides = utilsTokens;

  const {
    spacings: spacingsExtend = {},
    fontSizes: fontSizesExtend = {},
    fontWeights: fontWeightsExtend = {},
    radii: radiiExtend = {},
  } = theme.extendTokens || {};

  const colors = deepMerge(baseTheme.colors, { ...colorsOverrides });
  const spacings = deepMerge(baseTheme.spacings, {
    ...spacingsOverrides,
    ...spacingsExtend,
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

  const utils = deepMerge(baseTheme.utils, { ...utilsOverrides });

  const blocksTheme = {
    colors,
    spacings,
    fontSizes,
    fontWeights,
    radii,
    utils,
    ...other,
  };

  return [blocksTheme];
}
