import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import { ButtonContext } from './ButtonContext';

import type { ButtonLoadingProps } from './Button.types';

export function ButtonLoading({ style, ...others }: ButtonLoadingProps) {
  const { loading } = React.useContext(ButtonContext);

  if (loading) {
    return <ActivityIndicator style={StyleSheet.flatten([styles.root, style])} {...others} />;
  }

  return null;
}

const styles = StyleSheet.create({
  root: {},
});

ButtonLoading.displayName = 'Block.Button.Loading';
