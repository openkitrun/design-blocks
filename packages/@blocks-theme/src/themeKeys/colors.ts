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
  fill: 'fill',
  stroke: 'stroke',
} as const;

export type IColorsKeys = keyof typeof colorsKeys;
export type ColorsKeys = typeof colorsKeys;
