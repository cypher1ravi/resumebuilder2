import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useSelector } from 'react-redux';
import {
    Button,
    TextField,
    Typography,
    Card,
    Grid,
    Paper,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,

} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Template1 from './template1/Template1';
import Template2 from './template2/Template2';
import Template3 from './template3/Template3';
import Template4 from './template4/Template4';

// Styles for components
const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const paperStyle = {
    width: '100%',
};

export default function Preview() {
    // Redux state for selected card
    const card = useSelector((state) => state.selectedCard);
    const previewRef = useRef(null); // Reference to the preview paper
    const [fileName, setFileName] = useState('preview'); // State for file name input
    const [showSuccessDialog, setShowSuccessDialog] = useState(false); // State for showing success dialog

    // Function to generate PDF from preview
    const generatePDF = () => {
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        });

        let selectedComponent;
        switch (card.cardIndex) {
            case 0:
                selectedComponent = <Template1 />;
                break;
            case 1:
                selectedComponent = <Template2 />;
                break;
            case 2:
                selectedComponent = <Template3 />;
                break;
            case 3:
                selectedComponent = <Template4 />;
                break;
            default:
                selectedComponent = <div>No template selected</div>;
        }

        // Convert the preview to canvas and then to PDF
        html2canvas(previewRef.current).then((canvas) => {
            const imgData = canvas.toDataURL('image/png/jpg');
            doc.addImage(imgData, 'PNG', 0, 0, 210, 297); // Add image to PDF
            doc.save(`${fileName}.pdf`); // Save PDF with provided file name
            setShowSuccessDialog(true); // Show success dialog
        });
    };

    // Function to close the success dialog
    const handleCloseSuccessDialog = () => {
        setShowSuccessDialog(false);
    };

    // Render the preview component
    return (
        <>
            <Typography variant="h5" style={{ margin: '10px' }}>
                Preview page
            </Typography>

            <div style={containerStyle}>
                <Grid container spacing={3}>
                    {/* Preview area */}
                    <Grid item xs={12} md={8}>
                        <Paper style={paperStyle} ref={previewRef}>
                            {(() => {
                                switch (card.cardIndex) {
                                    case 0:
                                        return <Template1 />;
                                    case 1:
                                        return <Template2 />;
                                    case 2:
                                        return <Template3 />;
                                    case 3:
                                        return <Template4 />;
                                    default:
                                        return <div>No template selected</div>;
                                }
                            })()}
                        </Paper>
                    </Grid>

                    {/* File creation area */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" style={{ marginBottom: '10px' }}>
                            Create File
                        </Typography>
                        <Card variant='outlined' style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            {/* Input field for file name */}
                            <TextField
                                label="File Name"
                                value={fileName}
                                onChange={(e) => setFileName(e.target.value)}
                                variant="outlined"
                                style={{ marginBottom: '10px', width: '100%' }}
                            />
                            {/* Button to generate PDF */}
                            <Button variant="contained" color="primary" onClick={generatePDF} style={{ marginBottom: '10px' }}>
                                Save
                            </Button>
                        </Card>
                    </Grid>
                </Grid>
            </div>

            {/* Success dialog */}
            <Dialog open={showSuccessDialog} onClose={handleCloseSuccessDialog}>
                <DialogTitle style={{ textAlign: 'center' }}>
                    <CheckCircleIcon color="primary" fontSize="large" />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Your resume has been successfully saved.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseSuccessDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
