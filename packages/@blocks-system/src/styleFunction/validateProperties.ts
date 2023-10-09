import { themeKeys } from '@design-blocks/theme';

import { getValuesTokens } from './getValuesTokens';

import type { IColorsKeys, IRadiiKeys, ISpacesKeys, Theme } from '@design-blocks/theme';

export default function validateProperties(
  valueStyle: string | number,
  propertyStyle: string,
  theme: Theme,
): string | number {
  let _valueStyle = valueStyle;

  /**
   *  validate spacings to rule 8pt
   */
  if (themeKeys.spacings[propertyStyle as ISpacesKeys]) {
    if (Number(_valueStyle)) {
      _valueStyle = theme.devTools.spacing(_valueStyle as number, theme.spacings.baseSpacing);
    }

    if (!Number(_valueStyle)) {
      _valueStyle = getValuesTokens(theme, `spacings.${_valueStyle}`);
    }
  }

  /**
   * validate colors properties
   */
  if (themeKeys.colors[propertyStyle as IColorsKeys]) {
    const valueStyleMerge = getValuesTokens(theme, `colors.${_valueStyle}`);

    if (typeof valueStyleMerge === 'string') {
      _valueStyle = valueStyleMerge;
    }
  }

  /**
   * validate radii properties
   */
  if (themeKeys.radii[propertyStyle as IRadiiKeys]) {
    const valueStyleMerge = getValuesTokens(theme, `radii.${_valueStyle}`);

    if (typeof valueStyleMerge === 'string') {
      _valueStyle = valueStyleMerge;
    }
  }

  return _valueStyle;
}
