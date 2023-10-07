import '@design-blocks/native';
import { TailwindCssColors } from '@design-blocks/colors';

declare module '@design-blocks/native' {
  export interface Theme {
    colors: TailwindCssColors;
  }
}
