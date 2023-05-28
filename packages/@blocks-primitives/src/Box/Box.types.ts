import type * as RN from 'react-native';

import type { SxStyledFlex, SxTextProps } from '@design-blocks/types';
import type { Theme } from '@design-blocks/theme';

type Omitted =
  | 'flexDirection'
  | 'alignContent'
  | 'alignItems'
  | 'justifyContent'
  | 'flexWrap'
  | 'color'
  | 'opacity'
  | 'gap';

interface StyledProps extends SxStyledFlex, Omit<SxTextProps, Omitted> {}

export interface BoxProps extends RN.ViewProps, StyledProps {
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
   * @see { @sx https://github.com/wootsbot/design-blocks/tree/main/packages/blocks-primitives/src/Box }
   */
  sx?: StyledProps;

  /**
   * @optional
   */
  theme?: Theme;
}
