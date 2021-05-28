import React from "react";
import "./socialLinks.css";

function SecondYoutubeLink(props) {
  if (props.band.youtube) {
    return (
      <a href={props.band.youtube} target="__blank" className="fa fa-youtube">
        {" "}
      </a>
    );
  } else {
    return null;
  }
}

export default SecondYoutubeLink;
