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
 * The XStack component manages the layout of its immediate children along
 * the horizontal axis. It provides optional spacing and/or dividers between each child.
 *
 * Unlike generic Stack components, XStack ensures its children are stacked
 * horizontally, making it especially useful for row layouts.
 *
 * @remarks
 * XStack is specifically designed for horizontal one-dimensional layouts.
 *
 * @example
 * Use XStack to horizontally align components that do not accept external styles.
 *
 * ```tsx
 * <XStack>
 *   <Box />
 *   <Text />
 *   <Stack />
 *   <View />
 *   ...
 * </XStack>
 * ```
 *
 * @see {@link https://github.com/wootsbot/design-blocks/tree/main/packages/blocks-primitives/src/XStack | XStack Component Documentation}
 */
export default React.memo(XStack);
