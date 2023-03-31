import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
  Button,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import PrintIcon from '@mui/icons-material/Print';
import EditIcon from '@mui/icons-material/Edit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Box, TablePagination } from '@mui/material';
import SearchBar from 'material-ui-search-bar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  {
    id: '101',
    name: 'John',
    email: 'john@example.com',
    phone: '0183344554',
    address: 'Dhaka',
    citycountry: 'Bangladesh',
    customercode: '1',
    imglink: 'https://rb.gy/4l9e',
  },
  {
    id: '102',
    name: 'Mary',
    email: 'mary@example.com',
    phone: '0183344554',
    address: 'Dhaka',
    citycountry: 'Bangladesh',
    customercode: '2',
    imglink: 'https://rb.gy/4l9e',
  },
  {
    id: '103',
    name: 'Bob',
    email: 'bob@example.com',
    phone: '0183344554',
    address: 'Dhaka',
    citycountry: 'Bangladesh',
    customercode: '3',
    imglink: 'https://rb.gy/4l9e',
  },
];

const Users = () => {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selected, setSelected] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <div>
          <h2 style={{margin: "0"}}>Users List</h2>
          <p>Manage your Users</p>
        </div>
        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gridGap: '10px' }}>
          <Link to="adduser" variant="contained" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gridGap: '5px' }}>
            <AddIcon />
            <span> Add User</span>
          </Link>
        </Box>
      </Box>
      <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <SearchBar></SearchBar>
        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gridGap: '10px' }}>
          <button>
            <PictureAsPdfIcon />
          </button>
          <button>
            <ListAltIcon />
          </button>
          <button>
            <PrintIcon />
          </button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="dynamic table">
          <TableHead style={{ background: '#5395ff' }}>
            <TableRow>
              <TableCell component="th" scope="row">
                <Checkbox
                  style={{ color: 'white' }}
                  checked={selected.length === rows.length}
                  onChange={(event) => {
                    const checked = event.target.checked;
                    setSelected(checked ? rows.map((row) => rows.id) : []);
                  }}
                />
              </TableCell>

              <TableCell style={{ textAlign: 'center', color: 'white', fontSize: '16px', fontWeight: '500' }}>
                Name
              </TableCell>
              <TableCell style={{ textAlign: 'center', color: 'white', fontSize: '16px', fontWeight: '500' }}>
                Email
              </TableCell>
              <TableCell style={{ textAlign: 'center', color: 'white', fontSize: '16px', fontWeight: '500' }}>
                Phone
              </TableCell>
              <TableCell style={{ textAlign: 'center', color: 'white', fontSize: '16px', fontWeight: '500' }}>
                Address
              </TableCell>
              <TableCell style={{ textAlign: 'center', color: 'white', fontSize: '16px', fontWeight: '500' }}>
                City
              </TableCell>
              <TableCell style={{ textAlign: 'center', color: 'white', fontSize: '16px', fontWeight: '500' }}>
                Customer Code
              </TableCell>
              <TableCell style={{ textAlign: 'center', color: 'white', fontSize: '16px', fontWeight: '500' }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={rows.name}>
                <TableCell component="th" scope="row">
                  <Checkbox
                    checked={selected.indexOf(row.id) !== -1}
                    onChange={(event) => {
                      const checked = event.target.checked;
                      setSelected((prevSelected) => {
                        if (checked) {
                          return [...prevSelected, row.id];
                        } else {
                          return prevSelected.filter((id) => id !== row.id);
                        }
                      });
                    }}
                  />
                </TableCell>
                <TableCell style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                  <img style={{ borderRadius: '9999px' }} src={row.imglink} alt="avatar" width="50" height="50" />
                  {rows.name}
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>{row.email}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{row.phone}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{row.address}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{row.citycountry}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{row.customercode}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  <IconButton aria-label="editIcon">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          style={{ background: '#5395ff', color: 'white', fontSize: '16px', fontWeight: '500' }}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

export default Users;