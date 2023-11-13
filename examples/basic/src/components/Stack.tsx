import { createStack, StackProps } from '@design-blocks/primitives';

import type { ColorMapProps } from '@design-blocks/native';
import type { ColorsAppTheme } from '../../block';

interface StackPropsCustom extends ColorMapProps<ColorsAppTheme> {}
export default createStack<StackPropsCustom & StackProps>();
