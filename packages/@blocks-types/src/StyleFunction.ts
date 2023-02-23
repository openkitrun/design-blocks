import type { FlexStyle, TextStyle } from 'react-native';

type ValueBase = number | string | undefined;

export interface RadiiProps {
  borderBottomWidth?: number | undefined;
  borderEndWidth?: ValueBase;
  borderLeftWidth?: number | undefined;
  borderRightWidth?: number | undefined;
  borderStartWidth?: ValueBase;
  borderTopWidth?: number | undefined;
  borderWidth?: number | undefined;
}

export interface SpacingProps {
  margin?: ValueBase;
  marginBottom?: ValueBase;
  marginEnd?: ValueBase;
  marginHorizontal?: ValueBase;
  marginLeft?: ValueBase;
  marginRight?: ValueBase;
  marginStart?: ValueBase;
  marginTop?: ValueBase;
  marginVertical?: ValueBase;
  m?: ValueBase;
  mb?: ValueBase;
  me?: ValueBase;
  mh?: ValueBase;
  ml?: ValueBase;
  mr?: ValueBase;
  ms?: ValueBase;
  mt?: ValueBase;
  mv?: ValueBase;
  padding?: ValueBase;
  paddingBottom?: ValueBase;
  paddingEnd?: ValueBase;
  paddingHorizontal?: ValueBase;
  paddingLeft?: ValueBase;
  paddingRight?: ValueBase;
  paddingStart?: ValueBase;
  paddingTop?: ValueBase;
  paddingVertical?: ValueBase;
  p?: ValueBase;
  pr?: ValueBase;
  pl?: ValueBase;
  pt?: ValueBase;
  pb?: ValueBase;
  pv?: ValueBase;
  ph?: ValueBase;
}

export interface ColorStyledProps {
  color?: string | undefined;
  opacity?: string | undefined;
}

export interface BackgroundStyledProps {
  bgColor?: string | undefined;
  bg?: string | undefined;
  opacity?: ValueBase;
}

export interface SizesProps {
  width?: ValueBase;
  w?: ValueBase;
  height?: ValueBase;
  h?: ValueBase;
  minWidth?: ValueBase;
  minW?: ValueBase;
  maxWidth?: ValueBase;
  maxW?: ValueBase;
  minHeight?: ValueBase;
  minH?: ValueBase;
  maxHeight?: ValueBase;
  maxH?: ValueBase;
}
export type FlexStyledProps = Omit<FlexStyle, 'direction'>;

export interface TextStyledProps extends Omit<TextStyle, 'fontWeight' | 'textDecorationLine' | 'fontSize'> {
  textDecorationLine?: TextStyle['textDecorationLine'] | 'lineThrough' | 'underlineLineThrough';
}

export type SxTextProps = TextStyledProps;

export interface SxStyledFlex
  extends FlexStyledProps,
    RadiiProps,
    SpacingProps,
    BackgroundStyledProps,
    Omit<ColorStyledProps, 'opacity'>,
    Omit<SizesProps, 'width' | 'height' | 'minWidth' | 'maxWidth' | 'minHeight' | 'maxHeight'> {}

type OmittedSxStyledText =
  | 'flexDirection'
  | 'alignContent'
  | 'alignItems'
  | 'justifyContent'
  | 'flexWrap'
  | 'color'
  | 'opacity';

export interface SxObject extends SxStyledFlex, Omit<SxTextProps, OmittedSxStyledText> {}

/**
 * The `SxProps` can be either object or function
 */
export type SxProps = SxStyledFlex;

/**
 * The `StandardBoxStyledProps` base properties props component Box
 */
export interface StandardBoxStyledProps
  extends FlexStyledProps,
    RadiiProps,
    SpacingProps,
    BackgroundStyledProps,
    Omit<ColorStyledProps, 'opacity'>,
    Omit<SizesProps, 'width' | 'height' | 'minWidth' | 'maxWidth' | 'minHeight' | 'maxHeight'> {}

/**
 * Type LooseAutocomplete to help Property Prop
 *
 * use example  type Size = LooseAutocomplete<"sm" | "md">;
 */
export type LooseAutocomplete<T extends string> = T | Omit<string, T>;
