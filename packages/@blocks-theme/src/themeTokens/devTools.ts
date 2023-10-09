import { spacing, toPixels } from '@design-blocks/utils';

export const devTools = {
  spacing,
  toPixels,
} as const;

export type Utils<T = {}> = {
  [Property in keyof T]: T[Property] extends (value: infer _V) => {} ? T[Property] : never;
};

export type IDevTools = keyof typeof devTools & Utils;
export type DevTools = {
  spacing: typeof spacing;
  toPixels: typeof toPixels;
} & Utils;
