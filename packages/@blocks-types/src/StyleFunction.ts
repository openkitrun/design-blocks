import type {
  IBorders,
  IBordersKeys,
  IColorsKeys,
  IFontSizes,
  IFontWeights,
  IRadii,
  IRadiiKeys,
  ISizes,
  ISizesKeys,
  ISpacesKeys,
  ISpacings,
} from '@design-blocks/theme';

import type { FlexStyle, TextStyle, ViewStyle } from 'react-native';

/**
 * OmittedTypes
 */
export type OmittedRadii = IRadiiKeys;
export type OmittedBorders = IBordersKeys;
export type OmittedSizes = 'width' | 'height' | 'minWidth' | 'maxWidth' | 'minHeight' | 'maxHeight';
export type SpacingBaseExcluded = 'full' | 'spacing' | 'baseSpacing';

export type OmittedSpacing = ISpacesKeys;
type OmittedTextStyles =
  | 'textDecorationLine'
  | 'color'
  | 'fontWeight'
  | 'fontSize'
  | OmittedSpacing
  | OmittedSizes
  | OmittedRadii
  | OmittedBorders;
export type OmittedColors = IColorsKeys;

type RadiiValue = LooseAutocomplete<Exclude<IRadii, 'true'>> | number;
export type RadiiProps = {
  [Key in Exclude<IRadiiKeys, 'borderRadius'>]?: RadiiValue;
} & {
  borderRadius?: RadiiValue | true;
};

type BorderValue = LooseAutocomplete<Exclude<IBorders, 'true'>> | number | true;
export type BorderProps = {
  [Key in IBordersKeys]?: BorderValue;
};

type SpacingValue = Exclude<ISpacings | number | undefined, SpacingBaseExcluded>;
export type SpacingProps = {
  [Key in ISpacesKeys]?: SpacingValue;
};

type SizeValue = LooseAutocomplete<ISizes> | number | true | undefined;
export type SizesProps = {
  [Key in ISizesKeys]?: SizeValue;
};

type ColorsProps = {
  [Key in IColorsKeys]?: TextStyle['color'];
};

export interface BoxColorsProps extends ColorsProps {}

/**
 * Style Props Text
 */
type TextColors = {
  color?: TextStyle['color'];
};
export interface TextColorsProps extends TextColors {}
export interface TextStyledProps
  extends Omit<TextStyle, OmittedTextStyles>,
    SpacingProps,
    BorderProps,
    TextColorsProps {
  textDecorationLine?: TextStyle['textDecorationLine'] | 'lineThrough' | 'underlineLineThrough';
  fontWeight?: LooseAutocomplete<IFontWeights> | TextStyle['fontWeight'];
  fontSize?: IFontSizes | TextStyle['fontSize'];
}
export interface SxStyledText extends TextStyledProps {}

type OmittedFlex = OmittedSpacing | OmittedSizes | OmittedBorders | OmittedRadii | OmittedColors;
/**
 * Style Props View
 */
export interface SxStyledFlex
  extends Omit<FlexStyle, OmittedFlex>,
    Omit<ViewStyle, OmittedFlex>,
    RadiiProps,
    BorderProps,
    SpacingProps,
    BoxColorsProps,
    SizesProps {}

/**
 * Type LooseAutocomplete to help Property Prop
 *
 * use example  type Size = LooseAutocomplete<"sm" | "md">;
 */
export type LooseAutocomplete<T extends string> = T | Omit<string, T>;
