import React, { useState, useEffect, useCallback } from "react";
import API from "../../utils/API";

function UserEvents(props) {
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    // console.log(props, props.id, "hello");
    API.getEventById(props.id).then((res) => {
      console.log(res);
      setUserEvents(res.data);
    });
  });

  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  // const sortedUserEvents = userEvents.sort(function (a, b) {
  //   var dateA = new Date(a.event_date),
  //     dateB = new Date(b.event_date);
  //   return dateA - dateB;
  // });

  return (
    <>
      {userEvents &&
        userEvents.length &&
        userEvents.map((event, i) => {
          return (
            <tbody key={i}>
              <tr>
                <td>
                  <a href={`/eventpage/${event.id}`} target="_blank">
                    {event.event_name}
                  </a>
                </td>
                <td>{formatDate(event.event_date)}</td>
                <td>{event.location.location_name}</td>
                <td>
                  <a href={`/bandpage/${event.band_id}`}>
                    {event.band.band_name}
                  </a>
                </td>
              </tr>
            </tbody>
          );
        })}
    </>
  );
}

export default UserEvents;
