import { use } from 'react';
import { AxiosResponse } from 'axios';
import { axiosApiFromServerSide } from '@/lib/axios';

import UserDetail from '@/components/UserDetail';
import PageTitle from '@/components/PageTitle';

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
            <PageTitle>ユーザー一覧</PageTitle>
            {users && users.map((user: User) => {
                return (
                    <UserDetail key={user.id} user={user} />
                );
            })}
        </main>
    );
}