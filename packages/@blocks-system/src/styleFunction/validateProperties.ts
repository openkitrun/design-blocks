import { themeKeys } from '@design-blocks/theme';

import { getValuesTokens } from './getValuesTokens';

import type { IBordersKeys, IColorsKeys, IRadiiKeys, ISizesKeys } from '@design-blocks/theme';
//import type { IBordersKeys, IColorsKeys, IRadiiKeys, ISizesKeys, ISpacesKeys } from '@design-blocks/theme';
import type { Theme } from '@design-blocks/theme';

export function validateProperties(valueStyle: string | number, propertyStyle: string, theme: Theme): string | number {
  let _valueStyle = valueStyle;

  /**
   *  validate spacings to rule 8pt
   */
  // if (themeKeys.spacings[propertyStyle as ISpacesKeys]) {
  //   if (Number(_valueStyle)) {
  //     _valueStyle = theme.utils.spacing(_valueStyle as number, theme.spacings.baseSpacing) ?? _valueStyle;
  //   }

  //   if (!Number(_valueStyle)) {
  //     _valueStyle = getValuesTokens(theme, `spacings.${_valueStyle}`);
  //   }
  // }

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

    if (valueStyleMerge) {
      _valueStyle = valueStyleMerge;
    }
  }

  /**
   * Validate border properties
   */
  if (themeKeys.borders[propertyStyle as IBordersKeys]) {
    const valueStyleMerge = getValuesTokens(theme, `borders.${_valueStyle}`);

    if (valueStyleMerge) {
      _valueStyle = valueStyleMerge;
    }
  }

  /**
   * validate sizes properties
   */
  if (themeKeys.sizes[propertyStyle as ISizesKeys]) {
    const valueStyleMerge = getValuesTokens(theme, `sizes.${_valueStyle}`);

    if (valueStyleMerge || valueStyleMerge === 0) {
      _valueStyle = valueStyleMerge;
    }
  }

  return _valueStyle;
}
