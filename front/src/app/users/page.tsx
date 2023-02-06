'use client'
import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAuth } from '@/components/hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Loading } from '@/components/organisms/Loading';
import { useToastMessage } from '@/components/hooks/useToast';

export default function Users() {

    return (
        <main>
            <Text>ユーザー一覧</Text>
            <Link href='/'>HOME</Link>
        </main>
    );
}