import React from 'react'

// props.video = video

const VideoDetail = ({video, loading}) => {
  if(loading){
    return <div>'loading'</div>
  }
  // go to youtube video share--embedd
  const videoSrc =  `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc}/>
      </div>
      <div className="ui segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
      
  )
} 

export default VideoDetail