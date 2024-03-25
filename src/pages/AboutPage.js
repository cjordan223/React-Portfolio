//AboutPage.js
import React from 'react';
import { Box, Container, Typography, Grid, Avatar} from '@mui/material';
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";



function AboutPage() {
    const navigate = useNavigate();

    return (
        <Container
            maxWidth="md"
            style={{
                backgroundImage: 'url(https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // Adjusted minHeight and added paddingBottom for better control
                paddingBottom: '10px',
                paddingTop: '30px',
                marginBottom: '80px',
                borderRadius: '22px',
                color: 'black'
            }}
        >
            <Box
                mt={4}
                mb={6}
                p={4}
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '8px',
                }}
            >
                <Typography variant="h2" align="center" gutterBottom>
                    Conner Jordan
                </Typography>




                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box display="flex" justifyContent="center">
                            <Avatar
                                alt="Conner Jordan"
                                src="/Amanda_Conner_2024-104.jpg" // Assuming your image is located at public/img/portrait.jpg
                                sx={{ width: 200, height: 200 }}
                            />

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>

                        <Typography variant="h4" gutterBottom>
                            About Me
                        </Typography>


                        <Typography variant="body1" paragraph>
                            I am a web developer based in California with a passion for creating intuitive and engaging user experiences. With expertise in front-end technologies like React and Material-UI, I strive to build modern and responsive web applications.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Born and raised in the Golden State, I grew up surrounded by the vibrant tech industry. This exposure sparked my interest in programming from a young age. I pursued my passion by studying computer science and honing my skills through various projects and collaborations.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Throughout my career, I have worked with diverse clients and teams, delivering high-quality web solutions tailored to their specific needs. I am constantly exploring new technologies and staying up-to-date with the latest trends in web development to provide the best possible results.
                        </Typography>
                    </Grid>


                </Grid>

                <Button variant="outline-primary" onClick={() => navigate('/work-exp')}>Experiences</Button>{' '}

            </Box>

        </Container>


    );
}

export default AboutPage;