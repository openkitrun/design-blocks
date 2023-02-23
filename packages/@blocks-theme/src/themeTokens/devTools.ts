import { spacing } from '@design-blocks/utils';

export const devTools = {
  spacing,
};

/** Utility interface. */
// eslint-disable-next-line @typescript-eslint/ban-types
export type Utils<T = {}> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [Property in keyof T]: T[Property] extends (value: infer _V) => {} ? T[Property] : never;
};

export type IDevTools = keyof typeof devTools & Utils;
//export type DevTools = typeof devTools & Utils;
export type DevTools = {
  spacing: typeof spacing;
} & Utils;
