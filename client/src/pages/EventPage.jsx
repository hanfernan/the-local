import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
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
                setEvent(res.data[id -1])
                console.log(res.data)
                console.log(event)
            })
            .catch(err =>
                console.log(err))
            
    }, [id])
    

    return (
        <div>
            <h1>{event.event_name}</h1>
            <h2>Featured Band:</h2>
            <h4>{event.band.band_name}</h4> 
            <h2>Event Date:</h2>           
            <h4>{event.event_date}</h4>
            <h2>Event Location:</h2>
            <h4>{event.location.location_name}</h4>
            <p>{event.event_link}</p>            
        </div>
    )
}

export default EventPage