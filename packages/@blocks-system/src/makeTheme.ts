import { baseTheme } from '@design-blocks/theme';
import { deepMerge } from '@design-blocks/utils';

import type { Theme, ThemeOptions } from '@design-blocks/theme';

/**
 * Constructs a complete Blocks theme by merging the provided options with the base theme.
 *
 * This function takes an optional `ThemeOptions` object and returns a complete `Theme` object.
 * The generated theme is built on top of the base theme, but any specified theme options
 * will override or extend the base values.
 *
 * @param themeOptions The optional customization for the theme.
 * - colorsBase: Base color definitions. These values will be deeply merged with extended colors.
 * - spacingsOverrides, fontSizesOverrides, fontWeightsOverrides, radiiOverrides: Override base theme values.
 * - extend: Contains extended or additional theme values.
 * - devToolsOverrides: Override base devTools settings.
 * - ...other: Any other theme configurations not specifically mentioned.
 *
 * @returns A complete, ready-to-use theme object where provided customizations
 *          have been applied on top of the base theme.
 *
 * @example
 * const customTheme = makeTheme({
 *   colorsBase: { primary: '#ff0000' },
 *   extend: {
 *     spacings: { 10xl: '32px' }
 *   }
 * });
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
  };

  return blocksTheme;
}
