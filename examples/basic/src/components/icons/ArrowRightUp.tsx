import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconArrowRightUp({ color = '#000', size = 24, ...props }: IconProps) {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' height={size} width={size} viewBox='0 0 24 24' {...props}>
      <Path d='M16.004 9.414l-8.607 8.607-1.414-1.414L14.59 8H7.003V6h11v11h-2V9.414z' fill={color} />
    </Svg>
  );
}

export default IconArrowRightUp;
