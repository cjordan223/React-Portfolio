import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../ComponentStyles/CarouselComponent.css';

function CarouselComponent() {
    const projects = [
        {
            title: 'Web Applications',
            description: 'A collection of apps I\'ve made as I continued along my program at CSUMB.',
            img: 'https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            link: '/webapps'
        },
        {
            title: 'Programming Projects',
            description: 'A collection of basic programming projects from my DSA class. Not very juicy, but it gets its own section because it doesn\'t fit anywhere else.',
            img: 'https://images.pexels.com/photos/17485657/pexels-photo-17485657/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-adapt-to-an-infinite-amount-of-uses-it-was-created-by-nidia-dias-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            link: '/programming'
        },
        {
            title: 'Archives',
            description: 'Shared space for older projects and CSUMB Program recap.',
            img: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            link: '/webdesign'
        }
    ];

    return (
        <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                        sx={{
                            maxWidth: 345,
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': { transform: 'scale(1.05)' },
                            height: '100%',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',  // Enhanced shadow effect for visibility
                            borderRadius: '12px',  // Slightly larger rounding for a paper-like effect
                            backgroundColor: '#ffffff',  // Ensure card background is white
                            margin: '0 auto',  // Center the card within its grid container
                        }}
                    >
                        <CardActionArea component={Link} to={project.link}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={project.img}
                                alt={project.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" component={Link} to={project.link}>
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default CarouselComponent;
