import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import BrandTable from './BrandTable';
import { Link } from 'react-router-dom';
const Brand = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 4,
          }}
        >
          <Box>
            <Typography variant="h3" sx={{ fontSize: '24px' }}>
              Brand
            </Typography>
            <Typography>Mange Your Brand</Typography>
          </Box>
          <Link to="/addproduct">
            <Button variant="outlined">Add Brand</Button>
          </Link>
        </Box>
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
        <BrandTable></BrandTable>
      </Box>
    </Box>
  );
};

export default Brand;
