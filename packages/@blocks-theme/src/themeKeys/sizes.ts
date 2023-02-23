export const sizesKeys = {
  width: 'width',
  w: 'width',
  height: 'height',
  h: 'width',
  minWidth: 'minWidth',
  minW: 'minWidth',
  maxWidth: 'maxWidth',
  maxW: 'maxWidth',
  minHeight: 'minHeight',
  minH: 'minHeight',
  maxHeight: 'maxHeight',
  maxH: 'maxHeight',
} as const;

export type ISizesKeys = keyof typeof sizesKeys;
export type SizesKeys = typeof sizesKeys;
