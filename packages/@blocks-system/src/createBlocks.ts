import type { ConfigBlocks, CreateBlocks } from './types';
import { makeTheme } from './makeTheme';

import block from '@design-blocks/core';

export function createBlocks({ theme, devTools }: ConfigBlocks): CreateBlocks {
  return {
    theme: makeTheme(theme),
    block,
    makeTheme,
    devTools,
  };
}
