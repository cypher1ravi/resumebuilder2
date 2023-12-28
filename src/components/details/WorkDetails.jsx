import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addWorkExperience, deleteWorkExperience } from '../../redux/actions/workDetailsAction';

export default function WorkDetails() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const workList = useSelector((state) => state.workDetails.workList);
  const [workExperiences, setWorkExperiences] = useState([]);

  const onSubmit = (data) => {
    const newWorkExperience = {
      company: data.company,
      position: data.position,
      startDate: data.startDate,
      endDate: data.endDate,
      workDesc: data.workDesc
    };
    setWorkExperiences([...workExperiences, newWorkExperience]);
    dispatch(addWorkExperience(newWorkExperience));
    reset();
  };

  const onDelete = (index) => {
    dispatch(deleteWorkExperience(index));
  };

  const onNext = () => {
    navigate('/details/education');
  };

  const onBack = () => {
    navigate('/details/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            {...register("company", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Position"
            variant="outlined"
            fullWidth
            {...register("position", { required: true })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Start Date"
            type="month"
            variant="outlined"
            fullWidth
            {...register("startDate", { required: true })}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="End Date"
            type="month"
            variant="outlined"
            fullWidth
            {...register("endDate", { required: true })}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            variant="outlined"
            multiline
            rows={2}
            fullWidth
            {...register("workDesc", { required: true, maxLength: 60 })}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </Grid>
      </Grid>

      {workList.length > 0 && (
        <div>
          <h3>Added Work Experiences:</h3>
          <List>
            {workList.map((experience, index) => (
              <ListItem key={index}>
                <ListItemText>
                  {experience.company}, {experience.position}, Time: {experience.startDate} To {experience.endDate}
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
          <Button type="button" variant="contained" color="warning" onClick={onBack}>
            Back
          </Button>
        </Grid>
        <Grid item>
          <Button type="button" variant="contained" color="warning" onClick={onNext}>
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
