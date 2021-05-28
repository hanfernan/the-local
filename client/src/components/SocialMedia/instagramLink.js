import React from "react";
import "./socialLinks.css";

function InstagramLink(props) {
  if (props.band.instagram) {
    return (
      <a
        href={props.band.instagram}
        target="__blank"
        className="fa fa-instagram"
      >
        {" "}
      </a>
    );
  } else {
    return null;
  }
}

export default InstagramLink;
