// ReloadAlert.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function ReloadAlert() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            const message = 'Are you sure you want to leave? Unsaved changes will be lost.';
            event.returnValue = message;
        };

        const handleReload = () => {
            navigate('/');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('load', handleReload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('load', handleReload);
        };
    }, [navigate]);

    return null;
}
