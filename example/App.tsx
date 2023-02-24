/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';

import {ThemeProvider, Box, Stack} from '@design-blocks/native';

import Title from './src/components/Title';

import {theme} from './blocks.config';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Title>Design Blocks</Title>
          <Stack p={2} spacing={3} bgColor="red.800">
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

export default App;
