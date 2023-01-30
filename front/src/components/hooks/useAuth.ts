import { useState } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { axiosApi } from '@/lib/axios';
import { useToast } from '@chakra-ui/react';
import { useCallback } from "react";
import { useRouter } from 'next/navigation';

import { ToastSettings } from '@/types/toastSettings';

type Validation = {
    email?: string;
    password?: string;
    loginFailed?: string 
};

export const useAuth = () => {
    const router = useRouter();

    const toast = useToast();
    
    const showToastMessage = useCallback(
        (toastSettings: ToastSettings) => {
            const { message, status } = toastSettings;
            toast({
                title: message,
                status,
                position: "top",
                duration: 2000,
                isClosable: true
            });
        },
        [toast]
    );

    const [validation, setValidation] = useState<Validation>({
        email: '',
        password: '',
        loginFailed: '',
    });
    
    const [loading, setLoading] = useState<boolean>(false);
    const login = (email: string, password: string) => {
        setLoading(true);
        setValidation({});
    
        axiosApi
        .get('/sanctum/csrf-cookie')
        .then((res) => {
            axiosApi
            .post('/api/login', {email, password})
            .then((response: AxiosResponse) => {
                showToastMessage({ message: 'ログインしました', status: 'success' });
                router.push('/users');
            })
            .catch((err: AxiosError) => {
                if (err.response?.status === 422) {
                    // @ts-ignore
                    const errors = err.response?.data.errors;
                    const validationMessages: { [index: string]: string } = {};
                    Object.keys(errors).map((key: string) => {
                        validationMessages[key] = errors[key][0];
                    });
    
                    setValidation(validationMessages);
                    showToastMessage({ message: 'ログインに失敗しました', status: 'error' });
                }
                
                // @ts-ignore
                if (err.response?.status === 500) {
                    alert('システムエラーです！！');
                }
            
                setLoading(false);
            });
        });
    };

    return { validation, loading, login }
}