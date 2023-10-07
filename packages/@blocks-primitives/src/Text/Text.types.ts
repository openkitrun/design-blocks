import * as RN from 'react-native';

import type { IFontWeights, ITheme } from '@design-blocks/theme';
import type { OmitedSpacing, SpacingProps, SxTextProps } from '@design-blocks/types';

type Omited = 'color' | 'fontWeight' | 'fontSize' | OmitedSpacing;

interface TextBaseProps extends Omit<SxTextProps, Omited>, SpacingProps {
  color?: RN.TextStyle['color'] | string;
  fontWeight?: IFontWeights | RN.TextStyle['fontWeight'];
  fontSize?: keyof ITheme['fontSizes'] | RN.TextStyle['fontSize'];
}

export interface TextProps extends RN.TextProps, TextBaseProps {
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
  sx?: TextBaseProps;
}
