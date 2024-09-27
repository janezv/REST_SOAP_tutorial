// https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from "./Countries"
import Random from "./Random"
import Home from "./Home"

function Base(){
    return(
        <>
        <Router>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/radnom" element={<Random />} />
                <Route path="/Countries" element={<Countries />} />
            </Routes>
        </Router>
        </>
    );
}

export default Base;