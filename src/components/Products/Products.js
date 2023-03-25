import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import ProductTable from './ProductTable';

const Products = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 4,
        }}
      >
        <Typography variant="h3" sx={{ fontSize: '24px' }}>
          Products
        </Typography>
        <Link to="/addproduct">
          <Button variant="outlined">Add Product</Button>
        </Link>
      </Box>
      <ProductTable></ProductTable>
    </Box>
  );
};

export default Products;
