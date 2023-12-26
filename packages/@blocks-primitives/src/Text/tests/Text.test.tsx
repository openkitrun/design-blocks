import React from 'react';

import { lightTheme, renderWithWrapper, screen } from '../../../.ci/testHelper';

import { Text } from '../..';

describe('<Text />', () => {
  it('should render correctly', () => {
    renderWithWrapper(<Text />);
    const result = screen.toJSON();

    expect(result.type).toEqual('Text');
  });

  it('should render the Text component with a color corresponding to the "red.950" value from the color prop', () => {
    renderWithWrapper(<Text color='red.950' />);

    const result = screen.toJSON();

    expect(result.type).toEqual('Text');
    expect(result.props.style[0]).toMatchObject({
      color: lightTheme.tokens.colors.red[950],
    });
  });

  it('should apply styles from sx prop to the rendered Text component', () => {
    renderWithWrapper(<Text sx={{ color: 'red' }} />);

    const result = screen.toJSON();

    expect(result.type).toEqual('Text');
    expect(result.props.style[0]).toMatchObject({ color: 'red' });
  });

  it('should apply styles from style prop to the rendered View component', () => {
    renderWithWrapper(<Text style={{ color: 'blue' }} />);

    const result = screen.toJSON();

    expect(result.type).toEqual('Text');
    expect(result.props.style[1]).toMatchObject({ color: 'blue' });
  });

  it('should render Text with Text', () => {
    const TEXT = 'My Text';

    renderWithWrapper(<Text>{TEXT}</Text>);

    const CompText = screen.getByRole('text');
    expect(CompText).toBeTruthy();
    expect(screen.getByText(TEXT)).toBeTruthy();
  });
});
