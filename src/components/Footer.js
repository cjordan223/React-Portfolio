import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6">My Portfolio</Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            © {new Date().getFullYear()} My Name
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} container justifyContent="flex-end" spacing={2}>
                        <Grid item>
                            <Link href="#" color="inherit">
                                <FacebookIcon />
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" color="inherit">
                                <TwitterIcon />
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" color="inherit">
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
