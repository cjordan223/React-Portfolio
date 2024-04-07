import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/CloudDownload';


const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(4),
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(4),
}));

const TitleBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
}));

const StyledChip = styled(Chip)(({ theme }) => ({
    margin: theme.spacing(0.5),
    '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: 'white',
    },
}));



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
        description: 'Our department monitors user permissions, licenses, and access through Azure Active Directory and Microsoft Entra, primarily. I The work my team does tends to be pretty dynamic, but our main goal is to keep our user base informed and secure. This often involves trying to make our digital environment as user friendly as possible while maintaining the integrity of our protocols.',
        timeFrame: 'May 2023 – Present',
    },
    {
        title: 'Freelance Web Developer',
        company: 'Simple.biz, Raleigh-Durham-Chapel Hill Area (Remote)',
        description: 'Collaborated with senior developers to design, develop, and optimize web pages using a CMS and a combination of HTML5, CSS, and JavaScript. Our target demographic was small businesses, some of the work is available to review on this site. I learned a lot of great design principles and picked up more than a few valuable development tools as a freelancer here, before I moved on to Great Wolf in Chicago.',
        timeFrame: 'August 2022 – May 2023',
    },
    {
        title: 'Senior Project Manager',
        company: 'Palomar Homes, Paso Robles, CA',
        description: 'Managed property development projects, overseeing design, land inspections, and compliance with regulatory standards. Coordinated with stakeholders and local authorities to ensure project success.',
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
            company: 'Loaves, Fishes & Computers, Monterey, CA (Remote)',
            description: 'Create promotional material for the LFC organization, subject matter varies but is typically a tutorial on new tech and software.',
            timeFrame: 'February 2024-Present',
        },

    ];

    return (
        <Container maxWidth="md">
            <StyledPaper>
                <Typography variant="h4" component="h1" gutterBottom>
                    My Professional Background
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>Education</Typography>
                        <Grid container spacing={2}>
                            {education.map((edu, index) => (
                                <Grid item xs={12} key={index}>
                                    <EducationCard education={edu} />
                                </Grid>
                            ))}
                        </Grid>
                        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>Additional Experience</Typography>
                        <AdditionalExperienceSection experiences={additionalExperiences} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>Professional Experience</Typography>
                        <Grid container spacing={2}>
                            {experiences.map((exp, index) => (
                                <Grid item xs={12} key={index}>
                                    <ExperienceCard experience={exp} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <TitleBox>
                            <CodeIcon color="primary" />
                            <Typography variant="h5" gutterBottom>Skills</Typography>
                        </TitleBox>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {skills.map(skill => (
                                <StyledChip key={skill} label={skill} variant="outlined" />
                            ))}
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<DownloadIcon />}
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Resume
                    </Button>
                </Box>
            </StyledPaper>
        </Container>
    );
}

export default WorkExperience;
