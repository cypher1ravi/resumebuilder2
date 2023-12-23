import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

// Keep your existing imports for custom components
import { Name, Title, Summary } from './templeteComponents/Header';
import Contact from './templeteComponents/Contact';
import { Degree, Institution, Year, Subject } from './templeteComponents/Education';
import WorkExperience from './templeteComponents/WorkExperience';
import Skills from './templeteComponents/Skills';

const useStyles = {
    root: {
        margin: 'auto',
        padding: '20px',
        border: '2px double tomato',
    },

    title: {
        color: '#ed6c02c9',
    },
    sectionTitle: {
        color: '#ed6c02c9',
    },
    hr: {
        backgroundColor: '#ed6c02c9',
    },
    marginTitle: {
        marginLeft: '10px',
        marginTop: '0px',
    },
};

export default function Template3() {
    return (
        <Paper style={useStyles.root} elevation={3}>
            <Typography variant="h4" style={useStyles.title}>
                <Box fontWeight="bold">
                    <Name />
                </Box>
            </Typography>
            <Typography variant="h6" style={useStyles.marginTitle}>
                <Title />
            </Typography>
            <Contact />
            {/* <Typography variant="">
            </Typography> */}

            <Typography variant="h6" style={useStyles.sectionTitle}>
                Summary
                <Divider style={useStyles.hr} />
            </Typography>
            <p>
                <Summary />
            </p>

            <Typography variant="h6" style={useStyles.sectionTitle}>
                Work Experience
                <Divider style={useStyles.hr} />
            </Typography>
            <p>
                <WorkExperience />
            </p>

            <Typography variant="h6" style={useStyles.sectionTitle}>
                Education
                <Divider style={useStyles.hr} />
            </Typography>
            <Degree /> <Subject />
            <Institution />
            <Year />

            <Typography variant="h6" style={useStyles.sectionTitle}>
                Skills
                <Divider style={useStyles.hr} />
            </Typography>
            <p>
                <Skills />
            </p>
        </Paper>
    );
}
