import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addEducation, deleteEducation } from '../../redux/actions/educationAction'
import { useNavigate } from 'react-router-dom';
export default function Education() {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const educationList = useSelector((state) => state.education.educationList)
    const [education, SetEducation] = useState([])
    const onSubmit = (data) => {
        const newEducation = {
            institution: data.institution,
            degree: data.degree,
            subject: data.subject,
            year: data.year
        }
        SetEducation([...education, newEducation])
        dispatch(addEducation(newEducation))
        reset();
    }
    const onDelete = (index) => {
        dispatch(deleteEducation(index));
    }
    const onBack = () => {
        navigate('/details/workExperience')
    }
    const onNext = () => {
        navigate('/details/keySkills')

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Degree"
                        variant="outlined"
                        fullWidth
                        {...register("degree", { required: true })}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Subject"
                        variant="outlined"
                        fullWidth
                        {...register("subject", { required: true })}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="University"
                        variant="outlined"
                        fullWidth
                        {...register("institution", { required: true })}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label=" Passing Year"
                        variant="outlined"
                        fullWidth
                        {...register("year", { required: true })}
                    />
                </Grid>
                <Grid item>
                    <Button type="submit" variant="contained" color="primary">
                        Add
                    </Button>
                </Grid>
            </Grid>
            {educationList.length > 0 && (
                <div>
                    <h3>Added Education:</h3>
                    <List>
                        {educationList.map((edu, index) => (
                            <ListItem key={index}>
                                <ListItemText>
                                    {edu.degree} In {edu.subject} From {edu.institution}, In {edu.year}
                                </ListItemText>
                                <IconButton onClick={() => onDelete(index)}>
                                    <DeleteIcon color='error' />
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                </div>
            )}

            <Grid container justifyContent="space-between" marginTop={2}>
                <Grid item>
                    <Button variant="contained" color="warning" onClick={onBack}>
                        Back
                    </Button>
                </Grid>
                <Grid item>
                    <Button type="button" onClick={onNext} variant="contained" color="warning">
                        Next
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}