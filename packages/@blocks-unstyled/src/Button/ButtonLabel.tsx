import React from 'react';

import { Platform, StyleSheet, Text } from 'react-native';

import { ButtonContext } from './ButtonContext';

import type { ButtonLabelProps } from './Button.types';

export function ButtonLabel({ style, ...others }: ButtonLabelProps) {
  const { hideLabelOnLoading, disabled } = React.useContext(ButtonContext);

  if (hideLabelOnLoading) {
    return null;
  }

  return <Text disabled={disabled} style={StyleSheet.flatten([styles.root, style])} {...others} />;
}

const styles = StyleSheet.create({
  root: {
    fontSize: 16,
    textAlign: 'center',
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium',
      },
    }),
  },
});
