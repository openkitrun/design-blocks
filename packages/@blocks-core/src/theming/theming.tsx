// Thank you emotion for this code: https://github.com/emotion-js/emotion/blob/main/packages/react/src/theming.js

// @ts-nocheck
import * as React from 'react';

//import type { Theme } from '@design-blocks/theme';
import type { BlocksConfig } from '../types';
import { weakMemoize } from './weakMemoize';

export const ThemeContext = React.createContext<BlocksConfig>({} as BlocksConfig);
export const useTheme = (): Theme => React.useContext(ThemeContext);

export interface ThemeProviderProps {
  theme: Partial<BlocksConfig> | ((outerTheme: BlocksConfig) => BlocksConfig);
  children: React.ReactNode;
}

export interface ThemeProvider {
  (props: ThemeProviderProps): React.ReactElement;
}

const getTheme = (
  outerTheme: Record<string, any>,
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

const createCacheWithTheme = weakMemoize((outerTheme) => {
  return weakMemoize((theme) => {
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
