export const fontsKeys = {
  fontFamily: 'fontFamily',
  fontSize: 'fontSize',
  fontStyle: 'fontStyle',
  fontWeight: 'fontWeight',
  letterSpacing: 'letterSpacing',
  lineHeight: 'lineHeight',
  textAlign: 'textAlign',
  textDecoration: 'textDecoration',
  textDecorationLine: 'textDecorationLine',
  textDecorationStyle: 'textDecorationStyle',
  textDecorationColor: 'textDecorationColor',
  textShadowColor: 'textShadowColor',
  textShadowOffset: 'textShadowOffset',
  textShadowRadius: 'textShadowRadius',
  textTransform: 'textTransform',
} as const;

export type IFontsKeys = keyof typeof fontsKeys;
export type FontsKeys = typeof fontsKeys;
