import React from 'react';
import { Box, Container, Typography, Grid, Avatar, TextField, Button, Divider } from '@mui/material';

function AboutPage() {
    return (
        <Container
            maxWidth="md"
            style={{
                backgroundImage: 'url(/path/to/your/background-image.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
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
                                src="/path/to/profile-image.jpg"
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
                <Box mt={6}>
                    <Divider variant="middle" />
                    <Box mt={4}>
                        <Typography variant="h4" align="center" gutterBottom>
                            Let's Work Together
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            If you have an exciting project in mind or need a reliable web developer to bring your ideas to life, I would love to hear from you. Please fill out the form below, and I'll get back to you as soon as possible!
                        </Typography>
                        <Box maxWidth={400} mx="auto" mt={4}>
                            <form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="First Name" fullWidth />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="Last Name" fullWidth />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label="Email" type="email" fullWidth />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label="Project Details" multiline rows={4} fullWidth />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="contained" color="primary" fullWidth>
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default AboutPage;