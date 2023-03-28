import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';

const columns: GridColDef[] = [
  {
    field: 'image',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => <Avatar src={`${params.row.image}`} variant="rounded"></Avatar>,
    sortable: false,
    filterable: false,
  },
  { field: 'BrandName', headerName: 'Brand Name', width: 150 },
  { field: 'BrandDescription', headerName: 'Brand Description', width: 170 },
  { field: 'Action', headerName: 'Action', width: 130 },
];

const rows = [
  { id: 1, BrandName: 'not', BrandDescription: 'Snow', Action: 'Jon' },
  { id: 2, BrandName: 'not', BrandDescription: 'Snow', Action: 'Jon' },
  { id: 3, BrandName: 'not', BrandDescription: 'Snow', Action: 'Jon' },
  { id: 4, BrandName: 'not', BrandDescription: 'Snow', Action: 'Jon' },
];

const BrandTable = () => {
  return (
    <Box style={{ height: '50vh', width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
    </Box>
  );
};

export default BrandTable;
