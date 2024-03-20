// ReloadAlert.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function ReloadAlert() {
    const navigate = useNavigate();

    useEffect(() => {
        // Function to handle the beforeunload event, triggered when the user tries to leave the page
        const handleBeforeUnload = (event) => {
            // Prompt the user with a confirmation message before leaving the page
            const message = 'Are you sure you want to leave? Unsaved changes will be lost.';
            event.returnValue = message; // Set a custom message for the confirmation dialog
        };

        // Function to handle the reload event, triggered when the page is reloaded
        const handleReload = () => {
            // Redirect the user to the home page when the page is reloaded
            navigate('/');
        };

        // Add event listeners for the beforeunload and load events when the component mounts
        window.addEventListener('beforeunload', handleBeforeUnload); // Prompt user before leaving
        window.addEventListener('load', handleReload); // Redirect user to home page on reload

        // Clean up by removing event listeners when the component unmounts
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload); // Remove beforeunload listener
            window.removeEventListener('load', handleReload); // Remove load listener
        };
    }, [navigate]); // Re-run effect when the navigate function changes

    // This component does not render anything, it just adds event listeners and performs cleanup
    return null;
}

