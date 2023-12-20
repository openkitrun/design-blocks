import React from 'react';

import { render } from '@testing-library/react-native';
import { createBlocks, createTokens } from '@design-blocks/system';

import { ThemeProvider } from '../../@blocks-theme';

import type { RenderOptions } from '@testing-library/react-native';

export const lightTheme = {
  tokens: {
    colors: {
      red: {
        950: '#FF0000',
      },
    },
  },
};

const [themeTokens] = createTokens({ theme: lightTheme });
export const { block, css, themes } = createBlocks({
  themes: { light: themeTokens },
});

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={themes.light}>{children}</ThemeProvider>;
};

const renderWithWrapper = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';
export { renderWithWrapper };
