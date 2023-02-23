//import styled from '@emotion/native';

import type { ConfigBlocks, CreateBlocks } from './types';
import { makeTheme } from './makeTheme';

import { styled } from './styled';

export function createBlocks({ theme, devTools }: ConfigBlocks): CreateBlocks {
  return {
    theme: makeTheme(theme),
    styled,
    makeTheme,
    devTools,
  };
}
