import React, { Component } from "react";
import "./socialLinks.css";
import YoutubeLink from './youtubeLink'

function SocialLinks(props) {
  return (
    <YoutubeLink band = {props.band} />
  )
}

export default SocialLinks;
