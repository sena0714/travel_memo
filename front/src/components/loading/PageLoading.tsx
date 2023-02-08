import { Text, Spinner, Flex } from '@/components/ChakraComponents';

export function PageLoading() {
    return (
        <Flex height='100vh' justify='center' align='center'>
            <Spinner fontSize='3xl' mr='4' />
            <Text fontSize='3xl'>Loading...</Text>
        </Flex>
    );
}