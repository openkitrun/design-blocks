import { createBlocks } from "@design-blocks/native";
import {tailwindCssColors} from "@design-blocks/colors";

export const { theme, block, css } = createBlocks({
  theme: {
    colors: {
      ...tailwindCssColors,
    },
  },
});
