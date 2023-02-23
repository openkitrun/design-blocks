import { Theme, componentsKeys, IFontSizes, IFontWeights, IComponentsKeysProps } from '@design-blocks/theme';

import type { SxObject } from '@design-blocks/types';
import { removeEmptyObjects } from '@design-blocks/utils';

import validateProperties from './validateProperties';
import { getValuesTokens } from './getValuesTokens';

type PropertyStyle<TokensProperty> = TokensProperty;

export const styleFunctionSx = (nameTokenComponent: IComponentsKeysProps, theme: Theme, sxStyles: SxObject = {}) => {
  const tokensBase = componentsKeys[nameTokenComponent];

  const stylesResultList = Object.entries(sxStyles)?.map((st) => {
    let sxStyled = {};
    let RnStyle = {};

    const propertyStyle = st[0];
    let valueStyle = st[1];

    const propertyStyleValue = tokensBase[propertyStyle as PropertyStyle<keyof typeof tokensBase>];
    const isPropertyStyle = propertyStyle;
    const valueToken = getValuesTokens(theme, valueStyle?.toString());

    if (!valueToken) {
      valueStyle = validateProperties(valueStyle, propertyStyle, theme);
    }

    if (propertyStyle === 'fontWeight') {
      valueStyle = theme.fontWeights[valueStyle as IFontWeights] ?? valueStyle;
    }

    if (propertyStyle === 'fontSize') {
      valueStyle = theme.fontSizes[valueStyle as IFontSizes] ?? valueStyle;
    }

    if (propertyStyleValue) {
      sxStyled = {
        [propertyStyleValue]: valueToken ?? valueStyle,
      };
    }

    if (isPropertyStyle && !propertyStyleValue) {
      RnStyle = {
        [propertyStyle]: valueToken ?? valueStyle,
      };
    }

    const stylesObject = {
      ...sxStyled,
      ...RnStyle,
    };

    return stylesObject;
  });

  const styles = [...removeEmptyObjects(stylesResultList)]?.reduce((obj, item) => {
    const key = Object.keys(item)[0];
    const value = Object.values(item)[0];

    return {
      ...obj,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key as string]: value as any,
    };
  }, {});

  return styles;
};
