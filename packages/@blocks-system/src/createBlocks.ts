import block, { css } from '@design-blocks/block';

import { makeTheme } from './makeTheme';

import type { ConfigBlocks, CreateBlocks } from './types';

/**
 * Creates a new instance of the Blocks toolset with a custom theme configuration.
 *
 * @param {ConfigBlocks} config - The configuration object containing theme details and developer tools settings.
 *
 * @returns {CreateBlocks} An object with theme details, block function, css utility, and devTools settings.
 *
 * @example
 * const block = createBlocks({ theme: myTheme, devTools: true });
 * const { block, css, theme, makeTheme, devTools } = block;
 */
export function createBlocks({ theme, devTools }: ConfigBlocks): CreateBlocks {
  return {
    theme: makeTheme(theme),
    block,
    css,
    makeTheme,
    devTools,
  };
}
