import { componentsKeys } from '@design-blocks/theme';

import { getValuesTokens } from './getValuesTokens';
import { validateProperties } from './validateProperties';

import type { IComponentsKeysProps, Theme } from '@design-blocks/theme';
import type { StylesObjectProps, TextStylesObjectProps } from '@design-blocks/types';

type PropertyStyle<TokensProperty> = TokensProperty;

export enum StyleFunctionMode {
  PROPS = 'props',
  SX = 'sx',
}

export const styleFunction = (
  nameTokenComp: IComponentsKeysProps,
  theme: Theme,
  stylesObject: StylesObjectProps | TextStylesObjectProps = {},
  mode: StyleFunctionMode = StyleFunctionMode.PROPS,
) => {
  const tokensBase = componentsKeys[nameTokenComp];

  const objStylesValues = Object.entries(stylesObject).reduce(
    (objStyles: Record<string, unknown>, [propertyStyle, valueStyle]) => {
      const propertyStyleValue = tokensBase[propertyStyle as PropertyStyle<keyof typeof tokensBase>];
      let finalValueStyle = valueStyle;

      const valueToken = getValuesTokens(theme, valueStyle?.toString());

      if (!valueToken) {
        finalValueStyle = validateProperties(valueStyle, propertyStyle, theme);
      }

      if (propertyStyle === 'fontWeight') {
        finalValueStyle = theme.fontWeights[valueStyle as keyof Theme['fontWeights']] ?? valueStyle;
      }

      if (propertyStyle === 'fontSize') {
        finalValueStyle = theme.fontSizes[valueStyle as keyof Theme['fontSizes']] ?? valueStyle;
      }

      if (mode === StyleFunctionMode.PROPS) {
        if (propertyStyleValue) {
          objStyles[propertyStyleValue] = valueToken ?? finalValueStyle;
        }
      }

      if (mode === StyleFunctionMode.SX) {
        objStyles[propertyStyleValue || propertyStyle] = valueToken ?? finalValueStyle;
      }

      return objStyles;
    },
    {},
  );

  return objStylesValues;
};
