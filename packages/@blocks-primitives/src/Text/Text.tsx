import * as React from 'react';

import { __DEV__ } from '@design-blocks/utils';

import { createText } from '../create';

const Text = createText();

if (__DEV__) {
  Text.displayName = 'Block.Text';
}

export default React.memo(Text);
