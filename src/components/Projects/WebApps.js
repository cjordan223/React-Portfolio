import React, { useState } from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Button, Modal, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useNavigate } from "react-router-dom";


 const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const closeButtonStyle = {
  position: 'absolute',
  top: 8,
  right: 8,
};
const projects = [
  
  {
    name: "PhishFinder",
    description: "PhishFinder is a web extension designed to enhance email security by identifying and flagging phishing and spearphishing patterns. Built using Vue.js and integrating with Gmail's API through OAuth 2.0, it provides real-time security analysis of incoming emails.",
    image: "/img/phishfinderlogo.png",
    path: "https://github.com/cjordan223/PhishFinder",
    site: "/#/course/cst499",
    imageHeight: "140px"
  },
  {
    name: "Student Portal (Back End)",
    description: "3 person project. Runs with the React Front End project to complete a full-service online registrar for students, instructors, and system admins. More info in archives > cst438.",
    image: "https://lh3.googleusercontent.com/proxy/eKBEK2wSlZC1szJe8i6_rkWS5UIH02dHDRJxWxhUmqirbm-G1CbiAYGZ6bf8NxV0FobQzfDBr5ERJfUuSFUf1gKy2M7K",  // Use a suitable image URL here
    path: "https://github.com/cjordan223/cst438_Assignment3/",
   }
,  
  {
    name: "Student Portal (Front End)",
    description: "3 person project. Runs with the Spring backend project to complete a full-service online registrar for students, instructors, and system admins. More info in archives > cst438.",
    image: "https://cdn.filestackcontent.com/IEMTnwZrR2SJNoRUw6Tq",   
    path: "https://github.com/cjordan223/cst438_Assignment3/",
   },
  {
    name: "CompTIA+ Flashcards (iOS)",
    description: "I’m working on my Capstone project and studying for CompTIA, but still want to make time for personal projects, so I created flashcards in Swift to test in the iOS/XCode environment. It was surprisingly easy, with Swift having a lot of similarites to the React component structure.",
    image: "https://developer.apple.com/swift/images/swift-og.png",   
    path: "https://github.com/cjordan223/compTIA-flashcards.git",
   }
,  
  {
    name: "Weather Wise",
    description: "This is an application I built for a web programming class. It uses a free API to gather weather data and display it in a user-friendly interface. " +
      "It can take Zip Code, City, County, Coordinates, and other data types as input. Enter 'admin' (case sensitive) and '1234' for username and password if visiting the live site",
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
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open the modal and set the selected project
  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const navigate = useNavigate();


  return (
    <div style={{ flexGrow: 1, padding: '24px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Web Applications
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 3, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardActionArea onClick={() => handleOpen(project)}>
                <CardMedia
                  component="img"
                  height={project.name === "PhishFinder" ? "140" : "200"}
                  image={project.image}
                  alt={project.name}
                  sx={{
                    objectFit: project.name === "PhishFinder" ? 'contain' : 'cover',
                    padding: project.name === "PhishFinder" ? '20px' : '0',
                    transition: '0.3s ease-in-out',
                    '&:hover': {
                      filter: 'brightness(70%)',
                    },
                  }}
                />
                <CardContent sx={{ backgroundColor: '#f9f9f9', padding: '16px' }}>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                    {project.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 1 }}>
                {project.path && project.name !== "PhishFinder" && (
                  <Button size="small" color="primary" href={project.path} target="_blank" startIcon={<GitHubIcon />}>
                    GitHub Repo
                  </Button>
                )}
                {project.site && (
                  <Button 
                    size="small" 
                    color="primary" 
                    href={project.site} 
                    target={project.name === "PhishFinder" ? "_self" : "_blank"} 
                    startIcon={<LaunchIcon />}
                    sx={{ ml: project.name === "PhishFinder" ? 'auto' : 0 }}
                  >
                    {project.name === "PhishFinder" ? "Project Details" : "Live Demo"}
                  </Button>
                )}
              </CardContent>
            </Card>
            
          </Grid>
          
        ))}
        
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <Button variant="outlined" onClick={() => navigate('/projects')}>Main Projects Page</Button>
</div>


      {/* Modal Component for displaying project details */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
      >
        <Box sx={modalStyle}>
          {selectedProject && (
            <>
              <Typography id="project-modal-title" variant="h6" component="h2">
                {selectedProject.name}
              </Typography>
              <Typography id="project-modal-description" sx={{ mt: 2 }}>
                {selectedProject.description}
              </Typography>
              <Box sx={{ mt: 2 }}>
                {selectedProject.path && (
                  <Button size="small" color="primary" href={selectedProject.path} target="_blank" startIcon={<GitHubIcon />}>
                    GitHub Repo
                  </Button>
                )}
                {selectedProject.site && (
                  <Button 
                    size="small" 
                    color="primary" 
                    href={selectedProject.site} 
                    target={selectedProject.name === "PhishFinder" ? "_self" : "_blank"} 
                    startIcon={<LaunchIcon />}
                  >
                    {selectedProject.name === "PhishFinder" ? "Project Details" : "Live Demo"}
                  </Button>
                )}
                <Button
                variant="contained"
                color="primary"
                onClick={handleClose}
                sx={closeButtonStyle}
              >
                Close
              </Button>
              </Box>
              
            </>
          )}
        </Box>
      </Modal>


    </div>
    
  );
};

export default ProjectTemplate;
