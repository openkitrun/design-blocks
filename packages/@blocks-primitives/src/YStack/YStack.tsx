import * as React from 'react';

import { __DEV__ } from '@design-blocks/utils';

import { Stack } from '../Stack';

import type { StackProps } from '../Stack';

function YStack({ ...props }: StackProps) {
  return <Stack direction='column' {...props} />;
}

if (__DEV__) {
  YStack.displayName = 'Block.YStack';
}

/**
 * The YStack component manages layout of immediate children along
 * the vertical or horizontal axis with optional spacing and/or dividers between each child.
 *
 * @remarks
 * YStack is concerned with one-dimensional layouts
 *
 * @example
 * Wrap two components that do not accept styles outside the component
 *
 * ```tsx
 * <YStack>
 *   <Box />
 *   <Box />
 *   ...
 * </YStack>
 * ```
 * @see { @asChild https://github.com/wootsbot/design-blocks/tree/main/packages/blocks-primitives/src/YStack }
 */
export default React.memo(YStack);
