import React, { useState, useEffect } from "react";
import UserEventsTable from "./UserEventsTable";
import API from "../../utils/API";

function UserEvents() {
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    API.getSingleEvent().then((res) => {
      setUserEvents(res.data);
      console.log("what", res.data);
    });
  }, []);

  return (
    <>
      <UserEventsTable events={userEvents} />
    </>
  );
}

export default UserEvents;
