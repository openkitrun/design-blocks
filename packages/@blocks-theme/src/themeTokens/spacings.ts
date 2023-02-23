export const spacings = {
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
  full: '100%',
  baseSpacing: 8,
};

export type ISpacings = keyof typeof spacings;
export type Spacings = Partial<typeof spacings>;
