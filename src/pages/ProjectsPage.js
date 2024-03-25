//ProjectsPage.js
import React from "react";
import {Box, Container, Paper, Typography} from '@mui/material';
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
                    Welcome to my projects page. Here you can explore the projects I've worked on.
                </Typography>
            </Box>
            </Paper>
            <br/>
            <CarouselComponent/>
         </Container>
    );
}

export default ProjectsPage;
