import React from 'react';
import ReactPlayer from 'react-player';
import video from './../../../../../assets/video/v2.mp4'
import './Video.css'

const VideoPlayer = () => {
  // URL of the video you want to play
  const videoUrl = {video}; // Replace with your video URL

  return (
    <div className="video-container">
    <div className='heading-container'>
      <p className='videoHeading'>Video Gallery</p>
    </div >
    <div className="video-section">
      <ReactPlayer 
       url={video}
       playing={false}   // Automatically play the video
       loop={true}      // Loop the video
       volume={0.8}     // Set volume to 80%
       muted={false}    // Unmute the video
       controls
       width="100%"
       height="auto"
      />
      </div>
    </div>
  );
};

export default VideoPlayer;
