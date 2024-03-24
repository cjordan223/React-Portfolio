import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function CarouselComponent() {
    return (
        <Grid container spacing={4} justifyContent="center">
            {/* Web Applications Card */}
            <Grid item>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea component={Link} to="/webapps">
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                            image="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Programming Projects"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Programming Projects
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A collection of basic programming projects highlighting various algorithm and security principles.
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
                            image="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Web Design"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Web Design
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Websites I created during my time as a freelance designer.
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
