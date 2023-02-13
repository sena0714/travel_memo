'use client'
import { Box, Input, Button, Text, Flex } from '@/components/wrapper/ChakraComponents';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

import useAuth from '@/components/hooks/useAuth';
import AuthCard from '@/components/AuthCard';
import ValidationErrorMessage from '@/components/ValidationErrorMessage';

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
            <Flex h='calc(100vh)' justify='center' align='center' flexFlow='column'>
                <AuthCard title='旅メモ'>
                    <Box mb='5'>
                        <Text>メールアドレス</Text>
                        <Input
                            type="email" 
                            { ...register('email', { 
                                required: '必須入力です。', 
                                pattern: {
                                    value: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
                                    message: "入力形式がメールアドレスではありません。"
                                }
                            }) }  
                            placeholder='xxxxxxxx@example.com' 
                        />
                        <ValidationErrorMessage errors={errors} name='email' />
                        {validation.email && ( <Text fontSize='xs' color='red'>{validation.email}</Text> )}
                    </Box>

                    <Box mb='5'>
                        <Text>パスワード</Text>
                        <Input type='password' {...register('password', { required: '必須入力です。', pattern: { value: /^(?=.*?[a-zA-Z])(?=.*?\d)[a-zA-Z\d]{8,}$/, message: '半角英数字含む8文字以上で入力してください。' } })} placeholder='********' />
                        <ValidationErrorMessage errors={errors} name='password' />
                        {validation.password && ( <Text fontSize='xs' color='red'>{validation.password}</Text> )}
                    </Box>

                    {validation.loginFailed && ( <Text fontSize='xs' color='red' mb='5'>{validation.loginFailed}</Text> )}

                    {loading ? (
                        <Button onClick={handleSubmit(login)} w='100%' colorScheme='teal' variant='solid' isLoading>Login</Button>
                    ): (
                        <Button onClick={handleSubmit(login)} w='100%' colorScheme='teal' variant='solid' _hover={{  bg: 'teal.400'  }}>ログイン</Button>
                    )}
                </AuthCard>
                <Flex w={300} justify='end' pr='4'>
                    <Text as={Link} href='/auth/register' color='teal' _hover={{  color: 'teal.400'  }}>アカウント登録へ</Text>
                </Flex>
            </Flex>
        </main>
    );
}
