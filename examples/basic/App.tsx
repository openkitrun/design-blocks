import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import { ThemeProvider, Box, Stack, YStack, XStack } from '@design-blocks/native';

import Title from './src/components/Title';

import { theme } from './blocks.config';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
          <Title>Design Blocks</Title>
          <Stack p={2} spacing={3} bgColor='red.300'>
            <Box bgColor='rose.500' p='3'>
              <Text>Box</Text>
            </Box>

            <Box bgColor='purple.500' p={3}>
              <Text>Box</Text>
            </Box>

            <Box bgColor='zinc.300' p={3}>
              <Text>Box</Text>
            </Box>
          </Stack>

          <YStack mt={2}>
            <Box bgColor='blue.400' p={3}>
              <Text>Box</Text>
            </Box>

            <Box bgColor='yellow.400' p={3}>
              <Text>Box</Text>
            </Box>
          </YStack>

          <XStack mt={2}>
            <Box bgColor='blue.400' p={3}>
              <Text>Box</Text>
            </Box>

            <Box bgColor='yellow.400' p={3}>
              <Text>Box</Text>
            </Box>

            <Box bgColor='rose.400' p={3}>
              <Text>Box</Text>
            </Box>

            <Box bgColor='green.400' p={3}>
              <Text>Box</Text>
            </Box>
          </XStack>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}
