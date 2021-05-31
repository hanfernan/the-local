import React from "react";
import UserEvents from "./UserEvents";

function UserEventsTable(props) {
  console.log("user", props);
  //   function formatDate(date) {
  //     const dateArray = date.split("-");
  //     const year = dateArray[0];
  //     const month = dateArray[1];
  //     const dayArray = dateArray[2].split("T");
  //     const day = dayArray[0];
  //     const formattedDate = [month, day, year].join("-");
  //     return formattedDate;
  //   }

  //   const sortedUserEvents = props.events.sort(function (a, b) {
  //     var dateA = new Date(a.event_date),
  //       dateB = new Date(b.event_date);
  //     return dateA - dateB;
  //   });

  //   const userEvents = props.events.map((event, i) => {
  //     return (
  //       <tr key={i}>
  //         <td>
  //           <a href={`/eventpage/${event.id}`} target="_blank">
  //             {event.event_name}
  //           </a>
  //         </td>
  //         {/* <td>{formatDate(event.event_date)}</td> */}
  //         <td>{event.location.location_name}</td>
  //         <td>
  //           <a href={`/bandpage/${event.band_id}`}>{event.band.band_name}</a>
  //         </td>
  //       </tr>
  //     );
  //   });

  return (
    <section className="upcoming-events-container">
      <h2>Upcoming Events</h2>
      <table className="table table-hover table-condensed">
        <thead>
          <tr>
            <th scope="col">Event Name</th>
            <th scope="col">Event Date</th>
            <th scope="col">Event Location</th>
            <th scope="col">Featured Band</th>
          </tr>
        </thead>
        <tbody>
          <UserEvents {...props} />
        </tbody>
      </table>
    </section>
  );
}

export default UserEventsTable;
