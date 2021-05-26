import React from "react";
import Login from "../components/Registration/Login";
import Signup from "../components/Registration/Signup";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents"
import "../App.css"


//get request for featured band
//get request for events based on location id

function Home () {
    
    return (
    <div className="registration-container">
        <UpcomingEvents />
        <Login /> 
        <Signup />
    </div>
    )
}

export default Home

