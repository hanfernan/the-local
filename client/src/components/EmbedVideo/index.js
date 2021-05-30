import React from "react";

function EmbedVideo(props) {
  if (props.band.featured_video) {
    const array = props.band.featured_video.split("v=");
    const embedChunk = array[1];
    const src = `https://www.youtube.com/embed/${embedChunk}`;

    return (
      <div>
        <h2 className="card-title band-title">Featured video:</h2>
        <div>
          <iframe
            width="560"
            height="315"
            src={src}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  } else {
    return <p></p>;
  }
}

export default EmbedVideo;
