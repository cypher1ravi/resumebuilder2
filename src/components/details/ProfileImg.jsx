import React from 'react';
import { Grid, Input, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setImage } from '../../redux/actions/profileImgAction';

// Component for selecting and displaying a profile image
const ProfileImg = () => {
    // useForm hook for handling form state
    const { register } = useForm();
    // useDispatch hook to dispatch actions to Redux store
    const dispatch = useDispatch();
    // useSelector hook to access the current profile image source from Redux store
    const imageSrc = useSelector((state) => state.profileImg.imageSrc);

    // Function to handle image change
    const handleImageChange = (e) => {
        // Get the selected file
        const file = e.target.files[0];

        // If a file is selected
        if (file) {
            // Create a FileReader object to read the selected file
            const reader = new FileReader();
            // Callback function to set the image source in Redux store when the file is loaded
            reader.onloadend = () => {
                // Convert the file content to a data URL
                const imageSrc = reader.result;
                // Dispatch action to set the image source in Redux store
                dispatch(setImage(imageSrc));
            };
            // Read the file as a data URL
            reader.readAsDataURL(file);
        }
    };

    // JSX rendering
    return (
        <form>
            {/* Grid item for displaying the selected image */}
            <Grid item>
                <Paper elevation={3} style={{ padding: '10px', borderRadius: '8px' }}>
                    {/* Display the selected image */}
                    <img
                        src={imageSrc}
                        alt="Selected"
                        style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Paper>
            </Grid>

            {/* Grid item for selecting a new image */}
            <Grid item>
                {/* Input field for selecting an image file */}
                <Input
                    label="Image"
                    type="file"
                    variant="outlined"
                    accept="image/*"
                    {...register('profileImg', {})}
                    onChange={handleImageChange}
                />
            </Grid>
        </form>
    );
};

export default ProfileImg;