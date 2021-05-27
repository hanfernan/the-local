import React from 'react'

function YoutubeLink(props) {
    if (props.band.youtube) {
      return (
          <div>hello</div>
      )
    } else {
        return (
            <div>gooodbye</div>
        )
    }
  }

export default YoutubeLink