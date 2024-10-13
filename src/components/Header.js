import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none', color: '#0d101f' }}>
            <Toolbar>
                <Hidden mdUp>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <Typography
                    component={RouterLink}
                    to="/"
                    variant="h6"
                    style={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}
                >
                    Home
                </Typography>

                <Hidden smDown>
                    <Button color="inherit" component={RouterLink} to="/projects">Projects</Button>
                    <Button color="inherit" component={RouterLink} to="/about">About</Button>
                    <Button color="inherit" component={RouterLink} to="/work-exp">Experience</Button>
                    <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
                    {/* Add Cloud Login button */}
                    {/* <Button color="inherit" component={RouterLink} to="/cloud-login">Cloud Login</Button> */}
                </Hidden>

                <Menu
                    id="mobile-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose} component={RouterLink} to="/projects">Projects</MenuItem>
                    <MenuItem onClick={handleMenuClose} component={RouterLink} to="/about">About</MenuItem>
                    <MenuItem onClick={handleMenuClose} component={RouterLink} to="/work-exp">Experience</MenuItem>
                    <MenuItem onClick={handleMenuClose} component={RouterLink} to="/contact">Contact</MenuItem>
                    <MenuItem onClick={handleMenuClose} component={RouterLink} to="/cloud-login">Cloud Login</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
