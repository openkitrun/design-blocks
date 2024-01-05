import '@design-blocks/native';

import * as RN from 'react-native';

import { lightTheme, darkTheme } from './blocks.config';

import type { Leaves, LooseAutocomplete, ColorMapProps } from '@design-blocks/native';

type AppTheme = typeof lightTheme.tokens &
  typeof lightTheme.extendTokens &
  typeof darkTheme.tokens &
  typeof darkTheme.extendTokens;

type ColorsAppTheme = typeof lightTheme.tokens.colors | typeof lightTheme.tokens.colors;
type SpacingsCustom = AppTheme['spacings'];
type RadiiCustom = AppTheme['radii'];
type FontSizesCustom = AppTheme['fontSizes'];
type ColorsValueMap = LooseAutocomplete<Leaves<ColorsAppTheme>> | Omit<RN.TextStyle['color'], 'string'>;

declare module '@design-blocks/native' {
  export interface Colors extends ColorsAppTheme {}
  export interface Spacings extends SpacingsCustom {}
  export interface Radii extends RadiiCustom {}
  export interface FontSizes extends FontSizesCustom {}

  export interface TextColorsProps {
    color?: ColorsValueMap;
    textDecorationColor?: ColorsValueMap;
    textShadowColor?: ColorsValueMap;
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
  }

  export interface BoxColorsProps {
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
    shadowColor?: ColorsValueMap;
  }
}
