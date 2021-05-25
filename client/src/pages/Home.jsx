//get request for featured band
//get request for events based on location id
import React from "react"
import Login from "../components/Registration/Login"
import Signup from "../components/Registration/Signup"

function Home () {
    return (
    <div class="registration-container">
        <Login />
        <Signup />
    </div>
    )
}

export default Home