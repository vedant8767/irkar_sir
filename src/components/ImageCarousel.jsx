import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import img1 from '../assets/achievement.png'
import img2 from '../assets/exp_main.jpg'
import img3 from '../assets/experience.png'
import {getGallery} from '../firebase/firebase'
import '../css/ImageCarousel.css'

const ImageCarousel = () => {
  const settings = {
    dots: true,                // Show navigation dots
    infinite: true,            // Infinite scrolling
    speed: 500,                // Transition speed
    slidesToShow: 1,           // Show one image at a time
    slidesToScroll: 1,         // Scroll one image at a time
    autoplay: true,            // Enable autoplay
    autoplaySpeed: 3000,       // Autoplay speed (3 seconds)
    swipe: true,               // Allow manual swipe
    responsive: [              // Responsive settings
      {
        breakpoint: 768,       // Screen width below 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,      // Screen width below 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  const [galleryList,setGalleryList]=useState([])
  const [isLoading,setLoader]= useState(true)
  useEffect(() => {
    const fetchGallery = async () => {
        try {
                const galleryList = await getGallery();
                if (galleryList) {
                    setGalleryList(galleryList);
                    setLoader(false)
                } else {
                    console.log("no photo available in gallery");
                }
        } 
        catch (error) {
            console.error('Error fetching gallery data:', error);
        }
    };

    fetchGallery();
},[]);
  const images = [
    img1,
    img2,
    img3
  ];

  return (
    <div className="carousel-container">
      {/* <div className='eachgallerycard'>

      </div> */}
      <Slider className='slider' {...settings}>
        {/* {images.map((image, index) => (
          <div key={index} style={{ outline: 'none' }}>
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
          </div>
        ))} */}
        {isLoading ? (
            <div className=""></div> // Display the CSS spinner
        ) : (
            galleryList.length > 0 ? (
                galleryList.map((photo, index) => (
                  <div key={index} className='eachgallerycard'>
                  <div className="gallery_image">
                    <h3>{photo.title}</h3>
                  <img
                    src={photo.imageUrl}
                    alt={`Gallery image ${index + 1}`}
                  />
                  </div>
                  <p>
                  "शिक्षण हा जीवनभर चालणारा प्रवास आहे, आणि या प्रवासात तुम्हाला दिशा दाखवणे हे माझे कर्तव्य आहे. आपल्या विचारांना आणि ज्ञानाला अधिक व्यापक करण्यासाठी आपण सतत जिज्ञासू राहिले पाहिजे."
                  </p>
                  <h2>Dr. Mahadeo Irkar</h2>
                </div>
                ))
            ) : (
                <div>Gallery is Updateing.</div>
            )
        )}
       </Slider>
    </div>
  );
};

export default ImageCarousel;
