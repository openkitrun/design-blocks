export const spacings = {
  none: 0,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
  '4xl': 56,
  '5xl': 64,
  '6xl': 72,
  full: '100%',
  baseSpacing: 8,
} as const;

export interface Spacings extends Readonly<typeof spacings> {}
export type ISpacings = keyof Spacings;
