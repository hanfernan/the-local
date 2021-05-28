import React from "react";
import "./socialLinks.css";

function FacebookLink(props) {
  if (props.band.facebook) {
    return (
      <a href={props.band.facebook} target="__blank" className="fa fa-facebook">
        {" "}
      </a>
    );
  } else {
    return null;
  }
}

export default FacebookLink;
