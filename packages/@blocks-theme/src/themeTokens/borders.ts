export const borders = {
  none: 0,
  sm: 2,
  true: 4,
  md: 6,
  lg: 8,
  xl: 12,
  '2xl': 16,
  '3xl': 20,
  '4xl': 24,
  '5xl': 28,
} as const;

export interface Borders extends Readonly<typeof borders> {}
export type IBorders = keyof Borders;
