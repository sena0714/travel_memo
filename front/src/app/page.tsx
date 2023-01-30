'use client'
import { Box, Input, Button, Card, CardHeader, CardBody, Text, Flex } from '@chakra-ui/react';
import { useState, ChangeEvent } from 'react';

import { useAuth } from '@/components/hooks/useAuth';

type LoginForm = {
  email: string;
  password: string;
};

export default function Home() {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    'email': '',
    'password': ''
  });
  
  const updateLoginForm = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]:e.target.value });
  }
  
  const { validation, loading, login } = useAuth();

  const onClickLogin = () => login(loginForm.email, loginForm.password);

  return (
      <main>
        <Flex h='calc(100vh)' justify='center' align='center'>
          <Card w={300} overflow='hidden' variant='outline'>
            <CardHeader>
              <Flex justify='center'>
                <Text as='label' fontSize='2xl' fontWeight='bold'>旅メモ</Text>
              </Flex>
            </CardHeader>
            <CardBody>
              <Box mb='5'>
                <Text>メールアドレス</Text>
                <Input name='email' value={loginForm.email} placeholder='xxxxxxxx@example.com' onChange={updateLoginForm} />
                {validation.email && ( <Text fontSize='xs' color='red'>{validation.email}</Text> )}
              </Box>

              <Box mb='5'>
                <Text>パスワード</Text>
                <Input type='password' name='password' value={loginForm.password} placeholder='********' onChange={updateLoginForm} />
                {validation.password && ( <Text fontSize='xs' color='red'>{validation.password}</Text> )}
              </Box>

              {validation.loginFailed && ( <Text fontSize='xs' color='red'>{validation.loginFailed}</Text> )}

              {loading ? (
                <Button onClick={onClickLogin} w='100%' colorScheme='teal' variant='solid' isLoading>Login</Button>
              ): (
                <Button onClick={onClickLogin} w='100%' colorScheme='teal' variant='solid'>Login</Button>
              )}
            </CardBody>
          </Card>
          {/* </Box> */}
        </Flex>
      </main>
  )
}
