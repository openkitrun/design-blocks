import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { ButtonContext } from './ButtonContext';

import type { ButtonProps } from './Button.types';

export function ButtonRoot({
  style,
  loading,
  disabled,
  hideLabelOnLoading,
  accessible = true,
  accessibilityRole = 'button',
  accessibilityLanguage,
  testID,
  nativeID,
  ...others
}: ButtonProps) {
  const accessibilityState = React.useMemo(
    () => ({
      disabled,
      busy: loading,
    }),
    [disabled, loading],
  );

  return (
    <ButtonContext.Provider
      value={{ nativeID, testID, accessible, loading, disabled, hideLabelOnLoading, accessibilityLanguage }}
    >
      <Pressable
        nativeID={nativeID}
        testID={testID}
        accessible={accessible}
        accessibilityRole={accessibilityRole}
        accessibilityState={accessibilityState}
        style={StyleSheet.flatten([styles.root, style])}
        disabled={disabled || loading}
        {...others}
      />
    </ButtonContext.Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

ButtonRoot.displayName = 'Block.Button';
