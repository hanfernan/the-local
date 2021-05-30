import React from "react";
import "./UpcomingEvents.css";

function UpcomingEventsTable(props) {
  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  const sortedEvents = props.events.sort(function (a, b) {
    var dateA = new Date(a.event_date),
      dateB = new Date(b.event_date);
    return dateA - dateB;
  });

  const events = sortedEvents.map((event, i) => {
    // console.log(event.id);
    return (
      <tr key={i}>
        <td>
          <a href={`/eventpage/${event.id}`} target="_blank" rel="noreferrer">
            {event.event_name}
          </a>
        </td>
        <td>{formatDate(event.event_date)}</td>
        <td>{event.location.location_name}</td>
        <td>
          <a href={`/bandpage/${event.band_id}`}>{event.band.band_name}</a>
        </td>
      </tr>
    );
  });

  return (
    <section className="upcoming-events-container">
      <h2 className="uc-header"><i className="far fa-calendar-check"/> UPCOMING EVENTS</h2>
      <table className="table table-hover table-condensed event-top">
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

export default UpcomingEventsTable;
