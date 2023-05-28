import type * as RN from 'react-native';

import type { ISpacings, Theme } from '@design-blocks/theme';
import type { FlexStyledProps, SxProps, SxTextProps } from '@design-blocks/types';

type Omitted = 'flexDirection' | 'alignContent' | 'alignItems' | 'justifyContent' | 'flexWrap' | 'color' | 'opacity';
type Excluded = 'full' | 'spacing' | 'baseSpacing';

interface SxStyledProps extends SxProps, Omit<SxTextProps, Omitted> {}

export interface StackProps extends RN.ViewProps, Omit<SxStyledProps, 'direction' | 'gap'> {
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
   * <Stack gap={3}>
   *   <ComponentOne />
   *   <ComponentTwo />
   * </Stack>
   * ```
   * @see { @sx https://github.com/wootsbot/design-blocks/tree/main/packages/blocks-primitives/src/Stack }
   */
  gap?: Exclude<ISpacings | number | undefined, Excluded>;
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
   * @optional
   */
  theme?: Theme;
}

export type IStackStyleValue = {
  display?: 'flex';
  flexDirection?: SxProps['flexDirection'];
  alignItems?: SxProps['alignItems'];
  justifyContent?: SxProps['justifyContent'];
  flexWrap?: SxProps['flexWrap'];
};
