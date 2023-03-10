"use client";
import { ChakraProvider } from "@chakra-ui/react";

import theme from '../../theme/theme';

export default function ChakraWrapProvider({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}