import React from 'react';
import {Link } from "react-router-dom";
import App from "./Countries"
import Random from "./Random"

function Home(){
    return(
        <>
        <h1> home API page</h1>
            <Link to="/radnom">
                <button>
                Random Page
                </button>
            </Link>
            <Link to="/Countries">
                <button>
                Countries Page
                </button>
            </Link>
        </>
    );
}

export default Home;