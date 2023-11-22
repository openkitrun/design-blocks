import { ScrollView } from 'react-native';

import { Box, Text } from '@design-blocks/primitives';

function DemoScreen() {
  return (
    <ScrollView contentInsetAdjustmentBehavior='automatic'>
      <Box m='2xl' p='2xl' bgColor='amber.900' borderRadius='50%'>
        <Text>demo</Text>
      </Box>
    </ScrollView>
  );
}

export default DemoScreen;
