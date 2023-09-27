import type * as RN from 'react-native';

import type { StylesObjectProps } from '@design-blocks/types';

export interface BoxProps extends RN.ViewProps, StylesObjectProps {
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
  sx?: StylesObjectProps;
}
