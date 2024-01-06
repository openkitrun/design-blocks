export interface Variable<A = any> {
  [key: string]: number | string | A;
}

export type VariableVal = number | string | Variable<VariableVal>;
type GenericKey = string;

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
