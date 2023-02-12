import { Box, Text } from "@/components/wrapper/ChakraComponents";

import Header from "@/components/layout/Header";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Box p='4'>
                <Text>ホーム</Text>
                </Box>
            </main>
        </>
    );
}