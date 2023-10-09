import { css } from '@design-blocks/block';

import type { CreateBlock } from '@design-blocks/block';
import type { Theme, ThemeOptions } from '@design-blocks/theme';

export type ConfigBlocks = {
  theme?: ThemeOptions;
  devTools?: unknown;
};

export type CreateBlocks = {
  theme: Theme;
  block: CreateBlock;
  css: typeof css;
  makeTheme: () => Theme;
  devTools: unknown;
};
