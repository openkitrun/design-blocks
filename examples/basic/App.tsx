import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import { ThemeProvider } from '@design-blocks/native';

import { theme, block } from './blocks.config';

import DemoScreen from './src/screens/demo/screen';

const SafeAreaViewBlock = block(SafeAreaView)(({ theme }) => {
  return {
    backgroundColor: theme.colors.blue[950],
    height: '100%',
  };
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaViewBlock>
        <StatusBar />
        <DemoScreen />
      </SafeAreaViewBlock>
    </ThemeProvider>
  );
}
