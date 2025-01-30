import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About'; 
import Contact from '../Pages/Contact';
import Process from '../Pages/Process';

const AppRouter = () => (
    
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/process" element={<Process/>} />
        </Routes>
    
);

export default AppRouter;
