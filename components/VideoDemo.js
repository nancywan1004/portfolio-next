import React from "react"
import ReactPlayer from "react-player"

const VideoDemo = (props) => {

    return (
        <div>
        <ReactPlayer
          url={props.demoUrl}
          width='100%'
          height='100%'
        />
      </div>
    )
}

export default VideoDemo;