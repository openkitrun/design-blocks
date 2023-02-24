import React from 'react';

import {Text, TextProps} from 'react-native';
import {styled} from '../../blocks.config';

function Title({...rest}) {
  const TitleRoot = styled(Text)<TextProps>(({theme}) => {
    return {
      color: theme.colors.green[700],
    };
  });

  return <TitleRoot {...rest} />;
}

export default Title;
