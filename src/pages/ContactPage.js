import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
    Container,
    TextField,
    Button,
    Box,
    Typography,
    CircularProgress,
    Grid
} from '@mui/material';
import '../css/ContactPage.css';

function ContactForm() {
    const [state, handleSubmit] = useForm("xjvneqbo");

    if (state.succeeded) {
        return <Typography variant="h5" align="center">Thanks for your message!</Typography>;
    }

    return (
        <div className='contact-page-wrapper'>
            <Container maxWidth="sm">
                <Box my={4} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: 4, borderRadius: 2 }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Contact Me
                    </Typography>
                    <Typography variant="subtitle1" align="center" gutterBottom>
                        Got a question or proposal, or just want to say hello? Go ahead.
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    type="text"
                                    name="name"
                                    label="Name"
                                    variant="outlined"
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    type="email"
                                    name="email"
                                    label="Email Address"
                                    variant="outlined"
                                    margin="normal"
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} component="p" />
                            </Grid>
                        </Grid>
                        <TextField
                            fullWidth
                            id="message"
                            name="message"
                            label="Your Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            margin="normal"
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} component="p" />
                        <Box mt={2} display="flex" justifyContent="flex-end">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={state.submitting}
                                endIcon={state.submitting ? <CircularProgress size="1rem" /> : null}
                            >
                                {state.submitting ? 'Sending...' : 'Submit'}
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </div>
    );
}

export default ContactForm;
