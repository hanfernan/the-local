import React, { Component } from "react";
import "./socialLinks.css";
import YoutubeLink from './youtubeLink'

// class SocialLinks extends Component {
//   render(props) {
//     console.log(props)
//     return (
//       <div className="icon-container">
//         <a href="https://www.facebook.com" className="fa fa-facebook"></a>
//         <a href="https://www.twitter.com" className="fa fa-twitter"></a>
//         <YoutubeLink band = {props.band}/>
//         <a href="https://www.instagram.com" className="fa fa-instagram"></a>
//         <a href="https://www.soundcloud.com" className="fa fa-soundcloud"></a>
//       </div>
//     );
//   }
// }

function SocialLinks(props) {
  return (
    <YoutubeLink band = {props.band} />
  )
}

export default SocialLinks;
