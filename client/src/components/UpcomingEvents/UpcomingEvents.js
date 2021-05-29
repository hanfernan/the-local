import React, { useState, useEffect } from "react";
import EventsTable from "./UpcomingEventsTable";
import API from "../../utils/API";
import "./UpcomingEvents.css";

function UpcomingEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.getEvents().then((res) => {
      console.log(res.data);
      setEvents(res.data);
    });
  }, []);

  return (
    <>
      <EventsTable events={events} />
    </>
  );
}

export default UpcomingEvents;
