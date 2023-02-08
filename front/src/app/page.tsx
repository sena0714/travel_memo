import { HStack, Box, Button, Text } from "@/components/ChakraComponents";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <header>
                <Box bg='teal' p='4'>
                    <nav>
                        <HStack display='flex' justify='left' spacing='4'>
                            <Button as={Link} href='/' bg='teal.400' color='white' _hover={{ bg: 'teal.500' }}>Home</Button>
                            <Button as={Link} href='/users' bg='teal.400' color='white' _hover={{ bg: 'teal.500' }}>Users</Button>
                        </HStack>
                    </nav>
                </Box>
            </header>
            <main>
                <Box p='4'>
                <Text>ホーム</Text>
                </Box>
            </main>
        </>
    );
}