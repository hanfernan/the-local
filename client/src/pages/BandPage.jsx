//get request for band info by band id
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css"
import API from '../utils/API';
import SocialLinks from "../components/SocialMedia/socialLinks"
import EmbedVideo from '../components/EmbedVideo'

function BandPage() {
    const [band, setBand] = useState({
        id: "",
        band_name: "",
        email: "",
        bio: "",
        location: "",
        genre: "",
        featured_video: "",
        featured_instagram: ""
    })

    const {id} = useParams()
    useEffect(() => {
        API.getBand(id)
            .then(res => {setBand(res.data)})
            // console.log("res", res.data)})
            .catch(err => console.log(err))
    }, [id])

    return(
        <div>
            <h1 className="card-header band-header">{band.band_name}</h1>
            <div className="card band-container">
            <div className="band-info">                
                <h2 className="card-title band-title">Location:</h2>
                <h4 className="card-subtitle">{band.location.location_name}</h4>
                <h2 className="card-title band-title">Genre:</h2>
                <h4 className="card-subtitle">{band.genre.genre_name}</h4>                
                <h2 className="card-title band-title">About:</h2>
                <h5 className="card-text">{band.bio}</h5>
            </div>
            <div className="band-media">
                <EmbedVideo band = {band} />
                <SocialLinks band = {band}/>
            </div>     
            </div>
                              
        </div>
    )
}

export default BandPage