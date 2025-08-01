import type { ReactNode } from "react";
import React from "react";
import type { AccessibilityProps, AccessibilityState, StyleProp, TextProps, ViewStyle } from "react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

type RadioGroupContextValue = {
  required?: boolean;
  disabled?: boolean;
  value?: string | null;
  defaultValue?: string;
  setValue: (v: string) => void;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
};

const Context = React.createContext<RadioGroupContextValue>({
  required: false,
  disabled: false,
  value: null,
  setValue: () => {},
  accessible: true,
});

/* -------------------------------------------------------------------------------------------------
 * RadioGroupRoot
 * -----------------------------------------------------------------------------------------------*/

type RadioGroupProps = Omit<RadioGroupContextValue, "setValue"> & {
  testID?: string;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  onValueChange(value: string): void;
} & Pick<AccessibilityProps, "accessibilityRole">;

function RadioGroupRoot({
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole = "radiogroup",
  style,
  children,
  required = false,
  disabled,
  value: valueProp,
  defaultValue,
  onValueChange,
  accessible = true,
  ...rest
}: RadioGroupProps) {
  const isControlled = valueProp !== undefined;
  const [value, setValue] = React.useState<string | null>(defaultValue ?? null);

  const currentValue = isControlled ? valueProp : value;

  const handleSetValue = React.useCallback(
    (next: string) => {
      if (!isControlled) setValue(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  const context = React.useMemo<RadioGroupContextValue>(
    () => ({
      required,
      disabled,
      value: currentValue,
      setValue: handleSetValue,
      accessible,
      defaultValue,
      accessibilityLabel,
      accessibilityHint,
    }),
    [required, disabled, currentValue, handleSetValue, accessible, defaultValue, accessibilityLabel, accessibilityHint],
  );

  return (
    <View
      style={StyleSheet.flatten([style])}
      accessible={accessible}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityState={{
        disabled,
      }}
      {...rest}
    >
      <Context.Provider value={context}>{children}</Context.Provider>
    </View>
  );
}

/* -------------------------------------------------------------------------------------------------
 * RadioGroupRadio
 * -----------------------------------------------------------------------------------------------*/

type RadioGroupRadioProps = {
  testID?: string;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  value: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
} & Omit<AccessibilityProps, "accessibilityLabel" | "accessibilityHint">;

type ContextRadioGroupRadioProps = Pick<RadioGroupRadioProps, "required" | "disabled"> & {
  checked?: boolean;
};

const ContextRadioGroupRadio = React.createContext<ContextRadioGroupRadioProps>({
  checked: false,
  disabled: false,
});

function RadioGroupRadio({
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole = "radio",
  value: valueProp,
  style,
  children,
  disabled,
  ...rest
}: RadioGroupRadioProps) {
  const context = React.useContext(Context);
  const isDisabled = context.disabled || disabled;
  const checked = context.value === valueProp;

  const accessibilityState = React.useMemo<AccessibilityState>(
    () => ({
      disabled,
      checked,
    }),
    [disabled, checked],
  );

  const handleValueChange = React.useCallback(() => {
    context.setValue(valueProp);
  }, [context.setValue, valueProp]);

  const contextInput = React.useMemo<ContextRadioGroupRadioProps>(
    () => ({
      disabled: isDisabled,
      checked,
    }),
    [isDisabled, checked],
  );

  return (
    <Pressable
      disabled={isDisabled}
      style={StyleSheet.flatten([style])}
      onPress={handleValueChange}
      accessible={context?.accessible}
      aria-disabled={context?.accessible && accessibilityState.disabled}
      aria-checked={accessibilityState.checked}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityState={accessibilityState}
      {...rest}
    >
      <ContextRadioGroupRadio.Provider value={contextInput}>{children}</ContextRadioGroupRadio.Provider>
    </Pressable>
  );
}

/* -------------------------------------------------------------------------------------------------
 * RadioGroupInput
 * -----------------------------------------------------------------------------------------------*/

type RadioGroupInputProps = {
  testID?: string;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

function RadioGroupInput({ style, ...rest }: RadioGroupInputProps) {
  return <View style={StyleSheet.flatten([style])} {...rest} />;
}

/* -------------------------------------------------------------------------------------------------
 * RadioLabel
 * -----------------------------------------------------------------------------------------------*/

type RadioLabelProps = TextProps & {};

function RadioLabel({ style, accessibilityLabel, accessibilityHint, ...rest }: RadioLabelProps) {
  const context = React.useContext(Context);
  const contextRadio = React.useContext(ContextRadioGroupRadio);

  return (
    <Text
      style={StyleSheet.flatten([style])}
      disabled={contextRadio.disabled}
      accessible={context?.accessible}
      accessibilityRole="text"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      {...rest}
    />
  );
}

/* -------------------------------------------------------------------------------------------------
 * RadioIndicator
 * -----------------------------------------------------------------------------------------------*/

type RadioIndicatorProps = {
  testID?: string;
  style?: StyleProp<ViewStyle>;
  indicatorComponent?: React.ElementType;
  accessibilityLabel?: string;
  accessibilityHint?: string;
};

function RadioIndicator({
  style,
  indicatorComponent,
  accessibilityLabel,
  accessibilityHint,
  ...rest
}: RadioIndicatorProps) {
  const contextRadio = React.useContext(ContextRadioGroupRadio);

  if (contextRadio.checked && indicatorComponent) {
    const IndicatorComponent = indicatorComponent;
    return (
      <IndicatorComponent
        style={StyleSheet.flatten([style])}
        accessibilityLabel={accessibilityLabel || "Selected"}
        accessibilityHint={accessibilityHint}
        accessibilityState={{
          selected: contextRadio.checked,
        }}
        {...rest}
      />
    );
  }

  if (contextRadio.checked) {
    return (
      <View
        style={StyleSheet.flatten([style])}
        accessibilityLabel={accessibilityLabel || "Selected"}
        accessibilityHint={accessibilityHint}
        accessibilityState={{
          selected: contextRadio.checked,
        }}
        {...rest}
      />
    );
  }

  return null;
}

RadioGroupRoot.displayName = "Block.RadioGroup";

export const RadioGroup = {
  Root: RadioGroupRoot,
  Radio: RadioGroupRadio,
  Input: RadioGroupInput,
  Label: RadioLabel,
  Indicator: RadioIndicator,
};

export type { RadioGroupProps, RadioGroupRadioProps, RadioGroupInputProps, RadioLabelProps, RadioIndicatorProps };
