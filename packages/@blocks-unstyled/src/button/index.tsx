import React from "react";
import type { ActivityIndicatorProps, PressableProps, TextProps } from "react-native";
import { ActivityIndicator, Platform, Pressable, StyleSheet, Text } from "react-native";

export interface ButtonProps extends PressableProps {
	disabled?: boolean | undefined;
	loading?: boolean | undefined;
	hideLabelOnLoading?: null | boolean | undefined;
	accessible?: boolean;
	accessibilityLanguage?: PressableProps["accessibilityLanguage"];
}

type ButtonContextProps = Pick<
	ButtonProps,
	"nativeID" | "testID" | "accessible" | "disabled" | "loading" | "hideLabelOnLoading" | "accessibilityLanguage"
>;
export interface ButtonLabelProps extends TextProps {}
export interface ButtonLoadingProps extends ActivityIndicatorProps {}

const ButtonContext = React.createContext<ButtonContextProps>({});

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
			value={{
				nativeID,
				testID,
				accessible,
				loading,
				disabled,
				hideLabelOnLoading,
				accessibilityLanguage,
			}}
		>
			<Pressable
				nativeID={nativeID}
				testID={testID}
				aria-busy={accessible && accessibilityState.busy}
				aria-disabled={accessible && accessibilityState.disabled}
				accessible={accessible}
				accessibilityRole={accessibilityRole}
				accessibilityState={accessibilityState}
				style={StyleSheet.flatten([stylesButton.root, style])}
				disabled={disabled || loading}
				{...others}
			/>
		</ButtonContext.Provider>
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
function ButtonLabel({ nativeID: nativeIDProp, testID: testIDProp, style, ...others }: ButtonLabelProps) {
	const { nativeID, testID, hideLabelOnLoading, loading, disabled, accessibilityLanguage } =
		React.useContext(ButtonContext);

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
function ButtonLoading({ nativeID: nativeIDProp, testID: testIDProp, style, ...others }: ButtonLoadingProps) {
	const { nativeID, testID, loading } = React.useContext(ButtonContext);

	const finalNativeID = nativeIDProp || (nativeID ? `${nativeID}Indicator` : undefined);
	const finalTestID = testIDProp || (testID ? `${testID}Indicator` : undefined);

	if (loading) {
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
