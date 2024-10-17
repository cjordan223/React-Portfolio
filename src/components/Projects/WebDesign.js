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
    { type: "course", name: "CST 300: Major ProSeminar", description: "Students learn professional writing, presentation, research, and critical-thinking skills.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz8bcyP6fWEtvxSXHuxlTGImVBEPtEi7mVyQ&s", link: "/course/cst300", grade: "A" },
    { type: "course", name: "CST 338: Software Design", description: "Intermediate-level programming course covering techniques for developing large-scale software systems.", imageUrl: "https://www.wedigraf.com/wp-content/uploads/2023/11/software-development-training-uyo-wedigraf-technologies-ltd-akwa-ibom-state.jpg", link: "/course/cst338", grade: "A" },
    { type: "course", name: "CST 363: Database Management", description: "Provides balanced coverage of database use and design, focusing on relational databases.", imageUrl: "https://assets.datamation.com/uploads/2023/06/dm-top-database-challenges.png", link: "/course/cst363", grade: "A" },
    { type: "course", name: "CST 334: Operating Systems", description: "Learn about the use and design of modern operating systems, focusing on Linux.", imageUrl: "https://cloudpso.com/wp-content/uploads/2023/02/is-the-operating-system-dead.webp", link: "/course/cst334", grade: "A" },
    { type: "course", name: "CST 311: Introduction to Computer Networking", description: "Survey of Telecomm and Data Comm Technology Fundamentals.", imageUrl: "https://www.lifewire.com/thmb/TXVRTtkHvRpTjnRObQ3xm2VlsD0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WirelessNetwork-5994852003f4020011db5333.jpg", link: "/course/cst311", grade: "A" },
    { type: "course", name: "CST 336: Internet Programming", description: "Provides students with dynamic web application development skills.", imageUrl: "/img/webprogramming.jpeg", link: "/course/cst336", grade: "A" },
    { type: "course", name: "CST 370: Algorithms", description: "Students learn important data structures in computer science.", imageUrl: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230807133054/Data-structure-algorithm.png", link: "/course/cst370", grade: "A" },
    { type: "course", name: "CST 328: Digital Art and Design AND CST 462S: Race, Gender, Class in the Digital World", description: "Provides students with key knowledge of race, gender, class in the digital landscape.", imageUrl: "https://yt3.googleusercontent.com/4YAaX7CsQ-paadHsNvC6wdv2nE_7VTKpoNJOTwFhHL4rQqLC8WFe6mNxL-z-e6sfHZbHG-ucPA=s900-c-k-c0x00ffffff-no-rj", link: "/course/cst462s", grade: "A" },
    { type: "course", name: "CST 383: Introduction to Data Science", description: "Overview of modern data science tools and best practices.", imageUrl: "/img/datascience.jpeg", link: "/course/cst383", grade: "A" },
    { type: "course", name: "CST 438: Software Engineering", description: "CST 338 is a prerequisite. Covers key knowledge of software engineering practices.", imageUrl: "https://cdn.sanity.io/images/tlr8oxjg/production/8065e9b35afcf58ba7b1b96e1d5be14420d47dec-1456x816.png?w=3840&q=100&fit=clip&auto=format", link: "/course/cst438", grade: "A" },
    { type: "course", name: "CST 329: Reasoning with Logic / CST 489: Capstone Project Planning ", description: "In this course, students learn to develop skill in using logic to describe and assess arguments.", imageUrl: "https://media.geeksforgeeks.org/wp-content/uploads/20240624022022/Propositional-Logic.webp", link: "/course/cst329", grade: "TBD" },
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

            {!showProjects && (
                <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '2rem' }}>
                    <Typography variant="h4" component="h3" gutterBottom>
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
                                            {/* {course.description} */}
                                        </Typography>
                                        <Typography color="textSecondary">
                                            Grade: {course.grade}
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
