'use client'
import { Box, Input, Button, Text, Flex } from '@/components/wrapper/ChakraComponents';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { axiosApi } from '@/lib/axios';
import { AxiosResponse } from 'axios';
import ValidationErrorMessage from '@/components/ValidationErrorMessage';
import useToastMessage from '@/components/hooks/useToast';
import AuthCard from '@/components/auth/AuthCard';

type AccountRegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

type ValidationMessages = {
    name?: string;
    email?: string;
    password?: string;
    loginFailed?: string;
};

export default function Register() {
    const router = useRouter();

    const { showToastMessage } = useToastMessage();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AccountRegisterForm>();

    const [loading, setLoading] = useState<boolean>(false);

    const [validationMessages, setValidationMessages] = useState<ValidationMessages>({});

    const registerAccount = async (accountRegisterForm: AccountRegisterForm): Promise<void> => {
        setLoading(true);

        try {
            await axiosApi.get('/sanctum/csrf-cookie');
            const response: AxiosResponse = await axiosApi.post('/api/register', accountRegisterForm);
            showToastMessage({ message: 'ユーザーの登録に成功しました。', status: 'success' });
            router.push('/');
        } catch (err) {
            /* @ts-ignore */
            const errors = err.response?.data.errors;
            const newValidationMessages: {[key: string]: string} = {};
            Object.keys(errors).map((key: string) => {
                newValidationMessages[key] = errors[key][0];
            });
            setValidationMessages(newValidationMessages);
            showToastMessage({ message: 'ユーザーの登録に失敗しました。', status: 'error' });
        }

        setLoading(false);
    }

    return (
        <main>
            <Flex h='calc(100vh)' justify='center' align='center' flexFlow='column'>
                <AuthCard title='アカウント登録'>
                    <Box mb='5'>
                        <Text>名前</Text>
                        <Input type="text" { ...register('name', { required: '必須入力です。' }) }  placeholder='username' />
                        <ValidationErrorMessage errors={errors} name='name' />
                        {validationMessages.name && ( <Text fontSize='xs' color='red'>{validationMessages.name}</Text> )}
                    </Box>

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
                        {validationMessages.email && ( <Text fontSize='xs' color='red'>{validationMessages.email}</Text> )}
                    </Box>

                    <Box mb='5'>
                        <Text>パスワード</Text>
                        <Input
                            type='password'
                            { ...register('password', {
                                required: '必須入力です。',
                                pattern: { value: /^(?=.*?[a-zA-Z])(?=.*?\d)[a-zA-Z\d]{8,}$/, message: '半角英数字含む8文字以上で入力してください。' }
                            }) }
                            placeholder='********'
                        />
                        <ValidationErrorMessage errors={errors} name='password' />
                        {validationMessages.password && ( <Text fontSize='xs' color='red'>{validationMessages.password}</Text> )}
                    </Box>

                    <Box mb='5'>
                        <Text>パスワード確認</Text>
                        <Input type='password' { ...register('password_confirmation', { required: '必須入力です。' }) }  placeholder='********' />
                        <ValidationErrorMessage errors={errors} name='password_confirmation' />
                    </Box>

                    {validationMessages.loginFailed && ( <Text fontSize='xs' color='red' mb='5'>{validationMessages.loginFailed}</Text> )}

                    {loading ? (
                        <Button onClick={handleSubmit(registerAccount)} w='100%' colorScheme='teal' variant='solid' isLoading>登録</Button>
                    ) : (
                        <Button onClick={handleSubmit(registerAccount)} w='100%' colorScheme='teal' variant='solid' _hover={{  bg: 'teal.400'  }}>登録</Button>
                    )}
                </AuthCard>
                <Flex w={300} justify='end'>
                    <Text as={Link} href='/auth/login' color='teal' _hover={{  color: 'teal.400'  }}>ログインへ</Text>
                </Flex>
            </Flex>
        </main>
    );
}