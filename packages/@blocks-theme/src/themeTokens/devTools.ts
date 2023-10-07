import { spacing } from '@design-blocks/utils';

export const devTools = {
  spacing,
} as const;

/** Utility interface. */
export type Utils<T = {}> = {
  [Property in keyof T]: T[Property] extends (value: infer _V) => {} ? T[Property] : never;
};

export type IDevTools = keyof typeof devTools & Utils;
//export type DevTools = typeof devTools & Utils;
export type DevTools = {
  spacing: typeof spacing;
} & Utils;
