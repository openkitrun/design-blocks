import * as React from 'react';
import * as RN from 'react-native';

import block from '@design-blocks/block';
import { StyleFunctionMode, styleFunction } from '@design-blocks/system';
import { __DEV__ } from '@design-blocks/utils';

import type { TextProps } from '../Text/Text.types';

export function createText<AdditionalProps extends TextProps = TextProps>() {
  const TextBlock = block(RN.Text, {
    shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'sx' && prop !== 'as',
  })<AdditionalProps>(({ theme, sx, ...styleProps }) => {
    return {
      ...styleFunction('Text', theme, { ...styleProps }, StyleFunctionMode.PROPS),
      ...styleFunction('Text', theme, sx, StyleFunctionMode.SX),
    };
  });

  const Text = React.forwardRef<RN.Text, AdditionalProps>((props, forwardedRef) => {
    return <TextBlock ref={forwardedRef} {...props} />;
  });

  return Text;
}
