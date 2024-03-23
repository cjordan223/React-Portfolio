//Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom and rename it to RouterLink to avoid conflict with MUI Link

function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
                {isMobile && (
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                )}
                <Typography id="home-button" component={RouterLink} to="/" variant="h6" style={{ flexGrow: 1 }}>
                    My Portfolio
                </Typography>
                {!isMobile && (
                    <div>
                        {/* Use RouterLink in the component prop */}
                        <Button color="inherit" component={RouterLink} to="/projects">Projects</Button>
                        <Button color="inherit" component={RouterLink} to="/about">About</Button>
                     </div>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
