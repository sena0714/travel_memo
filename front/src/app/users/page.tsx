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
    const response: AxiosResponse = await axiosApiFromServerSide.get('/api/users');
    const users: User[] = response.data.data;
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