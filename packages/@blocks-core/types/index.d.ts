import * as RN from 'react-native';
import { Theme } from '@design-blocks/theme';

import {
  CreateBlock as BaseCreateBlock,
  CreateBlockComponent,
  CSSInterpolation,
  Interpolation,
  ReactNativeStyle,
  ReactNativeStyleType,
} from './base';

export {
  ArrayCSSInterpolation,
  ArrayInterpolation,
  CreateBlockComponent,
  CSSInterpolation,
  FilteringStyledOptions,
  FunctionInterpolation,
  Interpolation,
  InterpolationPrimitive,
  ObjectInterpolation,
  ReactNativeStyle,
  StyledComponent,
  StyledOptions,
} from './base';

type ReactNative = typeof RN;

export function css<StyleType extends ReactNativeStyle = ReactNativeStyle>(
  template: TemplateStringsArray,
  ...args: Array<Interpolation>
): StyleType;
export function css<StyleType extends ReactNativeStyle = ReactNativeStyle>(...args: Array<StyleType>): StyleType;
export function css<StyleType extends ReactNativeStyle = ReactNativeStyle>(...args: Array<CSSInterpolation>): StyleType;

// those 2 are just copies of the `BaseCreateBlock` with supplied `C` type argument
type HostClassComponent<C extends React.ComponentClass<any>> = CreateBlockComponent<
  React.ComponentProps<C> & { theme?: Theme; as?: React.ElementType },
  {},
  { ref?: React.Ref<InstanceType<C>> },
  ReactNativeStyleType<React.ComponentProps<C>>
>;

type HostFunctionComponent<C extends React.FunctionComponent<any>> = CreateBlockComponent<
  React.ComponentProps<C> & { theme?: Theme; as?: React.ElementType },
  {},
  {},
  ReactNativeStyleType<React.ComponentProps<C>>
>;

export interface StyledComponents {
  ActivityIndicator: HostClassComponent<ReactNative['ActivityIndicator']>;
  Button: HostClassComponent<ReactNative['Button']>;
  DatePickerIOS: HostClassComponent<ReactNative['DatePickerIOS']>;
  DrawerLayoutAndroid: HostClassComponent<ReactNative['DrawerLayoutAndroid']>;
  FlatList: HostClassComponent<ReactNative['FlatList']>;
  Image: HostClassComponent<ReactNative['Image']>;
  ImageBackground: HostClassComponent<ReactNative['ImageBackground']>;
  KeyboardAvoidingView: HostClassComponent<ReactNative['KeyboardAvoidingView']>;
  ListView: HostClassComponent<ReactNative['ListView']>;
  Modal: HostClassComponent<ReactNative['Modal']>;
  NavigatorIOS: HostClassComponent<ReactNative['NavigatorIOS']>;
  Picker: HostClassComponent<ReactNative['Picker']>;
  PickerIOS: HostClassComponent<ReactNative['PickerIOS']>;
  Pressable: HostFunctionComponent<ReactNative['Pressable']>;
  ProgressBarAndroid: HostClassComponent<ReactNative['ProgressBarAndroid']>;
  ProgressViewIOS: HostClassComponent<ReactNative['ProgressViewIOS']>;
  RecyclerViewBackedScrollView: HostClassComponent<ReactNative['RecyclerViewBackedScrollView']>;
  RefreshControl: HostClassComponent<ReactNative['RefreshControl']>;
  SafeAreaView: HostClassComponent<ReactNative['SafeAreaView']>;
  ScrollView: HostClassComponent<ReactNative['ScrollView']>;
  SectionList: HostClassComponent<ReactNative['SectionList']>;
  SegmentedControlIOS: HostClassComponent<ReactNative['SegmentedControlIOS']>;
  Slider: HostClassComponent<ReactNative['Slider']>;
  SnapshotViewIOS: HostClassComponent<ReactNative['SnapshotViewIOS']>;
  StatusBar: HostClassComponent<ReactNative['StatusBar']>;
  SwipeableListView: HostClassComponent<ReactNative['SwipeableListView']>;
  Switch: HostClassComponent<ReactNative['Switch']>;
  SwitchIOS: HostClassComponent<ReactNative['SwitchIOS']>;
  TabBarIOS: HostClassComponent<ReactNative['TabBarIOS']>;
  Text: HostClassComponent<ReactNative['Text']>;
  TextInput: HostClassComponent<ReactNative['TextInput']>;
  ToolbarAndroid: HostClassComponent<ReactNative['ToolbarAndroid']>;
  TouchableHighlight: HostClassComponent<ReactNative['TouchableHighlight']>;
  TouchableNativeFeedback: HostClassComponent<ReactNative['TouchableNativeFeedback']>;
  TouchableOpacity: HostClassComponent<ReactNative['TouchableOpacity']>;
  TouchableWithoutFeedback: HostClassComponent<ReactNative['TouchableWithoutFeedback']>;
  View: HostClassComponent<ReactNative['View']>;
  ViewPagerAndroid: HostClassComponent<ReactNative['ViewPagerAndroid']>;
}

export interface CreateBlock extends BaseCreateBlock, StyledComponents {}

declare const block: CreateBlock;
export default block;
