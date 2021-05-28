import React from "react";
import InstagramEmbed from "react-instagram-embed";

function EmbedInstagram(props) {
  if (props.band.featured_instagram) {
    const array = props.band.featured_instagram.split("/p/");
    const embedChunk = array[1];
    console.log(embedChunk);

    return (
      <div>
        <InstagramEmbed
          url="https://www.instagram.com/p/CPaySC8BV0I/"
          clientAccessToken="162624575820583|9494884b7131d1ae55737bf52a129d35"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />{" "}
      </div>
    );
  } else {
    return <div>Didn't work</div>;
  }
}

export default EmbedInstagram;
