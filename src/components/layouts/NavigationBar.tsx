import { Box, Stack, Tab, TabList, Tabs } from '@chakra-ui/react'

export const NavigationBar = () => {
  return (
    <Box
      h={'100vh'}
      w={'80px'}
      bg={'green'}
      willChange={'width'}
      transition={'.3s ease'}
      _hover={{ width: '180px' }}
    >
      <Tabs align={'center'} isFitted variant={'solid-rounded'} size={'lg'} pt={'4'}>
        <TabList>
          <Stack>
            <Tab _hover={{ color: '#fff' }}>水温</Tab>
            <Tab _hover={{ color: '#fff' }}>肥料</Tab>
            <Tab _hover={{ color: '#fff' }}>気温</Tab>
            <Tab _hover={{ color: '#fff' }}>湿度</Tab>
            <Tab _hover={{ color: '#fff' }}>CO2</Tab>
          </Stack>
        </TabList>
      </Tabs>
    </Box>
  )
}
