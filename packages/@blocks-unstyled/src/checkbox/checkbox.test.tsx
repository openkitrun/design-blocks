import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";

import { Checkbox } from "..";

describe("<Checkbox />", () => {
	describe("Accessibility", () => {
		it("should render with correct accessibility role", () => {
			render(
				<Checkbox.Root onCheckedChange={() => {}}>
					<Checkbox.Indicator />
				</Checkbox.Root>,
			);

			const checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement).toBeTruthy();

			const result = screen.toJSON();
			expect(result.props.accessibilityRole).toEqual("checkbox");
		});

		it("should render with correct accessibility labels and hints", () => {
			render(
				<Checkbox.Root
					onCheckedChange={() => {}}
					accessibilityLabel="Accept terms"
					accessibilityHint="Check to accept terms and conditions"
				>
					<Checkbox.Indicator />
				</Checkbox.Root>,
			);

			const result = screen.toJSON();
			expect(result.props.accessibilityLabel).toEqual("Accept terms");
			expect(result.props.accessibilityHint).toEqual("Check to accept terms and conditions");
		});

		it("should handle accessibility state correctly when disabled", () => {
			render(
				<Checkbox.Root onCheckedChange={() => {}} disabled>
					<Checkbox.Indicator />
				</Checkbox.Root>,
			);

			const result = screen.toJSON();
			expect(result.props.accessibilityState.disabled).toBe(true);

			const checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement.props.accessibilityState.disabled).toBe(true);
		});

		it("should handle accessibility state correctly when checked", () => {
			render(
				<Checkbox.Root onCheckedChange={() => {}} checked>
					<Checkbox.Indicator />
				</Checkbox.Root>,
			);

			const checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement.props.accessibilityState.checked).toBe(true);
		});

		it("should handle accessibility state correctly when unchecked", () => {
			render(
				<Checkbox.Root onCheckedChange={() => {}} checked={false}>
					<Checkbox.Indicator />
				</Checkbox.Root>,
			);

			const checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement.props.accessibilityState.checked).toBe(false);
		});
	});

	describe("Controlled Mode", () => {
		it("should call onCheckedChange with correct value when toggled", () => {
			const onCheckedChange = jest.fn();

			render(
				<Checkbox.Root onCheckedChange={onCheckedChange} checked={false}>
					<Checkbox.Indicator />
				</Checkbox.Root>,
			);

			const checkboxElement = screen.getByRole("checkbox");
			fireEvent.press(checkboxElement);

			expect(onCheckedChange).toHaveBeenCalledWith(true);
		});

		it("should call onCheckedChange with false when toggling from true", () => {
			const onCheckedChange = jest.fn();

			render(
				<Checkbox.Root onCheckedChange={onCheckedChange} checked={true}>
					<Checkbox.Indicator />
				</Checkbox.Root>,
			);

			const checkboxElement = screen.getByRole("checkbox");
			fireEvent.press(checkboxElement);

			expect(onCheckedChange).toHaveBeenCalledWith(false);
		});

		it("should maintain external state when controlled", () => {
			const onCheckedChange = jest.fn();

			const { rerender } = render(
				<Checkbox.Root onCheckedChange={onCheckedChange} checked={false}>
					<Checkbox.Indicator testID="indicator" />
				</Checkbox.Root>,
			);

			let checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement.props.accessibilityState.checked).toBe(false);
			expect(screen.queryByTestId("indicator")).toBeNull();

			fireEvent.press(checkboxElement);
			expect(onCheckedChange).toHaveBeenCalledWith(true);

			rerender(
				<Checkbox.Root onCheckedChange={onCheckedChange} checked={true}>
					<Checkbox.Indicator testID="indicator" />
				</Checkbox.Root>,
			);

			checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement.props.accessibilityState.checked).toBe(true);
			expect(screen.getByTestId("indicator")).toBeTruthy();
		});
	});

	describe("Uncontrolled Mode", () => {
		it("should work in uncontrolled mode with defaultChecked", () => {
			const onCheckedChange = jest.fn();

			render(
				<Checkbox.Root defaultChecked={true} onCheckedChange={onCheckedChange}>
					<Checkbox.Indicator testID="indicator" />
				</Checkbox.Root>,
			);

			const checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement.props.accessibilityState.checked).toBe(true);
			expect(screen.getByTestId("indicator")).toBeTruthy();

			fireEvent.press(checkboxElement);
			expect(onCheckedChange).toHaveBeenCalledWith(false);
		});

		it("should manage internal state when uncontrolled", () => {
			const onCheckedChange = jest.fn();

			render(
				<Checkbox.Root onCheckedChange={onCheckedChange}>
					<Checkbox.Indicator testID="indicator" />
				</Checkbox.Root>,
			);

			const checkboxElement = screen.getByRole("checkbox");

			expect(checkboxElement.props.accessibilityState.checked).toBe(false);
			expect(screen.queryByTestId("indicator")).toBeNull();

			fireEvent.press(checkboxElement);
			expect(onCheckedChange).toHaveBeenCalledWith(true);

			expect(checkboxElement.props.accessibilityState.checked).toBe(true);
			expect(screen.getByTestId("indicator")).toBeTruthy();

			fireEvent.press(checkboxElement);
			expect(onCheckedChange).toHaveBeenCalledWith(false);
			expect(checkboxElement.props.accessibilityState.checked).toBe(false);
			expect(screen.queryByTestId("indicator")).toBeNull();
		});

		it("should start unchecked by default", () => {
			render(
				<Checkbox.Root onCheckedChange={() => {}}>
					<Checkbox.Indicator testID="indicator" />
				</Checkbox.Root>,
			);

			const checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement.props.accessibilityState.checked).toBe(false);
			expect(screen.queryByTestId("indicator")).toBeNull();
		});
	});

	describe("Disabled State", () => {
		it("should not call onCheckedChange when disabled", () => {
			const onCheckedChange = jest.fn();

			render(
				<Checkbox.Root onCheckedChange={onCheckedChange} disabled>
					<Checkbox.Indicator />
				</Checkbox.Root>,
			);

			const checkboxElement = screen.getByRole("checkbox");
			fireEvent.press(checkboxElement);

			expect(onCheckedChange).not.toHaveBeenCalled();
		});

		it("should have disabled prop on Pressable when disabled", () => {
			render(
				<Checkbox.Root onCheckedChange={() => {}} disabled>
					<Checkbox.Indicator />
				</Checkbox.Root>,
			);

			const result = screen.toJSON();
			expect(result.props.accessibilityState.disabled).toBe(true);
		});

		it("should maintain checked state when disabled", () => {
			render(
				<Checkbox.Root onCheckedChange={() => {}} disabled checked>
					<Checkbox.Indicator testID="indicator" />
				</Checkbox.Root>,
			);

			const checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement.props.accessibilityState.checked).toBe(true);
			expect(checkboxElement.props.accessibilityState.disabled).toBe(true);
			expect(screen.getByTestId("indicator")).toBeTruthy();
		});

		it("should not call handleCheckedChange when disabled is true", () => {
			const onCheckedChange = jest.fn();

			render(
				<Checkbox.Root onCheckedChange={onCheckedChange} disabled={true} checked={false}>
					<Checkbox.Indicator />
				</Checkbox.Root>,
			);

			const checkboxElement = screen.getByRole("checkbox");
			fireEvent.press(checkboxElement);

			expect(onCheckedChange).not.toHaveBeenCalled();
		});
	});

	describe("Indicator Component", () => {
		it("should render custom indicator component when checked", () => {
			const CustomIndicator = () => <Text testID="custom-indicator">✓</Text>;

			render(
				<Checkbox.Root checked={true} onCheckedChange={() => {}}>
					<Checkbox.Indicator indicatorComponent={CustomIndicator} />
				</Checkbox.Root>,
			);

			expect(screen.getByTestId("custom-indicator")).toBeTruthy();
			expect(screen.getByText("✓")).toBeTruthy();
		});

		it("should not render indicator when not checked", () => {
			const CustomIndicator = () => <Text testID="custom-indicator">✓</Text>;

			render(
				<Checkbox.Root checked={false} onCheckedChange={() => {}}>
					<Checkbox.Indicator indicatorComponent={CustomIndicator} />
				</Checkbox.Root>,
			);

			expect(screen.queryByTestId("custom-indicator")).toBeNull();
		});

		it("should render default indicator when checked and no custom component", () => {
			render(
				<Checkbox.Root checked={true} onCheckedChange={() => {}}>
					<Checkbox.Indicator testID="default-indicator" />
				</Checkbox.Root>,
			);

			expect(screen.getByTestId("default-indicator")).toBeTruthy();
		});

		it("should not render default indicator when unchecked", () => {
			render(
				<Checkbox.Root checked={false} onCheckedChange={() => {}}>
					<Checkbox.Indicator testID="default-indicator" />
				</Checkbox.Root>,
			);

			expect(screen.queryByTestId("default-indicator")).toBeNull();
		});
	});

	describe("TestID Support", () => {
		it("should support testID on Root component", () => {
			render(
				<Checkbox.Root testID="checkbox-root" onCheckedChange={() => {}}>
					<Checkbox.Indicator />
				</Checkbox.Root>,
			);

			expect(screen.getByTestId("checkbox-root")).toBeTruthy();
		});

		it("should support testID on Indicator component", () => {
			render(
				<Checkbox.Root checked={true} onCheckedChange={() => {}}>
					<Checkbox.Indicator testID="checkbox-indicator" />
				</Checkbox.Root>,
			);

			expect(screen.getByTestId("checkbox-indicator")).toBeTruthy();
		});
	});

	describe("Style Support", () => {
		it("should apply custom styles to Root component", () => {
			const customStyle = { backgroundColor: "red" };

			render(
				<Checkbox.Root style={customStyle} onCheckedChange={() => {}}>
					<Checkbox.Indicator />
				</Checkbox.Root>,
			);

			const result = screen.toJSON();
			expect(result.props.style).toEqual(customStyle);
		});

		it("should apply custom styles to Indicator component", () => {
			const customIndicatorStyle = { backgroundColor: "blue" };

			render(
				<Checkbox.Root checked={true} onCheckedChange={() => {}}>
					<Checkbox.Indicator style={customIndicatorStyle} testID="styled-indicator" />
				</Checkbox.Root>,
			);

			const indicator = screen.getByTestId("styled-indicator");
			expect(indicator.props.style).toEqual(customIndicatorStyle);
		});
	});

	describe("Context Integration", () => {
		it("should provide context to Indicator component", () => {
			const ContextAwareIndicator = () => {
				const context = React.useContext(Checkbox.Context);
				return <Text testID="context-indicator">{context.checked ? "CHECKED" : "UNCHECKED"}</Text>;
			};

			render(
				<Checkbox.Root checked={true} onCheckedChange={() => {}}>
					<ContextAwareIndicator />
				</Checkbox.Root>,
			);

			expect(screen.getByText("CHECKED")).toBeTruthy();
		});

		it("should handle context with all props", () => {
			const ContextAwareComponent = () => {
				const context = React.useContext(Checkbox.Context);
				return (
					<Text testID="context-info">
						{`${context.checked}-${context.disabled}-${context.accessible}-${context.accessibilityLabel}-${context.accessibilityHint}`}
					</Text>
				);
			};

			render(
				<Checkbox.Root
					checked={true}
					disabled={false}
					accessible={true}
					accessibilityLabel="Test label"
					accessibilityHint="Test hint"
					onCheckedChange={() => {}}
				>
					<ContextAwareComponent />
				</Checkbox.Root>,
			);

			expect(screen.getByText("true-false-true-Test label-Test hint")).toBeTruthy();
		});

		it("should handle context outside Checkbox.Root (default context)", () => {
			const ContextAwareComponent = () => {
				const context = React.useContext(Checkbox.Context);
				return <Text testID="default-context">{`${context.checked}-${context.disabled}-${context.accessible}`}</Text>;
			};

			render(<ContextAwareComponent />);

			expect(screen.getByText("false-false-true")).toBeTruthy();
		});

		it("should execute default onCheckedChange function", () => {
			const IndicatorOutsideCheckbox = () => {
				const context = React.useContext(Checkbox.Context);

				context.onCheckedChange(true);

				return <Text testID="outside-indicator">Outside</Text>;
			};

			render(<IndicatorOutsideCheckbox />);
			expect(screen.getByTestId("outside-indicator")).toBeTruthy();
		});
	});

	describe("Edge Cases", () => {
		it("should handle Checkbox without Indicator", () => {
			render(
				<Checkbox.Root onCheckedChange={() => {}} testID="empty-checkbox">
					{/* not children */}
				</Checkbox.Root>,
			);

			const checkboxElement = screen.getByTestId("empty-checkbox");
			expect(checkboxElement).toBeTruthy();

			fireEvent.press(checkboxElement);
		});

		it("should handle multiple Indicator components", () => {
			render(
				<Checkbox.Root checked={true} onCheckedChange={() => {}}>
					<Checkbox.Indicator testID="indicator-1" />
					<Checkbox.Indicator testID="indicator-2" />
				</Checkbox.Root>,
			);

			expect(screen.getByTestId("indicator-1")).toBeTruthy();
			expect(screen.getByTestId("indicator-2")).toBeTruthy();
		});

		it("should handle onCheckedChange being undefined", () => {
			render(
				<Checkbox.Root>
					<Checkbox.Indicator />
				</Checkbox.Root>,
			);

			const checkboxElement = screen.getByRole("checkbox");

			expect(() => {
				fireEvent.press(checkboxElement);
			}).not.toThrow();
		});

		it("should execute handleCheckedChange when not disabled", () => {
			const onCheckedChange = jest.fn();

			render(
				<Checkbox.Root checked={false} disabled={false} onCheckedChange={onCheckedChange}>
					<Checkbox.Indicator />
				</Checkbox.Root>,
			);

			const checkboxElement = screen.getByRole("checkbox");

			fireEvent.press(checkboxElement);

			expect(onCheckedChange).toHaveBeenCalledWith(true);
		});
	});
});
