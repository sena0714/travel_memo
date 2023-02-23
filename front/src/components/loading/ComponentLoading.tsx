import { Spinner, Flex } from '@/components/wrapper/ChakraComponents';

export default function ComponentLoading() {
    return (
        <Flex justify='center'>
            <Spinner fontSize='2xl' />
        </Flex>
    );
}