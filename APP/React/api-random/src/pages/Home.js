import React from 'react';
import {Link } from "react-router-dom";
import App from "./weather"
import Random from "./Random"

function Home(){
    return(
        <>
        <h1> home API page</h1>
            <Link to="/radnom">
                <button>
                Go to Page 2 
                </button>
            </Link>
            <Link to="/weather">
                <button>
                Go to Page 2 
                </button>
            </Link>
        </>
    );
}

export default Home;