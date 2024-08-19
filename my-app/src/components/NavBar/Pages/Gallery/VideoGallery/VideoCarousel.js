import "./VideoCarousel.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import v1 from '../../../../../assets/video/v1.mp4';
import v2 from '../../../../../assets/video/v2.mp4';
import v3 from '../../../../../assets/video/v3.mp4';
import v4 from '../../../../../assets/video/v4.mp4';
import ReactPlayer from "react-player";
//import "bootstrap/dist/css/bootstrap.css";

const VideoCarousel = () => {
  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: v1,
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 2,
      title: "Video 2",
      src: v2,
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 3,
      title: "Video 3",
      src: v3,
      credit: "Video by cottonbro from Pexels",
    },
  ];

  return (
    <div className="contact-container">
    <div className="App">
       {/* <h1 style={{textAlign:'center'}}>Video Gallery</h1> */}
       <p className='thirdComponent'>Video Gallery</p>
       <div className="contact-section">
      <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={false}
                className="react-player"
              />
              <Carousel.Caption>
                <h3>{videoObj.title}</h3>
                <p>{videoObj.credit}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
     </div>
     </div>
  );
};

export default VideoCarousel;
