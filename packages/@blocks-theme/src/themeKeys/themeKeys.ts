import { bordersKeys } from './borders';
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
    ...bordersKeys,
  },

  Text: {
    ...spacingsKeys,
    ...sizesKeys,
    ...colorsKeys,
    ...fontsKeys,
    ...bordersKeys,
  },
};

export const themeKeys = {
  colors: colorsKeys,
  fonts: fontsKeys,
  radii: radiiKeys,
  borders: bordersKeys,
  sizes: sizesKeys,
  spacings: spacingsKeys,
};

export const KeysPropertyValues = {
  ...colorsKeys,
  ...fontsKeys,
  ...radiiKeys,
  ...bordersKeys,
  ...sizesKeys,
  ...spacingsKeys,
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
