import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import { ThemeProvider } from '@design-blocks/native';

import { theme, themes, block } from './blocks.config';

import DocsScreen from './src/screens/docs/screen';

const SafeAreaViewBlock = block(SafeAreaView)(({ theme }) => {
  return {
    backgroundColor: theme.colors.zinc[950],
    height: '100%',
  };
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaViewBlock>
        <StatusBar translucent backgroundColor='transparent' style='inverted' />
        <DocsScreen />
      </SafeAreaViewBlock>
    </ThemeProvider>
  );
}
