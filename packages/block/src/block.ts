import * as reactNative from 'react-native';

import { createBlock } from './createBlock';
import { createCss } from './css';

/**
 * a function that returns a styled component which render styles in React Native
 */
export const block = createBlock(reactNative.StyleSheet);
export const css = createCss(reactNative.StyleSheet);

const components = [
  'ActivityIndicator',
  'Button',
  'DatePickerIOS',
  'DrawerLayoutAndroid',
  'FlatList',
  'Image',
  'ImageBackground',
  'KeyboardAvoidingView',
  'ListView',
  'Modal',
  'NavigatorIOS',
  'Picker',
  'PickerIOS',
  'Pressable',
  'ProgressBarAndroid',
  'ProgressViewIOS',
  'RecyclerViewBackedScrollView',
  'RefreshControl',
  'SafeAreaView',
  'ScrollView',
  'SectionList',
  'SegmentedControlIOS',
  'Slider',
  'SnapshotViewIOS',
  'StatusBar',
  'SwipeableListView',
  'Switch',
  'SwitchIOS',
  'TabBarIOS',
  'Text',
  'TextInput',
  'ToolbarAndroid',
  'TouchableHighlight',
  'TouchableNativeFeedback',
  'TouchableOpacity',
  'TouchableWithoutFeedback',
  'View',
  'ViewPagerAndroid',
];

export default components.reduce(
  (acc, comp) =>
    Object.defineProperty(acc, comp, {
      enumerable: true,
      configurable: false,
      get() {
        return block(reactNative[comp as keyof typeof reactNative] as React.ElementType<any>);
      },
    }),
  block,
);
