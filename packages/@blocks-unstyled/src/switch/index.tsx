import type { ReactNode } from "react";
import React from "react";
import type { AccessibilityProps, AccessibilityState, PressableProps, StyleProp, ViewStyle } from "react-native";
import { Pressable, StyleSheet, View } from "react-native";

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

type SwitchContextValue = {
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange: (checked: boolean) => void;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
};

const Context = React.createContext<SwitchContextValue>({
  checked: false,
  disabled: false,
  onCheckedChange: () => {},
  accessible: true,
});

/* -------------------------------------------------------------------------------------------------
 * SwitchRoot
 * -----------------------------------------------------------------------------------------------*/

type SwitchProps = {
  children?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onCheckedChange?(checked: boolean): void;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  pressableComponent?: React.ComponentType<PressableProps>;
} & Pick<AccessibilityProps, "accessibilityRole">;

function SwitchRoot({
  children,
  pressableComponent: PressableComponent = Pressable,
  checked: checkedProp,
  defaultChecked = false,
  disabled = false,
  onCheckedChange,
  accessible = true,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole = "switch",
  style,
  testID,
  ...rest
}: SwitchProps) {
  const isControlled = checkedProp !== undefined;
  const [checked, setChecked] = React.useState<boolean>(defaultChecked);

  const currentChecked = isControlled ? checkedProp : checked;

  const handleValueChange = React.useCallback(
    (nextChecked: boolean) => {
      if (!isControlled) setChecked(nextChecked);
      onCheckedChange?.(nextChecked);
    },
    [isControlled, onCheckedChange],
  );

  const handlePress = React.useCallback(() => {
    if (!disabled) {
      handleValueChange(!currentChecked);
    }
  }, [disabled, currentChecked, handleValueChange]);

  const accessibilityState = React.useMemo<AccessibilityState>(
    () => ({
      disabled,
      checked: currentChecked,
    }),
    [disabled, currentChecked],
  );

  const context = React.useMemo<SwitchContextValue>(
    () => ({
      checked: currentChecked,
      disabled,
      onCheckedChange: handleValueChange,
      accessible,
      accessibilityLabel,
      accessibilityHint,
    }),
    [currentChecked, disabled, handleValueChange, accessible, accessibilityLabel, accessibilityHint],
  );

  return (
    <PressableComponent
      style={StyleSheet.flatten([style])}
      onPress={handlePress}
      disabled={disabled}
      accessible={accessible}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityState={accessibilityState}
      testID={testID}
      {...rest}
    >
      <Context.Provider value={context}>{children}</Context.Provider>
    </PressableComponent>
  );
}

/* -------------------------------------------------------------------------------------------------
 * SwitchThumb
 * -----------------------------------------------------------------------------------------------*/

type SwitchThumbProps = {
  style?: StyleProp<ViewStyle>;
  thumbComponent?: React.ElementType;
  testID?: string;
};

function SwitchThumb({ style, thumbComponent, testID, ...rest }: SwitchThumbProps) {
  if (thumbComponent) {
    const ThumbComponent = thumbComponent;
    return (
      <View style={StyleSheet.flatten([style])} testID={testID} {...rest}>
        <ThumbComponent />
      </View>
    );
  }

  return <View style={StyleSheet.flatten([style])} testID={testID} {...rest} />;
}

SwitchRoot.displayName = "Block.Switch";

export const Switch = {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
};

export type { SwitchProps, SwitchThumbProps };
