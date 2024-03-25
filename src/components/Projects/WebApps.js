import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import '../ComponentStyles/WebApps.css' // Assuming you have a CSS file for styles

function WebApps() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const navigate = useNavigate();

    const projects = [
        { name: "WeatherWise", path: "/weather-api", image: "https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { name: "Project 2", path: "/webapps/project2", image: "https://images.pexels.com/photos/170453/pexels-photo-170453.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Project 3", path: "/webapps/project3", image: "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        // Add more projects as needed
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
                            {/* Add a short description or other info if needed */}
                        </div>
                    </div>
                ))}
            </div>

            <br/><br/>

            <button className="btn btn-outline-primary" onClick={() => navigate('/projects')}>Main Projects Page</button>

            {/* Modal */}
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProject?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is the project detail for {selectedProject?.name}.</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={closeModal}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default WebApps;
