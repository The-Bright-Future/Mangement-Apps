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

const AddStore = () => {
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
        <Typography variant="h5">Store Management</Typography>
        <Typography variant="p">Add/Update Store</Typography>
      </Box>

      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="Store Name"
                placeholder="Enter Store Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField id="outlined-basic" label="User Name" placeholder="User Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField id="outlined-basic" label="Password" placeholder="Password" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField id="outlined-basic" label="Phone" placeholder="Phone" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6} sm={4} lg={12}>
              <TextField id="outlined-basic" label="Email" placeholder="Enter Email" variant="outlined" fullWidth />
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

export default AddStore;
