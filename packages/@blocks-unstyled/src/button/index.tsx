import React from "react";
import type {
  AccessibilityProps,
  ActivityIndicatorProps,
  GestureResponderEvent,
  PressableProps,
  StyleProp,
  TextProps,
  ViewStyle,
} from "react-native";
import { ActivityIndicator, Platform, Pressable, StyleSheet, Text } from "react-native";

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

type ButtonContext = Pick<
  ButtonProps,
  "nativeID" | "testID" | "accessible" | "disabled" | "loading" | "hideLabelOnLoading" | "accessibilityLanguage"
>;
const Context = React.createContext<ButtonContext>({});

/* -------------------------------------------------------------------------------------------------
 * ButtonRoot
 * -----------------------------------------------------------------------------------------------*/

export type ButtonState = {
  disabled?: boolean;
  loading?: boolean;
};

type ButtonProps = Pick<
  PressableProps,
  | "disabled"
  | "onPress"
  | "testID"
  | "onLongPress"
  | "hitSlop"
  | "onHoverIn"
  | "onHoverOut"
  | "onPressIn"
  | "onPressOut"
  | "onFocus"
  | "onBlur"
> & {
  nativeID?: string;
  style?: StyleProp<ViewStyle>;
  pressedStyle?: StyleProp<ViewStyle>;
  hideLabelOnLoading?: null | boolean;
  accessible?: boolean;
  accessibilityLanguage?: PressableProps["accessibilityLanguage"];
  /**
   * For a11y, try to make this descriptive and clear
   */
  accessibilityLabel?: string;
  pressableComponent?: React.ComponentType<PressableProps>;
  children: React.ReactElement;
} & AccessibilityProps &
  ButtonState;

function ButtonRoot({
  style,
  pressedStyle,
  nativeID,
  loading,
  disabled,
  hideLabelOnLoading,
  accessible = true,
  accessibilityRole = "button",
  accessibilityLanguage,
  accessibilityLabel,
  testID,
  pressableComponent: PressableComponent = Pressable,
  onPressIn: onPressInOuter,
  onPressOut: onPressOutOuter,
  children,
  ...rest
}: ButtonProps) {
  const [state, setState] = React.useState({
    pressed: false,
  });

  const accessibilityState = React.useMemo(
    () => ({
      disabled,
      busy: loading,
    }),
    [disabled, loading],
  );

  const onPressIn = React.useCallback(
    (e: GestureResponderEvent) => {
      setState((s) => ({
        ...s,
        pressed: true,
      }));
      onPressInOuter?.(e);
    },
    [onPressInOuter],
  );

  const onPressOut = React.useCallback(
    (e: GestureResponderEvent) => {
      setState((s) => ({
        ...s,
        pressed: false,
      }));
      onPressOutOuter?.(e);
    },
    [onPressOutOuter],
  );

  const context = React.useMemo<ButtonContext>(
    () => ({
      ...state,
      nativeID,
      testID,
      accessible,
      loading,
      disabled,
      hideLabelOnLoading,
      accessibilityLanguage,
    }),
    [state, nativeID, testID, accessible, loading, disabled, hideLabelOnLoading, accessibilityLanguage],
  );

  return (
    <PressableComponent
      nativeID={nativeID}
      testID={testID}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      aria-label={accessibilityLabel}
      aria-pressed={state.pressed}
      aria-busy={accessible && accessibilityState.busy}
      aria-disabled={accessible && accessibilityState.disabled}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityState={accessibilityState}
      style={StyleSheet.flatten([stylesButton.root, style, state.pressed ? pressedStyle : {}])}
      disabled={disabled || loading}
      {...rest}
    >
      <Context.Provider value={context}>{children}</Context.Provider>
    </PressableComponent>
  );
}

const stylesButton = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

/* -------------------------------------------------------------------------------------------------
 * ButtonLabel
 * -----------------------------------------------------------------------------------------------*/

type ButtonLabelProps = TextProps;

function ButtonLabel({ nativeID: nativeIDProp, testID: testIDProp, style, ...others }: ButtonLabelProps) {
  const { nativeID, testID, hideLabelOnLoading, loading, disabled, accessibilityLanguage } = React.useContext(Context);

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
      style={StyleSheet.flatten([stylesLabel.root, style])}
      {...others}
    />
  );
}

const FONT_SIZE = 14;
const stylesLabel = StyleSheet.create({
  root: {
    fontSize: FONT_SIZE,
    textAlign: "center",
    ...Platform.select({
      android: {
        fontFamily: "sans-serif-medium",
      },
    }),
  },
});

/* -------------------------------------------------------------------------------------------------
 * ButtonLoading
 * -----------------------------------------------------------------------------------------------*/

type ButtonLoadingProps = ActivityIndicatorProps & {
  indicatorComponent?: React.ElementType;
};

function ButtonLoading({
  nativeID: nativeIDProp,
  testID: testIDProp,
  style,
  indicatorComponent,
  ...others
}: ButtonLoadingProps) {
  const { nativeID, testID, loading } = React.useContext(Context);

  const finalNativeID = nativeIDProp || (nativeID ? `${nativeID}Indicator` : undefined);
  const finalTestID = testIDProp || (testID ? `${testID}Indicator` : undefined);

  if (loading) {
    if (indicatorComponent) {
      const IndicatorComponent = indicatorComponent;
      return <IndicatorComponent />;
    }

    return (
      <ActivityIndicator
        nativeID={finalNativeID}
        testID={finalTestID}
        style={StyleSheet.flatten([style])}
        {...others}
      />
    );
  }

  return null;
}

ButtonRoot.displayName = "Block.Button";

export const Button = {
  Root: ButtonRoot,
  Label: ButtonLabel,
  Loading: ButtonLoading,
};

export type { ButtonProps, ButtonLabelProps, ButtonLoadingProps };
