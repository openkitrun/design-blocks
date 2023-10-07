import type { CreateBlock } from '@design-blocks/core';
import type { Theme, ThemeOptions } from '@design-blocks/theme';

export type ConfigBlocks = {
  theme?: ThemeOptions;
  devTools?: unknown;
};

export type CreateBlocks = {
  theme: Theme;
  block: CreateBlock;
  makeTheme: () => Theme;
  devTools: unknown;
};
