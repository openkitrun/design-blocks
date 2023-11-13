import { ScrollView } from 'react-native';

import { Box, Stack, YStack, XStack, Text } from '@design-blocks/primitives';
import colors from '@design-blocks/colors/tailwind-css';

import { block, css } from '../../../blocks.config';

const CircleStringBlock = block.View`
  padding: ${(props) => props.theme.utils.spacing(4)}px;
  width: ${({ theme: { utils } }) => utils.toPixels(utils.spacing(10))};
  height: ${({ theme: { utils } }) => utils.toPixels(utils.spacing(10))};
  border-radius: ${({ theme: { spacings } }) => spacings.full?.toString()};
  background-color: ${({ theme }) => theme.colors.emerald[500]};
`;

const LabelText = block.Text`
  ${(props) => {
    return css`
      color: ${props.theme.colors.neutral[50]};
    `;
  }}
`;

const CircleBlock = block(Box)(({ theme }) => {
  return {
    width: theme.utils?.spacing(10),
    height: theme.utils?.spacing(10),
    borderRadius: theme.utils?.spacing(10),
  };
});

const SquareBlock = block(Box)(({ theme }) => {
  return {
    width: theme.utils?.spacing(10),
    height: theme.utils?.spacing(10),
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
      <Text mb='2xl' fontSize='7xl' color='zinc.100' textAlign='center'>
        Blocks
      </Text>

      <CircleStringBlock style={css({ backgroundColor: 'red', borderColor: 'yellow', borderWidth: 2 })} />

      <LabelText>LabelText</LabelText>

      <YStack gap='xl'>
        <XStack alignItems='center' justifyContent='space-around'>
          <SquareBlock bgColor='amber.100' />
          <CircleBlock bgColor='green.400' />
          <SquareBlock bgColor='amber.400' />
        </XStack>

        <XStack alignItems='center' justifyContent='center' sx={{ justifyContent: 'space-between' }}>
          <CircleBlock bgColor='yellow.600' />
          <SquareBlock bgColor='indigo.600' />
          <CircleBlock bgColor='fuchsia.600' />
        </XStack>

        <XStack alignItems='center' justifyContent='space-around'>
          <CircleBlock bgColor={colors.emerald[600]} />
          <SquareBlock bgColor={colors.lime[400]} />
        </XStack>

        <Stack gap={3} alignItems='center' direction='column'>
          <Box height={80} width={80} bgColor='rose.600' borderRadius={80} />
          <Box height={80} width={80} bgColor='amber.500' />
        </Stack>
      </YStack>
    </ScrollViewBlock>
  );
}

export default DemoScreen;
