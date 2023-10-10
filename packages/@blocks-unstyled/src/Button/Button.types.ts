import React from 'react';

import type { ActivityIndicatorProps, PressableProps, TextProps } from 'react-native';

export type ButtonBaseProps = {
  children: React.ReactNode;
};

export interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  disabled?: boolean | undefined;
  loading?: null | boolean | undefined;
  hideLabelOnLoading?: null | boolean | undefined;
}

export type ButtonContextProps = Pick<ButtonProps, 'disabled' | 'loading' | 'hideLabelOnLoading'>;

export interface ButtonLabelProps extends TextProps {}

export interface ButtonLoadingProps extends ActivityIndicatorProps {}
