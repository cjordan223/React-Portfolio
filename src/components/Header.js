//Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = useState(null);

    const handleProjectsClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProjectsClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
                {isMobile && (
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                )}
                <Typography
                    component={RouterLink}
                    to="/"
                    variant="h6"
                    style={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}
                >
                    Home
                </Typography>

                {!isMobile && (
                    <div>
                        {/* Use RouterLink in the component prop */}
                        <Button color="inherit" onClick={handleProjectsClick}>
                            About
                        </Button>
                        <Button color="inherit" component={RouterLink} to="/projects">Projects </Button>

                        <Menu
                            id="projects-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleProjectsClose}
                        >
                            <MenuItem onClick={handleProjectsClose} component={RouterLink} to="/about"> Bio </MenuItem>
                            <MenuItem onClick={handleProjectsClose} component={RouterLink} to="/work-exp"> Experience</MenuItem>
                            <MenuItem onClick={handleProjectsClose}> <a
                                href="https://drive.google.com/file/d/1jSbYgRFbPWGRJcpq3LXYVq1LFS7OoBOA/view?usp=drive_link" target="_blank"
                                style={{textDecoration: 'none', color: 'inherit'}} rel="noreferrer">
                                Resume
                            </a> </MenuItem>
                        </Menu> <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
