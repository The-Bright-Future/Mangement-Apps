import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';

const columns: GridColDef[] = [
  {
    field: 'image',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => <Avatar src={`${params.row.image}`}></Avatar>,
    sortable: false,
    filterable: false,
  },
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'brand', headerName: 'Brand', width: 130 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 150,
  },
  { field: 'quantity', headerName: 'Quantity', width: 150 },

  {
    field: 'status',
    headerName: 'Status',
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    brand: 'Snow',
    name: 'Jon',
    price: 35,
    quantity: 2,
    status: 'Available',
  },
  { id: 2, brand: 'Lannister', name: 'Cersei', price: 42, quantity: 2, status: 'Available' },
  { id: 3, brand: 'Lannister', name: 'Jaime', price: 45, quantity: 2, status: 'Available' },
  { id: 4, brand: 'Stark', name: 'Arya', price: 16, quantity: 2, status: 'Available' },
  { id: 5, brand: 'Targaryen', name: 'Daenerys', price: null, quantity: 2, status: 'Available' },
  { id: 6, brand: 'Melisandre', name: null, price: 150, quantity: 2, status: 'Available' },
  { id: 7, brand: 'Clifford', name: 'Ferrara', price: 44, quantity: 2, status: 'Available' },
  { id: 8, brand: 'Frances', name: 'Rossini', price: 36, quantity: 2, status: 'Available' },
  { id: 9, brand: 'Roxie', name: 'Harvey', price: 65, quantity: 2, status: 'Available' },
];

const SubCategoryTable = () => {
  return (
    <Box style={{ height: '100vh', width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
    </Box>
  );
};

export default SubCategoryTable;
