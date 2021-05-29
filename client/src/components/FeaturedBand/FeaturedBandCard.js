import React from "react";
import "./FeaturedBand.css";
import "../../App.css";

function FeaturedBandCard(props) {
    // console.log(props)
    // var randomBand = props.band[Math.floor(Math.random() * props.band.length)];
    // console.log(randomBand);
    return (
        <>
            <div className="fb-container card">
                <h2 className="card-header fb-header"> <i class="fas fa-headphones-alt"/> FEATURED BAND</h2>
                <a className= "fb-link" href={`/bandpage/${props.band.band_id}`}>
                    <h3 className="card-title fb-title">{props.band.band_name}</h3>
                </a>
                <img className="card-img fb-img" src="https://roamilicious.com/wp-content/uploads/2016/07/atlanta-concert-venue-terminal-west.jpeg" alt="placeholder venue" />
                {/* <h5 className="card-subtitle">Location: </h5> */}
                {/* <h5 className="card-subtitle">Location: {props.band.genre.genre_name} </h5> */}
                {/* <h5 className="card-subtitle">Genre: </h5> */}
                {/* <h5 className="card-subtitle">Genre: {props.band.location} </h5> */}
                <p className="card-text fb-text"> About: {props.band.bio}</p>
                <button>Check them out here</button>
            </div>
        </>
    )
}

export default FeaturedBandCard