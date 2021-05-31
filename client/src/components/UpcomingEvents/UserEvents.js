import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function UserEvents({ id }) {
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    API.getEventById(id).then((res) => {
      setUserEvents(res);
      console.log("what", res);
    });
  }, [id]);

  return (
    <>
      <div>
        <p>hi</p>
      </div>
    </>
  );
}

export default UserEvents;
