import React from 'react';

import { Text, TextProps } from 'react-native';
import { block } from '../../blocks.config';

const TitleRoot = block(Text)<TextProps>(({ theme }) => {
  return {
    color: theme.colors.green[700],
  };
});

function Title({ ...rest }) {
  return <TitleRoot {...rest} />;
}

export default Title;
