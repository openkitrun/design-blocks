import block, { css } from '@design-blocks/block';

import type { Theme } from '@design-blocks/theme';

import type { CreateBlock } from '@design-blocks/block';

export function createBlocks<ThemeTokens extends Theme>(theme: ThemeTokens): {
  theme: ThemeTokens;
  block: CreateBlock;
  css: typeof css;
  utils: Theme['utils'];
} {
  return {
    theme,
    block,
    css,
    utils: theme.utils,
  };
}
