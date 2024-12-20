//ProjectsPage.js
import React from "react";
import '../css/ProjectsPage.css';
import {Box, Container, Grid, Paper, Typography} from '@mui/material';
import CarouselComponent from "../components/Projects/CarouselComponent";

function ProjectsPage() {
    return (
        <Container>
            <Paper>
            <Box sx={{ textAlign: 'center', padding: '2rem 0' }}>
                <Typography variant="h1" sx={{ color: 'black',fontWeight: 'bold', marginBottom: '1rem', fontSize: '2.5rem' }}>
                    Projects
                </Typography>
                <Typography variant="body1" sx={{ color: 'black',fontSize: '1.2rem', maxWidth: '600px', margin: 'auto' }}>
Web Applications, Programming Applications, and an archive of my coursework at CSUMB.              </Typography>
            </Box>
            </Paper>
            <br/>
            <CarouselComponent/>

            <Grid container spacing={3} justifyContent="center" style={{marginTop: '40px'}}>
                <Grid item>

                </Grid>
                <Grid item>

                </Grid>
            </Grid>
         </Container>
    );
}

export default ProjectsPage;
