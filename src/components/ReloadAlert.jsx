// ReloadAlert.js
import { useEffect } from 'react';

export default function ReloadAlert() {

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            const message = 'Are you sure you want to leave? Unsaved changes will be lost.';
            event.returnValue = message;
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);
}    