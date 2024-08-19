import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { Captions, Download, Fullscreen, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';
import Photos from './Photos';
import './PhotoGallery.css';
import "yet-another-react-lightbox/plugins/thumbnails.css";
import pic1 from '../../../../../assets/Gallery/Photos/pic1.jpg';
import pic2 from '../../../../../assets/Gallery/Photos/pic2.webp';
import pic3 from '../../../../../assets/Gallery/Photos/pic3.webp';
import pic4 from '../../../../../assets/Gallery/Photos/pic4.webp';
import pic5 from '../../../../../assets/Gallery/Photos/pic5.webp';
import pic6 from '../../../../../assets/Gallery/Photos/pic6.webp';
import pic7 from '../../../../../assets/Gallery/Photos/pic7.webp';

const PhotoGallery = () => {
  const [index, setIndex] = useState(-1);
  const Media = [
    { type: 'img', url: pic1 }];

  const slides = [
    {
      src: pic1,
      title: 'Slide Title One',
      description: 'Slide Description One\n\nthis is new line',
    },
    {
      src: pic2,
      title: 'Slide Title Two',
      description: 'Slide Description Two',
    },
    {
      src: pic3,
      title: 'Slide Title Three',
      description: 'Slide Description Three',
    },
    {
      src: pic4,
      title: 'Slide Title Nine',
      description: 'Slide Description Nine',
    },
    {
      src: pic5,
      title: 'Slide Title Ten',
      description: 'Slide Description Ten',
    },
    {
      src: pic6,
      title: 'Slide Title Ten',
      description: 'Slide Description Ten',
    },
    {
      src: pic7,
      title: 'Slide Title Ten',
      description: 'Slide Description Ten',
    }
  ];

  return (
    <>
     <div className="contact-container">
      <div className='images-container'>
        <p className='thirdComponent'>Photo Gallery</p>
      </div>
      <div className="contact-section">
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
      </div>
  </div>
    </>
  );
}

export default PhotoGallery;
