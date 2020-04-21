import React from 'react'
import './VideoItem.css'
// const {currentVideo} = props.currentVideo 

 const VideoItem  = ({currentVideo, videos}) => {

    return (
      <div className="video-item item" onClick={() => {currentVideo(videos)}}>
        <img alt={videos.snippet.title} src={videos.snippet.thumbnails.medium.url} className="ui image"/>
        <div className="content">
          <div className="header">{videos.snippet.title}</div>
        </div>
      </div>
    );

}

export default VideoItem

// {videos, currentVideo, ref }