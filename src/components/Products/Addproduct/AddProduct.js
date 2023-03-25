import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const AddProduct = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5">Add Product</Typography>
        <Typography variant="p">Create New Product</Typography>
      </Box>

      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField id="outlined-basic" label="Product Name" placeholder="Enter Product Name" variant="outlined" />
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField id="outlined-basic" label="Category" placeholder="Enter Category Name" variant="outlined" />
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="Sub Category"
                placeholder="Enter Sub Category Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField id="outlined-basic" label="Brand" placeholder="Enter Brand Name" variant="outlined" />
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField id="outlined-basic" label="Unit" placeholder="Choose Unit" variant="outlined" />
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField id="outlined-basic" label="SKU" placeholder="Enter SKU" variant="outlined" />
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField id="outlined-basic" label="Minimum Qty" placeholder="Enter Minimum Qty" variant="outlined" />
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField id="outlined-basic" label="Quantity" placeholder="Enter Quantity" variant="outlined" />
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
            <Grid item xs={6} sm={4} lg={3}>
              <TextField id="outlined-basic" label="Tax Type" placeholder="Choose Tax Type" variant="outlined" />
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="Discount Type"
                placeholder="Choose Discount Type"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="Price"
                placeholder="Enter Product Price"
                variant="outlined"
                type={'number'}
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <TextField id="outlined-basic" label="Status" placeholder="Enter Status" variant="outlined" />
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
              <Button
                variant="contained"
                sx={{
                  variant: 'text',
                  color: 'warning',
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddProduct;
