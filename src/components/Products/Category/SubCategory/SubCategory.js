import { Box, Grid, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';
import SubCategoryTable from './SubCategoryTable';
import SearchIcon from '@mui/icons-material/Search';
const SubCategory = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Box>
        <Typography variant="h5">Sub Category List</Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item>
            <IconButton>
              <SearchIcon sx={{ fontSize: '52px' }} color="secondary" />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <TextField label="Search " variant="outlined" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 4 }}>
        <SubCategoryTable></SubCategoryTable>
      </Box>
    </Box>
  );
};

export default SubCategory;
