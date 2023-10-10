import { createBlocks } from "@design-blocks/native";
import colors from "@design-blocks/colors/tailwind-css";

export const { theme, block, css } = createBlocks({
  theme: {
    colors: {
      ...colors,
    },
  },
});
