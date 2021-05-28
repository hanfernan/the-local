import React from "react";
import { useHistory } from "react-router-dom"
import Login from "../components/Registration/Login";
import Signup from "../components/Registration/Signup";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents"
import FeaturedBand from "../components/FeaturedBand/FeaturedBand"
import "../App.css"

function Home () {

    const history = useHistory()

    return (
        <div className="home-container">
            <div className="col">
                <FeaturedBand />
                <UpcomingEvents />                
            </div>            
            <div className="registration-container">
                <div>
                    <button class="btn btn-dark" onClick={() => history.push('/login')}>
                    Login
                    </button>
                </div>
                    
                 
            <button onClick={() => history.push('/signup')}>
                Signup
            </button>
            </div>
        </div>
    
    )
}

export default Home

