import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Stack, Container, Typography, IconButton, Autocomplete, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddIcon from '@mui/icons-material/Add';

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
]

export default function ImportPurchases() {
    
    return (
        <>
            <Box sx={{ position: "fixed", top: 300, right: 10, zIndex: 'tooltip', bgcolor: "white" }}>
                <IconButton>
                    <BrandingWatermarkIcon />
                </IconButton>
                <br />
                <IconButton>
                    <AddShoppingCartIcon />
                </IconButton>
                <br />
                <IconButton>
                    <AccountBalanceWalletIcon />
                </IconButton>
            </Box>
            <Helmet>
                <title> Import Purchase </title>
            </Helmet>
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
                    <Stack>
                        <Typography sx={{ mt: 2, mb: 0 }} variant="h4" gutterBottom>
                            Import Purchase
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Add/Update Purchase
                        </Typography>
                    </Stack>
                </Stack>
                <Box sx={{display : "flex", gap: 3}}>
                    <Box>
                    <Typography sx={{pb: 1}}>Supplier Name</Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Select" />}
                    />
                    </Box>
                    <Box sx={{display : "flex", justifyItems : "center", alignItems : "center"}}>
                        <IconButton sx={{bgcolor : "green", mt: "3"}}>
                        <AddIcon sx={{color : "black"}}/>
                        </IconButton>
                    </Box>
                    <Box>
                    <Typography sx={{pb: 1}}>Purchase Status</Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Select" />}
                    />
                    </Box>
                </Box>
                <Button sx={{p: 1, mt:2}} variant="contained">Download Simple File</Button>    
            </Container>
        </>
    );
}