import React, { use } from "react";
import { AxiosResponse } from 'axios';

import { axiosApiFromServerSide } from '@/lib/axios';
import { Text } from "@/components/wrapper/ChakraComponents";
import UserDetail from '@/components/UserDetail';

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

export default function Users() {
    const users = use(fetchUsers());

    return (
        <main>
            <Text fontSize='2xl' fontWeight='bold'>ユーザー一覧</Text>
            {users && users.map((user: User) => (
                <UserDetail key={user.id} user={user} />
            ))}
        </main>
    );
}