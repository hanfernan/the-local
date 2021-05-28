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
            <div className="card p-3">
                    <h3 className="card-title">Are you in a band?</h3>
                    <p className="card-text">Sign up here to get started!</p>
                    <button className="btn btn-secondary" onClick={() => history.push('/signup')}>
                    Signup
                    </button>
                </div>
                <div className="card p-3">
                    <h3 className="card-title">Returning User?</h3>
                    <button className="btn btn-dark" onClick={() => history.push('/login')}>
                    Login
                    </button>
                </div>
                                             
            </div>
        </div>
    
    )
}

export default Home

