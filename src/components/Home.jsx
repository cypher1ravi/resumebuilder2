import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material/';
import Temp1Image from '../images/temp1.webp';
import Temp2Image from '../images/temp2.webp';
import Temp3Image from '../images/temp3.webp';
import Temp4Image from '../images/temp4.webp';
import { selectCard } from '../redux/actions/selectCardAction';

// Array of template images and their titles
const images = [
    {
        imageUrl: Temp1Image,
        title: 'Template 1',
    },
    {
        imageUrl: Temp2Image,
        title: 'Template 2',
    },
    {
        imageUrl: Temp3Image,
        title: 'Template 3',
    },
    {
        imageUrl: Temp4Image,
        title: 'Template 4',
    }
];

// Home component
const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // State to track the index of the hovered template
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Function to navigate to the details page with selected template index
    const routeChange = (index) => {
        dispatch(selectCard(index));
        navigate('/details');
    };

    // Function to handle mouse enter event for template
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    // Function to handle mouse leave event for template
    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div>
            {/* Heading */}
            <Typography variant="h4" sx={{ marginTop: '12px' }}>
                Templates
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: '12px' }}>Select a Template to Get Started</Typography>
            {/* Grid container for template images */}
            <Grid container spacing={2}>
                {images.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        {/* Paper component for each template */}
                        <Paper
                            elevation={6}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                backgroundColor: hoveredIndex === index ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
                            }}
                        >
                            {/* Template image */}
                            <img
                                src={image.imageUrl}
                                alt={image.title}
                                style={{
                                    width: '100%',
                                    height: '350px',
                                    transition: 'opacity 0.5s',
                                    opacity: hoveredIndex === index ? 0.7 : 1,
                                }}
                            />
                            {/* Use Template button */}
                            {hoveredIndex === index && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '48%',
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: 1,
                                    }}
                                >
                                    <Button variant="contained" color="primary" onClick={() => routeChange(index)}>
                                        Use Template
                                    </Button>
                                </div>
                            )}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Home;
