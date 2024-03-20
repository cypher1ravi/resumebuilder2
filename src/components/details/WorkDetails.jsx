import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addWorkExperience, deleteWorkExperience } from '../../redux/actions/workDetailsAction';

// Component for managing work details
export default function WorkDetails() {
  // useForm hook for handling form state
  const { register, handleSubmit, reset } = useForm();
  // useDispatch hook to dispatch actions to Redux store
  const dispatch = useDispatch();
  // useNavigate hook for navigation
  const navigate = useNavigate();
  // useSelector hook to access the current work list from Redux store
  const workList = useSelector((state) => state.workDetails.workList);
  // useState hook to manage local state for temporary work experiences
  const [workExperiences, setWorkExperiences] = useState([]);

  // Function to handle form submission
  const onSubmit = (data) => {
    // Create a new work experience object
    const newWorkExperience = {
      company: data.company,
      position: data.position,
      startDate: data.startDate,
      endDate: data.endDate,
      workDesc: data.workDesc
    };
    // Update local state with the new work experience
    setWorkExperiences([...workExperiences, newWorkExperience]);
    // Dispatch action to add the new work experience to Redux store
    dispatch(addWorkExperience(newWorkExperience));
    // Reset form fields after submission
    reset();
  };

  // Function to handle deletion of a work experience
  const onDelete = (index) => {
    // Dispatch action to delete the work experience from Redux store
    dispatch(deleteWorkExperience(index));
  };

  // Function to navigate to the next page
  const onNext = () => {
    navigate('/details/education');
  };

  // Function to navigate back to the previous page
  const onBack = () => {
    navigate('/details/');
  };

  // JSX rendering
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        {/* Input fields for work details */}
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
        {/* Button to add a new work experience */}
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </Grid>
      </Grid>

      {/* Display added work experiences */}
      {workList.length > 0 && (
        <div>
          <h3>Added Work Experiences:</h3>
          <List>
            {workList.map((experience, index) => (
              <ListItem key={index}>
                <ListItemText>
                  {experience.company}, {experience.position}, Time: {experience.startDate} To {experience.endDate}
                </ListItemText>
                {/* Button to delete a work experience */}
                <IconButton onClick={() => onDelete(index)}>
                  <DeleteIcon color='error' />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </div>
      )}
      
      {/* Navigation buttons */}
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
