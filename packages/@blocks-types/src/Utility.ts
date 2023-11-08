import type { IColorsKeys } from '@design-blocks/theme';

import type { Leaves } from './base';

export type ColorMapProps<T> = {
  [Key in IColorsKeys]?: Leaves<T>;
};
