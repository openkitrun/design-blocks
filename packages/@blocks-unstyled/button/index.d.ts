import React from "react";
import type { ActivityIndicatorProps, PressableProps, TextProps } from "react-native";
export interface ButtonProps extends PressableProps {
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
    hideLabelOnLoading?: null | boolean | undefined;
    accessible?: boolean;
    accessibilityLanguage?: PressableProps["accessibilityLanguage"];
}
export interface ButtonLabelProps extends TextProps {
}
export interface ButtonLoadingProps extends ActivityIndicatorProps {
}
declare function ButtonRoot({ style, loading, disabled, hideLabelOnLoading, accessible, accessibilityRole, accessibilityLanguage, testID, nativeID, ...others }: ButtonProps): React.JSX.Element;
declare namespace ButtonRoot {
    var displayName: string;
}
declare function ButtonLabel({ nativeID: nativeIDProp, testID: testIDProp, style, ...others }: ButtonLabelProps): React.JSX.Element | null;
declare function ButtonLoading({ nativeID: nativeIDProp, testID: testIDProp, style, ...others }: ButtonLoadingProps): React.JSX.Element | null;
export declare const Button: {
    Root: typeof ButtonRoot;
    Label: typeof ButtonLabel;
    Loading: typeof ButtonLoading;
};
export {};
//# sourceMappingURL=index.d.ts.map