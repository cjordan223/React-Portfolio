import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const resumeUrl = "https://drive.google.com/file/d/1jSbYgRFbPWGRJcpq3LXYVq1LFS7OoBOA/view?usp=drive_link";

const skills = [
    'HTML', 'CSS', 'Bootstrap', 'React', 'JavaScript', 'Python', 'Java', 'Android Studio',
    'Node.js', 'Express', 'Django', 'MongoDB', 'MySQL', 'Spring',
    'Adobe Photoshop', 'SEO Optimization', 'Dreamweaver', 'Eclipse', 'VS Code', 'RESTful API’s',
    'PowerShell Scripting and Automation', 'Version Control', 'Debugging', 'Network Architecture'
];

const experiences = [
    {
        title: 'Corporate Cybersecurity Analyst',
        company: 'Great Wolf Lodge, Chicago, Illinois (Remote)',
        description: 'Performed vulnerability assessments & penetration tests to identify security flaws & mitigate risks. Monitored user permissions, licenses, and access through Active Directory and O365. Utilized tools like Rapid7, FireEye, CrowdStrike, and Carbon Black for threat detection and incident response. Participated in security drills and developed custom scripts for cybersecurity protocols.',
        timeFrame: 'May 2023 – Present',
    },
    {
        title: 'Freelance Web Developer',
        company: 'Simple.biz, Raleigh-Durham-Chapel Hill Area (Remote)',
        description: 'Collaborated with senior developers to design, develop, and optimize web applications using HTML5, CSS, and JavaScript. Performed compatibility tests across web browsers and applied web accessibility best practices.',
        timeFrame: 'August 2022 – May 2023',
    },
    {
        title: 'Senior Project Manager',
        company: 'Palomar Homes, Paso Robles, CA',
        description: 'Managed multi-million-dollar projects, overseeing design, property inspections, and compliance with regulatory standards. Coordinated with stakeholders and local authorities to ensure project success.',
        timeFrame: 'September 2017 - January 2021',
    }
];

const education = [
    {
        degree: 'B.S. Software Engineering & Design',
        institution: 'California State University, Monterey Bay at Seaside, CA (CS Online Program)',
        timeFrame: 'September 2022 - December 2024',
    },
    {
        degree: 'A.S. Computer Science',
        institution: 'Cuesta College, San Luis Obispo, CA',
        timeFrame: 'January 2020 - November 2022',
    }
];

function WorkExperience() {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 2, backgroundColor: 'darkgrey', my: 2 }}>
                <Typography variant="h4" sx={{ color: 'white' }}>My Professional Background</Typography>
                <br/>
                <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>I work as a Cybersecurity Engineer at Great Wolf Lodge, which has been an extremely rewarding and exciting environment to further explore my interests in software development and deployment. More specifically, I've learned a lot about network security and digital infrastructure here. I'm completing my B.S. in Computer Science with an emphasis on Software Development at CSUMB this year.</Typography>
                <Box my={4}>
                    {/* Education Section */}
                    <Paper elevation={3} sx={{ my: 2, p: 2 }}>
                        <Typography variant="h6">Education</Typography>
                        {education.map((edu, index) => (
                            <Grid container key={index} spacing={1}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">{edu.degree}</Typography>
                                    <Typography variant="subtitle2">{edu.institution}</Typography>
                                    <Typography variant="body2">{edu.timeFrame}</Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Paper>
                    {/* Experience Section */}
                    <Paper elevation={3} sx={{ my: 2, p: 2 }}>
                        <Typography variant="h6">Professional Experience</Typography>
                        {experiences.map((exp, index) => (
                            <Grid container key={index} spacing={1}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">{exp.title}</Typography>
                                    <Typography variant="subtitle2">{exp.company}</Typography>
                                    <Typography variant="body2">{exp.timeFrame}</Typography>
                                    <Typography variant="body2">{exp.description}</Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Paper>
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
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Button variant="outline-light" onClick={() => navigate('/projects')} style={{ textDecoration: 'none', color: 'white' }}>
                        Main Projects Page
                    </Button>
                    <Button variant="outline-light" style={{ textDecoration: 'none' }}>
                        <a href={resumeUrl} target="_blank" style={{ textDecoration: 'none', color: 'white' }} rel="noreferrer">
                            Download Resume
                        </a>
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default WorkExperience;
