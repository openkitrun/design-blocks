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

type BaseValue = number | string | undefined;

export type OmittedRadii =
  | IRadiiKeys
  | 'borderBottomWidth'
  | 'borderEndWidth'
  | 'borderLeftWidth'
  | 'borderRightWidth'
  | 'borderStartWidth'
  | 'borderTopWidth'
  | 'borderWidth';
type RadiiProps = {
  [Key in IRadiiKeys]?: number | IRadii;
} & {
  borderBottomWidth?: number | IRadii;
  borderEndWidth?: number | IRadii;
  borderLeftWidth?: number | IRadii;
  borderRightWidth?: number | IRadii;
  borderStartWidth?: number | IRadii;
  borderTopWidth?: number | IRadii;
  borderWidth?: number | IRadii;
};

export type SpacingBaseExcluded = 'full' | 'spacing' | 'baseSpacing';
type SpacingValue = Exclude<ISpacings | number | undefined, SpacingBaseExcluded>;

type OmittedBorder = 'borderEndWidth' | 'borderStartWidth';

export type OmittedSpacing = ISpacesKeys;

export type SpacingProps = {
  [Key in ISpacesKeys]?: SpacingValue;
};

export type OmittedColors = IColorsKeys;
export type ColorsProps = {
  [Key in IColorsKeys]?: TextStyle['color'];
};

export type OmittedSizes = 'width' | 'height' | 'minWidth' | 'maxWidth' | 'minHeight' | 'maxHeight';
type SizesProps = {
  [Key in ISizesKeys]?: BaseValue;
};

type OmittedTextStyles = 'textDecorationLine' | 'color' | 'fontWeight' | 'fontSize' | OmittedSpacing | OmittedRadii;
export interface TextStyledProps extends Omit<TextStyle, OmittedTextStyles>, SpacingProps {
  textDecorationLine?: TextStyle['textDecorationLine'] | 'lineThrough' | 'underlineLineThrough';
  color?: TextStyle['color'];
  fontWeight?: LooseAutocomplete<IFontWeights> | TextStyle['fontWeight'];
  fontSize?: IFontSizes | TextStyle['fontSize'];
}

export interface SxStyledText extends TextStyledProps {}

export interface SxStyledFlex
  extends Omit<FlexStyle, OmittedSpacing | OmittedBorder | OmittedRadii | OmittedColors>,
    Omit<ViewStyle, OmittedSpacing | OmittedBorder | OmittedRadii | OmittedColors>,
    RadiiProps,
    SpacingProps,
    ColorsProps,
    Omit<SizesProps, OmittedSizes> {}

/**
 * Type LooseAutocomplete to help Property Prop
 *
 * use example  type Size = LooseAutocomplete<"sm" | "md">;
 */
export type LooseAutocomplete<T extends string> = T | Omit<string, T>;
