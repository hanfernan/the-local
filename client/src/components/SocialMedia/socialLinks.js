import React, { Component } from "react";
import "./socialLinks.css";

class SocialLinks extends Component {
  render() {
    return (
      <div className="icon-container">
        <a href="https://www.facebook.com" className="fa fa-facebook"></a>
        <a href="https://www.twitter.com" className="fa fa-twitter"></a>
        <a href="https://www.youtube.com" class="fa fa-youtube"></a>
        <a href="https://www.instagram.com" class="fa fa-instagram"></a>
        <a href="https://www.soundcloud.com" class="fa fa-soundcloud"></a>
      </div>
    );
  }
}

export default SocialLinks;