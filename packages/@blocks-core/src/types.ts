import block, { css } from '@design-blocks/block';

type EmptyTokens = {
  colors: {};
  spacings: {};
  fontSizes: {};
  fontWeights: {};
  radii: {};
  borders: {};
  sizes: {};
};

type EmptyThemes = {};

export interface Variable<A = any> {
  [key: string]: number | string | A;
}

export type VariableVal = number | string | Variable<VariableVal>;
type GenericKey = string;

export type GenericThemes = {
  [key: string]: {
    [key: string]: VariableVal;
  };
};

type GenericTokens = CreateTokens;
export type GenericBlocksConfig = CreateBlocks<GenericTokens, GenericThemes>;

export type CreateTokens<Val extends VariableVal = VariableVal> = Record<
  string,
  {
    [key: string]: Val;
  }
> & {
  colors: {
    [key: GenericKey]: Val;
  };
  spacings: {
    [key: GenericKey]: Val;
  };
  fontSizes: {
    [key: GenericKey]: Val;
  };
  fontWeights: {
    [key: GenericKey]: Val;
  };
  radii: {
    [key: GenericKey]: Val;
  };
  borders: {
    [key: GenericKey]: Val;
  };
  sizes: {
    [key: GenericKey]: Val;
  };
};

type MapTokens<A, Type = A[keyof A]> = {
  [Key in keyof A]: Variable<Type>;
};

export type MakeTokens<T extends CreateTokens> = T extends {
  colors?: infer A;
  spacings?: infer B;
  fontSizes?: infer C;
  fontWeights?: infer D;
  radii?: infer E;
  borders?: infer F;
  sizes?: infer G;
}
  ? {
      colors: A;
      spacings: MapTokens<B, number>;
      fontSizes: MapTokens<C, number>;
      fontWeights: MapTokens<D, number>;
      radii: MapTokens<E, number>;
      borders: MapTokens<F, number>;
      sizes: MapTokens<G, number>;
    } & Omit<
      {
        [key in keyof T]: MapTokens<T[key]>;
      },
      'colors' | 'spacings' | 'fontSizes' | 'fontWeights' | 'radii' | 'borders' | 'sizes'
    >
  : never;

export type CreateBlocksConfig<A extends GenericTokens, B extends GenericThemes> = {
  tokens: A;
  themes: B;
};

export type CreateBlocks<A extends GenericTokens, B extends GenericThemes> = {
  tokens: A;
  themes: B;
};

export interface BlocksCustomConfig {}

export interface BlocksConfig extends Omit<GenericBlocksConfig, keyof BlocksCustomConfig>, BlocksCustomConfig {}

export type CreateBlocksProps = {
  tokens: GenericBlocksConfig['tokens'];
  themes?: {
    [key: string]: {
      [key: string]: string | number | Variable;
    };
  };
};

export type GenericCreateBlocksConfig = CreateBlocksConfig<GenericTokens, GenericThemes>;

export type CreateBlocksInternalConfig<A extends GenericTokens, B extends GenericThemes> = Omit<
  CreateBlocksProps,
  keyof GenericCreateBlocksConfig
> &
  Omit<CreateBlocksConfig<A, B>, 'tokens'> & {
    block: typeof block;
    css: typeof css;
  };

type ConfProps<A, B> = {
  tokens?: A;
  themes?: B;
};
export type InferCreateBlocks<Conf> = Conf extends ConfProps<infer A, infer B>
  ? CreateBlocksInternalConfig<A extends GenericTokens ? A : EmptyTokens, B extends GenericThemes ? B : EmptyThemes>
  : unknown;
