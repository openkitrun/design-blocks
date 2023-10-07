import { makeTheme } from './makeTheme';
import type { ConfigBlocks, CreateBlocks } from './types';

import block, { css } from '@design-blocks/core';

export function createBlocks({ theme, devTools }: ConfigBlocks): CreateBlocks {
  return {
    theme: makeTheme(theme),
    block,
    css,
    makeTheme,
    devTools,
  };
}
