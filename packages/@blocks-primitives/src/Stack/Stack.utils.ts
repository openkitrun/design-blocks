import camelCase from 'lodash.camelcase';

import { isNumber } from '@design-blocks/utils';

import type { ISpacings } from '@design-blocks/theme';
import type { Options, StackDirectionMargin, DirectionValue } from './Stack.types';

export const directionMargin = (options: Options): DirectionValue => {
  const { direction, spacing: spacingProp, index, theme } = options;
  const isFirstChildren = index !== 0;
  const isSpacingString = !isNumber(spacingProp);
  let spacing = theme?.devTools.spacing(spacingProp as number, theme.spacings.baseSpacing) as number;

  if (isSpacingString) {
    spacing = theme?.spacings[spacingProp as ISpacings] as number;
  }

  const directionStyles: StackDirectionMargin = {
    column: {
      marginTop: isFirstChildren ? spacing : 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
    },

    row: {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: isFirstChildren ? spacing : 0,
    },

    rowReverse: {
      marginTop: 0,
      marginRight: isFirstChildren ? spacing : 0,
      marginBottom: 0,
      marginLeft: 0,
    },

    columnReverse: {
      marginTop: 0,
      marginRight: 0,
      marginBottom: isFirstChildren ? spacing : 0,
      marginLeft: 0,
    },
  };

  return directionStyles[camelCase(direction) as keyof typeof direction];
};

export const variants = {
  flexDirection: {
    row: 'row',
    column: 'column',
    rowReverse: 'row-reverse',
    columnReverse: 'column-reverse',
  },

  flexWrap: {
    nowrap: 'nowrap',
    wrap: 'wrap',
    wrapReverse: 'wrap-reverse',
  },

  alignItems: {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline',
  },

  justifyContent: {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
    spaceBetween: 'space-between',
    spaceEvenly: 'space-evenly',
    spaceAround: 'space-around',
  },
};
