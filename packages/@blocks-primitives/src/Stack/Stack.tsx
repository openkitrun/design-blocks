import * as React from 'react';

import camelCase from 'lodash.camelcase';

import type { Theme } from '@design-blocks/theme';

import { __DEV__ } from '@design-blocks/utils';
import { styled, useTheme } from '@design-blocks/system';

import type { StackProps, IStackStyleValue } from './Stack.types';

import { Box } from '../Box';
import { directionMargin, variants } from './Stack.utils';

const StackStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'sx' && prop !== 'as',
})<StackProps>(
  ({
    flexDirection: flexDirectionProps = 'column',
    alignItems: alignItemsProps = 'stretch',
    justifyContent: justifyContentProps = 'flexStart',
    flexWrap: flexWrapProps = 'nowrap',
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
    };
  },
);

function Stack({ direction = 'column', children: childrenProp, spacing = 0, asChild, ...props }: StackProps) {
  const theme = useTheme() as Theme;
  const children = React.Children.toArray(childrenProp);

  const renderChild = React.useMemo(() => {
    if (asChild) {
      return children
        ?.filter((child) => {
          return React.isValidElement(child);
        })
        ?.map((child, index) => {
          return (
            <Box key={`${index}-asChild`} style={{ ...directionMargin({ direction, spacing, index, theme }) }}>
              {child}
            </Box>
          );
        });
    }

    return children?.map((component, index) => {
      return React.cloneElement(component as React.ReactElement, {
        style: {
          ...directionMargin({ direction, spacing, index, theme }),
        },
      });
    });
  }, [asChild, children, direction, spacing, theme]);

  return (
    <StackStyled flexDirection={direction} spacing={spacing} {...props}>
      {renderChild}
    </StackStyled>
  );
}

if (__DEV__) {
  Stack.displayName = 'Stack';
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
export default React.memo(Stack);
