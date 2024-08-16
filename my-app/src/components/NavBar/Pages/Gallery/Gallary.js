import React from 'react'
import PhotoGallery from './PhotoGallery/PhotoGallery'
import VideoCarousel from './VideoGallery/VideoCarousel'
import VideoPlayer from './VideoGallery/VideoPlayer'

export const Gallary = () => {
  return (
    <>
      <div><PhotoGallery/></div>
      {/* <div><VideoCarousel/></div> */}
      <div><VideoPlayer/></div>
    </>    
  )
}
