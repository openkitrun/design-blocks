// import {TailwindCssColors} from '@design-blocks/colors';

// declare module '@design-blocks/theme' {
//   interface Theme {
//     colors: TailwindCssColors;
//   }
// }

import {TailwindCssColors} from '@design-blocks/colors';
import '@emotion/react';

import {Theme as ThemeCustom} from '@design-blocks/native';

declare module '@emotion/react' {
  export interface Theme extends ThemeCustom {
    colors: TailwindCssColors;
  }
}

declare module '@design-blocks/native' {
  export interface Theme {
    colors: {
      codea: string;
      amber: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
    };
  }
}
