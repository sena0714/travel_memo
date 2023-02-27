import React, { Suspense, use } from "react";
import { AxiosResponse } from 'axios';

import { axiosApiFromServerSide } from '@/lib/axios';
import { Text } from "@/components/wrapper/ChakraComponents";
import UserDetail from '@/components/UserDetail';
import ComponentLoading from "@/components/loading/ComponentLoading";

type User = {
    id: string;
    name: string;
    email: string;
};

async function fetchUsers(): Promise<User[]> {
    const request = new Request('http://web:80/api/users');
    const res = await fetch(request, {
        method: 'GET',
        cache: "no-store",
        credentials: "include",
    });
    const jsonRes = await res.json();
    const users: User[] = jsonRes.data;
    return users;
}

const UserList = () => {
    const users = use(fetchUsers());
    return (
        <>
            {users?.map((user: User) => (
                <UserDetail key={user.id} user={user} />
            ))}
        </>
    );
}

export default function Users() {
    return (
        <main>
            <Text fontSize='2xl' fontWeight='bold'>ユーザー一覧</Text>
            <Suspense fallback={<ComponentLoading />}>
                <UserList />
            </Suspense>
        </main>
    );
}