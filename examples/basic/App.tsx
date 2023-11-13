import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Appearance } from 'react-native';

import { ThemeProvider } from '@design-blocks/native';

import { theme, themes, block } from './blocks.config';

import type { AppearancePreferences, ColorSchemeName } from 'react-native/Libraries/Utilities/NativeAppearance';

// import DSScreen from './src/screens/DS/screen';
import DemoScreen from './src/screens/demo/screen';

const SafeAreaViewBlock = block(SafeAreaView)(({ theme }) => {
  return {
    backgroundColor: theme.colors.blue[950],
    height: '100%',
    //gap: theme.spacings['8xl']
  };
});

export default function App() {
  React.useEffect(() => {
    const subscription = Appearance.addChangeListener((preferences: AppearancePreferences) => {
      const { colorScheme: scheme } = preferences;

      // biome-ignore lint/suspicious/noConsoleLog: <explanation>
      console.log('scheme', scheme);
    });

    return () => subscription?.remove();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaViewBlock>
        <StatusBar />
        <DemoScreen />
        {/* <DSScreen /> */}
      </SafeAreaViewBlock>
    </ThemeProvider>
  );
}
