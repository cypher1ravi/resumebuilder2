import React from 'react';
import { Grid, Input, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setImage } from '../../redux/actions/profileImgAction';

const ProfileImg = () => {
    const { register } = useForm();
    const dispatch = useDispatch();
    const imageSrc = useSelector((state) => state.profileImg.imageSrc);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageSrc = reader.result;
                dispatch(setImage(imageSrc));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form>
            <Grid item>
                <Paper elevation={3} style={{ padding: '10px', borderRadius: '8px' }}>
                    <img
                        src={imageSrc}
                        alt="Selected"
                        style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Paper>
            </Grid>

            <Grid item>
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
