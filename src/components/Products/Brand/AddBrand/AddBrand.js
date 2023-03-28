import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const AddBrand = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5">Add Brand</Typography>
        <Typography variant="p">Create New Brand</Typography>
      </Box>

      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} lg={4}>
              <TextField
                id="outlined-basic"
                label="Brand Name"
                placeholder="Enter Brand Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={12}>
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
              <TextField
                id="outlined-basic"
                label="Product Image"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                type={'file'}
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

export default AddBrand;
