import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [infoAnchorEl, setInfoAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);


    const handleProjectsClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProjectsClose = () => {
        setAnchorEl(null);
    };

    const handleInfoMouseEnter = (event) => {
        setInfoAnchorEl(event.currentTarget);
        setMenuOpen(true); // Open the menu
    };

    const handleMenuMouseLeave = () => {
        setMenuOpen(false); // Delay closing the menu to improve UX
        setTimeout(() => {
            if (!menuOpen) setInfoAnchorEl(null);
        }, 500);
    };


    return (
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none', color: '#0d101f' }}>
            <Toolbar>
                <Hidden mdUp>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleProjectsClick}>
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
                    <div>
                        <Button color="inherit" component={RouterLink} to="/projects">Projects</Button>

                        <Button color="inherit" onMouseEnter={handleInfoMouseEnter}>
                            Info
                        </Button>
                        <Menu
                            anchorEl={infoAnchorEl}
                            keepMounted
                            open={Boolean(infoAnchorEl)}
                            onClose={handleMenuMouseLeave}
                            MenuListProps={{ onMouseLeave: handleMenuMouseLeave }}
                        >
                            <MenuItem component={RouterLink} to="/about">About</MenuItem>
                            <MenuItem component={RouterLink} to="/work-exp">Experience</MenuItem>
                        </Menu>

                        <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
                    </div>
                </Hidden>

                <Menu
                    id="projects-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleProjectsClose}
                >
                    <MenuItem onClick={handleProjectsClose} component={RouterLink} to="/projects"> Projects </MenuItem>
                    <MenuItem onClick={handleProjectsClose} component={RouterLink} to="/about"> About </MenuItem>
                    <MenuItem onClick={handleProjectsClose} component={RouterLink} to="/work-exp"> Experience </MenuItem>
                    <MenuItem onClick={handleProjectsClose} component={RouterLink} to="/contact"> Contact </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
