import React from 'react';

import type { ActivityIndicatorProps, PressableProps, TextProps } from 'react-native';

export type ButtonBaseProps = {
  children: React.ReactNode;
};

export interface ButtonProps extends PressableProps {
  disabled?: boolean | undefined;
  loading?: boolean | undefined;
  hideLabelOnLoading?: null | boolean | undefined;
  accessible?: boolean;
  accessibilityLanguage?: PressableProps['accessibilityLanguage'];
}

export type ButtonContextProps = Pick<
  ButtonProps,
  'nativeID' | 'testID' | 'accessible' | 'disabled' | 'loading' | 'hideLabelOnLoading' | 'accessibilityLanguage'
>;

export interface ButtonLabelProps extends TextProps {}

export interface ButtonLoadingProps extends ActivityIndicatorProps {}
