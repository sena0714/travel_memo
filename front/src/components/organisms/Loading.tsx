import { FC, memo } from 'react';
import { Text, Spinner, Flex } from '@chakra-ui/react';

export const Loading: FC = memo(() => {
    return (
        <Flex height='100vh' justify='center' align='center'>
            <Spinner fontSize='3xl' mr='4' />
            <Text fontSize='3xl'>Loading...</Text>
        </Flex>
    );
});