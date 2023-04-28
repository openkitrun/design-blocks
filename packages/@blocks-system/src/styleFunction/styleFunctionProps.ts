import type { Theme, IFontWeights, IComponentsKeysProps } from '@design-blocks/theme';
import type { SxObject } from '@design-blocks/types';

import { componentsKeys } from '@design-blocks/theme';
import { removeEmptyObjects } from '@design-blocks/utils';

import validateProperties from './validateProperties';
import { getValuesTokens } from './getValuesTokens';

type PropertyStyle<TokensProperty> = TokensProperty;

export const styleFunctionProps = (
  nameTokenComponent: IComponentsKeysProps,
  theme: Theme,
  stylesObjectProps: SxObject,
) => {
  const tokensBase = componentsKeys[nameTokenComponent];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stylesList = Object.entries(stylesObjectProps ?? {})?.map((st: any) => {
    let styledProp = {};
    const propertyStyle = st[0];
    let valueStyle = st[1];

    let propertyStyleValue = tokensBase[propertyStyle as PropertyStyle<keyof typeof tokensBase>] as string;
    const valueToken = getValuesTokens(theme, valueStyle?.toString());

    if (!valueToken) {
      valueStyle = validateProperties(valueStyle, propertyStyle, theme);
    }

    if (propertyStyle === 'fontWeight') {
      propertyStyleValue = propertyStyle as PropertyStyle<keyof typeof tokensBase>;
      valueStyle = theme.fontWeights[valueStyle as IFontWeights] ?? valueStyle;
    }

    if (propertyStyleValue) {
      styledProp = {
        [propertyStyleValue]: valueToken ?? valueStyle,
      };
    }

    const stylesProps = {
      ...styledProp,
    };

    return stylesProps;
  });

  const styles = [...removeEmptyObjects(stylesList)]?.reduce((obj, item) => {
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
