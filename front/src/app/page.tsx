'use client'
import { useState, useEffect } from "react";
import { useAuth } from "@/components/hooks/useAuth";
import { Text } from "@chakra-ui/react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Loading } from '@/components/organisms/Loading';
import { useToastMessage } from '@/components/hooks/useToast';

export default function Home() {
    const router = useRouter();

    const { showToastMessage } = useToastMessage();

    const { isLoggedIn } = useAuth();

    const [pageLoading, setPageLoading] = useState<boolean>(true);

    useEffect(() => {
        const init = async () => {
            if (!(await isLoggedIn())) {
                showToastMessage({ message: 'ログイン認証を行ってください', status: 'error' });
                router.push('/login');
                return;
            }
            setPageLoading(false);
        }
        init();
    }, [isLoggedIn]);

    if (pageLoading) return <Loading />;

    return (
        <main>
            <Text>ホーム</Text>
            <Link href='/users'>USERS</Link>
        </main>
    );
}