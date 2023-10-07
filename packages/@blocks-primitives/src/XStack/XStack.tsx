import * as React from 'react';

import { __DEV__ } from '@design-blocks/utils';

import { Stack } from '../Stack';

import type { StackProps } from '../Stack';

function XStack({ ...props }: StackProps) {
  return <Stack direction='row' {...props} />;
}

if (__DEV__) {
  XStack.displayName = 'Block.XStack';
}

/**
 * The XStack component manages layout of immediate children along
 * the vertical or horizontal axis with optional spacing and/or dividers between each child.
 *
 * @remarks
 * XStack is concerned with one-dimensional layouts
 *
 * @example
 * Wrap two components that do not accept styles outside the component
 *
 * ```tsx
 * <XStack>
 *   <Box />
 *   <Box />
 *   ...
 * </XStack>
 * ```
 * @see { @asChild https://github.com/wootsbot/design-blocks/tree/main/packages/blocks-primitives/src/XStack }
 */
export default React.memo(XStack);
