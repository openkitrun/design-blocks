import type { ReactNode } from "react";
import React from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

type RadioGroupContextValue = {
	required?: boolean;
	disabled?: boolean;
	value?: string | null;
	onValueChange(value: string): void;
	accessible?: boolean;
};

const Context = React.createContext<RadioGroupContextValue>({
	required: false,
	disabled: false,
	value: null,
	onValueChange: () => {},
});

/* -------------------------------------------------------------------------------------------------
 * RadioGroupRoot
 * -----------------------------------------------------------------------------------------------*/

type RadioGroupProps = {
	children?: ReactNode;
	required?: boolean;
	disabled?: boolean;
	value?: string | null;
	onValueChange(value: string): void;
	accessible?: boolean;
};

function RadioGroupRoot({ children, required, disabled, value, onValueChange, accessible = true }: RadioGroupProps) {
	const context = React.useMemo(
		() => ({
			required,
			disabled,
			value,
			onValueChange,
			accessible,
		}),
		[required, disabled, value, onValueChange, accessible],
	);

	return <Context.Provider value={context}>{children}</Context.Provider>;
}

/* -------------------------------------------------------------------------------------------------
 * RadioGroupInput
 * -----------------------------------------------------------------------------------------------*/

type RadioGroupInputProps = {
	style?: StyleProp<ViewStyle>;
	children?: ReactNode;
	required?: boolean;
	disabled?: boolean;
	value: string;
};

type ContextRadioGroupInputProps = Pick<RadioGroupInputProps, "required" | "disabled" | "value">;

const ContextRadioGroupInput = React.createContext<ContextRadioGroupInputProps>({
	disabled: false,
	value: "",
});

function RadioGroupInput({ value: valueProp, style, children, disabled }: RadioGroupInputProps) {
	const context = React.useContext(Context);
	const isDisabled = context.disabled || disabled;
	const checked = context.value === valueProp;

	const accessibilityState = React.useMemo(
		() => ({
			disabled,
		}),
		[disabled],
	);

	const handleValueChange = React.useCallback(() => {
		context.onValueChange(valueProp);
	}, [context, valueProp]);

	const contextInput = React.useMemo(
		() => ({
			disabled: isDisabled,
			value: valueProp,
		}),
		[isDisabled, valueProp],
	);

	return (
		<Pressable
			disabled={isDisabled}
			style={StyleSheet.flatten([style])}
			onPress={handleValueChange}
			aria-disabled={context?.accessible && accessibilityState.disabled}
			accessible={context?.accessible}
		>
			<ContextRadioGroupInput.Provider value={contextInput}>{checked && children}</ContextRadioGroupInput.Provider>
		</Pressable>
	);
}

/* -------------------------------------------------------------------------------------------------
 * RadioLabel
 * -----------------------------------------------------------------------------------------------*/

type RadioLabelProps = {
	style?: StyleProp<ViewStyle>;
	children?: ReactNode;
};

function RadioLabel({ style, children }: RadioLabelProps) {
	const context = React.useContext(Context);
	const contextInput = React.useContext(ContextRadioGroupInput);

	const handleValueChange = React.useCallback(() => {
		context.onValueChange(contextInput.value);
	}, [context, contextInput.value]);

	return (
		<Pressable onPress={handleValueChange}>
			<Text style={StyleSheet.flatten([style])}>{children}</Text>
		</Pressable>
	);
}

/* -------------------------------------------------------------------------------------------------
 * RadioIndicator
 * -----------------------------------------------------------------------------------------------*/

type RadioIndicatorProps = {
	style?: StyleProp<ViewStyle>;
};

function RadioIndicator({ style }: RadioIndicatorProps) {
	return <View style={StyleSheet.flatten([style])} />;
}

RadioGroupRoot.displayName = "Block.RadioGroup";

export const RadioGroup = {
	Root: RadioGroupRoot,
	Input: RadioGroupInput,
	Label: RadioLabel,
	Indicator: RadioIndicator,
};

export type { RadioGroupProps, RadioGroupInputProps, RadioLabelProps, RadioIndicatorProps };
