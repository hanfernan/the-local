//get request for band info by band id
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from '../utils/API';

function BandPage(props) {
    const [band, setBand] = useState({
        band_name: ""
    })

    const {id} = useParams()
    useEffect(() => {
        API.getBand(id)
            .then(res => {setBand(res.data)
            console.log(res.data)})
            .catch(err => console.log(err))
    }, [id])

    // console.log(band)
    return(
        <div>
            <h1>{band && band.band_name}</h1>
        </div>
    )
}

export default BandPage