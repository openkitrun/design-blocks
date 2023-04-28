//import type { CreateStyled } from '@emotion/native';
import type { Theme, ThemeOptions } from '@design-blocks/theme';

import type { Block } from './block';

export type ConfigBlocks = {
  theme?: ThemeOptions;
  devTools?: unknown;
};

export type CreateBlocks = {
  theme: Theme;
  block: Block;
  makeTheme: () => Theme;
  devTools: unknown;
};
