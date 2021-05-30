import React from "react";

function YoutubeLink(props) {
  const newName = props.band.band_name.split(" ");
  const concatenated = newName.join("+");
  const concatenatedWithQuery =
    "https://www.youtube.com/results?search_query=" + concatenated;

  if (props.band.youtube) {
    return (
      <a href={props.band.youtube} target="__blank" rel="noreferrer" className="fa fa-youtube">
        {" "}
      </a>
    );
  } else {
    return (
      <a href={concatenatedWithQuery} target="_blank" rel="noreferrer" className="fa fa-youtube">
        {" "}
      </a>
    );
  }
}

export default YoutubeLink;
