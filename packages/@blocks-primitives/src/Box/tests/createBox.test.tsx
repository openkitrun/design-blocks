import React from 'react';

import { Text } from 'react-native';

import { renderWithWrapper, screen } from '../../../.ci/testHelper';

import { createBox } from '../createBox';

describe('createBox', () => {
  const Box = createBox();

  it('should render correctly', () => {
    renderWithWrapper(<Box />);
    const result = screen.toJSON();

    expect(result.type).toEqual('View');
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
