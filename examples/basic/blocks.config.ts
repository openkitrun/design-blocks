import { createBlocks } from '@design-blocks/native';
import schemesColor from '@design-blocks/colors';

export const { theme, block, css } = createBlocks({
  theme: {
    colors: {
      ...schemesColor.tailwindCss,
    },
  },
});
