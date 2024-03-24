import React from 'react';
import {Card, CardContent, Typography, Grid} from '@mui/material';
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

function WebDesign() {
    const navigate = useNavigate();
    return (

        <div>
            <h2>Web Design</h2>
            <Grid container spacing={2}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Project {item}
                                </Typography>
                                <Typography color="textSecondary">
                                    Description of project {item}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <br/><br/>

            <Button variant="outline-primary" onClick={() => navigate('/projects')}>Main Projects Page</Button>{' '}

        </div>

);
}

export default WebDesign;
