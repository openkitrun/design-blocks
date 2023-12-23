import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

import { ButtonContext } from './ButtonContext';

import type { ButtonLabelProps } from './Button.types';

export function ButtonLabel({ nativeID: nativeIDProp, testID: testIDProp, style, ...others }: ButtonLabelProps) {
  const { nativeID, testID, hideLabelOnLoading, loading, disabled, accessibilityLanguage } =
    React.useContext(ButtonContext);

  const finalNativeID = nativeIDProp || (nativeID ? `${nativeID}Indicator` : undefined);
  const finalTestID = testIDProp || (testID ? `${testID}Indicator` : undefined);

  if (loading && hideLabelOnLoading) {
    return null;
  }

  return (
    <Text
      nativeID={finalNativeID}
      testID={finalTestID}
      accessibilityLanguage={accessibilityLanguage}
      disabled={disabled}
      style={StyleSheet.flatten([styles.root, style])}
      {...others}
    />
  );
}

const FONT_SIZE = 16;
const styles = StyleSheet.create({
  root: {
    fontSize: FONT_SIZE,
    textAlign: 'center',
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium',
      },
    }),
  },
});

ButtonLabel.displayName = 'Block.ButtonLabel';
