//ProjectsPage.js
import React from "react";
import { Container, Typography } from '@mui/material';
import CarouselComponent from "../components/Projects/CarouselComponent";

function ProjectsPage() {
    return (
        <Container>
            <Typography variant="h1">Projects</Typography>
            <Typography variant="body1">Welcome to my projects page. Here you can explore the projects I've worked on.</Typography>
            <CarouselComponent />
        </Container>
    );
}

export default ProjectsPage;
