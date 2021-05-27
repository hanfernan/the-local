//get request for band info by band id
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
        featured_video: ""
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
            <h1>{band.band_name}</h1>
            <h2>{band.location.location_name}</h2>
            <h2>{band.bio}</h2>
            <EmbedVideo band = {band} />
            <SocialLinks band = {band}/>
        </div>
    )
}

export default BandPage