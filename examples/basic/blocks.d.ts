import '@design-blocks/native';
import type { Colors } from '@design-blocks/colors/tailwind-css';

declare module '@design-blocks/native' {
  export interface Theme {
    colors: Colors;
  }
}
