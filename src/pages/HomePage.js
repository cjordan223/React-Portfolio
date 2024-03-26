// HomePage.js
import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';
const buttonStyle = { width: '200px' }; // Adjust the width as needed

function HomePage() {
    return (
        <Container maxWidth="lg" style={{ textAlign: 'center', padding: '100px 0' }}>
            <Paper elevation={3} style={{
                padding: '40px',
                maxWidth: '600px',
                margin: '0 auto',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderRadius: 16
            }}>
                <Typography variant="h2" gutterBottom>
                    Conner Jordan
                </Typography>
                <Typography variant="h5" paragraph>
                    Web Develepment + Security
                </Typography>

                <Grid container spacing={3} justifyContent="center" style={{marginTop: '40px'}}>
                    <Grid item>
                        <Button variant="outlined" color="primary" component={Link} to="/projects" style={buttonStyle}>
                            View Projects
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="primary" component={Link} to="/contact" style={buttonStyle}>
                            Contact
                        </Button>
                    </Grid>
                </Grid>
                <div style={{marginTop: '60px'}}>



                </div>

                <Button variant="outlined" color="secondary" style={{ ...buttonStyle, marginTop: '20px' }} component={Link} to="/about">
                    About
                </Button>

            </Paper>
            <div id='spacer'></div>
        </Container>
    );
}

export default HomePage;