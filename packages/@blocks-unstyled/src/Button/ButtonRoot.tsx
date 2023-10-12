import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { ButtonContext } from './ButtonContext';

import type { ButtonProps } from './Button.types';

export function ButtonRoot({
  style,
  loading,
  disabled,
  hideLabelOnLoading,
  accessibilityRole = 'button',
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
    <ButtonContext.Provider value={{ loading, disabled, hideLabelOnLoading }}>
      <Pressable
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

ButtonRoot.displayName = 'Button.Root';
