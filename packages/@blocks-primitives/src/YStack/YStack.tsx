import * as React from 'react';

import { __DEV__ } from '@design-blocks/utils';

import { createStack } from '../Stack';

import type { StackProps } from '../Stack';

function YStack({ ...props }: StackProps) {
  const Stack = createStack();
  return <Stack direction='column' {...props} />;
}

if (__DEV__) {
  YStack.displayName = 'Block.YStack';
}

/**
 * The YStack component manages the layout of its immediate children along
 * the vertical axis. It offers optional spacing and/or dividers between each child.
 *
 * Unlike generic Stack components, YStack ensures its children are stacked
 * vertically, making it particularly suitable for column layouts.
 *
 * @remarks
 * YStack is dedicated to vertical one-dimensional layouts.
 *
 * @example
 * Use YStack to vertically align components that do not accept external styles.
 *
 * ```tsx
 * <YStack>
 *   <Box />
 *   <Text />
 *   <Stack />
 *   <View />
 *   ...
 * </YStack>
 * ```
 *
 * @see {@link https://github.com/wootsbot/design-blocks/tree/main/packages/blocks-primitives/src/YStack | YStack Component Documentation}
 */
export default React.memo(YStack);
