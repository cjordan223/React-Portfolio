import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Button from "react-bootstrap/Button";

function WebApps() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Web Applications</h2>
            <div>
                <Link to="/webapps/project1">Project 1</Link>
                <Link to="/webapps/project2">Project 2</Link>
                <Link to="/webapps/project3">Project 3</Link>
                {/* Add more links as needed */}
            </div>
            <br/><br/>

            <Button variant="outline-primary" onClick={() => navigate('/projects')}>Main Projects Page</Button>{' '}

        </div>
    );
}

export default WebApps;
