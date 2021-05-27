import React, { useState, useEffect } from "react";
import FeaturedBandCard from "./FeaturedBandCard"
import API from "../../utils/API"
import "./FeaturedBand.css";
import "../../App.css";

function FeaturedBand() {
    const [band, setBand] = useState([])

    useEffect(() => {
        API.getBands()
            .then(res => {
                console.log(res.data)
                var randomBand= res.data[Math.floor(Math.random() * res.data.length)]
                console.log(randomBand)
                setBand(randomBand)
            })
    }, []);

    return (
        <>
            <FeaturedBandCard band={band} />
        </>
    )
}


export default FeaturedBand