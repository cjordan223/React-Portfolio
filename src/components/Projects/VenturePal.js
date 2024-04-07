import React from 'react';
import { Typography } from '@mui/material';
import ProjectTemplate from "./ProjectTemplate";


const VenturePalProject = {
    name: 'VenturePal',
    description: 'Web application for nature enthusiasts to discover and share beautiful nature spots. Users can add, edit, and delete spots, each with a name, description, and image.',
    image: '/path/to/venturepal/screenshot.jpg',
    githubUrl: 'https://github.com/cjordan223/VenturePal',
    liveUrl: '',
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
