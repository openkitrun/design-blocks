import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconRefresh({ color = '#000', size = 24, ...props }: IconProps) {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' height={size} width={size} viewBox='0 0 24 24' {...props}>
      <Path
        d='M5.463 4.433A9.961 9.961 0 0112 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 006.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0112 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0013.54 5.772l.997 1.795z'
        fill={color}
      />
    </Svg>
  );
}

export default IconRefresh;
