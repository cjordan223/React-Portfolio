//src/pages/CoursePage.js
import React, { useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import { Button, Accordion, AccordionSummary, AccordionDetails, Typography }  from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Carousel } from 'react-responsive-carousel';  // You can use this library or another for the carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import NotebookViewer2 from '../components/Projects/Notebooks/NotebookViewer2';
import NotebookViewer3 from '../components/Projects/Notebooks/NotebookViewer3';

const courseData = [
    {
        id: 'cst300',
        name: 'CST 300: Major ProSeminar',
        description: 'Students learn professional writing, presentation, research, and critical-thinking skills within the diversified fields of computer science and communication design. This class also helps students identify and articulate personal, professional, and social goals while further practicing their problem-solving, collaboration, and community-building skills. Students will demonstrate competence in writing skills at the upper division level.',
        term: 'Spring 2023 - Term A',
        credits: 4,
        personalNote: 'This class served primarily as an introduction to the program, focusing on planning and preparedness for what would become a very fast-paced and comprehensive journey. We covered essential skills like professional writing, presentation, and research, which laid a strong foundation for the rest of the coursework. One aspect that stood out to me was when I revisited my final ethics paper; it was fascinating to see how artificial intelligence was just starting to gain significant traction in public discussions back then. Now, AI has become an integral part of many industries, and its rapid advancement continues to shape our world.',
    },
    {
        id: 'cst338',
        name: 'CST 338: Software Design',
        description: 'This is an intermediate-level programming course covering techniques for developing large-scale software systems using object-oriented programming. Coverage includes software development life cycle models, requirements analysis, and graphical user interface development.',
        term: 'Spring 2023 - Term B',
        personalNote: 'This was the first technical course in the program and it largely served as an introduction to the software development lifecycle and programming best practices. We primarily used Java and IntelliJ IDEA to construct our programs, which helped solidify our understanding of object-oriented programming concepts. The course culminated in a final project developed in Android Studio. For my final project, I built a list-making app with basic CRUD (Create, Read, Update, Delete) functionality, all built in Java for the Android platform. This project allowed me to apply the principles we learned and gave me hands-on experience with mobile app development.',
        credits: 4,
      
    },  
    {
        id: 'cst363',
        name: 'CST 363: Database Management',
        description: 'Provides balanced coverage of database use and design, focusing on relational databases. Students will learn to design relational schemas, write SQL queries, access a DB programmatically, and perform database administration.',
        term: 'Summer 2023 - Term A',
        credits: 4,
        personalNote: 'This course was extremely useful, especially since I was simultaneously working on real-world systems and databases at my job. While I had some familiarity with SQL prior to the course, I gained a much deeper understanding of its utility and the principles of database management. We built a custom schema for a fictional pharmacy service, which involved handling both back-end and front-end web requests for different types of users. This project was particularly significant to me because it was the first one I felt truly proud of and believed deserved its own showcase. It allowed me to apply theoretical concepts to a practical application, reinforcing my learning and boosting my confidence in database design and management. Below, you will see my team hand built a database schema for this fake pharmacy, we then implemented it in a spring application and compiled our findings.'
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
        personalNote: 'This course marked the point where I began to notice how closely my day-to-day job and my evening studies aligned. We covered a wide range of concepts, including server and client programming, Python scripting, network security, and the various layers of security protocols. One of the most practical skills I gained was creating security certificates from scratch using the command line. Interestingly, I had to use this exact skill at work just two days after learning it in class when we encountered an expired certificate issue. The course also introduced me to Docker, and under the professor\'s recommendation, I used it for several applications. This not only helped me understand containerization but also made me more comfortable deploying and managing applications in isolated environments. Overall, the course significantly enhanced my understanding of computer networking and its real-world applications. I also became very familiar with mininet and UTM for creation of virtual environments and machines, where I could test different networks and scenarios. This was a great intro to UTM as I would end up using it extensively for Kali Linux pen testing, which was a very natural transition.'
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
        personalNote: 'In this course, we explored various data structures and algorithms over eight intensive weeks. We covered different sorting and searching methods, such as quicksort, mergesort, and binary search, as well as more complex algorithms like graph traversal and dynamic programming. To keep track of my progress and have a central place to revisit the material, I created a GitHub repository containing all the problems and solutions we worked on. This repository has been an invaluable resource for me to revisit key algorithm concepts later on, especially when preparing for technical interviews or tackling complex coding challenges. The course significantly improved my problem-solving skills and my understanding of how to write efficient, optimized code. DSA has a reputation in my area of study for being extremely important, and I can see why. After taking this course there is a tangible difference in how I internally process problems and approach solutions. This applies not just to SWE but to my career in general.'
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
        personalNote: ''
    },

];

