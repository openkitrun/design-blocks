export const bordersKeys = {
  borderWidth: 'borderWidth',
  border: 'borderWidth',
  borderBottomWidth: 'borderBottomWidth',
  borderBottom: 'borderBottomWidth',
  borderEndWidth: 'borderEndWidth',
  borderEnd: 'borderEndWidth',
  borderLeftWidth: 'borderLeftWidth',
  borderLeft: 'borderLeftWidth',
  borderRightWidth: 'borderRightWidth',
  borderRight: 'borderRightWidth',
  borderStartWidth: 'borderStartWidth',
  borderStart: 'borderStartWidth',
  borderTopWidth: 'borderTopWidth',
  borderTop: 'borderTopWidth',
} as const;

export type IBordersKeys = keyof typeof bordersKeys;
export type BordersKeys = typeof bordersKeys;
