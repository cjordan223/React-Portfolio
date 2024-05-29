//Footer.js
import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <Box component="footer" className="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={4}>
                         <Typography variant="subtitle1" color="textSecondary">
                            © {new Date().getFullYear()} Conner Jordan. All Rights Reserved.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} container justifyContent="flex-end" spacing={2}>
                        <Grid item>
                            <Link href="#" color="inherit">
                             </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" color="inherit">
                             </Link>
                        </Grid>
                        <Grid item>
                            <Link href="https://www.linkedin.com/in/conner-jordan-4b268514a/" color="inherit">
                                <LinkedInIcon />
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;
