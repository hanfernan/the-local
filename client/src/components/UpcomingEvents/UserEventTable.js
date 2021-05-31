import React from "react";
import UserEvents from "./UserEvents";

function UserEventsTable(props) {
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
        
          <UserEvents {...props} />
        
      </table>
    </section>
  );
}

export default UserEventsTable;
