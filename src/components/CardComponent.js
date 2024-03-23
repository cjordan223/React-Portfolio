// CardComponent.js
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MediaCard({ sx, imageProps }) {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', ...sx }}>
            <CardMedia
                component="img"
                image="https://images.pexels.com/photos/9130779/pexels-photo-9130779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="green iguana"
                sx={{ flexGrow: 1, ...imageProps?.sx }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default MediaCard;