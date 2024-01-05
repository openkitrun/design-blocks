import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from '@design-blocks/native';

import { themes, block } from './blocks.config';

import DocsScreen from './src/screens/docs/screen';

const SafeAreaViewBlock = block(SafeAreaView)(({ theme }) => {
  return {
    backgroundColor: theme.colors.zinc[950],
    height: '100%',
  };
});

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === 'light' ? themes.light : themes.dark}>
      <SafeAreaViewBlock>
        <StatusBar translucent backgroundColor='transparent' style='inverted' />
        <DocsScreen />
      </SafeAreaViewBlock>
    </ThemeProvider>
  );
}
