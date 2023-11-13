import { createBox, BoxProps } from '@design-blocks/primitives';

import type { ColorMapProps } from '@design-blocks/native';
import type { ColorsAppTheme } from '../../block';

interface BoxPropsCustom extends ColorMapProps<ColorsAppTheme> {}
const Box = createBox<BoxPropsCustom & BoxProps>();
export default Box;
