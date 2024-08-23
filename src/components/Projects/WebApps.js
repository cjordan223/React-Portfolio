import React from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';

const projects = [
  {
    name: "Weather Wise",
    description: "This is an application I built for a web programming class. It uses a free API to gather weather data and display it in a user-friendly interface. " +
      "It can take Zip Code, City, County, Coordinates, and other data types as input. Enter 'Admin' and '1234' for username and password if visiting the live site",
    image: "https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg",
    path: "https://github.com/cjordan223/WeatherWise-Code",
    site: "https://cjordan223.github.io/WeatherWise/"
  },
  {
    name: "Guessing Game",
    description: "Simple puzzle game with JS. It's Wordle, basically. UPDATE: Improved with React for better performance and responsiveness.",
    image: "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg",
    path: "https://github.com/cjordan223/guessr-2",
    site: "https://cjordan223.github.io/guessr-2/"
  },
  {
    name: "System Monitoring App",
    description: "The program runs on a Postgres server, and collects system information from an agent installed on your device. Some of the data was manipulated with NumPy and Pandas and you can see it in my programming section.",
    image: "/img/postgres.png",
    path: "https://github.com/cjordan223/FanClub"
  },
  {
    name: "Markov Text Generator",
    description: "Mainly just an exercise to train a simple program to emulate speech.",
    image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg",
    path: "https://github.com/cjordan223/Markov.git"
  },
  {
    name: "User Vault",
    description: "Simple user database web app I built very early on with Python.",
    image: "/img/vault.png",
    path: "https://github.com/cjordan223/UserVault.git"
  },
  {
    name: "Currents API",
    description: "Web interface for Currents API, offers the latest news headlines from a multitude of sources.",
    image: "/img/news.png",
    path: "https://github.com/cjordan223/gray",
    site: "https://cjordan223.github.io/gray/"
  },
];

const ProjectTemplate = () => {
  return (
    <div style={{ flexGrow: 1, padding: '24px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Web Applications
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={project.image}
                  title={project.name}
                  sx={{
                    height: 180,
                    objectFit: 'cover',
                    backgroundPosition: 'center',
                  }}
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
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 1 }}>
                {project.path && (
                  <Button size="small" color="primary" href={project.path} target="_blank">
                    GitHub Repo
                  </Button>
                )}
                {project.site && (
                  <Button size="small" color="primary" href={project.site} target="_blank">
                    Live Demo
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button variant="outlined" color="primary" onClick={() => window.location.href = '/projects'}>
          Main Projects Page
        </Button>
      </div>
    </div>
  );
};

export default ProjectTemplate;
