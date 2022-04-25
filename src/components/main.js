import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Import the components that we would like to route too 
import LandingPage from './landingpage';
import AboutMe from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => (
    <Routes>
        <Route exact path="/" element={<LandingPage/>} />

        <Route exact path="/aboutme" element={<AboutMe/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/projects" element={<Projects/>} />
        <Route exact path="/resume" element={<Resume/>} />
    </Routes>
)

export default Main;