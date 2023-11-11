import * as React from 'react';
import * as RN from 'react-native';

import block from '@design-blocks/block';

import { styleFunctionProps, styleFunctionSx } from '@design-blocks/system';
import { __DEV__ } from '@design-blocks/utils';

import type { BoxProps } from './Box.types';

export function createBox<AdditionalProps extends BoxProps = BoxProps>() {
  const BoxBlock = block(RN.View, {
    shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'sx' && prop !== 'as',
  })<AdditionalProps>(({ theme, sx, ...styleProps }) => {
    return {
      ...styleFunctionProps('Box', theme, { ...styleProps }),
      ...styleFunctionSx('Box', theme, sx),
    };
  });

  const Box = React.forwardRef<RN.View, AdditionalProps>((props, forwardedRef) => {
    return <BoxBlock ref={forwardedRef} {...props} />;
  });

  return Box;
}
