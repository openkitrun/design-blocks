import { StyleSheet } from 'react-native';

import { css } from '..';

const returnArguments = (...args: any[]) => args;

console.error = jest.fn();

describe('Block native css', () => {
  it('basic', () => {
    expect(
      StyleSheet.flatten(css`
        color: hotpink;
        ${{ backgroundColor: 'green' }};
      `),
    ).toEqual({ color: 'hotpink', backgroundColor: 'green' });

    expect(StyleSheet.flatten(css({ color: 'green' }))).toEqual({
      color: 'green',
    });
    expect(StyleSheet.flatten(css([{ color: 'green' }, 'background-color:yellow;']))).toEqual({
      color: 'green',
      backgroundColor: 'yellow',
    });
    expect(StyleSheet.flatten(css([{ color: 'green' }]))).toEqual({
      color: 'green',
    });
  });

  it('order with string and object', () => {
    expect(Object.keys(StyleSheet.flatten(css({ color: 'green' }, 'background-color:yellow;', { flex: 2 })))).toEqual([
      'color',
      'backgroundColor',
      'flex',
    ]);
    expect(
      Object.keys(
        StyleSheet.flatten(
          css([
            [{ color: 'green' }, 'background-color:yellow;'],
            {
              flex: 2,
            },
          ]),
        ),
      ),
    ).toEqual(['color', 'backgroundColor', 'flex']);
    expect(
      Object.keys(
        StyleSheet.flatten(
          css([
            { color: 'green' },
            [
              'background-color:yellow;',
              {
                flex: 2,
              },
            ],
          ]),
        ),
      ),
    ).toEqual(['color', 'backgroundColor', 'flex']);
    expect(
      Object.keys(
        StyleSheet.flatten(
          css([
            { color: 'green' },
            [{ flex: 8 }, 'background-color:yellow;', ['flex-grow: 1;', { flexDirection: 'row' }]],
          ]),
        ),
      ),
    ).toEqual(['color', 'flex', 'backgroundColor', 'flexGrow', 'flexDirection']);
  });

  it('allows function interpolations when this.mergedProps is defined', () => {
    expect(
      StyleSheet.flatten(
        css.call({ thing: true }, (props: any) => ({
          color: props.thing && 'hotpink',
        })),
      ),
    ).toEqual({ color: 'hotpink' });
  });

  it('works with nested functions', () => {
    expect(
      StyleSheet.flatten(
        css.call({ thing: true }, (props: any) => () => ({
          color: props.thing && 'hotpink',
        })),
      ),
    ).toEqual({ color: 'hotpink' });
  });

  it('works with functions in tagged template literals', () => {
    expect(
      StyleSheet.flatten(
        css.call(
          {},
          ...returnArguments`
        color: ${() => 'hotpink'};
      `,
        ),
      ),
    ).toEqual({ color: 'hotpink' });
  });

  it('last arg falsy and string before that', () => {
    expect(StyleSheet.flatten(css('color:hotpink;', false))).toEqual({
      color: 'hotpink',
    });
  });

  it('falsy value in the middle', () => {
    expect(
      StyleSheet.flatten(css`
        color: ${false};
        background-color: hotpink;
      `),
    ).toEqual({ backgroundColor: 'hotpink' });
  });

  it('composition', () => {
    const firstStyle = css`
      color: hotpink;
    `;
    expect(
      StyleSheet.flatten(css`
        background-color: green;
        ${firstStyle};
      `),
    ).toEqual({ backgroundColor: 'green', color: 'hotpink' });
  });

  it('skip comments', () => {
    const styles = css`
      color: hotpink;
    `;

    const anotherStyles = css`
      font-size: 10px;
    `;

    expect(StyleSheet.flatten(styles)).toEqual({ color: 'hotpink' });
    expect(StyleSheet.flatten(anotherStyles)).toEqual({ fontSize: 10 });
  });

  it('should handle transform errors for invalid styles', () => {
    const styles = css`width: invalid;`;

    expect(styles).toEqual({ width: 'invalid' });
  });

  it('should give specific error message for shorthand properties without units', () => {
    const styles = css`margin: 10;`;

    expect(styles).toEqual({});
    expect(console.error).toHaveBeenCalledWith(expect.stringContaining('shorthand property requires units'));
  });

  it('should call transform with correct style pairs', () => {
    const styleString = `
      color: blue;
      margin: 10px;
    `;

    const styles = css`${styleString}`;

    expect(styles).toEqual({
      color: 'blue',
      marginTop: 10,
      marginRight: 10,
      marginBottom: 10,
      marginLeft: 10,
    });
  });
});
