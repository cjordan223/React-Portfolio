import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Layout from "./components/Projects/Layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import VenturePal from "./components/Projects/VenturePal";
import WeatherAPI from "./components/Projects/WeatherAPI";
import WorkExperience from "./pages/WorkExperience";
import WebDesign from "./components/Projects/WebDesign";
import Programming from "./components/Projects/Programming";
import WebApps from "./components/Projects/WebApps";
import CloudLogin from "./pages/CloudLogin";

 import CoursePage from "./pages/CoursePage";

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
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/venture-pal" element={<VenturePal />} />
                        <Route path="/weather-api" element={<WeatherAPI />} />
                        <Route path="/work-exp" element={<WorkExperience />} />
                        <Route path="/webapps" element={<WebApps />} />
                        <Route path="/programming" element={<Programming />} />
                        <Route path="/webdesign" element={<WebDesign />} />
                        <Route path="/cloud-login" element={<CloudLogin />} />
                        {/* Dynamic route for course pages */}
                        <Route path="/course/:courseId" element={<CoursePage />} />
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;
