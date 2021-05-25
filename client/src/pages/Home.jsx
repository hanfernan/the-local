//get request for featured band
//get request for events based on location id
import React from "react";
import Login from "../components/Registration/Login";
import Signup from "../components/Registration/Signup";

function Home () {
    
    return (
    <div className="registration-container">
        <Login /> 
        <Signup />
        <h1> Hello from home</h1>
    </div>
    )
}

export default Home