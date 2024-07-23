import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { Captions, Download, Fullscreen, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';
import Photos from './Photos';
import './PhotoGallery.css';
import "yet-another-react-lightbox/plugins/thumbnails.css";
import v1 from '../media/v1.mp4';
import Video from "yet-another-react-lightbox/plugins/video";

const PhotoGallery = () => {
  const [index, setIndex] = useState(-1);

  const slides = [
    {
      src: 'https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Slide Title One',
      description: 'Slide Description One\n\nthis is new line',
    },
    {
      src: 'https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Slide Title Two',
      description: 'Slide Description Two',
    },
    {
      src: 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Slide Title Three',
      description: 'Slide Description Three',
    },
    {
      src: 'https://images.unsplash.com/photo-1700753227268-8832c285591e?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Slide Title Nine',
      description: 'Slide Description Nine',
    },
    {
      src: 'https://images.unsplash.com/photo-1700769025506-6c3dcb9ec9b7?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Slide Title Ten',
      description: 'Slide Description Ten',
    },
  ];

  return (
    <>
      <div className='images-container'>
        <p className='thirdComponent'>Photo Gallary</p>
      </div>
      <Photos data={slides} onClick={(currentIndex) => { setIndex(currentIndex); }} />
      
      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'end',
        }}
        index={index} 
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
      
      {/* <Lightbox
    plugins={[Video]}
    slides={[
      {
        type: "video",
        width: 1280,
        height: 720,
        poster: "https://images.unsplash.com/photo-1700769025506-6c3dcb9ec9b7?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        sources: [
          {
            src: v1,
            type: "video/mp4",
          },
        ],
      },
      // ...
    ]}
    // ...
  /> */}
    </>
  );
}

export default PhotoGallery;
