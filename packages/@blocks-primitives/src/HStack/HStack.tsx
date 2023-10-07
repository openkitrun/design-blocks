import * as React from 'react';

import { __DEV__ } from '@design-blocks/utils';

import { Stack } from '../Stack';

import type { StackProps } from '../Stack';

function HStack({ ...props }: StackProps) {
  return <Stack direction='row' alignItems='center' {...props} />;
}

if (__DEV__) {
  HStack.displayName = 'Block.HStack';
}

/**
 * The HStack component manages the layout of its immediate children along
 * the horizontal axis. It offers optional spacing and/or dividers between each child.
 *
 * As opposed to generic Stack components, HStack ensures that its children are stacked
 * horizontally, making it useful for creating row layouts.
 *
 * @remarks
 * HStack is strictly focused on horizontal one-dimensional layouts.
 *
 * @example
 * Use HStack to horizontally align components that don't accept external styles.
 *
 * ```tsx
 * <HStack>
 *   <Box />
 *   <Text />
 *   <Stack />
 *   <View />
 *   ...
 * </HStack>
 * ```
 *
 * @see {@link https://github.com/wootsbot/design-blocks/tree/main/packages/blocks-primitives/src/HStack | HStack Component Documentation}
 */
export default React.memo(HStack);
