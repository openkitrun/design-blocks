export const colorsKeys = {
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
  textShadowColor: 'textShadowColor',
  shadowColor: 'shadowColor',
  overlayColor: 'overlayColor',
  tintColor: 'tintColor',
} as const;

export type IColorsKeys = keyof typeof colorsKeys;
export type ColorsKeys = typeof colorsKeys;
