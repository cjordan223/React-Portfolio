//src/pages/CoursePage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// Course data array (could also be fetched from an API)
// Course data array (could also be fetched from an API)
const courseData = [
    {
        id: 'cst300',
        name: 'CST 300: Major ProSeminar',
        description: 'Students learn professional writing, presentation, research, and critical-thinking skills within the diversified fields of computer science and communication design. This class also helps students identify and articulate personal, professional, and social goals while further practicing their problem-solving, collaboration, and community-building skills. Students will demonstrate competence in writing skills at the upper division level.',
        term: 'Spring 2023 - Term A',
        credits: 4,
        personalNote: 'This class served primarily as an introduction to the program, focusing on planning and preparedness for what would become a very fast-paced and comprehensive journey. We covered essential skills like professional writing, presentation, and research, which laid a strong foundation for the rest of the coursework. One aspect that stood out to me was when I revisited my final ethics paper; it was fascinating to see how artificial intelligence was just starting to gain significant traction in public discussions back then. Now, AI has become an integral part of many industries, and its rapid advancement continues to shape our world.',
        fileLink: '/public/files/EA_CJFinal.pdf',  // Link to the Ethics Review PDF file
        fileName: 'Ethics Review',
         // Display name for the download button
    },
    {
        id: 'cst338',
        name: 'CST 338: Software Design',
        description: 'This is an intermediate-level programming course covering techniques for developing large-scale software systems using object-oriented programming. Coverage includes software development life cycle models, requirements analysis, and graphical user interface development.',
        term: 'Spring 2023 - Term B',
        personalNote: 'This was the first technical course in the program and it largely served as an introduction to the software development lifecycle and programming best practices. We primarily used Java and IntelliJ IDEA to construct our programs, which helped solidify our understanding of object-oriented programming concepts. The course culminated in a final project developed in Android Studio. For my final project, I undertook a solo effort to build a list-making app with basic CRUD (Create, Read, Update, Delete) functionality, all built in Java for the Android platform. This project allowed me to apply the principles we learned and gave me hands-on experience with mobile app development.',
        credits: 4,
        repoLink: 'https://github.com/cjordan223/List_Assist', // Placeholder for the repository link
        additionalPageLink: '/webapps'
    }, // Placeholder for the additional page link},
    {
        id: 'cst363',
        name: 'CST 363: Database Management',
        description: 'Provides balanced coverage of database use and design, focusing on relational databases. Students will learn to design relational schemas, write SQL queries, access a DB programmatically, and perform database administration.',
        term: 'Summer 2023 - Term A',
        credits: 4,
        personalNote: 'This course was extremely useful, especially since I was simultaneously working on real-world systems and databases at my job. While I had some familiarity with SQL prior to the course, I gained a much deeper understanding of its utility and the principles of database management. We built a custom schema for a fictional pharmacy service, which involved handling both back-end and front-end web requests for different types of users. This project was particularly significant to me because it was the first one I felt truly proud of and believed deserved its own showcase. It allowed me to apply theoretical concepts to a practical application, reinforcing my learning and boosting my confidence in database design and management.'
    },
    {
        id: 'cst334',
        name: 'CST 334: Operating Systems',
        description: 'Students in this course will learn about the use and design of modern operating systems, focusing on Linux. Students will develop a deep understanding of process management, memory management, file systems, and concurrency.',
        term: 'Summer 2023 - Term B',
        credits: 4,
        personalNote: 'This course delved into C programming within the context of system programming, giving me a deeper appreciation for how operating systems function at a low level. Although we didn\'t have a final project, the series of assignments and labs were extremely useful for learning how to navigate the command line and access remote servers. We explored concepts like process management, memory allocation, and concurrency, which are fundamental to understanding modern operating systems. I also became more comfortable with text editors like Vim and Nano; after experimenting with both, I found myself preferring Nano for its simplicity and ease of use. This course significantly improved my proficiency with Linux environments, which has been beneficial in both my academic and professional pursuits.'
    },
    {
        id: 'cst311',
        name: 'CST 311: Introduction to Computer Networking',
        description: 'Survey of Telecomm and Data Comm Technology Fundamentals, Local Area Network, Wide Area Network, Internet and internetworking protocols including TCP/IP, network security and performance, emerging industry trends such as voice over the network and high speed networking.',
        term: 'Fall 2023 - Term A',
        credits: 4,
        personalNote: 'This course marked the point where I began to notice how closely my day-to-day job and my evening studies aligned. We covered a wide range of concepts, including server and client programming, Python scripting, network security, and the various layers of security protocols. One of the most practical skills I gained was creating security certificates from scratch using the command line. Interestingly, I had to use this exact skill at work just two days after learning it in class when we encountered an expired certificate issue. The course also introduced me to Docker, and under the professor\'s recommendation, I used it for several applications. This not only helped me understand containerization but also made me more comfortable deploying and managing applications in isolated environments. Overall, the course significantly enhanced my understanding of computer networking and its real-world applications.'
    },
    {
        id: 'cst336',
        name: 'CST 336: Internet Programming',
        description: 'Provides students with dynamic web application development skills, focusing on the integration of server-side programming, database connectivity, and client-side scripting.',
        term: 'Fall 2023 - Term B',
        credits: 4,
        personalNote: 'Internet Programming was one of the most relevant courses in the program when it came to real-world applications. We took our first deep dive into JavaScript and front-end design, working extensively with basic CSS and HTML. The course provided a solid foundation in understanding the Document Object Model (DOM) and how to manipulate it, which is crucial for dynamic web development. I also learned the importance of console logging for debugging and testing code. These foundational skills made learning modern JavaScript frameworks like React much easier down the line. Additionally, we worked on integrating server-side programming with client-side scripting and database connectivity, which gave me a holistic view of web application development. This course significantly enhanced my ability to develop dynamic, interactive websites and applications.'
    },
    {
        id: 'cst462s',
        name: 'CST 462S: Race, Gender, Class in the Digital World AND CST 328: Digital Art and Design',
        description: 'This course combines social justice themes with digital art and design, offering a chance to explore popular design tools and work on service learning projects.',
        term: 'Spring 2024 - Term B',
        credits: 6,
        personalNote: 'This course was a refreshing change of pace after spending almost a year immersed in pure programming courses. It combined social justice themes with digital art and design, allowing us to explore creative aspects of technology. We worked with Unity, a powerful game development engine, and I had the opportunity to build a concept for a horror explorer game. This project allowed me to delve into game mechanics, level design, and storytelling, which was both challenging and enjoyable. Additionally, as part of the service learning component, I helped develop educational tools for disadvantaged groups in the Monterey Bay area. This experience was incredibly rewarding, as it allowed me to apply my skills to make a positive impact in the community. It also broadened my perspective on how technology can be leveraged to address social issues.'
    },
    {
        id: 'cst370',
        name: 'CST 370: Algorithms',
        description: 'Students learn important data structures in computer science and acquire fundamental algorithm design techniques to efficiently solve various computing problems.',
        term: 'Spring 2024 - Term A',
        credits: 4,
        personalNote: 'In this course, we explored various data structures and algorithms over eight intensive weeks. We covered different sorting and searching methods, such as quicksort, mergesort, and binary search, as well as more complex algorithms like graph traversal and dynamic programming. To keep track of my progress and have a central place to revisit the material, I created a GitHub repository containing all the problems and solutions we worked on. This repository has been an invaluable resource for me to revisit key algorithm concepts later on, especially when preparing for technical interviews or tackling complex coding challenges. The course significantly improved my problem-solving skills and my understanding of how to write efficient, optimized code.'
    },
    {
        id: 'cst383',
        name: 'CST 383: Introduction to Data Science',
        description: 'Provides students with an overview of modern data science tools and best practices, including Jupyter Notebooks, Pandas, Python, and NumPy. This course gives practical exposure to the data science workflow.',
        term: 'Summer 2024 - Term A',
        credits: 4,
        personalNote: 'This course provided an excellent introduction to data science and the tools commonly used in the industry. We worked extensively with Python libraries such as Pandas and NumPy, and learned how to use Jupyter Notebooks for data analysis and visualization. One of the highlights was a project where we analyzed a real-world dataset to uncover meaningful insights and presented our findings to the class. This hands-on experience was invaluable and sparked my interest in pursuing data science further. I also appreciated how the course covered the entire data science workflow, from data cleaning and preprocessing to modeling and interpretation. It has given me a solid foundation to build upon in future projects.',
        extraLink: { url: '/components/Projects/Programming', text: 'Explore Programming Projects', internal: true }
    },
    {
        id: 'cst438',
        name: 'CST 438: Software Engineering',
        description: 'An in-depth study of software engineering principles, including Agile methodologies, software design patterns, project management, and team collaboration. Students will gain experience in developing software projects from conception to deployment.',
        term: 'Summer 2024 - Term B',
        credits: 4,
        personalNote: 'This course was one of the most intensive and rewarding experiences of the program. We delved into advanced software engineering principles, including Agile methodologies, software design patterns, and project management techniques. Working in teams, we developed a full-stack application over the course of the term, applying the concepts we learned in class to a real-world project. This experience not only honed my technical skills but also improved my ability to collaborate effectively in a team setting. I particularly enjoyed learning about test-driven development and continuous integration, which are critical practices in modern software development. This course solidified my interest in pursuing a career in software engineering.'
    },
    {
        id: 'cst329',
        name: 'CST 329: Reasoning with Logic AND CST 489: Capstone Project Planning',
        description: 'In CST 329, students learn to develop skills in using logic to describe and assess arguments, including writing formulas in propositional and first-order logic, and writing and checking proofs. In CST 489, students begin planning their capstone projects, including topic selection, team formation, and project proposal development.',
        term: 'Fall 2024 - Term A',
        credits: 4,
        personalNote: 'This course was a fascinating exploration of logic and its applications in computer science. We developed skills in using logic to describe and assess arguments, working with propositional and first-order logic. Writing and checking proofs became a significant part of our assignments, which helped sharpen our analytical thinking. We also learned about three-valued and modal logic, understanding how to choose the appropriate logic for different scenarios and the limitations of logic in capturing human reasoning. Simultaneously, we began planning our capstone projects in CST 489. This involved selecting topics, forming teams, and outlining our project proposals. The combination of logical reasoning and project planning was both challenging and stimulating, setting the stage for our final capstone project. It was exciting to see how the skills we acquired would directly contribute to the success of our capstone.'
    },
    {
        id: 'cst499',
        name: 'CST 499: Directed Group Capstone',
        description: 'Students work in teams to create a substantial, professional-level project from proposal to completion, applying project planning, collaboration, and technical skills required in the industry.',
        term: 'Fall 2024 - Term B',
        credits: 4,
        personalNote: 'The capstone project was the culmination of everything we had learned throughout the program. Working in a team, we developed a substantial, professional-level project from conception to completion. We applied project planning, collaboration, and technical writing skills, mirroring industry practices. Our team decided to create a web application that addressed a real-world problem, which required us to integrate multiple technologies and coordinate our efforts closely. This experience was incredibly rewarding and provided a taste of what to expect in a professional software development environment. Presenting our final project to faculty and peers was a proud moment, showcasing the skills and knowledge we had acquired during our studies.'
    }
];

