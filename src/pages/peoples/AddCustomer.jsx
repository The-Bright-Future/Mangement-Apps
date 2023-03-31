import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';
import { CloudUpload } from '@material-ui/icons';

const useStyles = makeStyles({
  dropzone: {
    minHeight: 100,
    border: '2px dashed #ccc',
    borderRadius: 5,
    padding: 20,
    textAlign: 'center',
  },
  icon: {
    fontSize: 50,
    marginBottom: 10,
  },
});

const AddCustomer = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  const handleDrop = (newFiles) => {
    setFiles([...files, ...newFiles]);
  };

  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
    setCountry(event.target.value);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5">Add Customer</Typography>
        <Typography variant="p">Create New Customer</Typography>
      </Box>

      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="Customer Name"
                placeholder="Enter Product Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField id="outlined-basic" label="Email" placeholder="Email" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField id="outlined-basic" label="Phone" placeholder="Phone" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Choose Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={country}
                  label="Country"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Bangladesh</MenuItem>
                  <MenuItem value={20}>India</MenuItem>
                  <MenuItem value={30}>Pakistan</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={4} lg={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={city}
                  label="City"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Dhaka</MenuItem>
                  <MenuItem value={20}>Barishal</MenuItem>
                  <MenuItem value={30}>Khulna</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={4} lg={8}>
              <TextField id="outlined-basic" label="Address" placeholder="Enter Address" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={6} sm={4} lg={12}>
              <TextField
                id="outlined-basic"
                label="Description"
                placeholder="Enter Description"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={12}>
              <DropzoneArea
                filesLimit={3}
                dropzoneClass={classes.dropzone}
                dropzoneText="Drag and drop an image here or click to select an image"
                Icon={() => <CloudUpload className={classes.icon} />}
                onChange={handleDrop}
                onDelete={() => setFiles([])}
              />
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" sx={{ mr: 2 }}>
                Submit
              </Button>
              <Button variant="contained" color="error">
                Cancel
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddCustomer;
