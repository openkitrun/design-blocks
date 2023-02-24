import '@emotion/react';
import {TailwindCssColors} from '@design-blocks/colors';
import {Theme as BlockTheme} from '@design-blocks/native';

declare module '@emotion/react' {
  export interface Theme extends BlockTheme {
    colors: TailwindCssColors;
  }
}

declare module '@design-blocks/theme' {
  export interface Theme {
    colors: TailwindCssColors;
  }
}
