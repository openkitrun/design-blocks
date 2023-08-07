import type { ISpacings } from '@design-blocks/theme';
import type { FlexStyle, ViewStyle, TextStyle } from 'react-native';

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

type Excluded = 'full' | 'spacing' | 'baseSpacing';
type SpacingValue = Exclude<ISpacings | number | undefined, Excluded>;

type OmitedBorder = 'borderEndWidth' | 'borderStartWidth';
export type OmitedSpacing =
  | 'margin'
  | 'marginBottom'
  | 'marginEnd'
  | 'marginHorizontal'
  | 'marginLeft'
  | 'marginRight'
  | 'marginStart'
  | 'marginTop'
  | 'marginVertical'
  | 'padding'
  | 'paddingBottom'
  | 'paddingEnd'
  | 'paddingHorizontal'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingStart'
  | 'paddingTop'
  | 'paddingVertical';

export interface SpacingProps {
  margin?: SpacingValue;
  marginBottom?: SpacingValue;
  marginEnd?: SpacingValue;
  marginHorizontal?: SpacingValue;
  marginLeft?: SpacingValue;
  marginRight?: SpacingValue;
  marginStart?: SpacingValue;
  marginTop?: SpacingValue;
  marginVertical?: SpacingValue;
  m?: SpacingValue;
  mb?: SpacingValue;
  me?: SpacingValue;
  mh?: SpacingValue;
  ml?: SpacingValue;
  mr?: SpacingValue;
  mt?: SpacingValue;
  mv?: SpacingValue;
  padding?: SpacingValue;
  paddingBottom?: SpacingValue;
  paddingEnd?: SpacingValue;
  paddingHorizontal?: SpacingValue;
  paddingLeft?: SpacingValue;
  paddingRight?: SpacingValue;
  paddingStart?: SpacingValue;
  paddingTop?: SpacingValue;
  paddingVertical?: SpacingValue;
  p?: SpacingValue;
  pr?: SpacingValue;
  pl?: SpacingValue;
  pt?: SpacingValue;
  pb?: SpacingValue;
  pv?: SpacingValue;
  ph?: SpacingValue;
}

export interface BackgroundStyledProps {
  bgColor?: string | undefined;
  bg?: string | undefined;
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

type OmitedTextStyles = 'textDecorationLine';
export interface TextStyledProps extends Omit<TextStyle, OmitedTextStyles> {
  textDecorationLine?: TextStyle['textDecorationLine'] | 'lineThrough' | 'underlineLineThrough';
}

export type SxTextProps = TextStyledProps;

export interface SxStyledFlex
  extends Omit<FlexStyle, OmitedSpacing | OmitedBorder>,
    Omit<ViewStyle, OmitedSpacing | OmitedBorder>,
    RadiiProps,
    SpacingProps,
    BackgroundStyledProps,
    Omit<SizesProps, 'width' | 'height' | 'minWidth' | 'maxWidth' | 'minHeight' | 'maxHeight'> {}

/**
 * Type LooseAutocomplete to help Property Prop
 *
 * use example  type Size = LooseAutocomplete<"sm" | "md">;
 */
export type LooseAutocomplete<T extends string> = T | Omit<string, T>;
