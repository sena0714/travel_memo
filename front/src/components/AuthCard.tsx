import { Flex, Card, CardHeader, CardBody, Text } from '@/components/wrapper/ChakraComponents';

type Props = {
    title: string;
    children: React.ReactNode;
}

export default function AuthCard(props: Props): JSX.Element {
    const {title, children} = props;

    return (
        <Card w={300} overflow='hidden' variant='outline'>
            <CardHeader>
                <Flex justify='center'>
                    <Text as='label' fontSize='2xl' fontWeight='bold'>{title}</Text>
                </Flex>
            </CardHeader>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    );
}