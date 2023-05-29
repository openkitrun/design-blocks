import type { Theme, IFontWeights, IFontSizes, IComponentsKeysProps } from '@design-blocks/theme';
import type { StylesObjectProps } from '@design-blocks/types';

import { componentsKeys } from '@design-blocks/theme';

import validateProperties from './validateProperties';
import { getValuesTokens } from './getValuesTokens';

type PropertyStyle<TokensProperty> = TokensProperty;

export const styleFunctionProps = (
  nameTokenComponent: IComponentsKeysProps,
  theme: Theme,
  stylesObjectProps: StylesObjectProps,
) => {
  const tokensBase = componentsKeys[nameTokenComponent];

  const styles = Object.entries(stylesObjectProps ?? {}).reduce(
    (objStyles: Record<string, unknown>, [propertyStyle, valueStyle]) => {
      let propertyStyleValue = tokensBase[propertyStyle as PropertyStyle<keyof typeof tokensBase>] as string;
      let finalValueStyle = valueStyle;

      const valueToken = getValuesTokens(theme, valueStyle?.toString());

      if (!valueToken) {
        finalValueStyle = validateProperties(valueStyle, propertyStyle, theme);
      }

      if (propertyStyle === 'fontWeight') {
        propertyStyleValue = propertyStyle as PropertyStyle<keyof typeof tokensBase>;
        finalValueStyle = theme.fontWeights[valueStyle as IFontWeights] ?? valueStyle;
      }

      if (propertyStyle === 'fontSize') {
        propertyStyleValue = propertyStyle as PropertyStyle<keyof typeof tokensBase>;
        finalValueStyle = theme.fontSizes[valueStyle as IFontSizes] ?? valueStyle;
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
