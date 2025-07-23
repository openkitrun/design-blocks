import type { CreateTokens, MakeTokens } from '../types';

export function createTokens<T extends CreateTokens>(tokens: T): MakeTokens<T> {
  return {
    colors: tokens.colors || {},
    spacings: tokens.spacings || {},
    fontSizes: tokens.fontSizes || {},
    fontWeights: tokens.fontWeights || {},
    radii: tokens.radii || {},
    borders: tokens.borders || {},
    sizes: tokens.sizes || {},
  } as any;
}

export const tokens = createTokens({
  colors: {
    red: {
      50: '#ffebee',
      100: '#ffcdd2',
      200: '#ef9a9a',
    },
  },
  spacings: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
  },
  fontSizes: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
  },
  fontWeights: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
  },
  radii: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
  },
  borders: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
  },
  sizes: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
  },
});

// // biome-ignore lint/suspicious/noConsoleLog: <explanation>
// console.log(tokens.colors.red[200]);
