// ReloadAlert.js
import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export default function ReloadAlert() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            const message = 'Are you sure you want to leave? Unsaved changes will be lost.';
            event.returnValue = message;
            setOpen(true);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);
}    