// src/components/NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

function NavBar() {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'lightgrey', position: 'relative' }}>
            <Toolbar sx={{ justifyContent: 'center', position: 'relative' }}>
                <Typography variant="h6" component="div" sx={{ textAlign: 'center', flexGrow: 1, color:'grey' }}>
                    Northwestern Railway Museum Library Catalog
                </Typography>
            </Toolbar>
            <Box sx={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}>
                <img src="/logo.png" alt="Northwestern Railway Museum" style={{ height: 40 }} />
            </Box>
        </AppBar>
    );
}

export default NavBar;