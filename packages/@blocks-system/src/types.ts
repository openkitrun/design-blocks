//import type { CreateStyled } from '@emotion/native';
import type { Theme, ThemeOptions } from '@design-blocks/theme';

import type { StyledBlock } from './styled';

export type ConfigBlocks = {
  theme?: ThemeOptions;
  devTools?: unknown;
};

export type CreateBlocks = {
  theme: Theme;
  styled: StyledBlock;
  makeTheme: () => Theme;
  devTools: unknown;
};
