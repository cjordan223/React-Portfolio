import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../ComponentStyles/CarouselComponent.css';
function CarouselComponent() {
    return (
        <Grid container spacing={4} justifyContent="center">
            {/* Web Applications Card */}
            <Grid item>
                <Card sx={{ maxWidth: { xs: 345, sm: 345, md: 345, lg: 345, xl: 345 }, minHeight: '100%' }}>
                    <CardActionArea component={Link} to="/webapps">
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Web Applications"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Web Applications
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A collection of apps I've made as I've continued along my program at CSUMB.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" component={Link} to="/webapps">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            {/* Programming Projects Card */}
            <Grid item>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea component={Link} to="/programming">
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.pexels.com/photos/17485657/pexels-photo-17485657/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-adapt-to-an-infinite-amount-of-uses-it-was-created-by-nidia-dias-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Programming Projects"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Programming Projects
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A collection of basic programming projects from my DSA class. Not very juicy but it get's it's own section because it doesn't fit anywhere else.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" component={Link} to="/programming">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            {/* Web Design Card */}
            <Grid item>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea component={Link} to="/webdesign">
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Web Design"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Archives
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Shared space older projects and CSUMB Program recap.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" component={Link} to="/webdesign">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}

export default CarouselComponent;
