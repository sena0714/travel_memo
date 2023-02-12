import { useCallback } from 'react';
import { useToast } from '@/components/ChakraComponents';

import { ToastSettings } from '@/types/toastSettings';

export default function useToastMessage() {
    const toast = useToast();
    
    const showToastMessage = useCallback(
        (toastSettings: ToastSettings) => {
            const { message, status } = toastSettings;
            toast({
                title: message,
                status,
                position: "top",
                duration: 2000,
                isClosable: true
            });
        },
        [toast]
    );

    return { showToastMessage };
}