function CoursePage() {
    const { courseId } = useParams();
    const course = courseData.find(course => course.id === courseId);

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div style={{
            padding: '20px',
            maxWidth: '800px',
            margin: 'auto',
            backgroundColor: 'white',
            color: 'black',
            border: '2px solid blue',
            borderRadius: '8px'
        }}>
            <Typography variant="h4" gutterBottom>{course.name}</Typography>
            <Typography variant="body1">{course.description}</Typography>
            <Typography variant="body2"><strong>Credits:</strong> {course.credits}</Typography>
            <Typography variant="body2"><strong>Term:</strong> {course.term}</Typography>
            <Typography variant="body2"><strong>Grade Earned:</strong> A</Typography>

            {/* Personal note section */}
            {course.personalNote && (
                <>
                    <Typography variant="h6" style={{ marginTop: '20px' }}>Personal Reflection</Typography>
                    <Typography variant="body2" style={{ marginBottom: '20px' }}>{course.personalNote}</Typography>
                </>
            )}

            {/* Repository link button, if applicable */}
            {course.repoLink && (
                <Button 
                    variant="contained" 
                    color="primary" 
                    href={course.repoLink} 
                    style={{ marginTop: '10px' }}
                >
                    Visit Repository
                </Button>
            )}

            {/* Additional page link button, if applicable */}
            {course.additionalPageLink && (
                <Button 
                    variant="contained" 
                    color="secondary" 
                    href={course.additionalPageLink} 
                    style={{ marginTop: '10px' }}
                >
                    Visit Additional Page
                </Button>
            )}

            <div style={{ marginTop: '20px' }}>
                <Button 
                    variant="outlined" 
                    color="secondary" 
                    fullWidth
                    component={Link} 
                    to="/webdesign"
                >
                    Back to Courses
                </Button>
            </div>
        </div>
    );
}

export default CoursePage;

