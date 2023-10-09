export const colorsKeys = {
  background: 'background',
  bg: 'background',
  backgroundColor: 'backgroundColor',
  bgColor: 'backgroundColor',
  color: 'color',
  borderColor: 'borderColor',
  borderTopColor: 'borderTopColor',
  borderRightColor: 'borderRightColor',
  borderEndColor: 'borderEndColor',
  borderBottomColor: 'borderBottomColor',
  borderLeftColor: 'borderLeftColor',
  borderStartColor: 'borderStartColor',
  borderBlockColor: 'borderBlockColor',
  borderBlockEndColor: 'borderBlockEndColor',
  borderBlockStartColor: 'borderBlockStartColor',
  textDecorationColor: 'textDecorationColor',
  fill: 'fill',
  stroke: 'stroke',
  shadowColor: 'shadowColor',
} as const;

export type IColorsKeys = keyof typeof colorsKeys;
export type ColorsKeys = typeof colorsKeys;
