import * as React from 'react';

import block from '@design-blocks/block';

import { StyleFunctionMode, styleFunction } from '@design-blocks/system';
import { __DEV__, camelCase } from '@design-blocks/utils';

import { Box } from '../Box';
import { variants } from './Stack.utils';

import type { IStackStyleValue, StackProps } from './Stack.types';

export function createStack<AdditionalProps extends StackProps = StackProps>() {
  const StackBlock = block(Box, {
    shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'sx' && prop !== 'as',
  })<Omit<AdditionalProps, 'direction'>>(
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
        ...styleFunction('Box', theme, { ...styleProps }, StyleFunctionMode.PROPS),
        ...styleFunction('Box', theme, sx, StyleFunctionMode.SX),
      };
    },
  );

  function Stack({ direction, ...props }: AdditionalProps) {
    return <StackBlock flexDirection={direction} {...props} />;
  }

  return Stack;
}
