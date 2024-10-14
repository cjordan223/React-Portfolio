import React from "react";
import { Box, Container, Typography, Grid, Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Navigate to a contact page, or open a mail client
    navigate("/contact"); // Assuming you have a contact route set up
  };

  const handleViewCodeClick = () => {
    // Open the GitHub repository in a new tab
    window.open("https://github.com/cjordan223/React-Portfolio", "_blank");
  };

  return (
    <Container
      maxWidth="md"
      style={{
        backgroundColor: "rgba(34, 40, 49, 0.8)",
        paddingBottom: "20px",
        paddingTop: "30px",
        marginBottom: "80px",
        borderRadius: "22px",
        color: "#eeeeee",
      }}
    >
      <Box
        mt={4}
        mb={6}
        p={4}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} style={{ textAlign: "center" }}>
            <Avatar
              alt="Conner Jordan"
              src="/img/portrait.jpg"
              sx={{
                width: "auto",
                height: 320,
                borderRadius: "50px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h2" gutterBottom>
            Welcome to my Server
            </Typography>
       
            <Typography variant="body1" paragraph>
              This space was created to host some of my web apps and projects as I wrap up my degree program. At this time I’ve updated the site to include almost all of my coursework, which can be found in the archives section of this site. I’m completing the remainder of courses this fall (now) and will update with my final capstone project. You can also find the
              code for the profile front end below, if you're interested.
            </Typography>
            <Typography variant="body1" paragraph>
              I currently work on the cybersecurity team for Great Wolf Lodge,
              remotely for their Chicago office. I'm based in San Luis Obispo,
              CA, where I'm also part of the class of 2024 at Cal State
              Monterey, completing my B.S. in Software Engineering this winter. I've been lucky to work on a lot of different projects, but most recently I've taken a keen interest in dev ops engineering and cloud deployments, as well as automation scripting and API integration.
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions or want to chat about web development,
              feel free to reach out!
            </Typography>
            <Box mt={3}>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleContactClick} 
                style={{ marginRight: "10px" }}
              >
                Contact Me
              </Button>
              <Button 
                variant="outlined" 
                color="secondary" 
                onClick={handleViewCodeClick}
              >
                View Code
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default AboutPage;
