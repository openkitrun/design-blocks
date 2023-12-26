import React from 'react';

import { Text } from 'react-native';

import { lightTheme, renderWithWrapper, screen } from '../../../.ci/testHelper';

import { Box } from '../..';

describe('<Box />', () => {
  it('should render correctly', () => {
    renderWithWrapper(<Box />);
    const result = screen.toJSON();

    expect(result.type).toEqual('View');
  });

  it('should render the View component with a background color corresponding to the "red.950" value from the bgColor prop', () => {
    renderWithWrapper(<Box bgColor='red.950' />);

    const result = screen.toJSON();

    expect(result.type).toEqual('View');
    expect(result.props.style[0]).toMatchObject({
      backgroundColor: lightTheme.tokens.colors.red[950],
    });
  });

  it('should apply styles from sx prop to the rendered View component', () => {
    renderWithWrapper(<Box sx={{ backgroundColor: 'red' }} />);

    const result = screen.toJSON();

    expect(result.type).toEqual('View');
    expect(result.props.style[0]).toMatchObject({ backgroundColor: 'red' });
  });

  it('should apply styles from style prop to the rendered View component', () => {
    renderWithWrapper(<Box style={{ backgroundColor: 'blue' }} />);

    const result = screen.toJSON();

    expect(result.type).toEqual('View');
    expect(result.props.style[1]).toMatchObject({ backgroundColor: 'blue' });
  });

  it('should render children component', () => {
    const TEXT = 'My Text';

    renderWithWrapper(
      <Box>
        <Text>{TEXT}</Text>
      </Box>,
    );

    const result = screen.toJSON();

    expect(result.type).toEqual('View');
    expect(result.children[0].type).toEqual('Text');

    const CompText = screen.getByRole('text');
    expect(CompText).toBeTruthy();
    expect(screen.getByText(TEXT)).toBeTruthy();
  });
});
