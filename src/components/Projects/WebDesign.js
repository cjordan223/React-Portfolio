//src/components/Projects/WebDesign.js
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
    // Updated courses
    { type: "course", name: "CST 300: Major ProSeminar", description: "Students learn professional writing, presentation, research, and critical-thinking skills...", imageUrl: "/img/comingsoon.webp", link: "/course/cst300", term: "Spring 2023 - Term A", credits: 4 },
    { type: "course", name: "CST 338: Software Design", description: "Intermediate-level programming course covering techniques for developing large-scale software systems...", imageUrl: "/img/comingsoon.webp", link: "/course/cst338", term: "Spring 2023 - Term B", credits: 4 },
    { type: "course", name: "CST 363: Database Management", description: "Provides balanced coverage of database use and design, focusing on relational databases...", imageUrl: "/img/comingsoon.webp", link: "/course/cst363", term: "Summer 2023 - Term A", credits: 4 },
    { type: "course", name: "CST 334: Operating Systems", description: "Learn about the use and design of modern operating systems, focusing on Linux...", imageUrl: "/img/comingsoon.webp", link: "/course/cst334", term: "Summer 2023 - Term B", credits: 4 },
    { type: "course", name: "CST 311: Introduction to Computer Networking", description: "Survey of Telecomm and Data Comm Technology Fundamentals...", imageUrl: "/img/comingsoon.webp", link: "/course/cst311", term: "Fall 2023 - Term A", credits: 4 },
    { type: "course", name: "CST 336: Internet Programming", description: "Provides students with dynamic web application development skills...", imageUrl: "/img/webprogramming.jpeg", link: "/course/cst336", term: "Fall 2023 - Term B", credits: 4 },
    { type: "course", name: "CST 370: Algorithms", description: "Students learn important data structures in computer science...", imageUrl: "/img/comingsoon.webp", link: "/course/cst370", term: "Spring 2024 - Term A", credits: 4 },
    { type: "course", name: "CST 462S: Race, Gender, Class in the Digital World AND CST 328: Digital Art and Design", description: "Provides students with key knowledge of race, gender, class...", imageUrl: "/img/comingsoon.webp", link: "/course/cst462s", term: "Spring 2024 - Term B", credits: 6 },
    { type: "course", name: "CST 383: Introduction to Data Science", description: "Overview of modern data science tools and best practices...", imageUrl: "/img/datascience.jpeg", link: "/course/cst383", term: "Summer 2024 - Term A", credits: 4 },
    { type: "course", name: "CST 438: Software Engineering", description: "CST 338 is a prerequisite. Covers key knowledge of software engineering practices...", imageUrl: "/img/comingsoon.webp", link: "/course/cst438", term: "Summer 2024 - Term B", credits: 4 },
    { type: "course", name: "CST 329: Reasoning with Logic AND CST 489: Capstone Project Planning", description: "In this course, students learn to develop skill in using logic to describe and assess arguments...", imageUrl: "/img/comingsoon.webp", link: "/course/cst329", term: "Fall 2024 - Term A", credits: 4 },
    { type: "course", name: "CST 499: Directed Group Capstone", description: "Students create a detailed proposal of a substantial, professional level project...", imageUrl: "/img/comingsoon.webp", link: "/course/cst499", term: "Fall 2024 - Term B", credits: 4 }
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

            {/* Courses Section */}
            {!showProjects && (
                <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '2rem' }}>
                    <Typography variant="h4" component="h3" gutterBottom style={{ marginTop: '2rem' }}>
                        Courses
                    </Typography>

                    <Grid container spacing={2}>
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
                                        <Typography color="textSecondary">
                                            Credits: {course.credits}
                                        </Typography>
                                        <Typography color="textSecondary">
                                            {course.term}
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ flexGrow: 0 }}>
                                        <Button variant="outline-primary" onClick={() => handleOpenModal(course)}>View Course</Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            )}

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
