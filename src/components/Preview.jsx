import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import Template4 from './Template4';
import { useSelector } from 'react-redux';

export default function Preview() {
    const card = useSelector((state) => state.selectedCard);
    const previewRef = useRef(null);

    const generatePDF = () => {
        const doc = new jsPDF({
            orientation: 'portrait', // or 'landscape'
            unit: 'mm',
            format: 'a4',
        });

        // Get the selected component based on card.cardIndex
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
                selectedComponent = <div>No template selected</div>; // Wrap it in a div
        }

        // Use html2canvas to capture the selected component as an image
        html2canvas(previewRef.current).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            // Add the image to the PDF
            doc.addImage(imgData, 'PNG', 0, 0, 210, 297); // A4 size is approximately 210mm x 297mm

            // Save the PDF
            doc.save('preview.pdf');
        });
    };

    return (
        <div>
            <h1>Preview page</h1>
            <button onClick={generatePDF}>Generate PDF</button>
            <div ref={previewRef} >
                {
                    (() => {
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
                    })()
                }
            </div>

        </div>
    );
}
