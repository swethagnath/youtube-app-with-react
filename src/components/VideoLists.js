import React from 'react'
import VideoItem from './VideoItem' 

// const {videos} = this.props.videos
const videoList =  ({ videos, currentVideo }) => {
  
  const renderedList =  videos.map(video => {
    console.log(video.id.videoId)
    return <div> <VideoItem key={video.id.videoId} videos={video} currentVideo={currentVideo} /> </div>
  })
  
  return(
    <div className="ui relaxed list">
      {renderedList}
    </div>
  )

}

export default videoList