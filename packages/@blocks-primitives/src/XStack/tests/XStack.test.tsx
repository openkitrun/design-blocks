import React from 'react';

import { Text, View } from 'react-native';

import { lightTheme, renderWithWrapper, screen } from '../../../.ci/testHelper';

import { XStack } from '../..';

const flexboxStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  flexWrap: 'nowrap',
};

describe('<XStack />', () => {
  it('should render correctly', () => {
    renderWithWrapper(<XStack />);
    const result = screen.toJSON();

    expect(result.type).toEqual('View');
  });

  it('should render the XStack component as a View with default flexbox styles', () => {
    renderWithWrapper(<XStack />);

    const result = screen.toJSON();

    expect(result.type).toEqual('View');
    expect(result.props.style[1][0]).toMatchObject(flexboxStyles);
  });

  it('should render the XStack component as a View with flexbox styles when flexDirection prop is set to "column"', () => {
    renderWithWrapper(<XStack flexDirection='column' />);

    const result = screen.toJSON();

    expect(result.type).toEqual('View');
    expect(result.props.style[1][0]).toMatchObject({ ...flexboxStyles, flexDirection: 'column' });
  });

  it('should render the View component with a background color corresponding to the "red.950" value from the bgColor prop', () => {
    renderWithWrapper(<XStack bgColor='red.950' />);

    const result = screen.toJSON();

    expect(result.type).toEqual('View');
    expect(result.props.style[0]).toMatchObject({
      backgroundColor: lightTheme.tokens.colors.red[950],
    });
  });

  it('should apply styles from sx prop to the rendered View component', () => {
    renderWithWrapper(<XStack sx={{ backgroundColor: 'red' }} />);

    const result = screen.toJSON();

    expect(result.type).toEqual('View');
    expect(result.props.style[1][0]).toMatchObject({ backgroundColor: 'red' });
  });

  it('should apply styles from style prop to the rendered View component', () => {
    renderWithWrapper(<XStack style={{ backgroundColor: 'blue' }} />);

    const result = screen.toJSON();

    expect(result.type).toEqual('View');
    expect(result.props.style[1][1]).toMatchObject({ backgroundColor: 'blue' });
  });

  it('should render view with children components', () => {
    const TEXT = 'My Text';
    const TEXT_2 = 'My Text 2';

    renderWithWrapper(
      <XStack>
        <XStack>
          <Text>{TEXT}</Text>
        </XStack>

        <XStack>
          <Text>{TEXT_2}</Text>
        </XStack>
      </XStack>,
    );

    const result = screen.toJSON();

    expect(result.children).toHaveLength(2);

    const ViewsList = screen.UNSAFE_getAllByType(View);
    expect(ViewsList).toHaveLength(3);

    const TextList = screen.getAllByRole('text');
    expect(TextList).toHaveLength(2);
    expect(screen.getByText(TEXT)).toBeTruthy();
    expect(screen.getByText(TEXT_2)).toBeTruthy();
  });
});
