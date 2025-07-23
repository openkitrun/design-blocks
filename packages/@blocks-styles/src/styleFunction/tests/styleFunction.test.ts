import { baseTheme } from '@design-blocks/theme';

import { StyleFunctionMode, styleFunction } from '../..';

describe('styleFunction', () => {
  it('should return an empty object when no styles are passed in mode default', () => {
    const styles = styleFunction('Box', baseTheme);

    expect(styles).toEqual({});
  });

  it('should return an empty object when no styles are passed in mode props', () => {
    const styles = styleFunction('Box', baseTheme, {}, StyleFunctionMode.PROPS);

    expect(styles).toEqual({});
  });

  it('should return an empty object when no styles are passed in mode sx', () => {
    const styles = styleFunction('Box', baseTheme, {}, StyleFunctionMode.SX);

    expect(styles).toEqual({});
  });

  it('should return an object with the passed styles in mode props', () => {
    const propsStyles = { backgroundColor: 'red' };

    const styles = styleFunction('Box', baseTheme, propsStyles, StyleFunctionMode.PROPS);

    expect(styles).toMatchObject(propsStyles);
  });

  it('should return an object with the passed styles in mode sx', () => {
    const sxStyles = { backgroundColor: 'red' };

    const styles = styleFunction('Box', baseTheme, sxStyles, StyleFunctionMode.SX);

    expect(styles).toMatchObject(sxStyles);
  });

  it('should return an object with the passed styles in mode sx', () => {
    const sxStyles = { backgroundColor: 'red' };

    const styles = styleFunction('Box', baseTheme, sxStyles, StyleFunctionMode.SX);

    expect(styles).toMatchObject(sxStyles);
  });

  it('should return an object with the passed styles in mode sx', () => {
    const sxStyles = { color: 'red', fontWeight: 'bold', fontSize: 20 };
    const sxStylesExpect = { color: 'red', fontWeight: '700', fontSize: 20 };

    const styles = styleFunction('Text', baseTheme, sxStyles, StyleFunctionMode.SX);

    expect(styles).toMatchObject(sxStylesExpect);
  });

  it('should return the value that is assigned if it is not found in the theme tokens', () => {
    const sxStyles = { fontWeight: 'not' };

    const styles = styleFunction('Text', baseTheme, sxStyles, StyleFunctionMode.SX);

    expect(styles).toMatchObject({ fontWeight: 'not' });
  });
});
