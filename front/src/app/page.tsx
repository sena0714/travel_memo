'use client'
import { Text } from "@chakra-ui/react";
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <Text>ホーム</Text>
            <Link href='/users'>USERS</Link>
        </main>
    );
}