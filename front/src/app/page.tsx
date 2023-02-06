'use client'
import { useState, useEffect } from "react";
import { useAuth } from "@/components/hooks/useAuth";
import { Text } from "@chakra-ui/react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Loading } from '@/components/organisms/Loading';
import { useToastMessage } from '@/components/hooks/useToast';

export default function Home() {

    return (
        <main>
            <Text>ホーム</Text>
            <Link href='/users'>USERS</Link>
        </main>
    );
}