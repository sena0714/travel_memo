import { HStack, Box, Button, Text } from "@/components/ChakraComponents";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <header>
                <Box bg='teal' p='4'>
                    <nav>
                        <HStack display='flex' justify='left' spacing='4'>
                            <Link href='/'>
                                <Button bg='teal.400' color='white' _hover={{ bg: 'teal.500' }}>Home</Button>
                            </Link>
                            <Link href='/users'>
                                <Button bg='teal.400' color='white' _hover={{ bg: 'teal.500' }}>Users</Button>
                            </Link>
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