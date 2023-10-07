import type * as RN from 'react-native';

import type { StylesObjectProps, SxStyledFlex } from '@design-blocks/types';

type SxStyledProps = Omit<StylesObjectProps, 'direction'>;

export interface StackProps extends RN.ViewProps, SxStyledProps {
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
  direction?: RN.FlexStyle['flexDirection'];
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
}

export type IStackStyleValue = {
  display?: 'flex';
  flexDirection?: SxStyledFlex['flexDirection'];
  alignItems?: SxStyledFlex['alignItems'];
  justifyContent?: SxStyledFlex['justifyContent'];
  flexWrap?: SxStyledFlex['flexWrap'];
};
