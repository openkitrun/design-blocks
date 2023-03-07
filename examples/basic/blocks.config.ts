import { createBlocks } from '@design-blocks/native';
import schemesColor from '@design-blocks/colors';

export const { theme, styled } = createBlocks({
  theme: {
    colors: {
      ...schemesColor.tailwindCss,
    },
  },
});
