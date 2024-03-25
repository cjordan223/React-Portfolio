import React from 'react';
import { Typography } from '@mui/material';
import ProjectTemplate from "./ProjectTemplate";


const WeatherAPIProject = {
    name: 'Basic Weather API',
    description: 'Weather Wise is a dynamic web application designed to provide users with real-time weather information for any specified city around the globe. Leveraging a sleek, user-friendly interface, Weather Wise offers insights into current weather conditions, including temperature, wind speed, and direction, enhancing user experiences with accurate and relevant data visualization.',
    image: '/path/to/venturepal/screenshot.jpg', // Replace with the path to your screenshot
    githubUrl: 'https://github.com/cjordan223/weather-wise',
    liveUrl: '', // Replace with the live URL if applicable
};

function WeatherAPIComponent() {
    return (
        <div style={{ padding: 20 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                Project Details
            </Typography>
            <ProjectTemplate project={WeatherAPIProject} />
        </div>
    );
}

export default WeatherAPIComponent;