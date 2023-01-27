'use client'
import { Box, Input, Button, Card, CardHeader, CardBody, Text, Flex, Badge } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { axiosApi } from '@/lib/axios';

type LoginForm = {
  email: string;
  password: string;
};

type Validation = LoginForm & { loginFailed: string };

export default function Home() {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    'email': '',
    'password': ''
  });

  const [validation, setValidation] = useState<Validation>({
    email: '',
    password: '',
    loginFailed: '',
  });

  const updateLoginForm = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]:e.target.value })
  }

  const login = () => {
    axiosApi
      .get('/sanctum/csrf-cookie')
      .then((res) => {
        axiosApi
          .post('/api/login', loginForm)
          .then((response: AxiosResponse) => {
            console.log(response);
          })
          .catch((err: AxiosError) => {
            console.log(err);
          })
      });
  };

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
              <Box mb='5'>
                <Text>メールアドレス</Text>
                <Input name='email' value={loginForm.email} placeholder='example@co.jp' onChange={updateLoginForm} />
              </Box>
              <Box mb='5'>
                <Text>パスワード</Text>
                <Input type='password' placeholder='********' onChange={updateLoginForm} />
              </Box>
              <Button name='password' value={loginForm.password} onClick={login} w='100%' colorScheme='teal' variant='solid' /*isLoading*/>
                Login
              </Button>
            </CardBody>
          </Card>
          {/* </Box> */}
        </Flex>
      </main>
  )
}
