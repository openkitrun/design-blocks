export const radii = {
  none: 0,
  sm: 2,
  base: 4,
  true: 4,
  md: 6,
  lg: 8,
  xl: 12,
  '2xl': 16,
  '3xl': 20,
  '4xl': 24,
  '5xl': 28,
  full: 9999,
} as const;

export interface Radii extends Readonly<typeof radii> {}
export type IRadii = keyof Radii;
