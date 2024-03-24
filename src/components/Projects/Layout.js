//Layout.js
import React from 'react';
import { Box, Container } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';

function Layout({ children }) {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <Header />
            <Container component="main" flexGrow={1} sx={{ mt: 8, mb: 2 }}>
                {children}
            </Container>
            <Footer />
        </Box>
    );
}

export default Layout;
