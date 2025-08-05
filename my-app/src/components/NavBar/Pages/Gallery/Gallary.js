import React from 'react'
import PhotoGallery from './PhotoGallery/PhotoGallery'
import VideoPlayer from './VideoGallery/VideoPlayer'
import WhatsAppChat from '../CommonComponents/WhatsappComponent/WhatsappComponent'

export const Gallary = () => {
  return (
    <>
      <div><PhotoGallery/></div>
      <div><VideoPlayer/></div>
      <div><WhatsAppChat/></div>
    </>    
  )
}
