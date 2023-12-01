export const bordersKeys = {
  borderWidth: 'borderWidth',
  border: 'borderWidth',
  borderBottomWidth: 'borderBottomWidth',
  borderB: 'borderBottomWidth',
  borderEndWidth: 'borderEndWidth',
  borderE: 'borderEndWidth',
  borderLeftWidth: 'borderLeftWidth',
  borderL: 'borderLeftWidth',
  borderRightWidth: 'borderRightWidth',
  borderR: 'borderRightWidth',
  borderStartWidth: 'borderStartWidth',
  borderS: 'borderStartWidth',
  borderTopWidth: 'borderTopWidth',
  borderT: 'borderTopWidth',
} as const;

export type IBordersKeys = keyof typeof bordersKeys;
export type BordersKeys = typeof bordersKeys;
