import { createBlocks } from '@design-blocks/native';
import schemesColor from '@design-blocks/colors';

export const { theme, block } = createBlocks({
  theme: {
    colors: {
      ...schemesColor.tailwindCss,
    },
  },
});
