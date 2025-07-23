import block, { css } from '@design-blocks/block';

import type { CreateBlocksProps, InferCreateBlocks } from '../types';

export function createBlocks<Conf extends CreateBlocksProps>(configIn: Conf): InferCreateBlocks<Conf> {
  return {
    themes: configIn.themes,
    block,
    css,
  } as any;
}

import { tokens } from '../createTokens/createTokens';

export const {
  themes: themesReturn,
  // css: cssReturn,
  // block: blockReturn,
} = createBlocks({
  tokens,
  themes: {
    light: {
      colors: {},
    },
    dark: {
      colors: {},
    },
  },
});

// biome-ignore lint/suspicious/noConsoleLog: <explanation>
console.log(themesReturn.dark);
