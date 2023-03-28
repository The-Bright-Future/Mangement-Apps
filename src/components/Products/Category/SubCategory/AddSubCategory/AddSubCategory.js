import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Grid, MenuItem, TextField, Typography } from '@mui/material';
const AddSubCategory = () => {
  const [parentCategory, setParentCategory] = useState();

  const handleChangeCategory = (event) => {
    console.log(event);
    setParentCategory(event.target.value);
  };
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5">Product Add Category</Typography>
        <Typography variant="p">Create New Product Category</Typography>
      </Box>

      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} lg={4}>
              <TextField
                id="outlined-basic"
                label="Parent Category"
                placeholder="Enter Parent Category"
                select
                value={parentCategory}
                onChange={handleChangeCategory}
                fullWidth
              >
                <MenuItem value="">Shoe</MenuItem>
                <MenuItem value="">Shirt</MenuItem>
                <MenuItem value="">T-Shirt</MenuItem>
                <MenuItem value="">panjabi</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={3} lg={4}>
              <TextField
                id="outlined-basic"
                label="Category Name"
                placeholder="Enter Category Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3} lg={4}>
              <TextField
                id="outlined-basic"
                label="Category Code"
                placeholder="Enter Category Code"
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

export default AddSubCategory;
