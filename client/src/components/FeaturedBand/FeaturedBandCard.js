import React from "react";
import "./FeaturedBand.css";
import "../../App.css";

function FeaturedBandCard(props) {
    // console.log(props)
    // var randomBand = props.band[Math.floor(Math.random() * props.band.length)];
    // console.log(randomBand);
    return (
        <>
            <div className="feat-band-container card">
                <h2 className="card-header">Featured Band</h2>
                <h3 className="card-title">{props.band.band_name}</h3>
                {/* <h5 className="card-subtitle">Location: </h5> */}
                {/* <h5 className="card-subtitle">Location: {props.band.genre.genre_name} </h5> */}
                {/* <h5 className="card-subtitle">Genre: </h5> */}
                {/* <h5 className="card-subtitle">Genre: {props.band.location} </h5> */}
                <p className="card-text"> Bio: {props.band.bio}</p>
            </div>
        </>
    )
}

export default FeaturedBandCard