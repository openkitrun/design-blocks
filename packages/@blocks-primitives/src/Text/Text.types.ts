import * as RN from 'react-native';

import type { SxStyledText, TextStyledProps } from '@design-blocks/types';

export interface TextProps extends RN.TextProps, TextStyledProps {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * It can be used to both override the default styles provided by the component and add additional styles.
   *
   * @example
   * ```tsx
   * <Text fontSize="2xl" sx={{ fontSize: 12 }} >
   *  Hello World
   * </Text>
   * ```
   *
   * @type {TextStyledProps}
   *
   * @default {}
   */
  sx?: SxStyledText;
}
