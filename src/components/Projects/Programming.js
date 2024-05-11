import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function Programming() {
    const navigate = useNavigate();

    const projects = [
        {
            title: 'Data Structures & Algorithms',
            imageUrl: './img/DSA.png', // Example image URL
            text: 'A repo to some straightforward Java programs that outline some very well known DSA concepts. Theres a brief description of each process in the header of each file. These solutions are basic illustrations of some common problem solving approaches within the field.',
            url: 'https://github.com/cjordan223/DSA-collection.git'
        },
        {
            title: "Pandas & Numpy",
            imageUrl: "/img/pandas.jpeg",
            text: "Some data manipulation with python, collected with a custom python script agent",
            url: "https://github.com/cjordan223/voyager"
        }
    ];

    return (
        <div>
            <h1> Data Analysis </h1>
            <p>Collection of school work and some personal projects with DA</p>
            <br/>

            <Accordion defaultActiveKey="0">
                {projects.map((project, index) => (
                    <Accordion.Item eventKey={index.toString()}>
                        <Accordion.Header>{project.title}</Accordion.Header>
                        <Accordion.Body>
                            <Card>
                                <Card.Img variant="top" src={project.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>
                                        {project.text}
                                    </Card.Text>
                                    <Button variant="primary" href={project.url} target="_blank">View Project</Button>
                                </Card.Body>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <br/><br/>
            <Button variant="outline-primary" onClick={() => navigate('/projects')}>Main Projects Page</Button>{' '}
        </div>
    );
}

export default Programming;
