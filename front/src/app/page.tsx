'use client'
import { useLayoutEffect } from "react";
import { useAuth } from "@/components/hooks/useAuth";
import { Text, Link } from "@chakra-ui/react";

export default function Home() {
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
                    <Text>HOME</Text>
                    <Link href='http://192.168.20.153:3002/users'>USERS</Link>
                </>
            )}
        </main>
    );
}