import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: '1', label: 'S.No' },
  { id: '2', label: 'Product Code', minWidth: 170 },
  { id: '3', label: 'Product Name', minWidth: 100 },
  { id: '4', label: 'Brand Name', minWidth: 100 },
  { id: '5', label: 'Category Name', minWidth: 100 },
  { id: '6', label: 'Expiry Date', minWidth: 100 },
];

const expiredProductData = [
  {
    id: 1,
    product_code: '1234567890',
    img: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    product_name: 'Product 1',
    brand_name: 'Brand 1',
    category_name: 'Category 1',
    expire_date: '12/03/2023',
  },
  {
    id: 2,
    product_code: '1234567891',
    img: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    product_name: 'Product 2',
    brand_name: 'Brand 2',
    category_name: 'Category 2',
    expire_date: '12/03/2023',
  },
  {
    id: 3,
    product_code: '1234567892',
    product_name: 'Product 3',
    img: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    brand_name: 'Brand 3',
    category_name: 'Category 3',
    expire_date: '12/03/2023',
  },
  {
    id: 4,
    product_code: '1234567893',
    img: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    product_name: 'Product 4',
    brand_name: 'Brand 4',
    category_name: 'Category 4',
    expire_date: '12/03/2023',
  },
  {
    id: 5,
    product_code: '1234567894',
    img: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    product_name: 'Product 5',
    brand_name: 'Brand 5',
    category_name: 'Category 5',
    expire_date: '12/03/2023',
  },
  {
    id: 6,
    product_code: '1234567895',
    img: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    product_name: 'Product 6',
    brand_name: 'Brand 6',
    category_name: 'Category 6',
    expire_date: '12/03/2023',
  },

  {
    id: 7,
    product_code: '1234567896',
    img: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    product_name: 'Product 7',
    brand_name: 'Brand 7',
    category_name: 'Category 7',
    expire_date: '12/03/2023',
  },
  {
    id: 8,
    product_code: '1234567897',
    img: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    product_name: 'Product 8',
    brand_name: 'Brand 8',
    category_name: 'Category 8',
    expire_date: '12/03/2023',
  },
  {
    id: 9,
    product_code: '1234567898',
    img: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    product_name: 'Product 9',
    brand_name: 'Brand 9',
    category_name: 'Category 9',
    expire_date: '12/03/2023',
  },
  {
    id: 10,
    product_code: '1234567899',
    img: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    product_name: 'Product 10',
    brand_name: 'Brand 10',
    category_name: 'Category 10',
    expire_date: '12/03/2023',
  },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {expiredProductData.map((items, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{items?.product_code}</TableCell>
                  <TableCell>{items?.product_name}</TableCell>
                  <TableCell>{items?.brand_name}</TableCell>
                  <TableCell>{items?.brand_name}</TableCell>
                  <TableCell>{items?.expire_date}</TableCell>
                </TableRow>
              );
            })}

            {/* {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })} */}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={expiredProductData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
