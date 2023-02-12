/* @ts-ignore */
import { HStack, Box, Flex, Button, Menu, MenuButton, MenuList, MenuItem, IconButton, HamburgerIcon, Icon } from "@/components/wrapper/ChakraComponents";
/* @ts-ignore */
import { MdLogout } from '@/components/wrapper/ReactIcons';
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <Box bg='teal' p='4'>
                <Flex justify='space-between'>
                    <nav>
                        <HStack display='flex' justify='left' spacing='4'>
                            <Link href='/'>
                                <Button bg='teal' color='white' _hover={{ bg: 'teal.400' }}>Home</Button>
                            </Link>
                            <Link href='/users'>
                                <Button bg='teal' color='white' _hover={{ bg: 'teal.400' }}>Users</Button>
                            </Link>
                        </HStack>
                    </nav>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon color='white' />}
                            bg='teal'
                            _hover={{ bg: 'teal.400' }}
                            _active={{ bg: 'teal.400' }}
                        />
                        <MenuList>
                            <MenuItem icon={<Icon as={MdLogout} fontSize='16px' verticalAlign='middle' />}>
                                ログアウト
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Box>
        </header>
    );
}