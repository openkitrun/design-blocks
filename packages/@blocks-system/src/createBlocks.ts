import block, { css } from '@design-blocks/block';

//import type { Theme } from '@design-blocks/theme';

import type { CreateBlocksProps, InferBlocksConfig } from './types/createBlocks';

// export function createBlocks<U extends Record<string, Theme>>({
//   themes: additionalThemes,
// }: {
//   themes: U;
// }): {
//   themes: U;
//   block: CreateBlock;
//   css: typeof css;
// } {
//   const themes = { ...additionalThemes } as U;

//   return {
//     themes,
//     block,
//     css,
//   };
// }

export function createBlocks<Conf extends CreateBlocksProps>(config: Conf): InferBlocksConfig<Conf> {
  const themes = { ...config.themes };

  return {
    themes,
    block,
    css,
  } as any;
}
