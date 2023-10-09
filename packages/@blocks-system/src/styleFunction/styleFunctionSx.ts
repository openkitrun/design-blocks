import { componentsKeys } from '@design-blocks/theme';

import { getValuesTokens } from './getValuesTokens';
import validateProperties from './validateProperties';

import type { IComponentsKeysProps, IFontSizes, IFontWeights, Theme } from '@design-blocks/theme';
import type { StylesObjectProps } from '@design-blocks/types';

type PropertyStyle<TokensProperty> = TokensProperty;

export const styleFunctionSx = (
  nameTokenComponent: IComponentsKeysProps,
  theme: Theme,
  sxStyles: StylesObjectProps = {},
) => {
  const tokensBase = componentsKeys[nameTokenComponent];

  const styles = Object.entries(sxStyles).reduce((objStyles: Record<string, unknown>, [propertyStyle, valueStyle]) => {
    const propertyStyleValue = tokensBase[propertyStyle as PropertyStyle<keyof typeof tokensBase>];
    let finalValueStyle = valueStyle;

    const valueToken = getValuesTokens(theme, valueStyle?.toString());

    if (!valueToken) {
      finalValueStyle = validateProperties(valueStyle, propertyStyle, theme);
    }

    if (propertyStyle === 'fontWeight') {
      finalValueStyle = theme.fontWeights[valueStyle as IFontWeights] ?? valueStyle;
    }

    if (propertyStyle === 'fontSize') {
      finalValueStyle = theme.fontSizes[valueStyle as IFontSizes] ?? valueStyle;
    }

    objStyles[propertyStyleValue || propertyStyle] = valueToken ?? finalValueStyle;

    return objStyles;
  }, {});

  return styles;
};
