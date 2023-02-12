import Link from "next/link";
import React from "react";

/* @ts-ignore */
import { Box } from "@/components/wrapper/ChakraComponents";
import Header from "@/components/layout/Header";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Header />
            <main>
                <Box p='4'>
                    {children}
                </Box>
            </main>
        </>
    );
}