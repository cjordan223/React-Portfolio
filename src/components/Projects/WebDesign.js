import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const projects = [
    { name: "Sprague Pavers", description: "Description of Sprague Pavers", imageUrl: "/img/sprague.png", link: "" },
    { name: "Lane's LLC", description: "Description of Lane's LLC", imageUrl: "/img/Lanes.png", link: "https://example.com/2" },
    { name: "C-Plastic Design", description: "Description of C-Plastic Design", imageUrl: "/img/CPlastic.png", link: "https://example.com/3" },
    { name: "Amendola Storage", description: "Description of Amendola Storage", imageUrl: "/img/Storage.png", link: "https://example.com/4" },
    { name: "Lone Oak Baptist", description: "Description of Lone Oak Baptist", imageUrl: "/img/LO.png", link: "https://example.com/5" },
    { name: "Carpentry Solutions", description: "Description of Carpentry Solutions", imageUrl: "/img/carpentry.png", link: "https://example.com/6" },
    // Add more projects as needed
];

function WebDesign() {
    const navigate = useNavigate();

    return (
        <div>
            <Typography variant="h2" component="h2" gutterBottom>
                Web Design
            </Typography>
            <Typography variant="body1" paragraph>
                Most of this work was done in 2022-2023, when I was working as a freelancer for Simple.biz. Primary tools were Duda CMS, Adobe Photoshop, Cognito Forms, and Canva Pro for Logos.
            </Typography>
            <Grid container spacing={2}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                alt={project.name}
                                height="140"
                                image={project.imageUrl}
                                title={project.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {project.name}
                                </Typography>
                                <Typography color="textSecondary">
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardContent sx={{ flexGrow: 0 }}>
                                <Button variant="outline-primary" href={project.link} target="_blank">View Project</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <br/><br/>

            <Button variant="outline-primary" onClick={() => navigate('/projects')}>Main Projects Page</Button>
        </div>
    );
}

export default WebDesign;
