import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, CardMedia, Select, MenuItem, FormControl, InputLabel, Modal, Box, Paper } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const archiveItems = [
    { type: "project", name: "Sprague Pavers", description: "Paving Contractor", imageUrl: "/img/sprague.png", link: "https://www.espraguepavingandsons.net/" },
    { type: "project", name: "Lane's LLC", description: "General Contractor", imageUrl: "/img/Lanes.png", link: "https://www.lanesconstructionky.com/" },
    { type: "project", name: "Amendola Storage", description: "Storage Service", imageUrl: "/img/Storage.png", link: "https://www.amendolastorage.com/" },
    { type: "project", name: "Lone Oak Baptist", description: "Baptist Church", imageUrl: "/img/LO.png", link: "https://www.loneoakbaptistsnook.org/" },
    { type: "project", name: "Carpentry Solutions", description: "Framing Service", imageUrl: "/img/carpentry.png", link: "https://www.carpentrysolutionsinfo.com/" },
    // Add course information
    { type: "course", name: "Computer Science 101", description: "Introduction to Computer Science", imageUrl: "/img/cs101.png", link: "/courses/cs101" },
    { type: "course", name: "Data Structures and Algorithms", description: "Learn about data structures and algorithms.", imageUrl: "/img/dsa.png", link: "/courses/dsa" },
    // Add more courses as needed
];

function Archive() {
    const navigate = useNavigate();
    const [showProjects, setShowProjects] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleDropdownChange = (event) => {
        setShowProjects(event.target.value === 'projects');
    };

    const handleOpenModal = (course) => {
        setSelectedCourse(course);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedCourse(null);
    };

    const handleNavigateToCourse = () => {
        if (selectedCourse) {
            navigate(selectedCourse.link);
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '2rem' }}>
                <Typography variant="h2" component="h2" gutterBottom>
                    Archive
                </Typography>
                <Typography variant="body1" paragraph>
                    This section contains more info about the program I have been in from 2022 to 2024, completing in December of 24. There are also some older web design projects I did many years ago as a freelancer.
                </Typography>

                {/* Dropdown to select what to show */}
                <FormControl fullWidth style={{ marginBottom: '1.5rem' }}>
                    <InputLabel id="archive-select-label">Select to View</InputLabel>
                    <Select
                        labelId="archive-select-label"
                        id="archive-select"
                        onChange={handleDropdownChange}
                        defaultValue=""
                    >
                        <MenuItem value="courses">Courses</MenuItem>
                        <MenuItem value="projects">Web Design Projects</MenuItem>
                    </Select>
                </FormControl>
            </Paper>

            {/* Conditionally render Web Design Projects Section */}
            {showProjects && (
                <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '2rem' }}>
                    <Typography variant="h4" component="h3" gutterBottom>
                        Web Design Projects
                    </Typography>
                    <Grid container spacing={2}>
                        {archiveItems.filter(item => item.type === "project").map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <CardMedia
                                        component="img"
                                        alt={project.name}
                                        height="140"
                                        image={project.imageUrl}
                                        title={project.name}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {project.name}
                                        </Typography>
                                        <Typography color="textSecondary">
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ flexGrow: 0 }}>
                                        <Button variant="outline-primary" href={project.link} target="_blank">View Project</Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            )}

            {/* Courses Section is always visible */}
            <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '2rem' }}>
                <Typography variant="h4" component="h3" gutterBottom style={{ marginTop: '2rem' }}>
                    Courses
                </Typography>

                {/* Commenting out the course cards and adding "Coming Soon" text */}
                <Typography variant="h6" component="p" style={{ marginTop: '1rem' }}>
                    Coming Soon
                </Typography>
                
                {/* <Grid container spacing={2}>
                    {archiveItems.filter(item => item.type === "course").map((course, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia
                                    component="img"
                                    alt={course.name}
                                    height="140"
                                    image={course.imageUrl}
                                    title={course.name}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {course.name}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {course.description}
                                    </Typography>
                                </CardContent>
                                <CardContent sx={{ flexGrow: 0 }}>
                                    <Button variant="outline-primary" onClick={() => handleOpenModal(course)}>View Course</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid> */}

            </Paper>

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                    {selectedCourse && (
                        <>
                            <Typography id="modal-title" variant="h6" component="h2">
                                {selectedCourse.name}
                            </Typography>
                            <Typography id="modal-description" sx={{ mt: 2 }}>
                                {selectedCourse.description}
                            </Typography>
                            <Button variant="outline-primary" onClick={handleNavigateToCourse} style={{ marginTop: '1rem' }}>
                                Go to Course Page
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>

            <br /><br />
            <Button variant="outline-primary" onClick={() => navigate('/projects')}>Main Projects Page</Button>
        </div>
    );
}

export default Archive;
