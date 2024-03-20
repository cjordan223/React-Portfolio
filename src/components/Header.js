import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


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
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    My Portfolio
                </Typography>
                {!isMobile && (
                    <div>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Projects</Button>
                        <Button color="inherit">Contact</Button>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
