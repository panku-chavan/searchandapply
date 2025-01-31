import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About'; 
import Contact from '../Pages/Contact';
import Process from '../Pages/Process';
import NotFound from '../Pages/PageNotFound';
import Faqs from '../Pages/Faqs';

const AppRouter = () => (
    
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/process" element={<Process/>} />
            <Route path="/faqs" element={<Faqs/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    
);

export default AppRouter;
