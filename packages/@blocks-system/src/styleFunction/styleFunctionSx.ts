import type { Theme, IFontSizes, IFontWeights, IComponentsKeysProps } from '@design-blocks/theme';
import { componentsKeys } from '@design-blocks/theme';

import type { SxObject } from '@design-blocks/types';

import validateProperties from './validateProperties';
import { getValuesTokens } from './getValuesTokens';

type PropertyStyle<TokensProperty> = TokensProperty;

export const styleFunctionSx = (nameTokenComponent: IComponentsKeysProps, theme: Theme, sxStyles: SxObject = {}) => {
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
