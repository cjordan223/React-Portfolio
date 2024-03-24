import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

const ProjectTemplate = ({ project }) => {
    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={project.name}
                            height="140"
                            image={project.image}
                            title={project.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {project.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {project.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardContent>
                        <Button size="small" color="primary" href={project.githubUrl}>
                            GitHub Repository
                        </Button>
                        {project.liveUrl && (
                            <Button size="small" color="primary" href={project.liveUrl}>
                                Live Demo
                            </Button>
                        )}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ProjectTemplate;