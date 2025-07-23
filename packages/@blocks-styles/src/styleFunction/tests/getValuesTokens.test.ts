import { baseTheme } from '@design-blocks/theme';
import type { Theme } from '@design-blocks/theme';

import { getValuesTokens } from '..';

const colorsTokens = {
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
  },
};

describe('getValuesTokens', () => {
  it('should return all values if fieldNames is undefined', () => {
    const values = {
      ...baseTheme,
    };

    const allValues = getValuesTokens(values, undefined);

    expect(allValues).toMatchObject(baseTheme);
  });

  it('should return values tokens.colors', () => {
    const values = {
      ...baseTheme,
      colors: colorsTokens,
    };

    const colorsValues = getValuesTokens(values, 'colors');
    const colorRed = getValuesTokens(values, 'colors.red');
    const colorBlue = getValuesTokens(values, 'colors.blue');
    const colorsArray = getValuesTokens(values, ['colors']);

    expect(colorsValues).toMatchObject(colorsTokens);
    expect(colorRed).toMatchObject(colorsTokens.red);
    expect(colorBlue).toMatchObject(colorsTokens.blue);
    expect(colorsArray).toMatchObject([{ red: { ...colorRed }, blue: { ...colorBlue } }]);
  });

  it('should return values tokens.spacings', () => {
    const values = {
      ...baseTheme,
    };

    const spacingsValues = getValuesTokens(values, 'spacings');
    const spacingsXxs = getValuesTokens(values, 'spacings.xxs');

    expect(spacingsValues).toMatchObject(baseTheme.spacings);
    expect(spacingsXxs).toBe(baseTheme.spacings.xxs);
  });

  it('should return values tokens.spacings', () => {
    const values = {
      ...baseTheme,
    };

    const sizesValues = getValuesTokens(values, 'sizes');
    const sizesXxs = getValuesTokens(values, 'sizes.xxs');

    expect(sizesValues).toMatchObject(baseTheme.sizes);
    expect(sizesXxs).toBe(baseTheme.sizes.xxs);
  });

  it('should return values tokens.fontSizes', () => {
    const values = {
      ...baseTheme,
    };

    const fontSizesValues = getValuesTokens(values, 'fontSizes');
    const fontSizesXs = getValuesTokens(values, 'fontSizes.xs');

    expect(fontSizesValues).toMatchObject(baseTheme.fontSizes);
    expect(fontSizesXs).toBe(baseTheme.fontSizes.xs);
  });

  it('should return values tokens.fontWeights', () => {
    const values = {
      ...baseTheme,
    };

    const fontWeightsValues = getValuesTokens(values, 'fontWeights');
    const fontWeightsSemibold = getValuesTokens(values, 'fontWeights.semibold');

    expect(fontWeightsValues).toMatchObject(baseTheme.fontWeights);
    expect(fontWeightsSemibold).toBe(baseTheme.fontWeights.semibold);
  });

  it('should return values tokens.radii', () => {
    const values = {
      ...baseTheme,
    };

    const radiiValues = getValuesTokens(values, 'radii');
    const radii5xl = getValuesTokens(values, 'radii.5xl');

    expect(radiiValues).toMatchObject(baseTheme.radii);
    expect(radii5xl).toBe(baseTheme.radii['5xl']);
  });

  it('should return values tokens.borders', () => {
    const values = {
      ...baseTheme,
    };

    const bordersValues = getValuesTokens(values, 'borders');
    const borders5xl = getValuesTokens(values, 'borders.5xl');

    expect(bordersValues).toMatchObject(baseTheme.borders);
    expect(borders5xl).toBe(baseTheme.borders['5xl']);
  });

  it('should return values tokens.utils', () => {
    const values = {
      ...baseTheme,
    };

    const utilsValues = getValuesTokens(values, 'utils');
    const utilsSpacing = getValuesTokens(values, 'utils.spacing');

    expect(utilsValues).toMatchObject(baseTheme.utils);
    expect(utilsSpacing).toBe(baseTheme.utils.spacing);
  });

  it('should return specific values for an array of field names', () => {
    const values = {
      colors: {
        red: { 50: '#fef2f2', 100: '#fee2e2' },
        blue: { 50: '#eff6ff', 100: '#dbeafe' },
      },
      spacings: { small: 8, medium: 16, large: 32 },
    };
    const fieldNames = ['colors.red.50', 'spacings.medium'];

    const result = getValuesTokens(values as unknown as Theme, fieldNames);

    expect(result).toMatchObject(['#fef2f2', 16]);
  });

  it('should correctly retrieve values for array of field names', () => {
    const values = {
      colors: {
        red: { 50: '#fef2f2', 100: '#fee2e2' },
        blue: { 50: '#eff6ff', 100: '#dbeafe' },
      },
      spacings: { small: 8, medium: 16, large: 32 },
    };

    const fieldNames = ['colors.red', 'spacings.small'];

    const result = getValuesTokens(values as unknown as Theme, fieldNames);

    expect(result).toEqual([values.colors.red, values.spacings.small]);
  });
});
