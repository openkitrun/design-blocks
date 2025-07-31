import type { ReactNode } from "react";
import React from "react";
import type { AccessibilityProps, AccessibilityState, StyleProp, ViewStyle } from "react-native";
import { Pressable, StyleSheet, View } from "react-native";

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

type CheckboxContextValue = {
	checked?: boolean;
	disabled?: boolean;
	onCheckedChange: (checked: boolean) => void;
	accessible?: boolean;
	accessibilityLabel?: string;
	accessibilityHint?: string;
};

const Context = React.createContext<CheckboxContextValue>({
	checked: false,
	disabled: false,
	onCheckedChange: () => {},
	accessible: true,
});

/* -------------------------------------------------------------------------------------------------
 * CheckboxRoot
 * -----------------------------------------------------------------------------------------------*/

type CheckboxProps = {
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
} & Pick<AccessibilityProps, "accessibilityRole">;

function CheckboxRoot({
	children,
	checked: checkedProp,
	defaultChecked = false,
	disabled = false,
	onCheckedChange,
	accessible = true,
	accessibilityLabel,
	accessibilityHint,
	accessibilityRole = "checkbox",
	style,
	testID,
	...rest
}: CheckboxProps) {
	const isControlled = checkedProp !== undefined;
	const [checked, setChecked] = React.useState<boolean>(defaultChecked);

	const currentChecked = isControlled ? checkedProp : checked;

	const handleCheckedChange = React.useCallback(
		(nextChecked: boolean) => {
			if (!isControlled) setChecked(nextChecked);
			onCheckedChange?.(nextChecked);
		},
		[isControlled, onCheckedChange],
	);

	const handlePress = React.useCallback(() => {
		if (!disabled) {
			handleCheckedChange(!currentChecked);
		}
	}, [disabled, currentChecked, handleCheckedChange]);

	const accessibilityState = React.useMemo<AccessibilityState>(
		() => ({
			disabled,
			checked: currentChecked,
		}),
		[disabled, currentChecked],
	);

	const context = React.useMemo<CheckboxContextValue>(
		() => ({
			checked: currentChecked,
			disabled,
			onCheckedChange: handleCheckedChange,
			accessible,
			accessibilityLabel,
			accessibilityHint,
		}),
		[currentChecked, disabled, handleCheckedChange, accessible, accessibilityLabel, accessibilityHint],
	);

	return (
		<Pressable
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
		</Pressable>
	);
}

/* -------------------------------------------------------------------------------------------------
 * CheckboxIndicator
 * -----------------------------------------------------------------------------------------------*/

type CheckboxIndicatorProps = {
	style?: StyleProp<ViewStyle>;
	indicatorComponent?: React.ElementType;
	testID?: string;
};

function CheckboxIndicator({ style, indicatorComponent, testID, ...rest }: CheckboxIndicatorProps) {
	const context = React.useContext(Context);

	if (!context.checked) {
		return null;
	}

	if (indicatorComponent) {
		const IndicatorComponent = indicatorComponent;
		return (
			<View style={StyleSheet.flatten([style])} testID={testID} {...rest}>
				<IndicatorComponent />
			</View>
		);
	}

	return <View style={StyleSheet.flatten([style])} testID={testID} {...rest} />;
}

CheckboxRoot.displayName = "Block.Checkbox";

export const Checkbox = {
	Root: CheckboxRoot,
	Indicator: CheckboxIndicator,
	Context,
};

export type { CheckboxProps, CheckboxIndicatorProps };
