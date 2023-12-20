import { spacing, toPixels } from '@design-blocks/utils';

export const utils = {
  spacing,
  toPixels,
} as const;

export type UtilsMap<T = {}> = {
  [Property in keyof T]: T[Property] extends (value: infer _V) => {} ? T[Property] : never;
};

export type IUtils = keyof typeof utils & UtilsMap;

export interface Utils extends UtilsMap {
  [key: string]: (...args: any[]) => any;
  spacing: typeof spacing;
  toPixels: typeof toPixels;
}
