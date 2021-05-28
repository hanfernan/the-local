import React from "react";
import "./socialLinks.css";
import YoutubeLink from "./youtubeLink";
import FacebookLink from "./facebookLink";
import SecondYoutubeLink from "./secondYoutubeLink";
import InstagramLink from "./instagramLink";
import SoundcloudLink from "./soundcloudLink";
import TwitterLink from "./twitterLink";

function SocialLinks(props) {
  return (
    <div>
      <div>
        <YoutubeLink band={props.band} />
      </div>
      <h3>Follow us:</h3>
      <div>
        <FacebookLink band={props.band} />
        <SecondYoutubeLink band={props.band} />
        <InstagramLink band={props.band} />
        <SoundcloudLink band={props.band} />
        <TwitterLink band={props.band} />
      </div>
    </div>
  );
}

export default SocialLinks;
