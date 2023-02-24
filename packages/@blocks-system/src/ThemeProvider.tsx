// import { ThemeProvider } from '@emotion/react';
// export { ThemeProvider };

import * as React from 'react';
import type { Theme } from '@design-blocks/theme';

import { ThemeProvider as EmoThemeProvider } from '@emotion/react';
export { ThemeContext } from '@emotion/react';

export interface ThemeProviderProps {
  theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
  children: React.ReactNode;
}

export interface ThemeProvider {
  (props: ThemeProviderProps): React.ReactElement;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const theme = props.theme;

  return <EmoThemeProvider theme={theme}>{props.children}</EmoThemeProvider>;
};
