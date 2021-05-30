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
        <div className="card">
            <h1 className="card-header event-header">{event.event_name}</h1>
            <div className="event-container">
                <h2 className="card-title event-title">Featured Band:</h2>
                <a href={`/bandpage/${event.band.id}`} target="_blank" rel="noreferrer" className= "fb-link" >
                    <h4 className="card-subtitle event-subtitle">{event.band.band_name}</h4> 
                </a>                
                <h2 className="card-title event-title">Event Date:</h2>           
                <h4 className="card-subtitle event-subtitle">{event.event_date}</h4>
                <h2 className="card-title event-title">Event Location:</h2>
                <h4 className="card-subtitle event-subtitle">{event.location.location_name}</h4>
                <a href={`http://${event.event_link}`} target="_blank" rel="noreferrer" > View more event details here</a> 
            </div>
                      
        </div>
    )
}

export default EventPage