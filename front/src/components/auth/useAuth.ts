'use client'
import { AxiosResponse, AxiosError } from 'axios';
import { axiosApi } from '@/lib/axios';
import { useState, useCallback } from "react";
import { useRouter } from 'next/navigation';

import useToastMessage from '@/components/hooks/useToast';
import { LoginForm } from '@/types/loginForm';

type Validation = {
    email?: string;
    password?: string;
    loginFailed?: string 
};

export default function useAuth() {
    const router = useRouter();

    const { showToastMessage } = useToastMessage();

    const [validation, setValidation] = useState<Validation>({
        email: '',
        password: '',
        loginFailed: '',
    });
    
    const [loading, setLoading] = useState<boolean>(false);
    const login =  useCallback((data: LoginForm) => {
        setLoading(true);
        setValidation({});
    
        axiosApi
        .get('/sanctum/csrf-cookie')
        .then((res) => {
            axiosApi
            .post('/api/login', { email: data.email, password: data.password })
            .then((response: AxiosResponse) => {
                showToastMessage({ message: 'ログインしました', status: 'success' });
                router.push('/');
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
    }, []);

    const isLoggedIn =  useCallback(async (): Promise<boolean> => {
        let isLoggedIn: boolean = true;
        await axiosApi
            .get('/api/logged_in')
            .then((response: AxiosResponse) => {
                if (!response.data) {
                    isLoggedIn = false;
                }
            })
            .catch((err: AxiosError) => {
                alert('システムエラーです。')
            });
        
        return isLoggedIn;
    }, []);

    const logout = useCallback(async (): Promise<void> => {
        try {
            const res = await axiosApi.post('/api/logout');
            router.push('/auth/login');
        } catch (err) {
            /* @ts-ignore */
            console.log(err.response?.data.errors);
        }
    }, []);

    return { validation, loading, login, isLoggedIn, logout };
}