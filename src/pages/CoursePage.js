import React from 'react';
import { useParams } from 'react-router-dom';

// Course data array (could also be fetched from an API)
const courseData = [
    { id: 'cst300', name: 'CST 300: Major ProSeminar', description: 'Must receive a grade of C- or higher', term: 'Spring 2023 - Term A', credits: 4 },
    { id: 'cst338', name: 'CST 338: Software Design', description: 'Must receive a grade of C- or higher', term: 'Spring 2023 - Term B', credits: 4 },
    { id: 'cst363', name: 'CST 363: Database Management', description: '', term: 'Summer 2023 - Term A', credits: 4 },
    { id: 'cst334', name: 'CST 334: Operating Systems', description: 'CST 237 is a prerequisite', term: 'Summer 2023 - Term B', credits: 4 },
    { id: 'cst311', name: 'CST 311: Introduction to Computer Networking', description: '', term: 'Fall 2023 - Term A', credits: 4 },
    { id: 'cst336', name: 'CST 336: Internet Programming', description: '', term: 'Fall 2023 - Term B', credits: 4 },
    { id: 'cst370', name: 'CST 370: Algorithms', description: 'MATH 170 is a prerequisite', term: 'Spring 2024 - Term A', credits: 4 },
    { id: 'cst462s', name: 'CST 462S: Race, Gender, Class in the Digital World AND CST 328: Digital Art and Design', description: 'Doubling up', term: 'Spring 2024 - Term B', credits: 6 },
    { id: 'cst383', name: 'CST 383: Introduction to Data Science', description: '', term: 'Summer 2024 - Term A', credits: 4 },
    { id: 'cst438', name: 'CST 438: Software Engineering', description: 'CST 338 is a prerequisite', term: 'Summer 2024 - Term B', credits: 4 },
    { id: 'cst329', name: 'CST 329: Reasoning with Logic AND CST 489: Capstone Project Planning', description: 'Doubling up', term: 'Fall 2024 - Term A', credits: 4 },
    { id: 'cst499', name: 'CST 499: Directed Group Capstone', description: '', term: 'Fall 2024 - Term B', credits: 4 }
];

function CoursePage() {
    const { courseId } = useParams();

    // Find the course data by matching the courseId from the URL
    const course = courseData.find(course => course.id === courseId);

    // Render the course data if found, otherwise render a "Not Found" message
    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div>
            <h1>{course.name}</h1>
            <p>{course.description}</p>
            <p><strong>Credits:</strong> {course.credits}</p>
            <p><strong>Term:</strong> {course.term}</p>
        </div>
    );
}

export default CoursePage;
