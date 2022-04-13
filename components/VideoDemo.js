import React from "react"
import ReactPlayer from "react-player"

const VideoDemo = (props) => {

    return (
        <div>
        <ReactPlayer
          url={props.demoUrl}
        />
      </div>
    )
}

export default VideoDemo;