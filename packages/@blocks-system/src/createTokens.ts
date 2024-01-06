import type { CreateTokens, MakeTokens } from './types/createTokens';

export function createTokens<T extends CreateTokens>(tokens: T): MakeTokens<T> {
  const blocksTokens = {
    colors: tokens.colors,
    spacings: tokens.spacings,
    fontSizes: tokens.fontSizes,
    fontWeights: tokens.fontWeights,
    radii: tokens.radii,
    borders: tokens.borders,
    sizes: tokens.sizes,
  };

  return blocksTokens as any;
}

// const tokens = createTokens({
//   colors: {
//     red: {
//       500: '#ff0000',
//     },
//     primary: '#ff0000',
//   },
//   sizes: {
//     xl: 50,
//   },
//   spacings: {
//     xl: 50,
//     sm: 10,
//   },
//   fontSizes: {},
//   fontWeights: {},
//   borders: {},
//   radii: {},
// } as const);

// tokens.colors.primary
