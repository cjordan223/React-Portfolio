//ProjectsPage.js
import React from "react";
import '../css/ProjectsPage.css';
import {Box, Button, Container, Grid, Paper, Typography} from '@mui/material';
import CarouselComponent from "../components/Projects/CarouselComponent";
import {Link} from "react-router-dom";

function ProjectsPage() {
    return (
        <Container>
            <Paper>
            <Box sx={{ textAlign: 'center', padding: '2rem 0' }}>
                <Typography variant="h1" sx={{ color: 'black',fontWeight: 'bold', marginBottom: '1rem', fontSize: '2.5rem' }}>
                    Projects
                </Typography>
                <Typography variant="body1" sx={{ color: 'black',fontSize: '1.2rem', maxWidth: '600px', margin: 'auto' }}>
Web Applications, Programming Applications, and a sample of websites I made from my time as a freelancer.                </Typography>
            </Box>
            </Paper>
            <br/>
            <CarouselComponent/>

            <Grid container spacing={3} justifyContent="center" style={{marginTop: '40px'}}>
                <Grid item>
                    <Button variant="contained" color="primary" component={Link} to="/about">
                        About
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" component={Link} to="/contact">
                        Contact
                    </Button>
                </Grid>
            </Grid>
         </Container>
    );
}

export default ProjectsPage;
