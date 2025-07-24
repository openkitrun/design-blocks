"use strict";

import React from "react";
import { ActivityIndicator, Platform, Pressable, StyleSheet, Text } from "react-native";
import { jsx as _jsx } from "react/jsx-runtime";
const ButtonContext = /*#__PURE__*/React.createContext({});

/* -------------------------------------------------------------------------------------------------
 * ButtonRoot
 * -----------------------------------------------------------------------------------------------*/
function ButtonRoot({
  style,
  loading,
  disabled,
  hideLabelOnLoading,
  accessible = true,
  accessibilityRole = "button",
  accessibilityLanguage,
  testID,
  nativeID,
  ...others
}) {
  const accessibilityState = React.useMemo(() => ({
    disabled,
    busy: loading
  }), [disabled, loading]);
  return /*#__PURE__*/_jsx(ButtonContext.Provider, {
    value: {
      nativeID,
      testID,
      accessible,
      loading,
      disabled,
      hideLabelOnLoading,
      accessibilityLanguage
    },
    children: /*#__PURE__*/_jsx(Pressable, {
      nativeID: nativeID,
      testID: testID,
      "aria-busy": accessible && accessibilityState.busy,
      "aria-disabled": accessible && accessibilityState.disabled,
      accessible: accessible,
      accessibilityRole: accessibilityRole,
      accessibilityState: accessibilityState,
      style: StyleSheet.flatten([stylesButton.root, style]),
      disabled: disabled || loading,
      ...others
    })
  });
}
const stylesButton = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

/* -------------------------------------------------------------------------------------------------
 * ButtonLabel
 * -----------------------------------------------------------------------------------------------*/
function ButtonLabel({
  nativeID: nativeIDProp,
  testID: testIDProp,
  style,
  ...others
}) {
  const {
    nativeID,
    testID,
    hideLabelOnLoading,
    loading,
    disabled,
    accessibilityLanguage
  } = React.useContext(ButtonContext);
  const finalNativeID = nativeIDProp || (nativeID ? `${nativeID}Indicator` : undefined);
  const finalTestID = testIDProp || (testID ? `${testID}Indicator` : undefined);
  if (loading && hideLabelOnLoading) {
    return null;
  }
  return /*#__PURE__*/_jsx(Text, {
    nativeID: finalNativeID,
    testID: finalTestID,
    accessibilityLanguage: accessibilityLanguage,
    disabled: disabled,
    style: StyleSheet.flatten([stylesLabel.root, style]),
    ...others
  });
}
const FONT_SIZE = 14;
const stylesLabel = StyleSheet.create({
  root: {
    fontSize: FONT_SIZE,
    textAlign: "center",
    ...Platform.select({
      android: {
        fontFamily: "sans-serif-medium"
      }
    })
  }
});

/* -------------------------------------------------------------------------------------------------
 * ButtonLoading
 * -----------------------------------------------------------------------------------------------*/
function ButtonLoading({
  nativeID: nativeIDProp,
  testID: testIDProp,
  style,
  ...others
}) {
  const {
    nativeID,
    testID,
    loading
  } = React.useContext(ButtonContext);
  const finalNativeID = nativeIDProp || (nativeID ? `${nativeID}Indicator` : undefined);
  const finalTestID = testIDProp || (testID ? `${testID}Indicator` : undefined);
  if (loading) {
    return /*#__PURE__*/_jsx(ActivityIndicator, {
      nativeID: finalNativeID,
      testID: finalTestID,
      style: StyleSheet.flatten([style]),
      ...others
    });
  }
  return null;
}
ButtonRoot.displayName = "Block.Button";
export const Button = {
  Root: ButtonRoot,
  Label: ButtonLabel,
  Loading: ButtonLoading
};
//# sourceMappingURL=index.js.map