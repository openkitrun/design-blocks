import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import { ThemeProvider, Box, Stack } from '@design-blocks/native';

import Title from './src/components/Title';

import { theme } from './blocks.config';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
          <Title>Design Blocks</Title>
          <Stack p={2} spacing={3} bgColor='red.800'>
            <Box p={3}>
              <Text>Box</Text>
            </Box>
            <Box p={3}>
              <Text>Box</Text>
            </Box>
          </Stack>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}
