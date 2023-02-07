'use client'
import { Text } from "@chakra-ui/react";
import React from "react";

type Props = {
    children: string;
}

export default function PageTitle({ children }: Props) {
    return (
        <Text fontSize='2xl' fontWeight='bold'>{children}</Text>
    )
}