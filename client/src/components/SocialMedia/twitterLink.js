import React from "react";
import "./socialLinks.css";

function TwitterLink(props) {
  if (props.band.twitter) {
    return (
      <a href={props.band.twitter} target="__blank" className="fa fa-twitter">
        {" "}
      </a>
    );
  } else {
    return null;
  }
}

export default TwitterLink;
