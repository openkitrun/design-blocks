import { createBox, BoxProps } from '@design-blocks/primitives';

import type { ColorMapProps } from '@design-blocks/native';
import type { AppTheme } from '../../blocks.config';

interface BoxPropsCustom extends ColorMapProps<AppTheme['colors']> {}
const Box = createBox<BoxPropsCustom & BoxProps>();
export default Box;
