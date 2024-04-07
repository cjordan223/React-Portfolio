import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function Programming() {
    const navigate = useNavigate();

    const fullWidthCardData = {
        title: 'Data Structures & Algorithms',
        imageUrl: './img/Screenshot 2024-03-08 at 1.11.29 AM.png', // Example image URL
        text: 'A repo to some straightforward Java programs outlines some very well known DSA concepts. Theres a brief description of each process in the header of each file. These solutions are basic illustrations of some common problem solving approaches within the field.',
        url: 'https://github.com/cjordan223/DSA-collection.git'
    };

    return (
        <div>
            <h1> Programming Projects </h1>
            <br/>

            <Accordion>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>{fullWidthCardData.title}</Accordion.Header>
                    <Accordion.Body>
                        <Card>
                            <Card.Img variant="top" src={fullWidthCardData.imageUrl} />
                            <Card.Body>
                                <Card.Title>{fullWidthCardData.title}</Card.Title>
                                <Card.Text>
                                    {fullWidthCardData.text}
                                </Card.Text>
                                <Button variant="primary" href={fullWidthCardData.url} target="_blank">View Project</Button>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <br/><br/>
            <Button variant="outline-primary" onClick={() => navigate('/projects')}>Main Projects Page</Button>{' '}
        </div>
    );
}

export default Programming;
