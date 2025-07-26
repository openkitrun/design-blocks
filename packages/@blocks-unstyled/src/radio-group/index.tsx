import type { ReactNode } from "react";
import React from "react";
import type { AccessibilityProps, AccessibilityState, StyleProp, TextStyle, ViewStyle } from "react-native";
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
};

type ContextRadioGroupRadioProps = Pick<
	RadioGroupRadioProps,
	"required" | "disabled" | "value" | "accessibilityLabel" | "accessibilityHint"
> & {
	checked?: boolean;
};

const ContextRadioGroupRadio = React.createContext<ContextRadioGroupRadioProps>({
	checked: false,
	disabled: false,
	value: "",
});

function RadioGroupRadio({
	accessibilityLabel,
	accessibilityHint,
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

	const contextInput = React.useMemo<ContextRadioGroupRadioProps>(
		() => ({
			disabled: isDisabled,
			value: valueProp,
			checked,
			accessibilityLabel,
			accessibilityHint,
		}),
		[isDisabled, valueProp, checked, accessibilityLabel, accessibilityHint],
	);

	return (
		<View
			style={StyleSheet.flatten([style])}
			accessible={context?.accessible}
			aria-disabled={context?.accessible && accessibilityState.disabled}
			accessibilityState={accessibilityState}
			{...rest}
		>
			<ContextRadioGroupRadio.Provider value={contextInput}>{children}</ContextRadioGroupRadio.Provider>
		</View>
	);
}

/* -------------------------------------------------------------------------------------------------
 * RadioGroupInput
 * -----------------------------------------------------------------------------------------------*/

type RadioGroupInputProps = {
	testID?: string;
	style?: StyleProp<ViewStyle>;
	children?: ReactNode;
} & Omit<AccessibilityProps, "accessibilityLabel" | "accessibilityHint">;

function RadioGroupInput({ style, children, accessibilityRole = "radio", ...rest }: RadioGroupInputProps) {
	const contextRoot = React.useContext(Context);
	const contextRadio = React.useContext(ContextRadioGroupRadio);

	const accessibilityState = React.useMemo<AccessibilityState>(
		() => ({
			disabled: contextRadio.disabled,
			checked: contextRadio.checked,
		}),
		[contextRadio.disabled, contextRadio.checked],
	);

	const handleValueChange = React.useCallback(() => {
		contextRoot.setValue(contextRadio.value);
	}, [contextRoot.setValue, contextRadio.value]);

	return (
		<Pressable
			disabled={contextRadio.disabled}
			style={StyleSheet.flatten([style])}
			onPress={handleValueChange}
			accessible={contextRoot?.accessible}
			aria-disabled={contextRoot?.accessible && accessibilityState.disabled}
			aria-checked={contextRadio.checked}
			accessibilityRole={accessibilityRole}
			accessibilityLabel={contextRadio.accessibilityLabel}
			accessibilityHint={contextRadio.accessibilityHint}
			accessibilityState={accessibilityState}
			{...rest}
		>
			{children}
		</Pressable>
	);
}

/* -------------------------------------------------------------------------------------------------
 * RadioLabel
 * -----------------------------------------------------------------------------------------------*/

type RadioLabelProps = {
	testID?: string;
	style?: StyleProp<TextStyle>;
	children?: ReactNode;
	disabledCheck?: boolean;
	accessibilityLabel?: string;
	accessibilityHint?: string;
};

function RadioLabel({
	style,
	children,
	disabledCheck = false,
	accessibilityLabel,
	accessibilityHint,
	...rest
}: RadioLabelProps) {
	const context = React.useContext(Context);
	const contextRadio = React.useContext(ContextRadioGroupRadio);

	const handleValueChange = React.useCallback(() => {
		context.setValue(contextRadio.value);
	}, [context.setValue, contextRadio.value]);

	if (disabledCheck) {
		return (
			<Text
				style={StyleSheet.flatten([style])}
				disabled={contextRadio.disabled}
				accessible={context?.accessible}
				accessibilityLabel={accessibilityLabel}
				accessibilityHint={accessibilityHint}
				{...rest}
			>
				{children}
			</Text>
		);
	}

	return (
		<Pressable
			disabled={contextRadio.disabled}
			onPress={handleValueChange}
			accessible={context?.accessible}
			accessibilityRole="text"
			accessibilityLabel={accessibilityLabel}
			accessibilityHint={accessibilityHint}
		>
			<Text style={StyleSheet.flatten([style])} {...rest}>
				{children}
			</Text>
		</Pressable>
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
	const contextInput = React.useContext(ContextRadioGroupRadio);

	if (contextInput.checked && indicatorComponent) {
		const IndicatorComponent = indicatorComponent;
		return (
			<IndicatorComponent
				style={StyleSheet.flatten([style])}
				accessibilityLabel={accessibilityLabel || "Selected"}
				accessibilityHint={accessibilityHint}
				accessibilityState={{
					selected: true,
				}}
				{...rest}
			/>
		);
	}

	if (contextInput.checked) {
		return (
			<View
				style={StyleSheet.flatten([style])}
				accessibilityLabel={accessibilityLabel || "Selected"}
				accessibilityHint={accessibilityHint}
				accessibilityState={{
					selected: true,
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
