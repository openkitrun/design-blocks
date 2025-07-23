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

import type { ColorValue, FlexStyle, TextStyle, ViewStyle } from 'react-native';

/**
 * OmittedTypes
 */
export type OmittedRadii = IRadiiKeys;
export type OmittedBorders = IBordersKeys;
export type OmittedSizes = 'width' | 'height' | 'minWidth' | 'maxWidth' | 'minHeight' | 'maxHeight';
export type SpacingBaseExcluded = 'full' | 'spacing' | 'baseSpacing';

export type OmittedSpacing = ISpacesKeys;
export type OmittedColors = IColorsKeys;

type OmittedTextStyles =
  | 'textDecorationLine'
  | 'fontWeight'
  | 'fontSize'
  | OmittedSpacing
  | OmittedSizes
  | OmittedRadii
  | OmittedBorders
  | OmittedColors;

type RadiiValue = LooseAutocomplete<Exclude<IRadii, 'true'>> | number | undefined;
export type RadiiProps = {
  [Key in Exclude<IRadiiKeys, 'borderRadius'>]?: RadiiValue;
} & {
  borderRadius?: RadiiValue | true;
};

type BorderValue = LooseAutocomplete<Exclude<IBorders, 'true'>> | number | true | undefined;
export type BorderProps = {
  [Key in IBordersKeys]?: BorderValue;
};

type SpacingValue = Exclude<ISpacings | number | undefined, SpacingBaseExcluded>;
export type SpacingProps = {
  [Key in ISpacesKeys]?: SpacingValue;
};

type SizeValue = LooseAutocomplete<Exclude<ISizes, 'true'>> | number | true | undefined;
export type SizesProps = {
  [Key in ISizesKeys]?: SizeValue;
};

type TextColorsProperties = {
  [Key in Exclude<IColorsKeys, 'overlayColor' | 'tintColor'>]?: ColorValue | undefined;
};

type BoxColorsProperties = {
  [Key in Exclude<IColorsKeys, 'color' | 'textShadowColor' | 'textDecorationColor' | 'overlayColor' | 'tintColor'>]?:
    | ColorValue
    | undefined;
};

export interface BoxColorsProps extends BoxColorsProperties {}

/**
 * Style Props Text
 */
export interface TextColorsProps extends TextColorsProperties {}

export interface TextStyledProps
  extends Omit<TextStyle, OmittedTextStyles>,
    SpacingProps,
    SizesProps,
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
