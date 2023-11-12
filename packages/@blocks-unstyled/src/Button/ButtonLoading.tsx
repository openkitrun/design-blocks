import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import { ButtonContext } from './ButtonContext';

import type { ButtonLoadingProps } from './Button.types';

export function ButtonLoading({ nativeID: nativeIDProp, testID: testIDProp, style, ...others }: ButtonLoadingProps) {
  const { nativeID, testID, loading } = React.useContext(ButtonContext);

  const finalNativeID = nativeIDProp || (nativeID ? `${nativeID}Indicator` : undefined);
  const finalTestID = testIDProp || (testID ? `${testID}Indicator` : undefined);

  if (loading) {
    return (
      <ActivityIndicator
        nativeID={finalNativeID}
        testID={finalTestID}
        style={StyleSheet.flatten([styles.root, style])}
        {...others}
      />
    );
  }

  return null;
}

const styles = StyleSheet.create({
  root: {},
});

ButtonLoading.displayName = 'BlockButton.Loading';
