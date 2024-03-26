import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';


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

function EducationCard({ education }) {
    return (
        <Paper elevation={3} sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <SchoolIcon sx={{ mr: 1 }} />
                <Typography variant="h6">{education.degree}</Typography>
            </Box>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>{education.institution}</Typography>
            <Typography variant="body2" sx={{ mt: 'auto' }}>{education.timeFrame}</Typography>
        </Paper>
    );
}

function ExperienceCard({ experience }) {
    return (
        <Paper elevation={3} sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <WorkIcon sx={{ mr: 1 }} />
                <Typography variant="h6">{experience.title}</Typography>
            </Box>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>{experience.company}</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>{experience.timeFrame}</Typography>
            <Typography variant="body2" sx={{ mt: 'auto' }}>{experience.description}</Typography>
        </Paper>
    );
}

function SkillsSection({ skills }) {
    return (
        <Paper elevation={3} sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CodeIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Skills</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill) => (
                    <Chip key={skill} label={skill} variant="outlined" />
                ))}
            </Box>
        </Paper>
    );
}

function AdditionalExperienceSection({ experiences }) {
    return (
        <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <BuildIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Additional Experience</Typography>
            </Box>
            <Grid container spacing={2}>
                {experiences.map((exp, index) => (
                    <Grid item xs={12} key={index}>
                        <ExperienceCard experience={exp} />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}

function WorkExperience() {
    const navigate = useNavigate();

    const additionalExperiences = [
        {
            title: 'Volunteer Web Developer',
            company: 'Local Non-Profit Organization',
            description: 'Designed and developed a responsive website for a local non-profit organization using WordPress and custom HTML/CSS. Collaborated with the organization\'s team to gather requirements and implement desired features.',
            timeFrame: 'June 2019 - August 2019',
        },
        // Add more additional experiences as needed
    ];

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, backgroundColor: 'darkgrey', my: 4 }}>
                <Typography variant="h4" sx={{ color: 'white', mb: 2 }}>
                    My Professional Background
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', mb: 4 }}>
                    {/* ... */}
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ mb: 2 }}>Education</Typography>
                        <Grid container spacing={2}>
                            {education.map((edu, index) => (
                                <Grid item xs={12} key={index}>
                                    <EducationCard education={edu} />
                                </Grid>
                            ))}
                        </Grid>
                        <AdditionalExperienceSection experiences={additionalExperiences} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ mb: 2 }}>Professional Experience</Typography>
                        <Grid container spacing={2}>
                            {experiences.map((exp, index) => (
                                <Grid item xs={12} key={index}>
                                    <ExperienceCard experience={exp} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <SkillsSection skills={skills} />
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Button variant="outline-primary" onClick={() => navigate('/projects')} style={{ textDecoration: 'none', color: 'white' }}>
                         Projects
                    </Button>
                    <Button variant="outline-primary" style={{ textDecoration: 'none' }}>
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