//ProjectsPage.js
import React from "react";
import '../css/ProjectsPage.css';
import { Box, Container, Grid, Paper, Typography, Tabs, Tab, Card, CardMedia, CardContent, CardActions, Button, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import SchoolIcon from '@mui/icons-material/School';
import { Link, useNavigate } from 'react-router-dom';

function ProjectsPage() {
    const navigate = useNavigate();
    const [tabValue, setTabValue] = React.useState(0);
    
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    
    // Updated allProjects array with data from existing components
    const allProjects = [
        // Featured projects (your best work)
        {
            name: "PhishFinder",
            description: "Web extension to enhance email security by identifying phishing patterns. Built with Vue.js and integrating with Gmail's API through OAuth 2.0, it provides real-time security analysis of incoming emails.",
            image: "/img/phishfinderlogo.png",
            path: "https://github.com/cjordan223/PhishFinder",
            site: "/#/course/cst499",
            category: "featured",
            tags: ["Vue.js", "OAuth 2.0", "Security", "API Integration"]
        },
        {
            name: "Student Portal (Full Stack)",
            description: "Complete online registrar system for students, instructors, and admins with React frontend and Spring backend. 3-person collaborative project.",
            image: "https://cdn.filestackcontent.com/IEMTnwZrR2SJNoRUw6Tq",
            path: "https://github.com/cjordan223/cst438_Assignment3/",
            category: "featured",
            tags: ["React", "Spring", "Full Stack", "Database"]
        },
        {
            name: "Weather Wise",
            description: "Weather application that uses a free API to gather weather data and display it in a user-friendly interface. Accepts various input formats including Zip Code, City, County, and Coordinates.",
            image: "https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg",
            path: "https://github.com/cjordan223/WeatherWise-Code",
            site: "https://cjordan223.github.io/WeatherWise/",
            category: "featured",
            tags: ["JavaScript", "API Integration", "UI/UX", "Weather Data"]
        },
        
        // Web Applications
        {
            name: "CompTIA+ Flashcards (iOS)",
            description: "Flashcard application for CompTIA exam preparation built in Swift to test in the iOS/XCode environment. Features similarities to React component structure.",
            image: "https://developer.apple.com/swift/images/swift-og.png",
            path: "https://github.com/cjordan223/compTIA-flashcards.git",
            category: "webapps",
            tags: ["Swift", "iOS", "Educational", "Mobile Development"]
        },
        {
            name: "Guessing Game",
            description: "Wordle-inspired puzzle game initially built with JavaScript and later improved with React for better performance and responsiveness.",
            image: "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg",
            path: "https://github.com/cjordan223/guessr-2",
            site: "https://cjordan223.github.io/guessr-2/",
            category: "webapps",
            tags: ["React", "JavaScript", "Game Development", "Frontend"]
        },
        {
            name: "System Monitoring App",
            description: "Program that runs on a Postgres server and collects system information from an agent installed on your device. Includes data manipulation with NumPy and Pandas.",
            image: "/img/postgres.png",
            path: "https://github.com/cjordan223/FanClub",
            category: "webapps",
            tags: ["Python", "PostgreSQL", "System Monitoring", "Data Analysis"]
        },
        {
            name: "Markov Text Generator",
            description: "Exercise to train a simple program to emulate speech patterns using Markov chain algorithms.",
            image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg",
            path: "https://github.com/cjordan223/Markov.git",
            category: "webapps",
            tags: ["Python", "NLP", "Algorithms", "Text Generation"]
        },
        {
            name: "User Vault",
            description: "Simple user database web application built with Python in the early stages of development learning.",
            image: "/img/vault.png",
            path: "https://github.com/cjordan223/UserVault.git",
            category: "webapps",
            tags: ["Python", "Database", "Web Development", "Authentication"]
        },
        {
            name: "Currents API",
            description: "Web interface for Currents API that offers the latest news headlines from multiple sources.",
            image: "/img/news.png",
            path: "https://github.com/cjordan223/gray",
            site: "https://cjordan223.github.io/gray/",
            category: "webapps",
            tags: ["JavaScript", "API Integration", "News", "Frontend"]
        },
        
        // Programming Projects
        {
            name: "Pandas & Numpy",
            description: "Data manipulation with Python, collected with a custom Python script agent. Demonstrates data science skills and automation capabilities.",
            image: "/img/pandas.jpeg",
            path: "https://github.com/cjordan223/voyager",
            category: "programming",
            tags: ["Python", "Pandas", "NumPy", "Data Science"]
        },
        {
            name: "Student Housing Data (ML)",
            description: "Machine learning project analyzing student housing data to identify patterns and make predictions.",
            image: "/img/datascience.jpeg",
            path: "https://github.com/cjordan223/ML-StudentHousing",
            category: "programming",
            tags: ["Python", "Machine Learning", "Data Analysis", "Predictive Modeling"]
        },
        {
            name: "List Assist",
            description: "Android Studio list-making application with basic CRUD functionality, built in Java for the Android platform.",
            image: "/img/android.jpeg",
            path: "https://github.com/cjordan223/List_Assist",
            category: "programming",
            tags: ["Java", "Android", "Mobile Development", "CRUD"]
        },
        
        // Archive Projects
        {
            name: "Sprague Pavers",
            description: "Responsive website for a paving contractor, developed as a freelance project.",
            image: "/img/sprague.png",
            site: "https://www.espraguepavingandsons.net/",
            category: "archive",
            tags: ["HTML/CSS", "Responsive Design", "Client Work", "Business Website"]
        },
        {
            name: "Lane's LLC",
            description: "Website for a general contractor, showcasing services and portfolio.",
            image: "/img/Lanes.png",
            site: "https://www.lanesconstructionky.com/",
            category: "archive",
            tags: ["HTML/CSS", "Web Design", "Client Work", "Construction Industry"]
        },
        {
            name: "Amendola Storage",
            description: "Website for a storage service business, featuring information about storage options and pricing.",
            image: "/img/Storage.png",
            site: "https://www.amendolastorage.com/",
            category: "archive",
            tags: ["HTML/CSS", "Web Design", "Client Work", "Service Business"]
        },
        {
            name: "Lone Oak Baptist",
            description: "Website for a Baptist church, including information about services, events, and community outreach.",
            image: "/img/LO.png",
            site: "https://www.loneoakbaptistsnook.org/",
            category: "archive",
            tags: ["HTML/CSS", "Web Design", "Client Work", "Non-Profit"]
        },
        {
            name: "Carpentry Solutions",
            description: "Website for a framing service, highlighting carpentry expertise and project portfolio.",
            image: "/img/carpentry.png",
            site: "https://www.carpentrysolutionsinfo.com/",
            category: "archive",
            tags: ["HTML/CSS", "Web Design", "Client Work", "Skilled Trade"]
        }
    ];
    
    // Add coursework data
    const coursework = [
        {
            name: "CST 499: Directed Capstone",
            description: "The culmination of CST 489 planning and development into a significant software project. Created PhishFinder, a web extension for email security.",
            image: "/img/phishfinderlogo.png",
            link: "/course/cst499",
            grade: "A",
            category: "education",
            tags: ["Capstone", "Security", "Web Development", "Vue.js"]
        },
        {
            name: "CST 438: Software Engineering",
            description: "Covers key knowledge of software engineering practices. Developed a full-stack student portal system with React frontend and Spring backend.",
            image: "https://cdn.sanity.io/images/tlr8oxjg/production/8065e9b35afcf58ba7b1b96e1d5be14420d47dec-1456x816.png?w=3840&q=100&fit=clip&auto=format",
            link: "/course/cst438",
            grade: "A",
            category: "education",
            tags: ["Software Engineering", "Full Stack", "React", "Spring"]
        },
        {
            name: "CST 383: Introduction to Data Science",
            description: "Overview of modern data science tools and best practices. Worked with Python libraries such as Pandas and NumPy for data analysis and visualization.",
            image: "/img/datascience.jpeg",
            link: "/course/cst383",
            grade: "A",
            category: "education",
            tags: ["Data Science", "Python", "Pandas", "NumPy"]
        },
        {
            name: "CST 370: Algorithms",
            description: "Students learn important data structures in computer science. Implemented various algorithms and data structures in Java and Python.",
            image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230807133054/Data-structure-algorithm.png",
            link: "/course/cst370",
            grade: "A",
            category: "education",
            tags: ["Algorithms", "Data Structures", "Java", "Python"]
        },
        {
            name: "CST 363: Database Management",
            description: "Provides balanced coverage of database use and design, focusing on relational databases. Created database schemas and implemented SQL queries.",
            image: "https://assets.datamation.com/uploads/2023/06/dm-top-database-challenges.png",
            link: "/course/cst363",
            grade: "A",
            category: "education",
            tags: ["Databases", "SQL", "Schema Design", "Data Modeling"]
        },
        {
            name: "CST 336: Internet Programming",
            description: "Provides students with dynamic web application development skills. Built various web applications using JavaScript, HTML, and CSS.",
            image: "/img/webprogramming.jpeg",
            link: "/course/cst336",
            grade: "A",
            category: "education",
            tags: ["Web Development", "JavaScript", "HTML/CSS", "Frontend"]
        },
        {
            name: "CST 334: Operating Systems",
            description: "Learn about the use and design of modern operating systems, focusing on Linux. Implemented system calls and process management techniques.",
            image: "https://cloudpso.com/wp-content/uploads/2023/02/is-the-operating-system-dead.webp",
            link: "/course/cst334",
            grade: "A",
            category: "education",
            tags: ["Operating Systems", "Linux", "System Programming", "C"]
        },
        {
            name: "CST 329: Reasoning with Logic",
            description: "In this course, students learn to develop skill in using logic to describe and assess arguments. Applied formal logic to problem-solving.",
            image: "https://media.geeksforgeeks.org/wp-content/uploads/20240624022022/Propositional-Logic.webp",
            link: "/course/cst329",
            grade: "A",
            category: "education",
            tags: ["Logic", "Critical Thinking", "Problem Solving", "Formal Methods"]
        },
        {
            name: "CST 338: Software Design",
            description: "Intermediate-level programming course covering techniques for developing large-scale software systems. Implemented design patterns and OOP principles.",
            image: "https://www.wedigraf.com/wp-content/uploads/2023/11/software-development-training-uyo-wedigraf-technologies-ltd-akwa-ibom-state.jpg",
            link: "/course/cst338",
            grade: "A",
            category: "education",
            tags: ["Software Design", "OOP", "Design Patterns", "Java"]
        },
        {
            name: "CST 311: Introduction to Computer Networking",
            description: "Survey of Telecomm and Data Comm Technology Fundamentals. Implemented network protocols and analyzed network traffic.",
            image: "https://www.lifewire.com/thmb/TXVRTtkHvRpTjnRObQ3xm2VlsD0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WirelessNetwork-5994852003f4020011db5333.jpg",
            link: "/course/cst311",
            grade: "A",
            category: "education",
            tags: ["Networking", "Protocols", "TCP/IP", "Network Security"]
        },
        {
            name: "CST 300: Major ProSeminar",
            description: "Students learn professional writing, presentation, research, and critical-thinking skills. Developed technical documentation and presentations.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz8bcyP6fWEtvxSXHuxlTGImVBEPtEi7mVyQ&s",
            link: "/course/cst300",
            grade: "A",
            category: "education",
            tags: ["Technical Writing", "Presentations", "Research", "Professional Skills"]
        },
        {
            name: "CST 462S: Race, Gender, Class in the Digital World",
            description: "Provides students with key knowledge of race, gender, class in the digital landscape. Analyzed social impacts of technology.",
            image: "https://yt3.googleusercontent.com/4YAaX7CsQ-paadHsNvC6wdv2nE_7VTKpoNJOTwFhHL4rQqLC8WFe6mNxL-z-e6sfHZbHG-ucPA=s900-c-k-c0x00ffffff-no-rj",
            link: "/course/cst462s",
            grade: "A",
            category: "education",
            tags: ["Digital Ethics", "Social Impact", "Technology Ethics", "Diversity"]
        }
    ];
    
    // Filter projects based on active tab
    const getFilteredProjects = () => {
        if (tabValue === 0) return allProjects.filter(p => p.category === "featured");
        if (tabValue === 1) return allProjects.filter(p => p.category === "webapps");
        if (tabValue === 2) return allProjects.filter(p => p.category === "programming");
        if (tabValue === 3) return allProjects.filter(p => p.category === "archive");
        if (tabValue === 4) return coursework;
        return [];
    };
    
    return (
        <Container>
            <Paper>
                <Box sx={{ textAlign: 'center', padding: '2rem 0' }}>
                    <Typography variant="h1" sx={{ color: 'black', fontWeight: 'bold', marginBottom: '1rem', fontSize: '2.5rem' }}>
                        Projects
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'black', fontSize: '1.2rem', maxWidth: '800px', margin: 'auto', paddingBottom: '1rem' }}>
                        Showcasing my work in web development, programming, and security solutions.
                    </Typography>
                    
                    <Tabs 
                        value={tabValue} 
                        onChange={handleTabChange} 
                        centered
                        sx={{ marginBottom: '2rem' }}
                    >
                        <Tab label="Featured" />
                        <Tab label="Web Applications" />
                        <Tab label="Programming" />
                        <Tab label="Archive" />
                        <Tab label="Education" icon={<SchoolIcon />} iconPosition="start" />
                    </Tabs>
                </Box>
            </Paper>
            
            <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
                {getFilteredProjects().map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ 
                            height: '100%', 
                            display: 'flex', 
                            flexDirection: 'column',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': { transform: 'scale(1.03)' },
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
                        }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={project.image}
                                alt={project.name}
                                sx={{
                                    objectFit: project.name.includes("PhishFinder") ? 'contain' : 'cover',
                                    padding: project.name.includes("PhishFinder") ? '20px' : '0'
                                }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                                    {project.name}
                                </Typography>
                                {project.category === "education" && (
                                    <Chip 
                                        label={`Grade: ${project.grade}`} 
                                        color="primary" 
                                        size="small" 
                                        sx={{ mb: 1 }} 
                                    />
                                )}
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    {project.description}
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, marginTop: 1 }}>
                                    {project.tags && project.tags.map((tag, idx) => (
                                        <Box key={idx} sx={{ 
                                            bgcolor: 'rgba(25, 118, 210, 0.1)', 
                                            color: 'primary.main',
                                            borderRadius: 1,
                                            px: 1,
                                            py: 0.5,
                                            fontSize: '0.75rem'
                                        }}>
                                            {tag}
                                        </Box>
                                    ))}
                                </Box>
                            </CardContent>
                            <CardActions sx={{ padding: '16px', justifyContent: 'space-between' }}>
                                {project.path && (
                                    <Button size="small" color="primary" href={project.path} target="_blank" startIcon={<GitHubIcon />}>
                                        GitHub
                                    </Button>
                                )}
                                {project.site && (
                                    <Button 
                                        size="small" 
                                        color="primary" 
                                        href={project.site} 
                                        target="_blank" 
                                        startIcon={<LaunchIcon />}
                                    >
                                        {project.site.includes("course") ? "Details" : "Live Demo"}
                                    </Button>
                                )}
                                {project.link && (
                                    <Button 
                                        size="small" 
                                        color="primary" 
                                        onClick={() => navigate(project.link)} 
                                        startIcon={<SchoolIcon />}
                                    >
                                        Course Details
                                    </Button>
                                )}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ProjectsPage;
