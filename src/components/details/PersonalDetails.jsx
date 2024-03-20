import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Grid, InputAdornment } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import TitleIcon from '@mui/icons-material/Title';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import { updatePersonalInformation } from '../../redux/actions/personalInfoActions';
import { GitHub, LinkedIn } from '@mui/icons-material';
import ProfileImg from './ProfileImg';

// Component for capturing personal details
export default function PersonalDetails() {
    // useForm hook for handling form state
    const { register, handleSubmit } = useForm();
    // useDispatch hook to dispatch actions to Redux store
    const dispatch = useDispatch();
    // useNavigate hook to navigate between routes
    const navigate = useNavigate();

    // Function to handle form submission
    const onSubmit = (data) => {
        // Dispatching action to update personal information in Redux store
        dispatch(updatePersonalInformation(data));
        // Navigating to the next step in the form
        navigate('/details/workExperience');
    };

    // JSX rendering
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={10}>
                    {/* Grid item for profile image */}
                    <Grid item sm={3}>
                        <Grid container spacing={2}>
                            <ProfileImg />
                        </Grid>
                    </Grid>
                    {/* Grid item for personal details form */}
                    <Grid item sx={12} sm={8}>
                        <Grid container spacing={2}>
                            {/* Text field for first name */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="First name"
                                    variant="outlined"
                                    fullWidth
                                    {...register("firstName", { required: true, maxLength: 80 })}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircleIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                           </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Last name"
                                    variant="outlined"
                                    fullWidth
                                    {...register("lastName", { required: true, maxLength: 100 })}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircleIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Title"
                                    variant="outlined"
                                    fullWidth
                                    {...register("title", { required: true, maxLength: 100 })}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <TitleIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Mobile number"
                                    variant="outlined"
                                    fullWidth
                                    {...register("phone", { required: true, minLength: 6, maxLength: 12 })}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PhoneIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Github"
                                    variant="outlined"
                                    type='url'
                                    fullWidth
                                    {...register("github", {})}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <GitHub />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Linkedin"
                                    type='url'
                                    variant="outlined"
                                    fullWidth
                                    {...register("linkedin", {})}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LinkedIn />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    label="Address"
                                    variant="outlined"
                                    fullWidth
                                    {...register("address", { required: true })}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <HomeIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Objective"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    {...register("objective", { maxLength: 500 })}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <TrackChangesIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid container justifyContent="end" marginTop={2}>
                                <Grid item>
                                    <Button type="submit" variant="contained" color="warning">
                                        Next
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid container justifyContent="end" marginTop={2}>
                    <Grid item>
                        <Button type="submit" variant="contained" color="warning">
                            Next
                        </Button>
                    </Grid>
                </Grid> */}
            </form>

        </Container>
    );
}
