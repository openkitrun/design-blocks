import '@design-blocks/native';

import * as RN from 'react-native';

import { themeDefault } from './blocks.config';

import type { Leaves, LooseAutocomplete } from '@design-blocks/native';
import type { Colors as ColorsT } from '@design-blocks/colors/tailwind-css';
import type { AppTheme } from './blocks.config';

type SpacingsCustom = typeof themeDefault.extend.spacings;
type RadiiCustom = typeof themeDefault.extend.radii;
type FontSizesCustom = typeof themeDefault.extend.fontSizes;
type ColorsValueMap = LooseAutocomplete<Leaves<ColorsT>> | Omit<RN.TextStyle['color'], 'string'>;

declare module '@design-blocks/native' {
  export interface Colors extends ColorsT {}
  export interface Spacings extends SpacingsCustom {}
  export interface Radii extends RadiiCustom {}
  export interface FontSizes extends FontSizesCustom {}
  export interface TextColorsProps {
    color?: ColorsValueMap;
  }
  export interface BoxColorsProps {
    background?: ColorsValueMap;
    bg?: ColorsValueMap;
    backgroundColor?: ColorsValueMap;
    bgColor?: ColorsValueMap;
    borderColor?: ColorsValueMap;
    borderTopColor?: ColorsValueMap;
    borderRightColor?: ColorsValueMap;
    borderEndColor?: ColorsValueMap;
    borderBottomColor?: ColorsValueMap;
    borderLeftColor?: ColorsValueMap;
    borderStartColor?: ColorsValueMap;
    borderBlockColor?: ColorsValueMap;
    borderBlockEndColor?: ColorsValueMap;
    borderBlockStartColor?: ColorsValueMap;
    textDecorationColor?: ColorsValueMap;
    textShadowColor?: ColorsValueMap;
    fill?: ColorsValueMap;
    stroke?: ColorsValueMap;
    shadowColor?: ColorsValueMap;
  }
}
