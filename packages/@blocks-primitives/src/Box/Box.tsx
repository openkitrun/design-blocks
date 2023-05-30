import * as React from 'react';
import * as RN from 'react-native';

import block from '@design-blocks/core';

import { styleFunctionProps, styleFunctionSx } from '@design-blocks/system';
import { __DEV__ } from '@design-blocks/utils';

import type { BoxProps } from './Box.types';

const BoxBlock = block(RN.View, {
  shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'sx' && prop !== 'as',
})<BoxProps>(({ theme, sx, ...styleProps }) => {
  return {
    ...styleFunctionProps('Box', theme, { ...styleProps }),
    ...styleFunctionSx('Box', theme, sx),
  };
});

const Box = React.forwardRef<RN.View, BoxProps>((props, forwardedRef) => {
  return <BoxBlock ref={forwardedRef} {...props} />;
});

if (__DEV__) {
  Box.displayName = 'Block.Box';
}

export default React.memo(Box);
