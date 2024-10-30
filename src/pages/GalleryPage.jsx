import React, { useEffect } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import '../css/GalleryPage.css'

const GalleryPage = () => {
    useEffect(()=>{
        var navbar = document.querySelector('.navbar');
        document.querySelectorAll('.btn').forEach(function(button) {
          button.style.color = 'white';
      });
      document.querySelector('.navbar h1').style.color = 'white';
      navbar.style.backgroundColor = 'black';
    
    
    // Set the position property to an empty string
    navbar.style.position = 'relative';
      },[])
  return (
    <div className='gallery_container'>
      <h1>Gallery</h1>
      <ImageCarousel />
    </div>
  );
};

export default GalleryPage;
