import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, List, ListItem, ListItemText, Grid, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, removeSkill } from '../../redux/actions/keySkillsAction';
import { useNavigate } from 'react-router-dom';
import { Delete as DeleteIcon } from '@mui/icons-material';

const SkillsDetails = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const skillList = useSelector((state) => state.keySkills.skillList);

    const onSubmit = (data) => {
        const newSkill = {
            skill: data.skill,
            level: data.level
        };
        dispatch(addSkill(newSkill));
        reset();
    };

    const onBack = () => {
        navigate('/details/education');
    };

    const onNext = () => {
        navigate('/Preview');
    };

    const handleRemoveSkill = (index) => {
        dispatch(removeSkill(index));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="Skill"
                variant="outlined"
                {...register("skill", { required: true })}
            />
            <TextField
                label="Level"
                variant="outlined"
                {...register("level", { required: true })}
            />

            <Button type="submit" variant="contained" color="primary">
                Add
            </Button>

            <List>
                {skillList.map((skill, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={`${skill.skill} - Level: ${skill.level}`} />
                        <IconButton onClick={() => handleRemoveSkill(index)} variant="outlined" color="secondary">
                            <DeleteIcon color='error' />
                        </IconButton>
                    </ListItem>
                ))}
            </List>

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
