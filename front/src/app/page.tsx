'use client'
import { Stack, Input, Button, Card, CardHeader, CardBody, Text, Flex } from '@chakra-ui/react'

export default function Home() {
  return (
      <main>
        <Flex h='calc(100vh)' justify='center' align='center'>
          {/* <Box maxW='sm' borderWidth='1px' borderRadius='lg' padding='4'> */}
          <Card w={300} overflow='hidden' variant='outline'>
            <CardHeader>
              <Flex justify='center'>
                <Text as='label' fontSize='2xl' fontWeight='bold'>旅メモ</Text>
              </Flex>
            </CardHeader>
            <CardBody>
              <Stack spacing={5}>
                <Input placeholder='eamil' />
                <Input type='password' placeholder='password' />
                <Button colorScheme='teal' variant='solid' /*isLoading*/>
                  Login
                </Button>
              </Stack>
            </CardBody>
          </Card>
          {/* </Box> */}
        </Flex>
      </main>
  )
}
