import React from 'react';

import { fireEvent } from '@testing-library/react-native';
import { render, screen } from '@testing-library/react-native';

import * as Button from '..';

const LABEL_TEXT = 'Hello Blocks';

describe('<Button />', () => {
  it('should render correctly', () => {
    render(
      <Button.Root>
        <Button.Label>{LABEL_TEXT}</Button.Label>
      </Button.Root>,
    );

    const result = screen.toJSON();
    expect(result.props.accessibilityRole).toEqual('button');
    expect(result.props.accessible).toBeTruthy();

    const element = screen.getByRole('button');
    expect(element).toBeTruthy();
  });

  it('should render button with testID', () => {
    const BUTTON_TEST_ID = 'buttonTestId';

    render(
      <Button.Root testID={BUTTON_TEST_ID}>
        <Button.Label>{LABEL_TEXT}</Button.Label>
      </Button.Root>,
    );

    const result = screen.toJSON();
    expect(result.props.testID).toEqual(BUTTON_TEST_ID);

    const element = screen.getByTestId(BUTTON_TEST_ID);
    expect(element).toBeTruthy();
  });

  it('should render button in accessibilityState.disabled when props.disabled is true', () => {
    render(
      <Button.Root disabled>
        <Button.Label>{LABEL_TEXT}</Button.Label>
      </Button.Root>,
    );

    const element = screen.getByRole('button', { name: LABEL_TEXT, disabled: true });
    expect(element).toBeTruthy();
  });

  it('should render button in accessibilityState.busy and render "ActivityIndicator" when props.loading is true', () => {
    render(
      <Button.Root loading>
        <Button.Label>{LABEL_TEXT}</Button.Label>
        <Button.Loading />
      </Button.Root>,
    );

    const element = screen.getByRole('button', { name: LABEL_TEXT, busy: true });
    expect(element).toBeTruthy();

    const result = screen.toJSON();
    const ActivityIndicator = result.children[1];
    expect(ActivityIndicator.type).toEqual('ActivityIndicator');
  });

  it('should NOT render label when hideLabelOnLoading is true and loading is true', () => {
    render(
      <Button.Root loading hideLabelOnLoading>
        <Button.Label>{LABEL_TEXT}</Button.Label>
        <Button.Loading />
      </Button.Root>,
    );

    const element = screen.getByRole('button', { busy: true, disabled: true });
    expect(element).toBeTruthy();

    expect(screen.queryAllByText(LABEL_TEXT)).toEqual([]);
  });

  it('should be call onPress events', () => {
    const onPress = jest.fn();

    render(
      <Button.Root onPress={onPress}>
        <Button.Label>{LABEL_TEXT}</Button.Label>
      </Button.Root>,
    );

    const element = screen.getByRole('button', { name: LABEL_TEXT });
    expect(element).toBeTruthy();

    fireEvent(element, 'press');
    expect(onPress).toHaveBeenCalled();
  });

  it('should be NOT call onPress events while loading', () => {
    const onPress = jest.fn();
    render(
      <Button.Root loading>
        <Button.Label>{LABEL_TEXT}</Button.Label>
        <Button.Loading />
      </Button.Root>,
    );

    const element = screen.getByRole('button', { name: LABEL_TEXT });
    expect(element).toBeTruthy();

    fireEvent(element, 'press');
    expect(onPress).not.toHaveBeenCalled();
  });

  it('should be NOT call onPress events if disabled', () => {
    const onPress = jest.fn();
    render(
      <Button.Root disabled>
        <Button.Label>{LABEL_TEXT}</Button.Label>
        <Button.Loading />
      </Button.Root>,
    );

    const element = screen.getByRole('button', { name: LABEL_TEXT });
    expect(element).toBeTruthy();

    fireEvent(element, 'press');
    expect(onPress).not.toHaveBeenCalled();
  });

  it('should render button with testID and nativeID', () => {
    render(
      <Button.Root disabled testID='testIDbuttonTest' nativeID='nativeIDbuttonTest'>
        <Button.Label>{LABEL_TEXT}</Button.Label>
        <Button.Loading />
      </Button.Root>,
    );

    const result = screen.toJSON();

    expect(result.props.testID).toEqual('testIDbuttonTest');
    expect(result.props.nativeID).toEqual('nativeIDbuttonTest');
  });
});
