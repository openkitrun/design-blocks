import * as React from 'react';
import * as RN from 'react-native';

import { styleFunctionProps, styleFunctionSx, styled } from '@design-blocks/system';
import { __DEV__ } from '@design-blocks/utils';

import type { BoxProps } from './Box.types';

const BoxStyled = styled(RN.View, {
  shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'sx' && prop !== 'as',
})<BoxProps>(({ theme, sx, ...styleProps }) => {
  return {
    ...styleFunctionProps('Box', theme, { ...styleProps }),
    ...styleFunctionSx('Box', theme, sx),
  };
});

const Box = React.forwardRef<RN.View, BoxProps>((props, forwardedRef) => {
  return <BoxStyled ref={forwardedRef} {...props} />;
});

if (__DEV__) {
  Box.displayName = 'Box';
}

export default React.memo(Box);
