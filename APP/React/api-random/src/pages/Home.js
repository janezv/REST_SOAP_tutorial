// https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "./App"
import Random from "./Random"

function Home(){
    return(
        <>
        <h1> home API page</h1>
            <Router>
            <Routes>
            <Route path="/radnom" element={<App />} />
            <Route path="/weather" element={<Random />} />
            </Routes>
        </Router>
        </>
    );
}

export default Home;