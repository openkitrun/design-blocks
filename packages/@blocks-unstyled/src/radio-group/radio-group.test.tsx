import { fireEvent, render, screen } from "@testing-library/react-native";
import { Text } from "react-native";

import { RadioGroup } from "..";

const OPTIONS = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
  { label: "Option C", value: "c" },
];

describe("<RadioGroup />", () => {
  it("should render options with correct accessibility roles", () => {
    render(
      <RadioGroup.Root onValueChange={() => {}}>
        {OPTIONS.map(({ label, value }) => (
          <RadioGroup.Radio key={value} value={value}>
            <RadioGroup.Input />
            <RadioGroup.Label>{label}</RadioGroup.Label>
          </RadioGroup.Radio>
        ))}
      </RadioGroup.Root>,
    );

    const radios = screen.getAllByRole("radio");
    expect(radios.length).toBe(3);
  });

  it("should call onValueChange with selected value", () => {
    const onValueChange = jest.fn();

    render(
      <RadioGroup.Root onValueChange={onValueChange}>
        <RadioGroup.Radio value="a">
          <RadioGroup.Input />
          <RadioGroup.Label>Option A</RadioGroup.Label>
        </RadioGroup.Radio>
      </RadioGroup.Root>,
    );

    const input = screen.getByRole("radio");
    fireEvent.press(input);

    expect(onValueChange).toHaveBeenCalledWith("a");
  });

  it("should update selected radio when controlled", () => {
    const { rerender } = render(
      <RadioGroup.Root onValueChange={() => {}} value="a">
        {OPTIONS.map(({ label, value }) => (
          <RadioGroup.Radio key={value} value={value}>
            <RadioGroup.Input>
              <RadioGroup.Indicator testID={`indicator-${value}`} />
            </RadioGroup.Input>
            <RadioGroup.Label>{label}</RadioGroup.Label>
          </RadioGroup.Radio>
        ))}
      </RadioGroup.Root>,
    );

    expect(screen.queryByTestId("indicator-a")).toBeTruthy();
    expect(screen.queryByTestId("indicator-b")).toBeNull();

    rerender(
      <RadioGroup.Root onValueChange={() => {}} value="b">
        {OPTIONS.map(({ label, value }) => (
          <RadioGroup.Radio key={value} value={value}>
            <RadioGroup.Label>{label}</RadioGroup.Label>
            <RadioGroup.Input>
              <RadioGroup.Indicator testID={`indicator-${value}`} />
            </RadioGroup.Input>
          </RadioGroup.Radio>
        ))}
      </RadioGroup.Root>,
    );

    expect(screen.queryByTestId("indicator-b")).toBeTruthy();
    expect(screen.queryByTestId("indicator-a")).toBeNull();
  });

  it("should not call onPress when disabled", () => {
    const onValueChange = jest.fn();

    render(
      <RadioGroup.Root onValueChange={onValueChange} disabled>
        <RadioGroup.Radio value="a">
          <RadioGroup.Input />
          <RadioGroup.Label>Option A</RadioGroup.Label>
        </RadioGroup.Radio>
      </RadioGroup.Root>,
    );

    const input = screen.getByRole("radio");
    fireEvent.press(input);

    expect(onValueChange).not.toHaveBeenCalled();
  });

  it("should render custom indicator component when checked", () => {
    const CustomIndicator = () => <Text testID="custom-indicator">✓</Text>;

    render(
      <RadioGroup.Root value="a" onValueChange={() => {}}>
        <RadioGroup.Radio value="a">
          <RadioGroup.Label>Option A</RadioGroup.Label>
          <RadioGroup.Input>
            <RadioGroup.Indicator indicatorComponent={CustomIndicator} />
          </RadioGroup.Input>
        </RadioGroup.Radio>
      </RadioGroup.Root>,
    );

    expect(screen.getByTestId("custom-indicator")).toBeTruthy();
  });

  it("should render indicatorComponent with correct props", () => {
    const CustomIndicator = () => {
      return <Text testID="custom-indicator">"Selected label-Selected hint-✓"</Text>;
    };

    render(
      <RadioGroup.Root value="a" onValueChange={() => {}}>
        <RadioGroup.Radio value="a">
          <RadioGroup.Label>Option A</RadioGroup.Label>
          <RadioGroup.Input>
            <RadioGroup.Indicator
              indicatorComponent={CustomIndicator}
              accessibilityLabel="Selected label"
              accessibilityHint="Selected hint"
            />
          </RadioGroup.Input>
        </RadioGroup.Radio>
      </RadioGroup.Root>,
    );

    const indicator = screen.getByTestId("custom-indicator");
    expect(indicator).toBeTruthy();
    expect(indicator.props.children).toEqual('"Selected label-Selected hint-✓"');
  });

  it("should render Text when disabledCheck is true", () => {
    render(
      <RadioGroup.Root value="a" onValueChange={() => {}}>
        <RadioGroup.Radio value="a">
          <RadioGroup.Label disabledCheck testID="disabled-label">
            Only Text
          </RadioGroup.Label>
          <RadioGroup.Input />
        </RadioGroup.Radio>
      </RadioGroup.Root>,
    );

    const label = screen.getByTestId("disabled-label");
    expect(label).toBeTruthy();
    expect(label.props.accessible).toBe(true);
    expect(label.children).toContain("Only Text");
  });

  it("should call setValue when RadioLabel is pressed", () => {
    const onValueChange = jest.fn();

    render(
      <RadioGroup.Root onValueChange={onValueChange}>
        <RadioGroup.Radio value="a">
          <RadioGroup.Label testID="label-a">Select A</RadioGroup.Label>
          <RadioGroup.Input />
        </RadioGroup.Radio>
      </RadioGroup.Root>,
    );

    const label = screen.getByTestId("label-a");
    fireEvent.press(label);

    expect(onValueChange).toHaveBeenCalledWith("a");
  });
});
