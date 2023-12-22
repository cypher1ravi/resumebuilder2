
import React from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
    Divider,

} from '@mui/material/';

const useStyles = {
    container: {
        padding: '3px',
        marginTop: '2px',
    },
    paper: {
        padding: '3px',
    },
};

export default function Template4() {



    return (
        <Container className={useStyles.container}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center">
                        Your Name
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper className={useStyles.paper}>
                        <Typography variant="h6">Summary</Typography>
                        <Typography>
                            Write a brief summary of your skills, experiences, and career
                            goals here.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={useStyles.paper}>
                        <Typography variant="h6">Contact</Typography>
                        <Typography>
                            Address: Your Address
                            <br />
                            Email: your@email.com
                            <br />
                            Phone: (123) 456-7890
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper className={useStyles.paper}>
                        <Typography variant="h6">Experience</Typography>
                        <Typography>
                            <strong>Job Title</strong> | Company Name
                            <br />
                            Dates: Month Year - Month Year
                            <br />
                            Description of your responsibilities and achievements in this role.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={useStyles.paper}>
                        <Typography variant="h6">Education</Typography>
                        <Typography>
                            <strong>Degree</strong> | University Name
                            <br />
                            Graduation Year
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};




