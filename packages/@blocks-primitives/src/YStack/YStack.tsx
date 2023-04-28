import * as React from 'react';

import { __DEV__ } from '@design-blocks/utils';

import type { StackProps } from '../Stack';
import { Stack } from '../Stack';

function YStack({ direction = 'column', ...props }: StackProps) {
  return <Stack flexDirection={direction} {...props} />;
}

if (__DEV__) {
  YStack.displayName = 'Block.YStack';
}

/**
 * The Stack component manages layout of immediate children along
 * the vertical or horizontal axis with optional spacing and/or dividers between each child.
 *
 * @remarks
 * Stack is concerned with one-dimensional layouts
 *
 * @example
 * Wrap two components that do not accept styles outside the component
 *
 * ```tsx
 * <Stack>
 *   <Box />
 *   <Box />
 *   ...
 * </Stack>
 * ```
 * @see { @asChild https://github.com/wootsbot/design-blocks/tree/main/packages/blocks-primitives/src/Stack }
 */
export default React.memo(YStack);
