import * as React from 'react';
import * as RN from 'react-native';

import { styleFunctionProps, styleFunctionSx, block } from '@design-blocks/system';
import { __DEV__ } from '@design-blocks/utils';

import type { TextProps } from './Text.types';

const TextBlock = block(RN.Text, {
  shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'sx' && prop !== 'as',
})<TextProps>(({ theme, sx, ...styleProps }) => {
  return {
    ...styleFunctionProps('Text', theme, { ...styleProps }),
    ...styleFunctionSx('Text', theme, sx),
  };
});

const Text = React.forwardRef<RN.Text, TextProps>((props, forwardedRef) => {
  return <TextBlock ref={forwardedRef} {...props} />;
});

if (__DEV__) {
  Text.displayName = 'Block.Text';
}

export default React.memo(Text);
