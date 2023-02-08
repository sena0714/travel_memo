import React, { use } from "react";
import { Text } from "@/components/ChakraComponents";

import UserDetail from '@/components/UserDetail';

type User = {
    id: string;
    name: string;
    email: string;
};

async function fetchUsers(): Promise<User[]> {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL_FROM_SERVER_SIDE+'/api/users');
    
    if (!res.ok) {
            throw new Error("Failed to fetch users");
    }

    const data = await res.json();
    return data.data as User[];
}

export default async function Users() {
    const users = await fetchUsers();

    return (
        <main>
            <Text fontSize='2xl' fontWeight='bold'>ユーザー一覧</Text>
            {users && users.map((user: User) => (
                <UserDetail key={user.id} user={user} />
            ))}
        </main>
    );
}