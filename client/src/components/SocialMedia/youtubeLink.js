import React from 'react'

function YoutubeLink(props) {
    if (props.band.youtube) {
      return (
          <a href={props.band.youtube} target="__blank" className ="fa fa-youtube"> 
          </a>
      )
    } else {
        return (
            <div>gooodbye</div>
        )
    }
  }

export default YoutubeLink