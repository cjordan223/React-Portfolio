import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

function Header() {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleProjectsClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProjectsClose = () => {
        setAnchorEl(null);
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
                        {/* Use RouterLink in the component prop */}
                        <Button color="inherit" component={RouterLink} to="/projects">Projects </Button>

                        <Button color="inherit" component={RouterLink} to="/about"> About </Button>

                        <Button color="inherit" component={RouterLink} to="/work-exp"> Experience </Button>

                        <Button color="inherit" component={RouterLink} to="/contact"> Contact </Button>
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
