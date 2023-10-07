import * as React from 'react';

import { __DEV__ } from '@design-blocks/utils';

import { Stack } from '../Stack';

import type { StackProps } from '../Stack';

function VStack({ ...props }: StackProps) {
  return <Stack direction='column' alignItems='center' {...props} />;
}

if (__DEV__) {
  VStack.displayName = 'Block.VStack';
}

/**
 * The VStack component manages the layout of its immediate children along
 * the vertical axis. It offers optional spacing and/or dividers between each child.
 *
 * Unlike the generic Stack components, VStack ensures that its children are stacked
 * vertically, making it useful for creating column layouts.
 *
 * @remarks
 * VStack is strictly focused on vertical one-dimensional layouts.
 *
 * @example
 * Use VStack to vertically align components that don't accept external styles.
 *
 * ```tsx
 * <VStack>
 *   <Box />
 *   <Text />
 *   <Stack />
 *   <View />
 *   ...
 * </VStack>
 * ```
 *
 * @see {@link https://github.com/wootsbot/design-blocks/tree/main/packages/blocks-primitives/src/VStack | VStack Component Documentation}
 */
export default React.memo(VStack);
