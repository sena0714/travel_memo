'use client'
import { Text, Link } from '@chakra-ui/react';
import { useLayoutEffect } from 'react';
import { useAuth } from '@/components/hooks/useAuth';

export default function Users() {
    const { loginCheck, pageLoading } = useAuth();
    useLayoutEffect(() => {
        loginCheck();
    }, [loginCheck]);

    return (
        <main>
            {pageLoading ? (
                <Text>Loading...</Text>
            ) : (
                <>
                    <Text>ユーザー一覧</Text>
                    <Link href='http://192.168.20.153:3002'>HOME</Link>
                </>
            )}
        </main>
    );
}