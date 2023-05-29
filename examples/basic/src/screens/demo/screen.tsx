import { ScrollView } from 'react-native';

import { Box, Stack, YStack, XStack, Text } from '@design-blocks/native';

import { block } from '../../../blocks.config';

const CircleBlock = block(Box)(({ theme }) => {
  return {
    width: theme.devTools.spacing(10),
    height: theme.devTools.spacing(10),
    borderRadius: theme.devTools.spacing(10),
  };
});

const SquareBlock = block(Box)(({ theme }) => {
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
      <Text mb='2xl' fontSize='9xl' color='zinc.100' textAlign='center'>
        Example
      </Text>

      <YStack gap='xl'>
        <XStack alignItems='center' justifyContent='space-around'>
          <SquareBlock bgColor='rose.500' />
          <CircleBlock bgColor='green.400' />
          <SquareBlock bgColor='amber.400' />
        </XStack>

        <XStack alignItems='center' justifyContent='space-around'>
          <CircleBlock bgColor='yellow.600' />
          <SquareBlock bgColor='indigo.600' />
          <CircleBlock bgColor='fuchsia.600' />
        </XStack>

        <XStack alignItems='center' justifyContent='space-around'>
          <CircleBlock bgColor='emerald.600' />
          <SquareBlock bgColor='lime.400' />
        </XStack>

        <Stack gap={3} alignItems='center' direction='column'>
          <Box height={80} width={80} bgColor='rose.600' borderRadius={80} />
          <Box height={80} width={80} bgColor='sky.600' />
        </Stack>
      </YStack>
    </ScrollViewBlock>
  );
}

export default DemoScreen;
