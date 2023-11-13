import block, { css } from '@design-blocks/block';

import type { CreateBlock } from '@design-blocks/block';
import type { Theme } from '@design-blocks/theme';

export function createBlocks<T extends Theme, U extends Record<string, T>>({
  theme: defaultTheme,
  themes: additionalThemes,
}: { theme: T; themes?: U }): {
  theme: T;
  themes: { defaultTheme: T } & U;
  block: CreateBlock;
  css: typeof css;
} {
  const themes = { defaultTheme, ...additionalThemes } as { defaultTheme: T } & U;

  return {
    theme: defaultTheme,
    themes,
    block,
    css,
  };
}
