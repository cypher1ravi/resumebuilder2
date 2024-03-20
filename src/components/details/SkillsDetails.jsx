import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, List, ListItem, ListItemText, Grid, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, removeSkill } from '../../redux/actions/keySkillsAction';
import { useNavigate } from 'react-router-dom';
import { Delete as DeleteIcon } from '@mui/icons-material';

// Component for managing skills details
const SkillsDetails = () => {
    // useForm hook for handling form state
    const { register, handleSubmit, reset } = useForm();
    // useDispatch hook to dispatch actions to Redux store
    const dispatch = useDispatch();
    // useNavigate hook for navigation
    const navigate = useNavigate();
    // useSelector hook to access the current skills list from Redux store
    const skillList = useSelector((state) => state.keySkills.skillList);

    // Function to handle form submission
    const onSubmit = (data) => {
        // Create a new skill object
        const newSkill = {
            skill: data.skill,
            level: data.level
        };
        // Dispatch action to add the new skill to Redux store
        dispatch(addSkill(newSkill));
        // Reset form fields after submission
        reset();
    };

    // Function to navigate back to the previous page
    const onBack = () => {
        navigate('/details/education');
    };

    // Function to navigate to the next page
    const onNext = () => {
        navigate('/Preview');
    };

    // Function to handle removing a skill
    const handleRemoveSkill = (index) => {
        // Dispatch action to remove the skill from Redux store
        dispatch(removeSkill(index));
    };

    // JSX rendering
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Skill"
                        variant="outlined"
                        fullWidth
                        {...register("skill", { required: true })}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Proficiency Level"
                        type='number'
                        variant="outlined"
                        {...register("level", { required: true })}
                    />
                    <Button type="submit" variant="contained" color="primary" style={{ margin: '8px' }}>
                        Add
                    </Button>
                </Grid>
            </Grid>

            {/* Display the list of skills */}
            <List>
                {skillList.map((skill, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={`${skill.skill} - Level: ${skill.level}`} />
                        {/* Button to remove a skill */}
                        <IconButton onClick={() => handleRemoveSkill(index)} variant="outlined" color="secondary">
                            <DeleteIcon color='error' />
                        </IconButton>
                    </ListItem>
                ))}
            </List>

            {/* Buttons for navigation */}
            <Grid container justifyContent="space-between" marginTop={2}>
                <Grid item>
                    <Button variant="contained" color="warning" onClick={onBack}>
                        Back
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={onNext} variant="contained" color="warning">
                        Next
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default SkillsDetails;
