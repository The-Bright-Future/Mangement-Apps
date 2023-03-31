import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import React, { useState } from 'react';
import { Card, Table, Stack, Paper, Button, Checkbox, TableRow, TableBody, TableCell, Container, Typography, TableContainer, TablePagination, IconButton } from '@mui/material';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { UserListHead } from 'src/sections/@dashboard/user';
import USERLIST from '../../_mock/user';
import PurchaseToolbar from 'src/sections/@dashboard/user/PurchaseToolbar';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Box } from '@mui/system';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function Purchase() {

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;
  return (
    <>
      <Box sx={{ position: "fixed", top: 300, right: 10, zIndex: 'tooltip', bgcolor: "white"}}>
        <IconButton>
          <BrandingWatermarkIcon/>
        </IconButton>
        <br/>
        <IconButton>
          <AddShoppingCartIcon/>
        </IconButton>
        <br/>
        <IconButton>
          <AccountBalanceWalletIcon/>
        </IconButton>
      </Box>
      <Helmet>
        <title> Purchase List</title>
      </Helmet>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Stack>
            <Typography sx={{ mt: 2, mb: 0 }} variant="h4" gutterBottom>
            Purchase List
            </Typography>
            <Typography variant="body2" gutterBottom>
              Manage your Purchases
            </Typography>
          </Stack>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            Add New Purchases
          </Button>
        </Stack>
        <Card>
          <PurchaseToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800, position: "relative", zIndex: 'modal' }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, name, role, status, company, isVerified } = row;
                    const selectedUser = selected.indexOf(name) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>

                        <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, name)} />
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{company}</TableCell>

                        <TableCell align="left">{role}</TableCell>

                        <TableCell align="left">{isVerified ? <Typography color={"green"}>Receive</Typography> : <Typography color={"red"}>Pending</Typography>}</TableCell>

                        <TableCell align="left">
                          <IconButton>
                            <BorderColorIcon />
                          </IconButton>
                          <IconButton>
                            <Iconify icon="eva:trash-2-fill" />
                          </IconButton>

                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </>
  );
}