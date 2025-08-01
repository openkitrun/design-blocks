import { fireEvent, render, screen } from "@testing-library/react-native";
import { Text } from "react-native";

import { Switch } from "..";

describe("<Switch />", () => {
  describe("Accessibility", () => {
    it("should render with correct accessibility role", () => {
      render(
        <Switch.Root onCheckedChange={() => {}}>
          <Switch.Thumb />
        </Switch.Root>,
      );

      const switchElement = screen.getByRole("switch");
      expect(switchElement).toBeTruthy();

      const result = screen.toJSON();
      expect(result.props.accessibilityRole).toEqual("switch");
    });

    it("should render with correct accessibility labels and hints", () => {
      render(
        <Switch.Root
          onCheckedChange={() => {}}
          accessibilityLabel="Enable notifications"
          accessibilityHint="Toggle to enable or disable notifications"
        >
          <Switch.Thumb />
        </Switch.Root>,
      );

      const result = screen.toJSON();
      expect(result.props.accessibilityLabel).toEqual("Enable notifications");
      expect(result.props.accessibilityHint).toEqual("Toggle to enable or disable notifications");
    });

    it("should handle accessibility state correctly when disabled", () => {
      render(
        <Switch.Root onCheckedChange={() => {}} disabled>
          <Switch.Thumb />
        </Switch.Root>,
      );

      const result = screen.toJSON();
      expect(result.props.accessibilityState.disabled).toBe(true);

      const switchElement = screen.getByRole("switch");
      expect(switchElement.props.accessibilityState.disabled).toBe(true);
    });

    it("should handle accessibility state correctly when checked", () => {
      render(
        <Switch.Root onCheckedChange={() => {}} checked>
          <Switch.Thumb />
        </Switch.Root>,
      );

      const switchElement = screen.getByRole("switch");
      expect(switchElement.props.accessibilityState.checked).toBe(true);
    });

    it("should handle accessibility state correctly when unchecked", () => {
      render(
        <Switch.Root onCheckedChange={() => {}} checked={false}>
          <Switch.Thumb />
        </Switch.Root>,
      );

      const switchElement = screen.getByRole("switch");
      expect(switchElement.props.accessibilityState.checked).toBe(false);
    });
  });

  describe("Controlled Mode", () => {
    it("should call onCheckedChange with correct value when toggled", () => {
      const onCheckedChange = jest.fn();

      render(
        <Switch.Root onCheckedChange={onCheckedChange} checked={false}>
          <Switch.Thumb />
        </Switch.Root>,
      );

      const switchElement = screen.getByRole("switch");
      fireEvent.press(switchElement);

      expect(onCheckedChange).toHaveBeenCalledWith(true);
    });

    it("should call onCheckedChange with false when toggling from true", () => {
      const onCheckedChange = jest.fn();

      render(
        <Switch.Root onCheckedChange={onCheckedChange} checked={true}>
          <Switch.Thumb />
        </Switch.Root>,
      );

      const switchElement = screen.getByRole("switch");
      fireEvent.press(switchElement);

      expect(onCheckedChange).toHaveBeenCalledWith(false);
    });

    it("should maintain external state when controlled", () => {
      const onCheckedChange = jest.fn();

      const { rerender } = render(
        <Switch.Root onCheckedChange={onCheckedChange} checked={false}>
          <Switch.Thumb />
        </Switch.Root>,
      );

      let switchElement = screen.getByRole("switch");
      expect(switchElement.props.accessibilityState.checked).toBe(false);

      fireEvent.press(switchElement);
      expect(onCheckedChange).toHaveBeenCalledWith(true);

      rerender(
        <Switch.Root onCheckedChange={onCheckedChange} checked={true}>
          <Switch.Thumb />
        </Switch.Root>,
      );

      switchElement = screen.getByRole("switch");
      expect(switchElement.props.accessibilityState.checked).toBe(true);
    });
  });

  describe("Uncontrolled Mode", () => {
    it("should work in uncontrolled mode with defaultChecked", () => {
      const onCheckedChange = jest.fn();

      render(
        <Switch.Root defaultChecked={true} onCheckedChange={onCheckedChange}>
          <Switch.Thumb />
        </Switch.Root>,
      );

      const switchElement = screen.getByRole("switch");
      expect(switchElement.props.accessibilityState.checked).toBe(true);

      fireEvent.press(switchElement);
      expect(onCheckedChange).toHaveBeenCalledWith(false);
    });

    it("should manage internal state when uncontrolled", () => {
      const onCheckedChange = jest.fn();

      render(
        <Switch.Root onCheckedChange={onCheckedChange}>
          <Switch.Thumb />
        </Switch.Root>,
      );

      const switchElement = screen.getByRole("switch");

      expect(switchElement.props.accessibilityState.checked).toBe(false);

      fireEvent.press(switchElement);
      expect(onCheckedChange).toHaveBeenCalledWith(true);

      expect(switchElement.props.accessibilityState.checked).toBe(true);

      fireEvent.press(switchElement);
      expect(onCheckedChange).toHaveBeenCalledWith(false);
      expect(switchElement.props.accessibilityState.checked).toBe(false);
    });

    it("should start unchecked by default", () => {
      render(
        <Switch.Root onCheckedChange={() => {}}>
          <Switch.Thumb />
        </Switch.Root>,
      );

      const switchElement = screen.getByRole("switch");
      expect(switchElement.props.accessibilityState.checked).toBe(false);
    });
  });

  describe("Disabled State", () => {
    it("should not call handleValueChange when disabled is true", () => {
      const onCheckedChange = jest.fn();

      render(
        <Switch.Root onCheckedChange={onCheckedChange} disabled={true} checked={false}>
          <Switch.Thumb />
        </Switch.Root>,
      );

      const switchElement = screen.getByRole("switch");
      fireEvent.press(switchElement);

      expect(onCheckedChange).not.toHaveBeenCalled();
    });

    it("should not call onCheckedChange when disabled", () => {
      const onCheckedChange = jest.fn();

      render(
        <Switch.Root onCheckedChange={onCheckedChange} disabled>
          <Switch.Thumb />
        </Switch.Root>,
      );

      const switchElement = screen.getByRole("switch");
      fireEvent.press(switchElement);

      expect(onCheckedChange).not.toHaveBeenCalled();
    });

    it("should have disabled prop on Pressable when disabled", () => {
      const onCheckedChange = jest.fn();

      render(
        <Switch.Root onCheckedChange={onCheckedChange} disabled>
          <Switch.Thumb />
        </Switch.Root>,
      );

      const result = screen.toJSON();
      expect(result.props.accessibilityState.disabled).toBe(true);
    });

    it("should maintain checked state when disabled", () => {
      render(
        <Switch.Root onCheckedChange={() => {}} disabled checked>
          <Switch.Thumb />
        </Switch.Root>,
      );

      const switchElement = screen.getByRole("switch");
      expect(switchElement.props.accessibilityState.checked).toBe(true);
      expect(switchElement.props.accessibilityState.disabled).toBe(true);
    });
  });

  describe("Thumb Component", () => {
    it("should use context in SwitchThumb component", () => {
      render(
        <Switch.Root checked={true} onCheckedChange={() => {}}>
          <Switch.Thumb testID="thumb-with-context" />
        </Switch.Root>,
      );

      const thumb = screen.getByTestId("thumb-with-context");
      expect(thumb).toBeTruthy();
    });

    it("should render custom thumb component when provided", () => {
      const CustomThumb = () => <Text testID="custom-thumb">Custom</Text>;

      render(
        <Switch.Root onCheckedChange={() => {}}>
          <Switch.Thumb thumbComponent={CustomThumb} />
        </Switch.Root>,
      );

      expect(screen.getByTestId("custom-thumb")).toBeTruthy();
      expect(screen.getByText("Custom")).toBeTruthy();
    });

    it("should render default thumb when no custom component provided", () => {
      render(
        <Switch.Root onCheckedChange={() => {}}>
          <Switch.Thumb testID="default-thumb" />
        </Switch.Root>,
      );

      expect(screen.getByTestId("default-thumb")).toBeTruthy();
    });

    it("should pass props to custom thumb component", () => {
      const CustomThumb = () => <Text testID="custom-thumb">Custom Thumb</Text>;

      render(
        <Switch.Root onCheckedChange={() => {}}>
          <Switch.Thumb thumbComponent={CustomThumb} testID="thumb-container" />
        </Switch.Root>,
      );

      const thumb = screen.getByTestId("custom-thumb");
      expect(thumb).toBeTruthy();
    });
  });

  describe("TestID Support", () => {
    it("should support testID on Root component", () => {
      render(
        <Switch.Root testID="switch-root" onCheckedChange={() => {}}>
          <Switch.Thumb />
        </Switch.Root>,
      );

      expect(screen.getByTestId("switch-root")).toBeTruthy();
    });

    it("should support testID on Thumb component", () => {
      render(
        <Switch.Root onCheckedChange={() => {}}>
          <Switch.Thumb testID="switch-thumb" />
        </Switch.Root>,
      );

      expect(screen.getByTestId("switch-thumb")).toBeTruthy();
    });
  });

  describe("Style Support", () => {
    it("should apply custom styles to Root component", () => {
      const customStyle = { backgroundColor: "red" };

      render(
        <Switch.Root style={customStyle} onCheckedChange={() => {}}>
          <Switch.Thumb />
        </Switch.Root>,
      );

      const result = screen.toJSON();
      expect(result.props.style).toEqual(customStyle);
    });

    it("should apply custom styles to Thumb component", () => {
      const customThumbStyle = { backgroundColor: "blue" };

      render(
        <Switch.Root onCheckedChange={() => {}}>
          <Switch.Thumb style={customThumbStyle} testID="styled-thumb" />
        </Switch.Root>,
      );

      const thumb = screen.getByTestId("styled-thumb");
      expect(thumb.props.style).toEqual(customThumbStyle);
    });
  });

  describe("Edge Cases", () => {
    it("should handle Switch without Thumb", () => {
      render(
        <Switch.Root onCheckedChange={() => {}} testID="empty-switch">
          {/* Sin children */}
        </Switch.Root>,
      );

      const switchElement = screen.getByTestId("empty-switch");
      expect(switchElement).toBeTruthy();

      fireEvent.press(switchElement);
    });

    it("should handle multiple Thumb components", () => {
      render(
        <Switch.Root onCheckedChange={() => {}}>
          <Switch.Thumb testID="thumb-1" />
          <Switch.Thumb testID="thumb-2" />
        </Switch.Root>,
      );

      expect(screen.getByTestId("thumb-1")).toBeTruthy();
      expect(screen.getByTestId("thumb-2")).toBeTruthy();
    });

    it("should handle onCheckedChange being undefined", () => {
      render(
        <Switch.Root>
          <Switch.Thumb />
        </Switch.Root>,
      );

      const switchElement = screen.getByRole("switch");

      expect(() => {
        fireEvent.press(switchElement);
      }).not.toThrow();
    });
  });
});
