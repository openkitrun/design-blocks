import * as React from 'react';
import { Text } from 'react-native';

import { render, screen } from '@testing-library/react-native';

import { ThemeContext, ThemeProvider, useTheme } from '@design-blocks/theme/src';
import type { Theme } from '@design-blocks/theme/src';

import { createBlocks, createTokens } from '../../../../@blocks-system/dist/typescript';

console.error = jest.fn();

describe('theming', () => {
  const lightTheme = {
    tokens: {
      colors: {
        red: {
          500: '#ff0000',
        },
      },
    },
    extendTokens: {
      spacings: {
        '7xl': 76,
        '8xl': 80,
      },
      radii: {
        '6xl': 32,
        '7xl': 36,
      },
      fontSizes: {
        '10xl': 80,
      },
    },
  };

  const [themeTokens] = createTokens({ theme: lightTheme });

  const { themes } = createBlocks({
    themes: { light: themeTokens },
  });

  it('should render correctly with children', () => {
    render(
      <ThemeProvider theme={{}}>
        <Text>Test Child</Text>
      </ThemeProvider>,
    );

    expect(screen.getByText('Test Child')).toBeTruthy();
  });

  it('should propagate the provided theme through the context', () => {
    const TEXT = 'Test Child';

    const TestComponent = () => {
      const theme = useTheme();
      return <Text style={{ fontSize: theme.fontSizes['5xl'] }}>?{TEXT}</Text>;
    };

    const testTheme = { fontSize: 40 };

    render(
      <ThemeProvider theme={themes.light}>
        <TestComponent />
      </ThemeProvider>,
    );

    const result = screen.toJSON();

    const CompText = screen.getByRole('text');
    expect(CompText).toBeTruthy();
    expect(result.props.style).toMatchObject(testTheme);
  });

  it('should throw an error if theme function does not return an object', () => {
    const invalidThemeFunction = (): any => null;

    expect(() =>
      render(
        <ThemeProvider theme={invalidThemeFunction}>
          <Text>Test</Text>
        </ThemeProvider>,
      ),
    ).toThrow('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
  });

  it('should throw an error if theme prop is not a plain object', () => {
    expect(() =>
      render(
        <ThemeProvider theme={null as unknown as Theme}>
          <Text>Test</Text>
        </ThemeProvider>,
      ),
    ).toThrow('[ThemeProvider] Please make your theme prop a plain object');

    expect(() =>
      render(
        <ThemeProvider theme={[] as unknown as Theme}>
          <Text>Test</Text>
        </ThemeProvider>,
      ),
    ).toThrow('[ThemeProvider] Please make your theme prop a plain object');
  });

  it('should apply the theme returned by theme function', () => {
    const validThemeFunction = () => ({ color: 'red' });

    const TestComponent = () => <Text testID='test-component'>Test</Text>;

    render(
      <ThemeProvider theme={validThemeFunction as unknown as Theme}>
        <TestComponent />
      </ThemeProvider>,
    );

    const result = screen.getByTestId('test-component');
    expect(result.props.style).toBeUndefined();
  });
});
