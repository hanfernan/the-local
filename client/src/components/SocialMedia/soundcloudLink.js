import React from "react";
import "./socialLinks.css";

function SoundcloudLink(props) {
  if (props.band.soundcloud) {
    return (
      <a
        href={props.band.soundcloud}
        target="__blank"
        className="fa fa-soundcloud"
      >
        {" "}
      </a>
    );
  } else {
    return null;
  }
}

export default SoundcloudLink;
