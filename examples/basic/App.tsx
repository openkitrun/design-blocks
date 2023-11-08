import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import { ThemeProvider } from '@design-blocks/native';

import { theme, block } from './blocks.config';

import DSScreen from './src/screens/DS/screen';
import DemoScreen from './src/screens/demo/screen';

const SafeAreaViewBlock = block(SafeAreaView)(({ theme }) => {
  return {
    backgroundColor: theme.colors.blue[950],
    height: '100%',
    //gap: theme.spacings['8xl']
  };
});

export default function App() {
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
