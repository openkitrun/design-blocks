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

export type ITailwindCssColors = keyof typeof tailwindCss;
export type TailwindCssColors = typeof tailwindCss;

export type IRadixUiColors = keyof typeof radixUi;
export type RadixUiColors = typeof radixUi;

export default colorSchemes;
