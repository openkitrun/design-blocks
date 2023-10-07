/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';

import type { Theme } from '.';
import { weakMemoize } from './weakMemoize';

export const ThemeContext = React.createContext<Theme>({} as Theme);
export const useTheme = (): Theme => React.useContext(ThemeContext);

export interface ThemeProviderProps {
  theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
  children: React.ReactNode;
}

export interface ThemeProvider {
  (props: ThemeProviderProps): React.ReactElement;
}

const getTheme = (
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  outerTheme: Record<string, any>,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  theme: Record<string, any> | ((arg0: Record<string, any>) => Record<string, any>),
) => {
  if (typeof theme === 'function') {
    const mergedTheme = theme(outerTheme);

    if (
      process.env.NODE_ENV !== 'production' &&
      (mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme))
    ) {
      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
    }

    return mergedTheme;
  }

  if (process.env.NODE_ENV !== 'production' && (theme == null || typeof theme !== 'object' || Array.isArray(theme))) {
    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
  }

  return { ...outerTheme, ...theme };
};

//@ts-ignore
const createCacheWithTheme = weakMemoize((outerTheme) => {
  //@ts-ignore
  return weakMemoize((theme) => {
    //@ts-ignore
    return getTheme(outerTheme, theme);
  });
});

export const ThemeProvider = (props: ThemeProviderProps) => {
  let theme = React.useContext(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return <ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>;
};
