import type { Leaves } from '@design-blocks/types';

import { colors as tailwindCssColors } from './tailwindCss';
import { colors as radixUiColors } from './radixUi';

export const tailwindCss = tailwindCssColors;
export const radixUi = radixUiColors;

export const colorSchemes: ColorSchemes = {
  tailwindCss,
  radixUi,
};

export interface ColorSchemes {
  tailwindCss: TailwindCssColors;
  radixUi: RadixUiColors;
}

export type ITailwindCssColors = Leaves<typeof tailwindCss>;
export type TailwindCssColors = typeof tailwindCss;

export type IRadixUiColors = Leaves<typeof radixUi>;
export type RadixUiColors = typeof radixUi;

export default colorSchemes;
