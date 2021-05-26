import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import API from '../utils/API'

function EventPage(props) {
    const [event, setEvent] = useState({
        id: "",
        event_name: "",
        event_date: "",
        event_link: "",
        location: "",
        band: ""
    })

    const {id} = useParams()
    useEffect(() => {
        API.getEvents(id)
            .then(res => {
                setEvent(res.data[0])
                console.log(res.data)
                console.log(event)
            })
            .catch(err =>
                console.log(err))
            
    }, [id])

    return (
        <div>
            <p>{event.band.band_name}</p>
            <h1>{event.event_name}</h1>
            <p>{event.event_date}</p>
            <p>{event.event_link}</p>
            <p>{event.location.location_name}</p>
            <p></p>
        </div>
    )
}

export default EventPage