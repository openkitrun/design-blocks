import { ScrollView } from 'react-native';

import { Box, Stack, YStack, XStack } from '@design-blocks/native';

import { block } from '../../../blocks.config';

const Circle = block(Box)(({ theme }) => {
  return {
    width: theme.devTools.spacing(10),
    height: theme.devTools.spacing(10),
    borderRadius: theme.devTools.spacing(10),
  };
});

const Square = block(Box)(({ theme }) => {
  return {
    width: theme.devTools.spacing(10),
    height: theme.devTools.spacing(10),
  };
});

const ScrollViewBlock = block(ScrollView)(({ theme }) => {
  return {
    backgroundColor: theme.colors.blue[950],
    height: '100%',
  };
});

function DemoScreen() {
  return (
    <ScrollViewBlock contentInsetAdjustmentBehavior='automatic'>
      <YStack spacing={3}>
        <XStack alignItems='center' spacing={2} justifyContent='space-around'>
          <Square bgColor='rose.500' />
          <Circle bgColor='green.400' />
          <Square bgColor='amber.400' />
        </XStack>

        <XStack alignItems='center' spacing={2} justifyContent='space-around'>
          <Circle bgColor='yellow.600' />
          <Square bgColor='indigo.600' />
          <Circle bgColor='fuchsia.600' />
        </XStack>

        <XStack alignItems='center' spacing={2} justifyContent='space-around'>
          <Circle bgColor='emerald.600' />
          <Square bgColor='lime.400' />
        </XStack>

        <Stack alignItems='center' spacing={2}>
          <Box height={80} width={80} bgColor='rose.600' borderRadius={80} />
          <Box height={80} width={80} bgColor='sky.600' />
        </Stack>
      </YStack>
    </ScrollViewBlock>
  );
}

export default DemoScreen;
