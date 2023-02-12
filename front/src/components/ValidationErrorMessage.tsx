import { ErrorMessage } from '@hookform/error-message';
import { Text } from '@/components/ChakraComponents';

type Props = {
    errors: any;
    name: string;
};

export default function ValidationErrorMessage(props: Props) {
    const {errors, name} = props;
    return (
        <ErrorMessage
            errors={errors}
            name={name}
            render={({message}) => (
                <Text fontSize='small' color='red'>{message}</Text>
            )}
        />
    );
}