import React from "react";
import Login from "../components/Registration/Login";
import Signup from "../components/Registration/Signup";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents"
import FeaturedBand from "../components/FeaturedBand/FeaturedBand"
import "../App.css"
import API from '../utils/API'

//get request for featured band
//get request for events based on location id

function Home () {
    
    return (
        <div className="home-container">
            <div className="col">
                <FeaturedBand />
                <UpcomingEvents />                
            </div>            
            <div className="registration-container">
                <Login /> 
                <Signup />
            </div>
        </div>
    
    )
}

export default Home

