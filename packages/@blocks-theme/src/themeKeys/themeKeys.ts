import { colorsKeys } from './colors';
import { fontsKeys } from './fonts';
import { radiiKeys } from './radii';
import { sizesKeys } from './sizes';
import { spacingsKeys } from './spacings';

export const componentsKeys = {
  Box: {
    ...spacingsKeys,
    ...colorsKeys,
    ...sizesKeys,
    ...radiiKeys,
  },

  Text: {
    ...spacingsKeys,
    ...colorsKeys,
    ...fontsKeys,
  },
};

export const themeKeys = {
  spacings: spacingsKeys,
  sizes: sizesKeys,
  colors: colorsKeys,
  fonts: fontsKeys,
  radii: radiiKeys,
};

export const KeysPropertyValues = {
  ...sizesKeys,
  ...spacingsKeys,
  ...colorsKeys,
  ...fontsKeys,
  ...radiiKeys,
};

export type IThemeKeys = keyof typeof themeKeys;
export type ThemeKeys = typeof themeKeys;
export type IKeysPropertyValues = keyof typeof KeysPropertyValues;
export type KeysPropertyValues = typeof KeysPropertyValues;

export type IComponentsKeysProps = keyof typeof componentsKeys;
export type ComponentsKeysProps = typeof componentsKeys;
export type IBoxComponentKeysProps = keyof typeof componentsKeys.Box;
export type BoxComponentKeysProps = typeof componentsKeys.Box;
export type ITextComponentKeysProps = keyof typeof componentsKeys.Text;
export type TextComponentKeysProps = typeof componentsKeys.Text;
