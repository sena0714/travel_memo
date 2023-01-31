'use client'
import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAuth } from '@/components/hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useToastMessage } from '@/components/hooks/useToast';

export default function Users() {
    const router = useRouter();

    const { showToastMessage } = useToastMessage();

    const { isLoggedIn } = useAuth();

    const [pageLoading, setPageLoading] = useState<boolean>(true);

    useEffect(() => {
        const init = async () => {
            if (!(await isLoggedIn())) {
                showToastMessage({message: 'ログイン認証を行ってください', status: 'error'});
                router.push('/login');
                return;
            }
            setPageLoading(false);
        }
        init();
    }, [isLoggedIn]);

    if (pageLoading) return <Text>Loading...</Text>;

    return (
        <main>
            <Text>ユーザー一覧</Text>
            <Link href='/'>HOME</Link>
        </main>
    );
}