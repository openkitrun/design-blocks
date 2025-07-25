import { fireEvent, render, screen } from "@testing-library/react-native";
import { Text } from "react-native";

import { Button } from "..";

const LABEL_TEXT = "Hello Blocks";

describe("<Button />", () => {
	it("should render correctly", () => {
		render(
			<Button.Root>
				<Button.Label>{LABEL_TEXT}</Button.Label>
			</Button.Root>,
		);

		const result = screen.toJSON();
		expect(result.props.accessibilityRole).toEqual("button");
		expect(result.props.accessible).toBeTruthy();

		const btn = screen.getByRole("button");
		expect(btn).toBeTruthy();
	});

	it("should render button with testID", () => {
		const BUTTON_TEST_ID = "buttonTestId";

		render(
			<Button.Root testID={BUTTON_TEST_ID}>
				<Button.Label>{LABEL_TEXT}</Button.Label>
			</Button.Root>,
		);

		const result = screen.toJSON();
		expect(result.props.testID).toEqual(BUTTON_TEST_ID);

		const btn = screen.getByTestId(BUTTON_TEST_ID);
		expect(btn).toBeTruthy();
	});

	it("should render button in accessibilityState.disabled when props.disabled is true", () => {
		render(
			<Button.Root disabled>
				<Button.Label>{LABEL_TEXT}</Button.Label>
			</Button.Root>,
		);

		const btn = screen.getByRole("button", {
			name: LABEL_TEXT,
			disabled: true,
		});
		expect(btn).toBeTruthy();
	});

	it('should render button in accessibilityState.busy and render "ActivityIndicator" when props.loading is true', () => {
		render(
			<Button.Root loading>
				<Button.Label>{LABEL_TEXT}</Button.Label>
				<Button.Loading />
			</Button.Root>,
		);

		const btn = screen.getByRole("button", {
			name: LABEL_TEXT,
			busy: true,
		});
		expect(btn).toBeTruthy();

		const result = screen.toJSON();
		const ActivityIndicator = result.children[1];
		expect(ActivityIndicator.type).toEqual("ActivityIndicator");
	});

	it("should NOT render label when hideLabelOnLoading is true and loading is true", () => {
		render(
			<Button.Root loading hideLabelOnLoading>
				<Button.Label>{LABEL_TEXT}</Button.Label>
				<Button.Loading />
			</Button.Root>,
		);

		const btn = screen.getByRole("button", { busy: true, disabled: true });
		expect(btn).toBeTruthy();

		expect(screen.queryAllByText(LABEL_TEXT)).toEqual([]);
	});

	it("should be call onPress events", () => {
		const onPress = jest.fn();

		render(
			<Button.Root onPress={onPress}>
				<Button.Label>{LABEL_TEXT}</Button.Label>
			</Button.Root>,
		);

		const btn = screen.getByRole("button", { name: LABEL_TEXT });
		expect(btn).toBeTruthy();

		fireEvent(btn, "press");
		expect(onPress).toHaveBeenCalled();
	});

	it("should be NOT call onPress events while loading", () => {
		const onPress = jest.fn();
		render(
			<Button.Root loading>
				<Button.Label>{LABEL_TEXT}</Button.Label>
				<Button.Loading />
			</Button.Root>,
		);

		const btn = screen.getByRole("button", { name: LABEL_TEXT });
		expect(btn).toBeTruthy();

		fireEvent(btn, "press");
		expect(onPress).not.toHaveBeenCalled();
	});

	it("should be NOT call onPress events if disabled", () => {
		const onPress = jest.fn();
		render(
			<Button.Root disabled>
				<Button.Label>{LABEL_TEXT}</Button.Label>
				<Button.Loading />
			</Button.Root>,
		);

		const btn = screen.getByRole("button", { name: LABEL_TEXT });
		expect(btn).toBeTruthy();

		fireEvent(btn, "press");
		expect(onPress).not.toHaveBeenCalled();
	});

	it("should render button with testID and nativeID", () => {
		render(
			<Button.Root disabled testID="testIDbuttonTest" nativeID="nativeIDbuttonTest">
				<Button.Label>{LABEL_TEXT}</Button.Label>
				<Button.Loading />
			</Button.Root>,
		);

		const result = screen.toJSON();

		expect(result.props.testID).toEqual("testIDbuttonTest");
		expect(result.props.nativeID).toEqual("nativeIDbuttonTest");
	});

	it("should toggle `pressed` on pressIn / pressOut", () => {
		const { getByRole } = render(
			<Button.Root>
				<Button.Label>Press me</Button.Label>
			</Button.Root>,
		);

		const btn = getByRole("button");

		fireEvent(btn, "pressIn");
		expect(btn.props["aria-pressed"]).toBe(true);

		fireEvent(btn, "pressOut");
		expect(btn.props["aria-pressed"]).toBe(false);
	});

	it("should render el indicator component custom", () => {
		const CustomIndicator = () => <Text testID="custom-indicator">Cargando…</Text>;

		render(
			<Button.Root loading>
				<Button.Label>Label</Button.Label>
				<Button.Loading indicatorComponent={CustomIndicator} />
			</Button.Root>,
		);

		const indicator = screen.getByTestId("custom-indicator");
		expect(indicator).toBeTruthy();
	});
});
