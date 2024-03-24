import React from 'react';
import {Box, Container, Typography, Grid, Paper, List, ListItem, ListItemText} from '@mui/material';
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const resumeUrl = "https://drive.google.com/file/d/1jSbYgRFbPWGRJcpq3LXYVq1LFS7OoBOA/view?usp=drive_link";

const skills = [
    'JavaScript',
    'React',
    'Node.js',
    // ... more skills
];

const experiences = [
    {
        title: 'Cybersecurity Engineer',
        company: 'Great Wolf Lodge',
        description: 'Developed security .',
        timeFrame: 'May 2023 - Present',
    },
    // ... more experiences
];

const education = [
    {
        degree: 'B.S. Computer Science',
        institution: 'California State, Monterey Bay',
        timeFrame: '2022-2024',
    },{
        degree: 'A.S. Computer Science',
        institution: 'Cuesta College',
        timeFrame: '2020-2022',
    },
    // ... more education entries if needed
];

function WorkExperience() {
    const navigate = useNavigate();

    return (

    <Container maxWidth="md">
<Paper>
        <Box my={4}>
                {/* Skills Section */}
                <Paper elevation={3} sx={{ my: 2, p: 2 }}>
                    <Typography variant="h6">Skills</Typography>
                    <List>
                        {skills.map(skill => (
                            <ListItem key={skill}>
                                <ListItemText primary={skill} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>

                {/* Experience Section */}
                <Paper elevation={3} sx={{ my: 2, p: 2 }}>
                    <Typography variant="h6">Professional Experience</Typography>
                    {experiences.map((exp, index) => (
                        <Grid container key={index}>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">{exp.title}</Typography>
                                <Typography variant="subtitle2">{exp.company}</Typography>
                                <Typography variant="body2">{exp.timeFrame}</Typography>
                                <Typography variant="body2">{exp.description}</Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Paper>

                {/* Education Section */}
                <Paper elevation={3} sx={{ my: 2, p: 2 }}>
                    <Typography variant="h6">Education</Typography>
                    {education.map((edu, index) => (
                        <Grid container key={index}>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">{edu.degree}</Typography>
                                <Typography variant="subtitle2">{edu.institution}</Typography>
                                <Typography variant="body2">{edu.timeFrame}</Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Paper>
            </Box>

        <Button variant="outline-primary" onClick={() => navigate('/projects')}>Main Projects Page</Button>{' '}
        <Button>
            <a href={resumeUrl} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }} rel="noreferrer">
                Download Resume
            </a>
        </Button>
</Paper>
    </Container>
    );
}

export default WorkExperience;
