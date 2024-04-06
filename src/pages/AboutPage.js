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
                backgroundColor: 'darkgray' ,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
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





                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box paddingTop="170px">
                            <Avatar
                                alt="Conner Jordan"
                                src="/img/Amanda_Conner_2024-104.jpg"
                                sx={{

                                    width: 'auto',
                                    height: 320,
                                    borderRadius: '50px',
                                }}
                            />

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h2">
                            Conner Jordan
                        </Typography>
                        <br/>
                        <Typography variant="h4" gutterBottom>
                            Thanks for stopping by!
                        </Typography>


                        <Typography variant="body1" paragraph>
                            I built this website to host some of my web apps and projects. It was made entirely with React, which I'm hoping will become more evident as I update the site with new components.  You can find the code for this entire site <a href="https://github.com/cjordan223/React-Portfolio">here</a>, if you're interested.
                        </Typography>


                        <Typography variant="body1" paragraph>
                            I currently work on the cybersecurity team for Great Wolf Lodge, remotely for their Chicago office. I'm based in San Luis Obispo, CA, where I'm also part of the class of 2024 at Cal State Monterey, completing my B.S. in Software Engineering this winter.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            When I'm not working or studying, I like to go camping every few weeks to decompress. I'm lucky to live in a place where I can do that almost year-round.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            If you have any questions or want to chat about web development, feel free to reach out!
                        </Typography>

                    </Grid>


                </Grid>


            </Box>

        </Container>


    );
}

export default AboutPage;
