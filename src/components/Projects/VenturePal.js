import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import ProjectTemplate from "./ProjectTemplate";


const VenturePalProject = {
    name: 'VenturePal',
    description: 'Web application for nature enthusiasts to discover and share beautiful nature spots. Users can add, edit, and delete spots, each with a name, description, and image.',
    image: '/path/to/venturepal/screenshot.jpg', // Replace with the path to your screenshot
    githubUrl: 'https://github.com/cjordan223/VenturePal',
    liveUrl: '', // Replace with the live URL if applicable
};

function VenturePalComponent() {
    return (
        <div style={{ padding: 20 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                Project Details
            </Typography>
            <ProjectTemplate project={VenturePalProject} />
        </div>
    );
}

export default VenturePalComponent;