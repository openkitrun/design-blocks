//import { block, css } from '@design-blocks/block';

import type { VariableVal } from './createTokens';

export type GenericThemes = {
  [key: string]: {
    [key: string]: VariableVal;
  };
};

export type CreateBlocksConfig<A extends GenericThemes> = {
  themes: A;
};

export type GenericCreateBlocksConfig = CreateBlocksConfig<GenericThemes>;

export type CreateBlocksProps = {
  themes: GenericCreateBlocksConfig['themes'];
};

type ConfProps<A> = {
  themes?: A;
  // block: typeof block;
  // css: typeof css;
};

type EmptyThemes = {};

export type InferBlocksConfig<Conf> = Conf extends ConfProps<infer A>
  ? BlocksInternalConfig<A extends GenericThemes ? A : EmptyThemes>
  : unknown;

export type BlocksInternalConfig<A extends GenericThemes = GenericThemes> = Omit<
  CreateBlocksProps,
  keyof GenericCreateBlocksConfig
> &
  CreateBlocksConfig<A> & {
    themeConfig: any;
  };
