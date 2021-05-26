import React from "react";
import Login from "../components/Registration/Login";
import Signup from "../components/Registration/Signup";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents"
import FeaturedBand from "../components/FeaturedBand/FeaturedBand"
import "../App.css"


//get request for featured band
//get request for events based on location id

function Home () {
    
    return (
        <div className="home-container">
            <div className="col">
                <UpcomingEvents />
                <FeaturedBand />
            </div>            
            <div className="registration-container">
                <Login /> 
                <Signup />
            </div>
        </div>
    
    )
}

export default Home

