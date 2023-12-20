import * as React from 'react';

import { __DEV__ } from '@design-blocks/utils';

import { createBox } from '../create';

const Box = createBox();

if (__DEV__) {
  Box.displayName = 'Block.Box';
}

export default React.memo(Box);
