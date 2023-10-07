import * as React from 'react';

import block from '@design-blocks/core';
import { styleFunctionProps, styleFunctionSx } from '@design-blocks/system';
import { __DEV__, camelCase } from '@design-blocks/utils';

import { Box } from '../Box';
import { variants } from './Stack.utils';

import type { IStackStyleValue, StackProps } from './Stack.types';

const StackBlock = block(Box, {
  shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'sx' && prop !== 'as',
})<StackProps>(
  ({
    flexDirection: flexDirectionProps = 'column',
    alignItems: alignItemsProps = 'stretch',
    justifyContent: justifyContentProps = 'flexStart',
    flexWrap: flexWrapProps = 'nowrap',
    theme,
    sx,
    ...styleProps
  }): IStackStyleValue => {
    const flexDirection = variants.flexDirection[
      camelCase(flexDirectionProps) as keyof typeof variants.flexDirection
    ] as IStackStyleValue['flexDirection'];

    const alignItems = variants.alignItems[
      camelCase(alignItemsProps) as keyof typeof variants.alignItems
    ] as IStackStyleValue['alignItems'];

    const flexWrap = variants.flexWrap[
      camelCase(flexWrapProps) as keyof typeof variants.flexWrap
    ] as IStackStyleValue['flexWrap'];

    const justifyContent = variants.justifyContent[
      camelCase(justifyContentProps) as keyof typeof variants.justifyContent
    ] as IStackStyleValue['justifyContent'];

    return {
      display: 'flex',
      flexDirection,
      alignItems,
      justifyContent,
      flexWrap,
      ...styleFunctionProps('Box', theme, { ...styleProps }),
      ...styleFunctionSx('Box', theme, sx),
    };
  },
);

function Stack({ direction = 'column', ...props }: Omit<StackProps, 'theme'>) {
  return <StackBlock flexDirection={direction} {...props} />;
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
export default React.memo(Stack);
