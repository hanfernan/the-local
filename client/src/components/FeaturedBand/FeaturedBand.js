import React, { useState, useEffect } from "react";
import FeaturedBandCard from "./FeaturedBandCard"
import API from "../../utils/API"
import "./FeaturedBand.css";
import "../../App.css";

function FeaturedBand() {
    const [band, setBand] = useState([])
}

return (
    <>
    <FeaturedBandCard band={band}/>
    </>
)
export default FeaturedBand