import { createStack, StackProps } from '@design-blocks/primitives';
import { ColorMapProps } from '@design-blocks/native';

import type { AppTheme } from '../../blocks.config';

interface StackPropsCustom extends ColorMapProps<AppTheme['colors']> {}
export default createStack<StackPropsCustom & StackProps>();
