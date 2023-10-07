import { spacing } from '@design-blocks/utils';

export const devTools = {
  spacing,
};

/** Utility interface. */
// eslint-disable-next-line @typescript-eslint/ban-types
// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type Utils<T = {}> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  [Property in keyof T]: T[Property] extends (value: infer _V) => {} ? T[Property] : never;
};

export type IDevTools = keyof typeof devTools & Utils;
//export type DevTools = typeof devTools & Utils;
export type DevTools = {
  spacing: typeof spacing;
} & Utils;
