import { baseTheme } from '@design-blocks/theme';

import { validateProperties } from '../..';

describe('validateProperties', () => {
  it('should return correct spacing values for string, number, and shortcut property inputs', () => {
    const theme = { ...baseTheme };
    const spacingString = 'md';
    const spacingNumber = 20;
    const property = 'padding';
    const propertyShortcut = 'p';

    const spacingStringResult = validateProperties(spacingString, property, theme);
    expect(spacingStringResult).toBe(theme.spacings.md);

    const spacingShortcutResult = validateProperties(spacingString, propertyShortcut, theme);
    expect(spacingShortcutResult).toBe(theme.spacings.md);

    const spacingNumberResult = validateProperties(spacingNumber, propertyShortcut, theme);
    expect(spacingNumberResult).toBe(spacingNumber * theme.spacings.baseSpacing);
  });

  it('should return original value when theme.utils.spacing returns undefined or null', () => {
    const theme = {
      ...baseTheme,
      utils: {
        ...baseTheme.utils,
        spacing: jest.fn().mockReturnValue(undefined),
      },
    };
    const spacingNumber = 20;
    const property = 'padding';

    const result = validateProperties(spacingNumber, property, theme);

    expect(result).toBe(spacingNumber);
  });

  it('should return correct color values for color string, color object, and shortcut property inputs', () => {
    const theme = { ...baseTheme, colors: { red: { 50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5' } } };
    const colorObject = 'red.50';
    const colorString = 'red';
    const property = 'backgroundColor';
    const propertyShortcut = 'bgColor';

    const colorObjectResult = validateProperties(colorObject, property, theme);
    expect(colorObjectResult).toBe(theme.colors.red[50]);

    const colorShortcutResult = validateProperties(colorObject, propertyShortcut, theme);
    expect(colorShortcutResult).toBe(theme.colors.red[50]);

    const colorStringResult = validateProperties(colorString, propertyShortcut, theme);
    expect(colorStringResult).toBe('red');
  });

  it('should return correct radii values for string, number, and shortcut property inputs', () => {
    const theme = { ...baseTheme };
    const radiiString = 'md';
    const radiiNumber = 20;
    const property = 'borderRadius';
    const propertyShortcut = 'border';

    const spacingStringResult = validateProperties(radiiString, property, theme);
    expect(spacingStringResult).toBe(theme.radii.md);

    const spacingShortcutResult = validateProperties(radiiString, propertyShortcut, theme);
    expect(spacingShortcutResult).toBe(theme.radii.md);

    const spacingNumberResult = validateProperties(radiiNumber, propertyShortcut, theme);
    expect(spacingNumberResult).toBe(radiiNumber);
  });

  it('should return correct radii values when property is a radii key', () => {
    const theme = {
      ...baseTheme,
      radii: {
        ...baseTheme.radii,
        customRadius: '10px',
      },
    };
    const radiusValue = 'customRadius';
    const property = 'borderRadius';

    const result = validateProperties(radiusValue, property, theme);

    expect(result).toBe(theme.radii.customRadius);
  });

  it('should return correct sizes values for string, number, and shortcut property inputs', () => {
    const theme = { ...baseTheme };
    const sizesString = 'md';
    const sizesNumber = 200;
    const property = 'width';
    const propertyShortcut = 'w';

    const spacingStringResult = validateProperties(sizesString, property, theme);
    expect(spacingStringResult).toBe(theme.sizes.md);

    const spacingShortcutResult = validateProperties(sizesString, propertyShortcut, theme);
    expect(spacingShortcutResult).toBe(theme.sizes.md);

    const spacingNumberResult = validateProperties(sizesNumber, propertyShortcut, theme);
    expect(spacingNumberResult).toBe(sizesNumber);
  });
});
