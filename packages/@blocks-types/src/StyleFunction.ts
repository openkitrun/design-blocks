import type {
  IColorsKeys,
  IFontSizes,
  IFontWeights,
  IRadii,
  IRadiiKeys,
  ISizesKeys,
  ISpacesKeys,
  ISpacings,
} from '@design-blocks/theme';

import type { FlexStyle, TextStyle, ViewStyle } from 'react-native';

/**
 * OmittedTypes
 */
export type OmittedRadii =
  | IRadiiKeys
  | 'borderBottomWidth'
  | 'borderEndWidth'
  | 'borderLeftWidth'
  | 'borderRightWidth'
  | 'borderStartWidth'
  | 'borderTopWidth'
  | 'borderWidth';
export type OmittedSizes = 'width' | 'height' | 'minWidth' | 'maxWidth' | 'minHeight' | 'maxHeight';
export type SpacingBaseExcluded = 'full' | 'spacing' | 'baseSpacing';
type OmittedBorder = 'borderEndWidth' | 'borderStartWidth';
export type OmittedSpacing = ISpacesKeys;
type OmittedTextStyles = 'textDecorationLine' | 'color' | 'fontWeight' | 'fontSize' | OmittedSpacing | OmittedRadii;
export type OmittedColors = IColorsKeys;

type BaseValue = number | string | undefined;

type RadiiValue = LooseAutocomplete<IRadii> | number;
type RadiiProps = {
  [Key in IRadiiKeys]?: RadiiValue;
} & {
  borderBottomWidth?: RadiiValue;
  borderEndWidth?: RadiiValue;
  borderLeftWidth?: RadiiValue;
  borderRightWidth?: RadiiValue;
  borderStartWidth?: RadiiValue;
  borderTopWidth?: RadiiValue;
  borderWidth?: RadiiValue;
};

type SpacingValue = Exclude<ISpacings | number | undefined, SpacingBaseExcluded>;
export type SpacingProps = {
  [Key in ISpacesKeys]?: SpacingValue;
};

type ColorsProps = {
  [Key in IColorsKeys]?: TextStyle['color'];
};

export interface BoxColorsProps extends ColorsProps {}

type SizesProps = {
  [Key in ISizesKeys]?: BaseValue;
};

/**
 * Style Props Text
 */
type TextColors = {
  color?: TextStyle['color'];
};
export interface TextColorsProps extends TextColors {}
export interface TextStyledProps extends Omit<TextStyle, OmittedTextStyles>, SpacingProps, TextColorsProps {
  textDecorationLine?: TextStyle['textDecorationLine'] | 'lineThrough' | 'underlineLineThrough';
  fontWeight?: LooseAutocomplete<IFontWeights> | TextStyle['fontWeight'];
  fontSize?: IFontSizes | TextStyle['fontSize'];
}
export interface SxStyledText extends TextStyledProps {}

/**
 * Style Props View
 */
export interface SxStyledFlex
  extends Omit<FlexStyle, OmittedSpacing | OmittedBorder | OmittedRadii | OmittedColors>,
    Omit<ViewStyle, OmittedSpacing | OmittedBorder | OmittedRadii | OmittedColors>,
    RadiiProps,
    SpacingProps,
    BoxColorsProps,
    Omit<SizesProps, OmittedSizes> {}

/**
 * Type LooseAutocomplete to help Property Prop
 *
 * use example  type Size = LooseAutocomplete<"sm" | "md">;
 */
export type LooseAutocomplete<T extends string> = T | Omit<string, T>;
