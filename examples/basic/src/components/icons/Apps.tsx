import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconApps({ color = '#000', size = 24, ...props }: IconProps) {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' height={size} width={size} viewBox='0 0 24 24' {...props}>
      <Path
        d='M7.5 11.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0 10a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm10-10a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0 10a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm-10-12a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm10-10a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'
        fill={color}
      />
    </Svg>
  );
}

export default IconApps;
