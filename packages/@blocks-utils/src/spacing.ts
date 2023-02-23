import R from 'ramda';

export function spacing(val: number, baseSpacing = 8): number {
  const value = R.multiply(val, baseSpacing);
  return value;
}
