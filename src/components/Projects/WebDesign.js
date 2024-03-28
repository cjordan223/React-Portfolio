import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const projects = [
    { name: "Sprague Pavers", description: "Paving Contractor", imageUrl: "/img/sprague.png", link: "https://www.espraguepavingandsons.net/" },
    { name: "Lane's LLC", description: "General Contractor", imageUrl: "/img/Lanes.png", link: "https://www.lanesconstructionky.com/" },
    { name: "Amendola Storage", description: "Storage Service", imageUrl: "/img/Storage.png", link: "https://www.amendolastorage.com/" },
    { name: "Lone Oak Baptist", description: "Baptist Church", imageUrl: "/img/LO.png", link: "https://www.loneoakbaptistsnook.org/" },
    { name: "Carpentry Solutions", description: "Framing Service", imageUrl: "/img/carpentry.png", link: "https://www.carpentrysolutionsinfo.com/" },
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