function CoursePage() {
    const { courseId } = useParams();
    const course = courseData.find(course => course.id === courseId);
    const [showSchema, setShowSchema] = useState(false);  // State for toggling schema visibility
    const [showRequirements, setShowRequirements] = useState(false);  // State for toggling requirements dropdown

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div style={{
            padding: '20px',
            maxWidth: '900px',
            margin: 'auto',
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '8px'
        }}>
            <Typography variant="h4" gutterBottom>{course.name}</Typography>
            <Typography variant="body2">{course.description}</Typography>
            <Typography variant="body2"><strong>Credits:</strong> {course.credits}</Typography>
            <Typography variant="body2"><strong>Term:</strong> {course.term}</Typography>
            {course.id !== 'cst329' && (
                <Typography variant="body2"><strong>Grade Earned:</strong> A</Typography>
            )}

            {/* Personal note section */}
            {course.personalNote && (
                <>
                    <Typography variant="h6" style={{ marginTop: '20px' }}>Personal Reflection</Typography>
                    <Typography variant="body1" style={{ marginBottom: '20px' }}>{course.personalNote}</Typography>
                </>
            )}

                            {/* Conditional rendering for CST300 */}
            {course.id === 'cst300' && (
                <>
                   <iframe 
                        src="https://drive.google.com/file/d/1GFnGgVgIs6jKuQoQjwnD0zGaYKPJO33-/preview" 
                        width="100%" 
                        height="800px" 
                        style={{ border: '1px solid #ccc', borderRadius: '4px', marginTop: '10px' }}
                        title="EA_CJFINAL"
                    ></iframe>
                    <Typography variant="body2" style={{ marginTop: '20px' }}>
                        Generative AI exploded during this time. 
                    </Typography>
                    <img src="https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d70e/66477d248e720545e7e3e4a7_40f1c03d-f1ee-4fda-9af8-594e0c35d70c.jpeg" alt="Ethics Paper" style={{ width: '100%', height: 'auto', marginTop: '10px' }} />
                    <Typography variant="body2" style={{ marginTop: '20px' }}>
                    <strong>Source: Synthesia.io</strong>
                    </Typography>

                    </>
            )}
                  {/* Conditional rendering for CST336 (Web Programming) */}
                  {course.id === 'cst336' && (
                <>
                    <Typography variant="body2" style={{ marginTop: '20px' }}>
                        This was my final project, built with Node.js and Express in 2 hours. It received full marks and all extra credit requirements.
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        href="https://github.com/cjordan223/Web-programming-final"
                        style={{ marginTop: '10px' }}
                        target="_blank"
                    >
                        View Final Project Repo
                    </Button>

                    {/* Dropdown for Project Requirements */}
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => setShowRequirements(!showRequirements)}
                        style={{ marginTop: '10px' }}
                    >
                        {showRequirements ? 'Hide Project Requirements' : 'Show Project Requirements'}
                    </Button>

                    {showRequirements && (
  <Typography variant="body2" style={{
      backgroundColor: '#f5f5f5',
      padding: '10px',
      borderRadius: '4px',
      whiteSpace: 'pre-wrap',
      marginTop: '10px'
  }}>
{`1. The Home page lists all variants retrieved from the database ordered by most recently detected.
   - 20 pts: Full Marks
 
2. In the Home page, the variant name, description, classification, classification attributes, and variant image are displayed when clicking on a variant.
   - 30 pts: Full Marks
 
3. In the Home page, the variant information is displayed in a Modal window using a two-column layout.
   - 15 pts: Full Marks
 
4. The Add Variant page allows users to add a new variant into the database. The values for the "Classification" dropdown menu come from the database.
   - 30 pts: Full Marks
 
5. The Update Variant page allows users to update the "country_first_detected" and "classification_id" fields. Fields are pre-populated. The Classification values come from the database.
   - 30 pts: Full Marks
 
6. The Trivia page displays a variant name randomly retrieved from the database, and the Country values come from the database.
   - 20 pts: Full Marks
 
7. In the Trivia page, the question is graded through a Web API, and color-coded feedback is displayed.
   - 30 pts: Full Marks
 
8. All pages use Partials to display a header, a banner image, a navigation menu, and a footer.
   - 15 pts: Full Marks
 
9. Your submission has a nice style using Bootstrap or CSS in an external file with at least 10 properties.
   - 10 pts: Full Marks
 
10. This rubric is properly included and updated.
    - 2 pts: Full Marks
 `}
  </Typography>
)}


                    {/* Note and Screenshot for Group Project */}
                    <Typography variant="body2" style={{ marginTop: '20px' }}>
                        Honorable Mention: This screenshot was taken from our final group project, where we used a movie API to build custom playlists. Users were tracked in a database to persist their data across sessions.
                    </Typography>
                    <iframe 
                        src="https://drive.google.com/file/d/1SwKWffWrrnDgvnezKTod71p6_F_weQGg/preview" 
                        width="100%" 
                        height="400px" 
                        style={{ border: '1px solid #ccc', borderRadius: '4px', marginTop: '10px' }}
                        title="Group Project Screenshot"
                    ></iframe>
                </>
            )}

            {/* Conditional rendering for CST363 (Databases) */}
            {course.id === 'cst363' && (
                <>
                    
                    {/* Dropdown for Database Schema */}
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => setShowSchema(!showSchema)}
                        style={{ marginBottom: '10px' }}
                    >
                        {showSchema ? 'Hide Schema' : 'Show Full Schema'}
                    </Button>

                    {showSchema && (
                        <pre style={{
                            backgroundColor: '#f5f5f5',
                            padding: '10px',
                            borderRadius: '4px',
                            whiteSpace: 'pre-wrap',
                            maxHeight: '300px',
                            overflowY: 'scroll'
                        }}>
                            <code>
{`-- This script creates a HospitalDB database and defines several tables: Doctor, Patient, Drug, Pharmacy, and Prescription.

-- Drop the HospitalDB database if it already exists to start fresh.
DROP DATABASE IF EXISTS HospitalDB;

-- Create the HospitalDB database.
CREATE DATABASE HospitalDB;

-- Switch to using the HospitalDB database.
USE HospitalDB;

-- Create the Doctor table.
-- This table stores information about doctors.
CREATE TABLE Doctor
(
    ID             INT AUTO_INCREMENT PRIMARY KEY,                                    -- Unique identifier for each doctor (auto-incremented).
    last_name      VARCHAR(50) NOT NULL,                                              -- Last name of the doctor.
    first_name     VARCHAR(50) NOT NULL,                                              -- First name of the doctor.
    practice_since INT(4)      NOT NULL CHECK (practice_since BETWEEN 1900 AND 2022), -- Year the doctor started practicing.
    specialty      VARCHAR(50) NOT NULL,                                              -- Medical specialty of the doctor.
    ssn            VARCHAR(20) NOT NULL UNIQUE,                                       -- Social Security Number of the doctor.
    INDEX (ssn)                                                                       -- Indexing the ssn column for efficient queries.
);

-- Create the Patient table.
-- This table stores information about patients.
CREATE TABLE Patient
(
    patientId   INT          NOT NULL AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each patient (auto-incremented).
    last_name   VARCHAR(255) NOT NULL,                            -- Last name of the patient.
    first_name  VARCHAR(255) NOT NULL,                            -- First name of the patient.
    birthdate   DATE         NOT NULL,                            -- Birthdate of the patient.
    ssn         VARCHAR(20)  NOT NULL UNIQUE,                     -- Social Security Number of the patient.
    street      VARCHAR(255) NOT NULL,                            -- Street address of the patient.
    city        VARCHAR(255) NOT NULL,                            -- City of the patient.
    state       VARCHAR(255) NOT NULL,                            -- State of the patient.
    zipcode     VARCHAR(10)  NOT NULL,                            -- Zip code of the patient.
    primaryName VARCHAR(255) NOT NULL,                            -- Primary name of the patient.
    INDEX (ssn)                                                   -- Indexing the ssn column for efficient queries.
);

-- Create the Drug table.
-- This table stores information about drugs.
CREATE TABLE drug
(
    drug_id    int(11)      NOT NULL, -- Unique identifier for each drug.
    trade_name varchar(100) NOT NULL, -- Trade name of the drug.
    formula    varchar(200) NOT NULL, -- Chemical formula of the drug.
    PRIMARY KEY (drug_id)             -- Primary key constraint on the drug_id column.
);

-- Insert data into the Drug table.
-- This inserts sample drug records.
INSERT INTO drug
VALUES (1, 'Tylenol with Codeine', 'acetaminophen and codeine'),
       (2, 'Proair Proventil', 'albuterol aerosol'),
       (3, 'Accuneb', 'albuterol HFA'),
       (4, 'Fosamax', 'alendronate'),
       (5, 'Zyloprim', 'allopurinol'),
       (6, 'Xanax', 'alprazolam'),
       (7, 'Elavil', 'amitriptyline'),
       (8, 'Augmentin', 'amoxicillin and clavulanate K+'),
       (9, 'Amoxil', 'amoxicillin'),
       (10, 'Adderall XR', 'amphetamine and dextroamphetamine XR'),
       (11, 'Tenormin', 'atenolol'),
       (12, 'Lipitor', 'atorvastatin'),
       (13, 'Zithromax', 'azithromycin'),
       (14, 'Lotrel', 'benazepril and amlodipine'),
       (15, 'Soma', 'carisoprodol'),
       (16, 'Coreg', 'carvedilol'),
       (17, 'Omnicef', 'cefdinir'),
       (18, 'Celebrex', 'celecoxib'),
       (19, 'Keflex', 'cephalexin'),
       (20, 'Cipro', 'ciprofloxacin'),
       (21, 'Celexa', 'citalopram'),
       (22, 'Klonopin', 'clonazepam'),
       (23, 'Catapres', 'clonidine HCl'),
       (24, 'Plavix', 'clopidogrel'),
       (25, 'Premarin', 'conjugated estrogens'),
       (26, 'Flexeril', 'cyclobenzaprine'),
       (27, 'Valium', 'diazepam'),
       (28, 'Voltaren', 'diclofenac sodium'),
       (29, 'Yaz', 'drospirenone and ethinyl estradiol'),
       (30, 'Cymbalta', 'Duloxetine'),
       (31, 'Vibramycin', 'doxycycline hyclate'),
       (32, 'Vasotec', 'enalapril'),
       (33, 'Lexapro', 'escitalopram'),
       (34, 'Nexium', 'esomeprazole'),
       (35, 'Zetia', 'ezetimibe'),
       (36, 'Tricor', 'fenofibrate'),
       (37, 'Allegra', 'fexofenadine'),
       (38, 'Diflucan', 'fluconozole'),
       (39, 'Prozac', 'fluoxetine HCl'),
       (40, 'Advair', 'fluticasone and salmeterol inhaler'),
       (41, 'Flonase', 'fluticasone nasal spray'),
       (42, 'Folic Acid', 'folic acid'),
       (43, 'Lasix', 'furosemide'),
       (44, 'Neurontin', 'gabapentin'),
       (45, 'Amaryl', 'glimepiride'),
       (46, 'Diabeta', 'glyburide'),
       (47, 'Glucotrol', 'glipizide'),
       (48, 'Microzide', 'hydrochlorothiazide'),
       (49, 'Lortab', 'hydrocodone and acetaminophen'),
       (50, 'Motrin', 'ibuprophen'),
       (51, 'Lantus', 'insulin glargine'),
       (52, 'Imdur', 'isosorbide mononitrate'),
       (53, 'Prevacid', 'lansoprazole'),
       (54, 'Levaquin', 'levofloxacin'),
       (55, 'Levoxl', 'levothyroxine sodium'),
       (56, 'Zestoretic', 'lisinopril and hydrochlorothiazide'),
       (57, 'Prinivil', 'lisinopril'),
       (58, 'Ativan', 'lorazepam'),
       (59, 'Cozaar', 'losartan'),
       (60, 'Mevacor', 'lovastatin'),
       (61, 'Mobic', 'meloxicam'),
       (62, 'Glucophage', 'metformin HCl'),
       (63, 'Medrol', 'methylprednisone'),
       (64, 'Toprol', 'metoprolol succinate XL'),
       (65, 'Lopressor', 'metoprolol tartrate'),
       (66, 'Nasonex', 'mometasone'),
       (67, 'Singulair', 'montelukast'),
       (68, 'Naprosyn', 'naproxen'),
       (69, 'Prilosec', 'omeprazole'),
       (70, 'Percocet', 'oxycodone and acetaminophen'),
       (71, 'Protonix', 'pantoprazole'),
       (72, 'Paxil', 'paroxetine'),
       (73, 'Actos', 'pioglitazone'),
       (74, 'Klor-Con', 'potassium Chloride'),
       (75, 'Pravachol', 'pravastatin'),
       (76, 'Deltasone', 'prednisone'),
       (77, 'Lyrica', 'pregabalin'),
       (78, 'Phenergan', 'promethazine'),
       (79, 'Seroquel', 'quetiapine'),
       (80, 'Zantac', 'ranitidine'),
       (81, 'Crestor', 'rosuvastatin'),
       (82, 'Zoloft', 'sertraline HCl'),
       (83, 'Viagra', 'sildenafil HCl'),
       (84, 'Vytorin', 'simvastatin and ezetimibe'),
       (85, 'Zocor', 'simvastatin'),
       (86, 'Aldactone', 'spironolactone'),
       (87, 'Bactrim DS', 'sulfamethoxazole and trimethoprim DS'),
       (88, 'Flomax', 'tamsulosin'),
       (89, 'Restoril', 'temezepam'),
       (90, 'Topamax', 'topiramate'),
       (91, 'Ultram', 'tramadol'),
       (92, 'Aristocort', 'triamcinolone Ace topical'),
       (93, 'Desyrel', 'trazodone HCl'),
       (94, 'Dyazide', 'triamterene and hydrochlorothiazide'),
       (95, 'Valtrex', 'valaciclovir'),
       (96, 'Diovan', 'valsartan'),
       (97, 'Effexor XR', 'venlafaxine XR'),
       (98, 'Calan SR', 'verapamil SR'),
       (99, 'Ambien', 'zolpidem');

-- Create the Pharmacy table.
-- This table stores information about pharmacies.
CREATE TABLE Pharmacy
(
    PharmacyId  INT(8) PRIMARY KEY AUTO_INCREMENT, -- Unique identifier for each pharmacy (auto-incremented).
    Name        VARCHAR(50) NOT NULL,              -- Name of the pharmacy.
    Address     VARCHAR(50) NOT NULL,              -- Address of the pharmacy.
    PhoneNumber VARCHAR(20) NOT NULL,              -- Phone number of the pharmacy.
    INDEX (Name)                                   -- Indexing the Name column for efficient queries.
);

-- Insert data into the Pharmacy table.
-- This inserts sample pharmacy records.
INSERT INTO Pharmacy (Name, Address, PhoneNumber)
VALUES ('ABC Pharmacy', '123 Main Street', '555-1234'),
       ('XYZ Pharmacy', '456 Elm Avenue', '555-5678'),
       ('123 Pharmacy', '789 Oak Lane', '555-9101'),
       ('MediCare Pharmacy', '321 Pine Road', '555-1213'),
       ('QuickMeds', '987 Cedar Street', '555-1415');

-- Create the Prescription table.
-- This table stores information about prescriptions.
CREATE TABLE Prescription
(
    RXNumber            INT PRIMARY KEY AUTO_INCREMENT,             -- Unique identifier for each prescription (auto-incremented).
    DrugName            VARCHAR(255) NOT NULL,                      -- Name of the prescribed drug.
    Quantity            INT          NOT NULL CHECK (Quantity > 0), -- Quantity of the drug prescribed.
    Patient_SSN         VARCHAR(20)  NOT NULL,                      -- Social Security Number of the patient.
    PatientFirstName    VARCHAR(255) NOT NULL,                      -- First name of the patient.
    PatientLastName     VARCHAR(255) NOT NULL,                      -- Last name of the patient.
    Doctor_SSN          VARCHAR(20)  NOT NULL,                      -- Social Security Number of the doctor.
    DoctorFirstName     VARCHAR(255) NOT NULL,                      -- First name of the doctor.
    DoctorLastName      VARCHAR(255) NOT NULL,                      -- Last name of the doctor.
    PharmacyId          INT(8)      DEFAULT NULL,                   -- Pharmacy identifier for the prescription.
    PharmacyName        VARCHAR(50) DEFAULT NULL,                   -- Name of the pharmacy where the prescription was filled.
    PharmacyAddress     VARCHAR(50) DEFAULT NULL,                   -- Address of the pharmacy where the prescription was filled.
    PharmacyPhoneNumber VARCHAR(20) DEFAULT NULL,                   -- Phone number of the pharmacy where the prescription was filled.
    DateFilled          DATE        DEFAULT NULL,                   -- Date when the prescription was filled.
    FOREIGN KEY (Patient_SSN) REFERENCES Patient (ssn),             -- Foreign key constraint referencing the Patient table.
    FOREIGN KEY (Doctor_SSN) REFERENCES Doctor (ssn),               -- Foreign key constraint referencing the Doctor table.
    FOREIGN KEY (PharmacyId) REFERENCES Pharmacy (pharmacyid)       -- Foreign key constraint referencing the Pharmacy table.
);

-- Select all rows from the Doctor table.
SELECT *
FROM Doctor;

-- Select all rows from the Patient table.
SELECT *
FROM Patient;

-- Select all rows from the Prescription table.
SELECT *
FROM Prescription;

-- Select all rows from the Pharmacy table.
SELECT *
FROM Pharmacy;

`}
                            </code>
                        </pre>
                    )}

                    {/* Link to Spring Application Repo */}
                    <Typography variant="body2" style={{ marginTop: '20px' }}>
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        href="https://github.com/cjordan223/Database-Final"
                        style={{ marginTop: '10px' }}
                        target="_blank"
                    >
                        View Spring Application Repo
                    </Button>

                    {/* Final Submission (Google Doc iframe) */}
                    <Typography variant="body2" style={{ marginTop: '20px' }}>
                        Final Findings
                    </Typography>
                    <iframe 
                        src="https://drive.google.com/file/d/1sI1T42AtSuctRomlo6PXTkzmCJCchCZj/preview" 
                        width="100%" 
                        height="900px" 
                        style={{ border: '1px solid #ccc', borderRadius: '4px' }}
                        title="Final Submission"
                    ></iframe>
                        <Typography variant="body2" style={{ marginTop: '20px' }}>
                        (credit to N. Nawrocki for significant contributions to this document)
                    </Typography>
                </>
            )}
             {/* Conditional rendering for CST438 (Software Engineering) */}
             {course.id === 'cst438' && (
                <>
                    <Typography variant="h6" style={{ marginTop: '20px' }}>
Final Project                    </Typography>
                    <p>We developed a full-service registrar system that handled student, admin, and instructor operations, complete with secure data handling and role-based functionality.
                    We secured the entire application using JWT (JSON Web Token) for sign-on, ensuring user authentication and authorization were fully locked down.
                        Chromedriver was implemented for Selenium testing to ensure automated testing of UI components.
                        On the backend, we set up comprehensive unit testing to validate each function and endpoint.
                        During the final stages, we faced several merge conflicts in Git, which had to be resolved at the last minute, adding to the complexity of the project.
                        Postman was invaluable for testing and troubleshooting API endpoints that the frontend couldn't see or access, ensuring smooth communication between the front and back end.
                        
                    </p>

                    {/* Front End and Back End Repo Links */}
                    <Typography variant="h6" style={{ marginTop: '20px' }}>Repositories:</Typography>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            href="https://github.com/cjordan223/cst438_Assignment3"
                            target="_blank"
                            style={{ flex: 1 }}
                        >
                            View Front End Repo
                        </Button>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            href="https://github.com/cjordan223/CST438-Assignment2/"
                            target="_blank"
                            style={{ flex: 1 }}
                        >
                            View Back End Repo
                        </Button>
                    </div>

                    {/* Embedded SRS Document */}
                    <Typography variant="h6" style={{ marginTop: '20px' }}>SRS:</Typography>
                    <iframe 
                        src="https://drive.google.com/file/d/1b7quP2i_la1p6O8vwE_39JpEkyJJYrwj/preview" 
                        width="100%" 
                        height="900px" 
                        style={{ border: '1px solid #ccc', borderRadius: '4px', marginTop: '10px' }}
                        title="SRS Document"
                    ></iframe>
                </>
            )}
                        {/* Conditional rendering for CST370 (Data Structures & Algorithms) */}
                        {course.id === 'cst370' && (
                <>
                    <Typography variant="body1" style={{ marginTop: '20px' }}>
                        You can view all of the types of problems I worked with in this course on 
                        the projects page by going to <strong>Programming Projects > Data Structures & Algorithms </strong>.
                    </Typography>
                  
                    {/* Link to DSA Collection Repo */}
                    <Typography variant="body2" style={{ marginTop: '20px' }}>
                        You can also directly explore the repository here:
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        href="https://github.com/cjordan223/DSA-collection"
                        style={{ marginTop: '10px' }}
                        target="_blank"
                    >
                        View DSA Collection Repo
                    </Button>
                </>
            )}
                                    {/* Conditional rendering for CST334) */}
                                    {course.id === 'cst334' && (
                <>
                   
                    {/* Link to DSA Collection Repo */}
                    <Typography variant="body2" style={{ marginTop: '20px' }}>
                    <strong> Repository of OS programming from this semester: </strong>
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        href="https://github.com/cjordan223/Operating-Systems"
                        style={{ marginTop: '10px' }}
                        target="_blank"
                    >
                        OS Programming
                    </Button>
                </>
            )}
                {/* Conditional rendering for CST462S (Social Media Content and Game Design) */}
            {course.id === 'cst462s' && (
                <>
                    <Typography variant="h6" style={{ marginTop: '20px' }}>Custom Learning Content for LFC Social Media</Typography>

                    {/* Carousel of Thumbnails */}
                    <div style={{ width: '50%', margin: '0 auto' }}> {/* Adjust the width as needed */}
                    <Carousel showThumbs={true} infiniteLoop={true} autoPlay={true} interval={3000} showStatus={false}>
                            {Array.from({ length: 15 }, (_, i) => (
                                <div key={i}>
                                    <img src={`/img/LFC/${i + 1}.png`} alt={`LFC Thumbnail ${i + 1}`} />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    {/* Video Game Demo */}
                    <Typography variant="h6" style={{ marginTop: '20px' }}>Video Game Demo</Typography>
                    <Typography variant="body2">
I took a basic walking sim package in Unity and imported custom made skyscapes to create a darker vibe, and added some SFX. Added some additional features with Java scripting.                   </Typography>
                    <iframe 
                        src="https://drive.google.com/file/d/102L0jtOt3eSYp3nxgkIPZj7cktktVBrh/preview" 
                        width="100%" 
                        height="400px" 
                        style={{ border: '1px solid #ccc', borderRadius: '4px', marginTop: '10px' }}
                        title="Video Game Demo"
                    ></iframe>

                    {/* Figma Wireframe Prototype */}
                    <Typography variant="h6" style={{ marginTop: '20px' }}>Figma Wireframe Prototype for Nature App</Typography>
                    <Typography variant="body2">
                        This is a complete prototype for a mobile application. Initially, it started as a web app, but the design was refined over 3 weeks to accommodate primarily mobile users.
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        href="https://www.figma.com/proto/xItnBUg3kMMKbM7dCM3bx8/VenturePal?node-id=11-20&starting-point-node-id=2%3A2"
                        style={{ marginTop: '10px' }}
                        target="_blank"
                    >
                        View Figma Wireframe
                    </Button>
                    <img src="public/img/StarlitState.jpg" alt="" style={{ width: '100%', height: 'auto', marginTop: '10px' }} />                    

                    </>
                    
             )}

             {/* Conditional rendering for CST311 (Networking) */}
            {course.id === 'cst311' && (
                <>
                    {/* Link to Network Final Repo for Certificate Creation */}
                    <Typography variant="body2" style={{ marginTop: '20px' }}>
                        This repository contains the code for secure certificate creation for client-server communication.
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        href="https://github.com/cjordan223/Network-Final"
                        style={{ marginTop: '10px' }}
                        target="_blank"
                    >
                        View Network Final Repo
                    </Button>

                    {/* Embedded PDF */}
                    <Typography variant="body2" style={{ marginTop: '20px' }}>
                        You can view the final PDF document below:
                    </Typography>
                    <iframe 
                        src="https://drive.google.com/file/d/1mSvaaPbFl4atX8pfJCquC0R8G8lugdlI/preview" 
                        width="100%" 
                        height="800px" 
                        style={{ border: '1px solid #ccc', borderRadius: '4px' }}
                        title="CST311 Final PDF"
                    ></iframe>
                </>
            )}

            {/* Conditional rendering for CST329 (Logic and Capstone Prep) */}
            {course.id === 'cst329' && (
                <>
                    <Typography variant="body2" style={{ marginTop: '20px' }}>
                        In this class, we focused on propositional and first-order logical proofs. Although there wasn't any programming involved, I believe it was a necessary course. As we completed the final course in the program, we were concurrently enrolled in a capstone preparation class. There, we began developing our capstone projects, finalizing our proposals, and outlining project objectives. Our team decided to create a web extension that can assist in analyzing potentially malicious emails, specifically targeting a subset of emails that use generative AI to create sophisticated spear-phishing attempts. Development on this project has already begun.
                    </Typography>

                    {/* Embedded Proposal Document */}
                    <Typography variant="h6" style={{ marginTop: '20px' }}>Capstone Project Proposal Document:</Typography>
                    <iframe 
                        src="https://drive.google.com/file/d/1yn_T5lA9VhHpSVFNKlHk4O9A4bDxa9qZ/preview" 
                        width="100%" 
                        height="800px" 
                        style={{ border: '1px solid #ccc', borderRadius: '4px', marginTop: '10px' }}
                        title="Capstone Project Proposal Document"
                    ></iframe>
{/* 
        Embedded YouTube Video*/}
   {/*     <Typography variant="h6" style={{ marginTop: '20px' }}>Capstone Project Overview Video:</Typography>
        <iframe 
            width="100%" 
            height="500px" 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            title="Capstone Project Overview Video"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            style={{ borderRadius: '4px', marginTop: '10px' }}
        ></iframe> */}
                </>
            )}
            {/* Conditional rendering for CST383 (Data Science) */}
            {course.id === 'cst383' && (
                <>
                    <Typography variant="body2" style={{ marginTop: '20px' }}>
                        <strong>I enjoyed compiling Jupyter notebooks so much during this class that I created a page dedicated mostly to them in my Data Structures & Algorithms / Data Analysis section! Here's a few:</strong>
                    </Typography>
                   

                    {/* Additional Notebooks Section using MUI Accordion */}
                    <Accordion style={{ marginTop: '20px' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Presidential Campaign Data</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <NotebookViewer2 />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ marginTop: '10px' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Student Housing Data (ML)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <NotebookViewer3 />
                        </AccordionDetails>
                    </Accordion>
                </>
            )}

                        {/* Conditional rendering for CST338 */}
                        {course.id === 'cst338' && (
                <>
                    <Typography variant="body1" style={{ marginTop: '20px' }}>
                        During this course, I developed 2 simple projects: the Markov Generator and the Guessing Game, 
                        both of which are featured in the <strong>Projects > Web Applications</strong> section. These projects gave me a basic understanding of software application structure.
                    </Typography>
    

                    <Typography variant="body1" style={{ marginTop: '20px' }}>
                        My final project, an Android Studio list-making application,
                         started as a group project. However, after my partner left the program, I completed it solo.
                          The project provided valuable experience in mobile app development. 
                          I would recommend viewing other projects in my archives for a better picture of app development, this was my first attempt.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        href="https://github.com/cjordan223/List_Assist"
                        style={{ marginTop: '10px' }}
                        target="_blank"
                    >
                        View Final Project Repository
                    </Button>
                </>
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

