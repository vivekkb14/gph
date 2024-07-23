import React from 'react';
import { Media } from '../media/Media';
import { useState } from 'react';
import './VideoCarousel.css'; // Importing CSS for styling

const VideoCarousel = () => {
  const [file, setFile] = useState(null);

  return (
    <div className='container'>
      <div className='images-container'>
        <p className='thirdComponent'>Video Gallary</p>
      </div>
      <div className="images-container">
        {Media.map((file, index) => (
          <div
            className="image"
            key={index}
            onClick={() => setFile(file)}
          >
            {file.type === 'image' ? (
              <img src={file.url} alt={`Media ${index}`} />
            ) : (
              <video src={`${file.url}#t0.001`} muted preload='metadata' />
            )}
          </div>
        ))}
        
        <div className='popup-media' style={{ display: file ? 'block' : 'none' }}>
          <span className='close-btn' onClick={() => setFile(null)}>&times;</span>
          {file?.type === 'video' ? (
            <video src={file?.url} muted autoPlay controls />
          ) : (
            <img src={file?.url} alt="Popup" />
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoCarousel;;