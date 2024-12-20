import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Button from 'react-bootstrap/Button';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import DownloadIcon from '@mui/icons-material/CloudDownload';
import styled from 'styled-components';

const backgroundImageUrl = 'path_to_your_background_image.jpg'; // Replace with your image path

const BackgroundContainer = styled.div`
  position: relative;
  background-image: url(${backgroundImageUrl});
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  min-height: 100vh;
  color: white;
  border-radius: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    border-radius: inherit;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const JobTitle = styled(Typography)`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SkillChip = styled.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 5px 10px;
  margin: 5px;
  font-size: 1rem;
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #1976d2; // Custom background color
  color: #ffffff; // Custom text color
  border: none; // Remove border

  &:hover {
    background-color: #1565c0; // Darker shade for hover state
  }

  &:focus {
    background-color: #1565c0; // Darker shade for focus state
  }

  &:active {
    background-color: #0d47a1; // Even darker shade for active state
  }
`;

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
    company: 'Great Wolf Lodge',
    location: 'Chicago, Illinois (Remote)',
    description: 'Our department monitors user permissions, licenses, and access through Azure Active Directory and Microsoft Entra, primarily. The work my team does tends to be pretty dynamic, but our main goal is to keep our user base informed and secure. This often involves trying to make our digital environment as user friendly as possible while maintaining the integrity of our protocols.',
    timeFrame: 'May 2023 – Present',
  },
  {
    title: 'Freelance Web Developer',
    company: 'Simple.biz',
    location: 'Raleigh-Durham-Chapel Hill Area (Remote)',
    description: 'Collaborated with senior developers to design, develop, and optimize web pages using a CMS and a combination of HTML5, CSS, and JavaScript. Our target demographic was small businesses, some of the work is available to review on this site. I learned a lot of great design principles and picked up more than a few valuable development tools as a freelancer here, before I moved on to Great Wolf in Chicago.',
    timeFrame: 'August 2022 – May 2023',
  },
  {
    title: 'Senior Project Manager',
    company: 'Palomar Homes',
    location: 'Paso Robles, CA',
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

function WorkExperience() {

  return (
    <BackgroundContainer>
      <Container maxWidth="md">
        <Title>My Professional Background</Title>
        <SectionTitle>Education</SectionTitle>
        {education.map((edu, index) => (
          <Box mb={4} key={index}>
            <JobTitle><SchoolIcon sx={{ mr: 1 }} /> {edu.institution}</JobTitle>
            <Text>{edu.degree}</Text>
            <Text>{edu.timeFrame}</Text>
          </Box>
        ))}
        <SectionTitle>Professional Experience</SectionTitle>
        {experiences.map((exp, index) => (
          <Box mb={4} key={index}>
            <JobTitle><WorkIcon sx={{ mr: 1 }} /> {exp.title}</JobTitle>
            <Text>{exp.company}</Text>
            <Text>{exp.location}</Text>
            <Text>{exp.description}</Text>
            <Text>{exp.timeFrame}</Text>
          </Box>
        ))}
   
        
        <SectionTitle>Skills</SectionTitle>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {skills.map((skill, index) => (
            <SkillChip key={index}>{skill}</SkillChip>
          ))}
        </Box>
        <StyledButton
          variant="contained"
          startIcon={<DownloadIcon />}
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </StyledButton>
      </Container>
    </BackgroundContainer>
  );
}

export default WorkExperience;
