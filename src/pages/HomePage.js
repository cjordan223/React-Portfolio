// HomePage.js
import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';


function HomePage() {
    return (
        <Container maxWidth="lg" style={{ textAlign: 'center', padding: '100px 0' }}>
<Typography variant="h2" gutterBottom>
                Conner Jordan
            </Typography>
            <Typography variant="h5" paragraph>
                Web Development & Security
            </Typography>
            <Grid container spacing={3} justifyContent="center" style={{ marginTop: '40px' }}>
                <Grid item>
                    <Button variant="contained" color="primary" component={Link} to="/projects">
                        View Projects
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" component={Link} to="/about">
                        Learn About Me
                    </Button>
                </Grid>
            </Grid>
            <div style={{ marginTop: '100px' }}>
                <Typography variant="body1">
                    Ready to bring your ideas to life? Let's create something amazing together.
                </Typography>
                <Button variant="contained" color="secondary" style={{ marginTop: '20px' }} component={Link} to="/about#contact">
                    Get In Touch
                </Button>
            </div>
            <div id='spacer'></div>

        </Container>
    );
}

export default HomePage;
