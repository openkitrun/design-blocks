/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';

import {ThemeProvider, Box, Stack} from '@design-blocks/native';

import {theme, styled} from './blocks.config';

const Title = styled(Text)(({theme: t}) => {
  return {
    color: t.colors.cyan[200],
  };
});

function App(): JSX.Element {
  //const a = theme.colors.
  // console.log('a', a);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Stack p={2} spacing={3} bgColor="red.800">
            <Box p={3}>
              <Text>Box</Text>
            </Box>
            <Title>Hola</Title>
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
