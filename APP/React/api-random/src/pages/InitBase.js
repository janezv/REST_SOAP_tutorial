// https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from "./weather"
import Random from "./Random"
import Home from "./Home"

function Base(){
    return(
        <>
        <Router>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/radnom" element={<Random />} />
                <Route path="/weather" element={<Weather />} />
            </Routes>
        </Router>
        </>
    );
}

export default Base;