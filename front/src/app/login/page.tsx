'use client'
import { Box, Input, Button, Card, CardHeader, CardBody, Text, Flex, Spinner } from '@chakra-ui/react';
import { useState, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { useAuth } from '@/components/hooks/useAuth';

type LoginForm = {
  email: string;
  password: string;
};

export default function Login() {
  const { validation, loading, login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

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
                <Input type="email" {...register('email', { required: '必須入力です。' })} placeholder='xxxxxxxx@example.com' />
                <ErrorMessage
                    errors={errors}
                    name={'email'}
                    render={({message}) => (
                      <Text fontSize='small' color='red'>{message}</Text>
                    )}
                />
                {validation.email && ( <Text fontSize='xs' color='red'>{validation.email}</Text> )}
              </Box>

              <Box mb='5'>
                <Text>パスワード</Text>
                <Input type='password' {...register('password', { required: '必須入力です。' })} placeholder='********' />
                <ErrorMessage
                    errors={errors}
                    name={'password'}
                    render={({message}) => (
                      <Text fontSize='small' color='red'>{message}</Text>
                    )}
                />
                {validation.password && ( <Text fontSize='xs' color='red'>{validation.password}</Text> )}
              </Box>

              {validation.loginFailed && ( <Text fontSize='xs' color='red'>{validation.loginFailed}</Text> )}

              {loading ? (
                <Button onClick={handleSubmit(login)} w='100%' colorScheme='teal' variant='solid' isLoading>Login</Button>
              ): (
                <Button onClick={handleSubmit(login)} w='100%' colorScheme='teal' variant='solid'>Login</Button>
              )}
            </CardBody>
          </Card>
        </Flex>
      </main>
  )
}
