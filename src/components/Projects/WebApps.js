import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import '../ComponentStyles/WebApps.css'
import { FaGithub } from "react-icons/fa";


function WebApps() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const navigate = useNavigate();

      const projects = [
        {
            name: "Weather Wise",
            description: "This is an application I built for a web programming class. It uses a free API to gather weather data and display it in a user friendly interface. " +
                "It can take Zip Code, City, County, Coordinates, and other data types as input. Enter 'Admin' and '1234' for username and password if visiting the live site" ,
            image: "https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg",
            path: "https://github.com/cjordan223/WeatherWise-Code",
            site: "https://cjordan223.github.io/WeatherWise/"
        },
    {
            name: "Guessr",
            description: "Simple puzzle game with JS. Its Wordle, basically.",
            image: "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg",
            path: "https://github.com/cjordan223/Guessr",
            site: "https://cjordan223.github.io/Guessr/"

    },
        {
            name: "Markov Text Generator",
            description: "Mainly just an exercise to train a simple program to emulate speech.",
            image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg",
            path: "https://github.com/cjordan223/Markov.git"
        },
        {
            name: "Movie App (Group)",
            description: "Full stack movie application. (Report Only)",
            image: "/img/peak.png", // Make sure this path is correct and accessible
            path: "media/CST 336 FINAL REPORT.pdf"
        },
        {
            name: "UserVault",
            description: "Simple user database web app.",
            image: "/img/vault.png", // Make sure this path is correct and accessible
            path: "https://github.com/cjordan223/UserVault.git"
        },
        // ... Add more projects as needed
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    return (
        <div>
            <h2>Web Applications</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-item" onClick={() => openModal(project)}>
                        <img src={project.image} alt={project.name} className="project-image" />
                        <div className="project-info">
                            <h5>{project.name}</h5>
                            {/* You can also display a short description here */}
                        </div>
                    </div>
                ))}
            </div>

            <br/><br/>

            <button className="btn btn-outline-primary" onClick={() => navigate('/projects')}>Main Projects Page</button>

            {/* Modal */}
            {selectedProject && (
                <Modal show={showModal} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedProject.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{selectedProject.description}</p>
                        <img src={selectedProject.image} alt={selectedProject.name} className="modal-image" />
                     </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" onClick={closeModal}>
                            Close
                        </button>
                        <a href={selectedProject.path} className="btn bg-dark-subtle" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                            Visit Repo
                        </a>
                        {/* Conditionally render the Visit Site button */}
                        {selectedProject.site && (
                            <a href={selectedProject.site} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                Visit Site
                            </a>
                        )}
                    </Modal.Footer>

                </Modal>
            )}
        </div>
    );
}

export default WebApps;