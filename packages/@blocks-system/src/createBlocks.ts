import block, { css } from '@design-blocks/block';

import type { CreateBlock } from '@design-blocks/block';
import type { Theme } from '@design-blocks/theme';

export function createBlocks<U extends Record<string, Theme>>({
  themes: additionalThemes,
}: {
  themes: U;
}): {
  themes: U;
  block: CreateBlock;
  css: typeof css;
} {
  const themes = { ...additionalThemes } as U;

  return {
    themes,
    block,
    css,
  };
}
