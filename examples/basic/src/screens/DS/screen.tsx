import { ScrollView, View } from 'react-native';

import { Text, Box, Stack } from '@design-blocks/primitives';

import { block } from '../../../blocks.config';

const ScrollViewBlock = block(ScrollView)(({ theme }) => {
  return {
    backgroundColor: theme.colors.blue[950],
    height: '100%',
  };
});

function DSScreen() {
  return (
    <ScrollViewBlock contentInsetAdjustmentBehavior='automatic'>
      <Text mb='2xl' fontSize='10xl' color='zinc.50' textAlign='center'>
        Blocks v0.0.1
      </Text>

      <Stack gap='8xl'>
        <Box bgColor='fuchsia.500'>
          <Text>Box 1</Text>
        </Box>

        <Box bgColor='amber.500'>
          <Text>Box 2</Text>
        </Box>

        <Box bgColor='red.500'>
          <Text>Box 3</Text>
        </Box>

        <View>
          <Text>View</Text>
        </View>
      </Stack>
    </ScrollViewBlock>
  );
}

export default DSScreen;
