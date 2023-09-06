// import React from 'react'
// import { Carousel } from 'rsuite';

// function Banner() {
//   return (
//     <Carousel autoplay className="custom-slider">
//     <img src="https://images.pexels.com/photos/3728084/pexels-photo-3728084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="250" />
//     {/* <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2" height="250" />
//     <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3" height="250" />
//     <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4" height="250" />
//     <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5" height="250" /> */}
//   </Carousel>
//   )
// }

// export default Banner

import React from 'react';
import { Carousel } from 'rsuite';

function Banner() {
  const carouselContainerStyle = {
    overflow: 'hidden',
    width: '100%',
  };

  const customSliderImgStyle = {
    width: '100%',
    // height: 'auto',
    height: '500px',
    objectFit: 'cover',
  };

  return (
    <div>
      <div style={carouselContainerStyle}>
        <Carousel autoplay>
          <img
            src="https://images.pexels.com/photos/4825139/pexels-photo-4825139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Banner 1"
            style={customSliderImgStyle}
          />
          <img
            src="https://images.pexels.com/photos/13650913/pexels-photo-13650913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Banner 1"
            style={customSliderImgStyle}
          />
          <img
            src="https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Banner 1"
            style={customSliderImgStyle}
          />
          <img
            src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Banner 1"
            style={customSliderImgStyle}
          /> 
          
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;

