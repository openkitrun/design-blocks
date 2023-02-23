import type * as RN from 'react-native';

import type { Theme, ISpacings } from '@design-blocks/theme';
import type { SxProps, SxTextProps, FlexStyledProps } from '@design-blocks/types';

type Omitted = 'flexDirection' | 'alignContent' | 'alignItems' | 'justifyContent' | 'flexWrap' | 'color' | 'opacity';
type Excluded = 'full' | 'spacing' | 'baseSpacing';

interface SxStyledProps extends SxProps, Omit<SxTextProps, Omitted> {}

export interface StackProps extends RN.ViewProps, Omit<SxStyledProps, 'direction'> {
  /**
   * Defines the `flex-direction` style property. It is applied for all screen sizes.
   *
   * @Type  "row" | "column" | "row-reverse" | "column-reverse"
   *
   * @Default column
   *
   * @example
   * ```tsx
   * <Stack direction="row">
   *   <ComponentOne />
   *   <ComponentTwo />
   * </Stack>
   * ```
   * @see { @sx https://github.com/wootsbot/design-blocks/tree/main/packages/blocks-primitives/src/Stack }
   */
  direction?: FlexStyledProps['flexDirection'];
  /**
   * Defines the space between immediate children.
   *
   * @Type "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | number
   *
   * @Default 0
   *
   * @example
   * ```tsx
   * <Stack spacing={3}>
   *   <ComponentOne />
   *   <ComponentTwo />
   * </Stack>
   * ```
   * @see { @sx https://github.com/wootsbot/design-blocks/tree/main/packages/blocks-primitives/src/Stack }
   */
  spacing?: Exclude<ISpacings | number, Excluded>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS StyleSheets
   *
   * @Type object
   *
   * @Default {}
   *
   * @example
   * ```tsx
   * <Stack margin={3} sx={{ margin: 0 }} >
   *   <ComponentOne />
   *   <ComponentTwo />
   * </Stack>
   * ```
   * @see { @sx https://github.com/wootsbot/design-blocks/tree/main/packages/blocks-primitives/src/Stack }
   */
  sx?: SxStyledProps;
  /**
   * Wrap two components that do not accept styles outside the component
   *
   * @Type boolean
   *
   * @Default false
   *
   * @remarks Render the children by wrapping them with a Box Component
   * to insert style spaces if `asChild={true}`
   *
   * @example
   * ```tsx
   * <Stack asChild>
   *   <ComponentOne />
   *   <ComponentTow />
   * </Stack>
   * ```
   * @see { @asChild https://github.com/wootsbot/design-blocks/tree/main/packages/blocks-primitives/src/Stack }
   */
  asChild?: boolean; // Render the Box component as a container to insert style spaces
  /**
   * @optional
   */
  theme?: Theme;
}

export interface Options extends StackProps {
  index?: number;
  theme?: Theme;
}

export type DirectionValue = {
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
};

export type StackDirectionMargin = {
  column: DirectionValue;
  row: DirectionValue;
  rowReverse: DirectionValue;
  columnReverse: DirectionValue;
};

export type IStackStyleValue = {
  display?: 'flex';
  flexDirection?: SxProps['flexDirection'];
  alignItems?: SxProps['alignItems'];
  justifyContent?: SxProps['justifyContent'];
  flexWrap?: SxProps['flexWrap'];
};
