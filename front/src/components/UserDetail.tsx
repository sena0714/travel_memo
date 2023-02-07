'use client'

import { Box, Text } from "@chakra-ui/react"

type User = {
    id: string;
    name: string;
    email: string;
};
type Props = {
    user: User;
};

export default function UserDetail({ user } : Props) {
    return (
        <Box key={user.id} mb='4'>
            <Text>id: {user.id}</Text>
            <Text>name: {user.name}</Text>
            <Text>email: {user.email}</Text>
        </Box>
    );
}