//App.js
import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Layout from "./components/Projects/Layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VenturePal from "./components/Projects/VenturePal";
import WeatherAPI from "./components/Projects/WeatherAPI";
import WorkExperience from "./components/WorkExperience";
import WebDesign from "./components/Projects/WebDesign";
import Programming from "./components/Projects/Programming";
import WebApps from "./components/Projects/WebApps";
// import LandingPage from "./pages/LandingPage";


 const theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route exact path="/about" element={<AboutPage />} />
                        <Route exact path="/contact" element={<ContactPage />} />
                        <Route exact path="/venture-pal" element={<VenturePal />} />
                        <Route exact path="/weather-api" element={<WeatherAPI />} />
                        <Route exact path="/work-exp" element={<WorkExperience />} />
                        <Route exact path="/webapps" element={<WebApps />} />
                        <Route exact path="/programming" element={<Programming />} />
                        <Route exact path="/webdesign" element={<WebDesign />} />
                        {/*<Route path="/landing" element={<LandingPage />} />*/}

                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;
