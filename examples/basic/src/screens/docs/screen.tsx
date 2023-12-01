import { ScrollView, Image } from 'react-native';

import { Text, Box, XStack, YStack } from '@design-blocks/primitives';
import { colors } from '@design-blocks/colors/tailwind-css';

import IconAdd from '../../components/icons/Add';
import IconApps from '../../components/icons/Apps';
import IconRefresh from '../../components/icons/Refresh';
import IconDownload from '../../components/icons/Download';
import IconArrowRightUp from '../../components/icons/ArrowRightUp';
import IconArrowDropDown from '../../components/icons/ArrowDropDown';

import { block } from '../../../blocks.config';

const actions = {
  add: IconAdd,
  apps: IconApps,
  refresh: IconRefresh,
  download: IconDownload,
  arrowRightUp: IconArrowRightUp,
};

const ScrollViewBlock = block(ScrollView)(({ theme }) => ({
  backgroundColor: theme.colors.zinc[950],
  height: '100%',
}));

const AvatarBlock = block(Image)(({ theme }) => ({
  width: theme.utils.spacing(6),
  height: theme.utils.spacing(6),
  borderRadius: theme.spacings['8xl'],
}));

const AvatarRecipientBlock = block(Image)(({ theme }) => ({
  width: theme.utils.spacing(9),
  height: theme.utils.spacing(9),
  borderRadius: 9999,
}));

const TransactionItem = ({
  name,
  date,
  amount,
}: {
  name: string;
  date: string;
  amount: string;
}) => (
  <XStack
    bgColor='zinc.50'
    ph='sm'
    pv='xs'
    borderRadius='full'
    justifyContent='space-between'
    alignItems='center'
    gap='md'
  >
    <XStack alignItems='center' gap='md'>
      <Box bgColor='zinc.950' p='xs' borderRadius={9999}>
        <IconArrowRightUp color={colors.zinc[50]} />
      </Box>

      <YStack gap='xxs'>
        <Text fontWeight='medium'>{name}</Text>
        <Text color='zinc.500'>{date}</Text>
      </YStack>
    </XStack>

    <Text fontWeight='medium'>{amount}</Text>
  </XStack>
);

const Recipient = ({
  avatarUrl,
  name,
}: {
  avatarUrl: string;
  name: string;
}) => (
  <YStack alignItems='center' gap='xs'>
    <AvatarRecipientBlock
      source={{
        uri: avatarUrl,
      }}
    />

    <Text color='zinc.50' fontWeight='light'>
      {name}
    </Text>
  </YStack>
);

const Action = ({ name }: { name: keyof typeof actions }) => {
  const Icon = actions[name];
  return (
    <Box bgColor='zinc.50' p='md' borderRadius={9999}>
      <Icon />
    </Box>
  );
};

function DocsScreen() {
  return (
    <ScrollViewBlock contentInsetAdjustmentBehavior='automatic'>
      <YStack ph='md' gap='lg'>
        <XStack
          bgColor='zinc.50'
          ph='sm'
          pv='xs'
          borderRadius={9999}
          justifyContent='space-between'
          alignItems='center'
          gap='md'
        >
          <XStack alignItems='center' gap='md'>
            <AvatarBlock
              source={{
                uri: 'https://wootsbot.dev/avatar.jpg',
              }}
            />

            <YStack gap='xxs'>
              <Text fontWeight='medium'>Welcome, Jorge</Text>
              <Text color='zinc.500'>Your wallet</Text>
            </YStack>
          </XStack>

          <Box bgColor='zinc.950' p='xs' borderRadius={9999}>
            <IconRefresh color={colors.zinc[50]} />
          </Box>
        </XStack>

        <Box bgColor='sky.200' p='sm' borderRadius={16}>
          <YStack gap='lg'>
            <XStack gap='xs'>
              <Box bgColor='sky.100' borderRadius={9999} p='xs'>
                <Text fontSize='sm'>USD</Text>
              </Box>

              <Box bgColor='sky.100' borderRadius={9999} p='xs'>
                <Text fontSize='sm'>VISA</Text>
              </Box>

              <Box borderColor='gray.500' border borderRadius={9999} p='xs'>
                <Text fontSize='sm'>****1216, Exp: 05/2030</Text>
              </Box>
            </XStack>

            <YStack>
              <Text fontSize='4xl'>$3,400.00</Text>
              <Text color='zinc.500'>Balance</Text>
            </YStack>

            <XStack gap='md'>
              <Action name='add' />
              <Action name='download' />
              <Action name='arrowRightUp' />
              <Action name='apps' />
            </XStack>
          </YStack>
        </Box>

        <YStack gap='md'>
          <Text fontSize='xl' color='zinc.50'>
            Recent recipients
          </Text>

          <XStack gap='md'>
            <YStack alignItems='center' gap='xs'>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 9999,
                  bgColor: 'zinc.50',
                  width: 72,
                  height: 72,
                }}
              >
                <IconAdd size={32} />
              </Box>

              <Text color='zinc.50' fontWeight='light'>
                Add
              </Text>
            </YStack>

            <Recipient
              name='Margaret'
              avatarUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Margaret_Hamilton_-_restoration.jpg/1920px-Margaret_Hamilton_-_restoration.jpg'
            />

            <Recipient
              name='Eich'
              avatarUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/440px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg'
            />

            <Recipient
              name='Rossum'
              avatarUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Guido_van_Rossum_OSCON_2006.jpg/400px-Guido_van_Rossum_OSCON_2006.jpg'
            />
          </XStack>
        </YStack>

        <YStack gap='md'>
          <XStack justifyContent='space-between'>
            <Text fontSize='xl' color='zinc.50'>
              Transactions
            </Text>

            <XStack borderColor='gray.500' border borderRadius={9999} pv='xxs' ph='sm' alignItems='center'>
              <Text color='zinc.50' fontSize='sm'>
                Last
              </Text>

              <IconArrowDropDown color={colors.zinc[50]} />
            </XStack>
          </XStack>

          <TransactionItem name='Online store' date='Mar 04 2023, 12:30' amount='-$2,400.00' />

          <TransactionItem name='Apple store' date='May 05 2023, 04:30' amount='-$1,200.00' />

          <TransactionItem name='Food moust' date='Jun 16 2023, 07:00' amount='-$200.00' />

          <TransactionItem name='Fast' date='Aug 03 2023, 07:00' amount='-$5.00' />
        </YStack>
      </YStack>
    </ScrollViewBlock>
  );
}

export default DocsScreen;
