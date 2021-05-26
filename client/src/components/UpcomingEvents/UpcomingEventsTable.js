
import React from 'react';
import "./UpcomingEvents.css";
import {Link} from "react-router-dom";

function UpcomingEventsTable(props) {
    const events = props.events.map((event, i) => {
        console.log(event)
        return (
            <tr key={i}>
                <td>
                    {/* <Link to={`https://${event.event_link}`} target="_blank" rel="noreferrer noopener">{event.event_name}</Link> */}
                    {event.event_name}
                </td>
                <td>{event.event_date}</td>
                <td>{event.location_id}</td>
                <td>
                    <a href={`/bandpage/${event.band_id}`} >{event.band_id}</a>
                </td>
            </tr>
        )
    });

    return (
        <section>
            <h2>Upcoming Events</h2>
            <table
                className="table table-hover table-condensed"
            >
                <thead>
                    <tr>
                        <th scope="col">Event Name</th>
                        <th scope="col">Event Date</th>
                        <th scope="col">Event Location</th>
                        <th scope="col">Featured Band</th>
                    </tr>
                </thead>
                <tbody>{events}</tbody>
            </table>

        </section>
    );
}

export default UpcomingEventsTable