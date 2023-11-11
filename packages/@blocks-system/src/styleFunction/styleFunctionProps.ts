import { componentsKeys } from '@design-blocks/theme';

import { getValuesTokens } from './getValuesTokens';
import validateProperties from './validateProperties';

import type { IComponentsKeysProps, Theme } from '@design-blocks/theme';
import type { StylesObjectProps } from '@design-blocks/types';

type PropertyStyle<TokensProperty> = TokensProperty;

// interface PStyle {
//   [key: string]: string;
// }

// interface VStyle {
//   [key: string]: string | number;
// }

export const styleFunctionProps = (
  nameTokenComp: IComponentsKeysProps,
  theme: Theme,
  stylesObjectProps: StylesObjectProps,
) => {
  const tokensBase = componentsKeys[nameTokenComp];

  const styles = Object.entries(stylesObjectProps ?? {}).reduce(
    //(objStyles: Record<string, unknown>, [propertyStyle, valueStyle]: [PStyle[keyof PStyle], VStyle[keyof VStyle]]) => {
    (objStyles: Record<string, unknown>, [propertyStyle, valueStyle]) => {
      let propertyStyleValue = tokensBase[propertyStyle as PropertyStyle<keyof typeof tokensBase>] as string;
      let finalValueStyle = valueStyle;

      const valueToken = getValuesTokens(theme, valueStyle?.toString());

      if (!valueToken) {
        finalValueStyle = validateProperties(valueStyle, propertyStyle, theme);
      }

      if (propertyStyle === 'fontWeight') {
        propertyStyleValue = propertyStyle as PropertyStyle<keyof typeof tokensBase>;
        finalValueStyle = theme.fontWeights[valueStyle as keyof Theme['fontWeights']] ?? valueStyle;
      }

      if (propertyStyle === 'fontSize') {
        propertyStyleValue = propertyStyle as PropertyStyle<keyof typeof tokensBase>;
        finalValueStyle = theme.fontSizes[valueStyle as keyof Theme['fontSizes']] ?? valueStyle;
      }

      if (propertyStyleValue) {
        objStyles[propertyStyleValue] = valueToken ?? finalValueStyle;
      }

      return objStyles;
    },
    {},
  );

  return styles;
};
