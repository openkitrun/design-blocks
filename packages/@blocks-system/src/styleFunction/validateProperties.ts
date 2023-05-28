import type { Theme, ISpacesKeys, IColorsKeys, IRadiiKeys } from '@design-blocks/theme';
import { themeKeys } from '@design-blocks/theme';

import { getValuesTokens } from './getValuesTokens';

export default function validateProperties(
  valueStyle: string | number,
  propertyStyle: string,
  theme: Theme,
): string | number {
  let _valueStyle = valueStyle;

  /**
   *  validate spacings to rule 8pt
   */
  const isPropertyStyleSpacing = themeKeys.spacings[propertyStyle as ISpacesKeys];
  /**
   * validate colors properties
   */
  const isPropertyStyleColor = themeKeys.colors[propertyStyle as IColorsKeys];
  /**
   * validate radii properties
   */
  const isPropertyStyleRadii = themeKeys.radii[propertyStyle as IRadiiKeys];

  if (isPropertyStyleSpacing) {
    const valueStyleNumber = Number(_valueStyle);
    if (!isNaN(valueStyleNumber)) {
      _valueStyle = theme.devTools.spacing(valueStyleNumber, theme.spacings.baseSpacing);
    } else {
      _valueStyle = getValuesTokens(theme, `spacings.${_valueStyle}`);
    }
  }

  if (isPropertyStyleColor) {
    _valueStyle = getValuesTokens(theme, `colors.${_valueStyle}`) || _valueStyle;
  }

  if (isPropertyStyleRadii) {
    _valueStyle = getValuesTokens(theme, `radii.${_valueStyle}`) || _valueStyle;
  }

  return _valueStyle;
}
