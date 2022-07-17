import { Box, Stack, Tab, TabList, Tabs } from '@chakra-ui/react'

export const NavigationBar = () => {
  return (
    <Box
      h={'100vh'}
      w={'80px'}
      bg={'green'}
      sx={{
        borderRadius: '0 20px 20px 0',
      }}
      willChange={'width'}
      transition={'1s ease'}
      _hover={{ width: '180px' }}
    >
      <Tabs align={'center'} isFitted variant={'solid-rounded'} size={'lg'}>
        <TabList>
          <Stack>
            <Tab _hover={{ color: '#fff' }}>one</Tab>
            <Tab _hover={{ color: '#fff' }}>two</Tab>
            <Tab _hover={{ color: '#fff' }}>three</Tab>
            <Tab _hover={{ color: '#fff' }}>four</Tab>
            <Tab _hover={{ color: '#fff' }}>five</Tab>
          </Stack>
        </TabList>
      </Tabs>
    </Box>
  )
}
