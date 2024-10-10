//src/pages/CoursePage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// Course data array (could also be fetched from an API)
const courseData = [
    { id: 'cst300', name: 'CST 300: Major ProSeminar', description: 'Students learn professional writing, presentation, research, and critical-thinking skills within the diversified fields of computer science and communication design. This class also helps students identify and articulate personal, professional, and social goals while further practicing their problem-solving, collaboration, and community-building skills. Students will demonstrate competence in writing skills at the upper division level.', term: 'Spring 2023 - Term A', credits: 4 },
    { id: 'cst338', name: 'CST 338: Software Design', description: 'This is an intermediate-level programming course covering techniques for developing large-scale software systems using object-oriented programming. Coverage includes software development life cycle models, requirements analysis, and graphical user interface development.', term: 'Spring 2023 - Term B', credits: 4 },
    { id: 'cst363', name: 'CST 363: Database Management', description: 'This course provides balanced coverage of database use and design, focusing on relational databases. Students will learn to design relational schemas, write SQL queries, access a DB programmatically, and perform database administration. Students will gain a working knowledge of the algorithms and data structures used in query evaluation and transaction processing. Students will also learn to apply newer database technologies such as XML, NoSQL, and Hadoop.', term: 'Summer 2023 - Term A', credits: 4 },
    { id: 'cst334', name: 'CST 334: Operating Systems', description: 'Students in this course will learn about the use and design of modern operating systems, focusing on Linux. On the “use” side, students will learn the Linux command line, to write shell scripts, and to build programs with GNU utilities like awk, sed, and make. On the “design” side, students will develop a deep understanding of process management, memory management, file systems, and concurrency, and how they apply to modern technologies like virtualization and cloud computing.', term: 'Summer 2023 - Term B', credits: 4 },
    { id: 'cst311', name: 'CST 311: Introduction to Computer Networking', description: 'Survey of Telecomm and Data Comm Technology Fundamentals, Local Area Network, Wide Area Network, Internet and internetworking protocols including TCP/IP, network security and performance, emerging industry trends such as voice over the network and high speed networking. Designed as a foundation for students who wish to pursue more advanced network studies including certificate programs. Includes hands-on networking labs that incorporate Cisco CCNA lab components.', term: 'Fall 2023 - Term A', credits: 4 },
    { id: 'cst336', name: 'CST 336: Internet Programming', description: 'Provides students with dynamic web application development skills, focusing on the integration of server-side programming, database connectivity, and client-side scripting. Coverage includes the Internet architecture, responsive design, RESTful web services, and Web APIs. This lightweight and easy-to-navigate web app allows users to search for current weather data and a 3-day forecast based on their location input.', term: 'Fall 2023 - Term B', credits: 4, extraLink: { url: 'https://github.com/cjordan223/WeatherWise-Code', text: 'View the GitHub Repository for an example project.' } },    { id: 'cst370', name: 'CST 370: Algorithms', description: 'Students learn important data structures in computer science and acquire fundamental algorithm design techniques to get the efficient solutions to several computing problems from various disciplines. Topics include the analysis of algorithm efficiency, hash, heap, graph, tree, sorting and searching, brute force, divide-and-conquer, decrease-and-conquer, transform-and-conquer, dynamic programming, and greedy programming.', term: 'Spring 2024 - Term A', credits: 4 },
    { id: 'cst462s', name: 'CST 462S: Race, Gender, Class in the Digital World AND CST 328: Digital Art and Design', description: 'Provides students with key knowledge of race, gender, class and social justice especially in relation to technology in today’s digital world. Students challenge the barriers of expertise, gender, race, class, and location that restrict wider access to and understanding of the production and usage of new technologies.', term: 'Spring 2024 - Term B', credits: 6 },
    { id: 'cst383', name: 'CST 383: Introduction to Data Science', description: 'Provide student with an overview of modern data science tools and best practices. Jupyter Notebooks, Pandas, Python, and NumPy. This course gives you practical exposure to the data science workflow.', term: 'Summer 2024 - Term A', credits: 4, extraLink: { url: '/components/Projects/Programming', text: 'Explore Programming Projects', internal: true } },    { id: 'cst438', name: 'CST 438: Software Engineering', description: 'Provides students with key knowledge of race, gender, class, and social justice especially in relation to technology in today’s digital world. Students challenge the barriers of expertise, gender, race, class, and location that restrict wider access to and understanding of the production and usage of new technologies.', term: 'Summer 2024 - Term B', credits: 4 },
    { id: 'cst329', name: 'CST 329: Reasoning with Logic AND CST 489: Capstone Project Planning', description: 'In this course students learn to develop skill in using logic to describe and assess arguments. Students will learn to write formulas in propositional and first-order logic, and more importantly, to write and check proofs. Students will also learn to write formulas in three-valued and modal logic, know how to choose an appropriate logic, and understand the limitations of logic in capturing human reasoning.', term: 'Fall 2024 - Term A', credits: 4 },
    { id: 'cst499', name: 'CST 499: Directed Group Capstone', description: 'Students create a detailed proposal of a substantial, professional level project with an approval of the student’s capstone advisor. Students learn and practice project planning, collaboration and writing skills required in the industry.', term: 'Fall 2024 - Term B', credits: 4 }
];


function CoursePage() {
    const navigate = useNavigate();
    const { courseId } = useParams();
    const course = courseData.find(course => course.id === courseId);

    const handleNavigation = (link) => {
        if (link.internal) {
            navigate(link.url);
        } else {
            window.open(link.url, '_blank');
        }
    };

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>{course.name}</Typography>
            <Typography variant="body1">{course.description}</Typography>
            <Typography variant="body2"><strong>Credits:</strong> {course.credits}</Typography>
            <Typography variant="body2"><strong>Term:</strong> {course.term}</Typography>
            
            {/* Button for CST 383: Data Science */}
            {courseId === 'cst383' && (
                <div style={{ marginTop: '20px' }}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => handleNavigation(course.extraLink)}
                    >
                        Explore Programming Projects
                    </Button>
                </div>
            )}

            {/* Button for CST 336: Web Programming */}
            {courseId === 'cst336' && (
                <div style={{ marginTop: '20px' }}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => handleNavigation(course.extraLink)}
                    >
                        Repo to Web Programming Project
                    </Button>
                </div>
            )}

            {/* Navigation button back to Courses */}
            <Button 
                variant="outlined" 
                color="secondary" 
                sx={{ marginTop: '20px' }} 
                onClick={() => navigate('/webdesign')}
            >
                Back to Courses
            </Button>
        </div>
    );
}

export default CoursePage;
