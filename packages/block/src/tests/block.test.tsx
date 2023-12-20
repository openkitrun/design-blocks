import React from 'react';

import { render, screen } from '@testing-library/react-native';

import * as reactNative from 'react-native';

import block, { css } from '..';
import { ThemeProvider } from '../../../@blocks-theme';

const StyleSheet = reactNative.StyleSheet;

console.error = jest.fn();

describe('block', () => {
  it('should return a function', () => {
    const Text = block(reactNative.Text)(() => ({}));

    expect(() => Text).not.toThrow();
  });

  test('should render the primitive when styles applied using object style notation', () => {
    const Text = block(reactNative.Text)`
      color: red;
      font-size: 20px;
      background-color: ${(props: any) => props.back};
    `;

    render(
      <Text style={{ fontSize: 40 }} back='red'>
        Hi
      </Text>,
    );

    const result = screen.toJSON();

    expect(result.type).toBe('Text');
    expect(result.children[0]).toBe('Hi');
    expect(result.props.style[0]).toMatchObject({ color: 'red', fontSize: 20, backgroundColor: 'red' });
    expect(result.props.style[1]).toMatchObject({ fontSize: 40 });
  });

  it('should render <Image />', () => {
    const Image = block(reactNative.Image)`
      border-radius: 2px;
    `;
    const tree = render(
      <Image
        source={{
          uri: 'https://camo.githubusercontent.com/209bdea972b9b6ef90220c59ecbe66d35ffefa8a/68747470733a2f2f63646e2e7261776769742e636f6d2f746b6834342f656d6f74696f6e2f6d61737465722f656d6f74696f6e2e706e67',
          height: 150,
          width: 150,
        }}
      />,
    ).toJSON();

    expect(tree.type).toBe('Image');
    expect(tree.props).toMatchObject({
      source: {
        uri: 'https://camo.githubusercontent.com/209bdea972b9b6ef90220c59ecbe66d35ffefa8a/68747470733a2f2f63646e2e7261776769742e636f6d2f746b6834342f656d6f74696f6e2f6d61737465722f656d6f74696f6e2e706e67',
        height: 150,
        width: 150,
      },
      style: [
        {
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
          borderBottomRightRadius: 2,
          borderBottomLeftRadius: 2,
        },
        undefined,
      ],
    });
  });

  it('Log error message if units are not specified when using shorthand properties', () => {
    const Text = block(reactNative.Text)`
      margin: 20px;
      padding: 20;
    `;

    render(<Text>Hello World</Text>);

    expect(console.error).toHaveBeenCalledWith(
      "'padding' shorthand property requires units for example - padding: 20px or padding: 10px 20px 40px 50px",
    );
  });

  it('should render styles correctly from all nested style factories', () => {
    const bgColor = (color: string) => css`
      background-color: ${color};
    `;
    const Text = block(reactNative.Text)`
      color: hotpink;
      ${({ backgroundColor }: { backgroundColor: string }) => bgColor(backgroundColor)};
    `;

    render(<Text backgroundColor='blue'>Hi</Text>);

    const result = screen.toJSON();
    expect(result.props.style[0]).toMatchObject({ color: 'hotpink', backgroundColor: 'blue' });
  });

  it('should style any other component', () => {
    const Text = block(reactNative.Text)`
      color: hotpink;
    `;

    const Title = () => <Text>Hello World</Text>;
    const StyledTitle = block(Title)`
      font-size: 20px;
      font-style: ${(props: any) => props.sty};
    `;
    const tree = render(<StyledTitle sty='italic' />).toJSON();

    expect(tree.type).toBe('Text');
    expect(tree.children[0]).toBe('Hello World');
  });

  it('should work with StyleSheet.create API', () => {
    const styles = StyleSheet.create({ foo: { color: 'red' } });
    const Text = block(reactNative.Text)`
      font-size: 10px;
    `;
    const tree = render(<Text style={styles.foo}>Blocks primitives</Text>).toJSON();

    expect(tree.type).toBe('Text');
    expect(tree.children[0]).toBe('Blocks primitives');
    expect(tree.props.style).toEqual([{ fontSize: 10 }, { color: 'red' }]);
  });

  it('should work with theming', () => {
    const Text = block(reactNative.Text)`
      color: ${(props: any) => props.theme.colors.red[50]};
    `;

    const tree = render(
      <ThemeProvider theme={{ colors: { red: { 50: '#fef2f2', 100: '#fee2e2' } } }}>
        <Text>Hello World</Text>
      </ThemeProvider>,
    ).toJSON();

    expect(tree.type).toBe('Text');
    expect(tree.children[0]).toBe('Hello World');
    expect(tree.props.style[0]).toMatchObject({ color: '#fef2f2' });
  });
});
