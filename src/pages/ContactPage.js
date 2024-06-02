import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
    Container,
    TextField,
    Button,
    Box,
    Typography,
    CircularProgress,
    Grid,
    Link,
} from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
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
                    <Box display="flex" justifyContent="center" mb={4}>
                        <Link href="https://github.com/cjordan223" target="_blank" rel="noopener" mx={1}>
                            <GitHub fontSize="large" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/conner-jordan-4b268514a/" target="_blank" rel="noopener" mx={1}>
                            <LinkedIn fontSize="large" />
                        </Link>
                        <Link href="mailto:connercharlesjordan@gmail.com" target="_blank" rel="noopener" mx={1}>
                            <Email fontSize="large" />
                        </Link>
                    </Box>
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
                                    required
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
                                    required
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} component="p" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="subject"
                                    name="subject"
                                    label="Subject"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="message"
                                    name="message"
                                    label="Your Message"
                                    variant="outlined"
                                    multiline
                                    rows={6}
                                    margin="normal"
                                    required
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} component="p" />
                            </Grid>
                        </Grid>
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
