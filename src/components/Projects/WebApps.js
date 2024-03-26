import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import '../ComponentStyles/WebApps.css'
import { FaGithub } from "react-icons/fa";


function WebApps() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const navigate = useNavigate();

    // Updated projects array with your new data
    const projects = [
        {
            name: "Weather Wise",
            description: "This is an application I built for a web programming class, so this is an entirely client-side application using a free weather API. Before I ever took this class, I built an identical application using Python and Django. This application was a bit more lightweight but honestly more complicated to set up.",
            image: "https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg",
            path: "https://github.com/cjordan223/weather-wise.git"
        },
        {
            name: "Guessr",
            description: "Not a repo. Simple web app. Its Wordle, basically.",
            image: "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg",
            path: "https://connerjordan.com/Guessr/"
        },
        {
            name: "Markov Text Generator",
            description: "Chat Bot Impersonator.",
            image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg",
            path: "https://github.com/cjordan223/Markov.git"
        },
        {
            name: "Movie App (Group)",
            description: "Full stack movie application.",
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
                        {/* You can add more content here like a link to the project */}
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" onClick={closeModal}>
                            Close
                        </button>
                        <a href={selectedProject.path} className="btn bg-dark-subtle" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                             Visit Repo
                        </a>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

export default WebApps;
