import * as React from 'react';

import { __DEV__ } from '@design-blocks/utils';

import { createStack } from './createStack';

import type { StackProps } from './Stack.types';

const StackBlock = createStack();
function Stack({ ...props }: StackProps) {
  return <StackBlock {...props} />;
}
if (__DEV__) {
  Stack.displayName = 'Block.Stack';
}

/**
 * The Stack component manages the layout of its immediate children along
 * the vertical or horizontal axis. It provides optional spacing and/or dividers
 * between each child, offering a convenient way to handle one-dimensional layouts.
 *
 * It's especially useful for wrapping components that don't accept external styles.
 *
 * @example
 * ```tsx
 * <Stack>
 *   <Box />
 *   <Text />
 *   <Stack />
 *   <View />
 *   ...
 * </Stack>
 * ```
 *
 * @remarks
 * Stack is strictly concerned with one-dimensional layouts.
 *
 * @see {@link https://github.com/wootsbot/design-blocks/tree/main/packages/blocks-primitives/src/Stack | Stack Component Documentation}
 */
export default Stack;
