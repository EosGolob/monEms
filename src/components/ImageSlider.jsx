import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import image1 from '../assets/image.jpg';
import image2 from '../assets/img.jpg';
import image3 from '../assets/imge.jpg';
// import '../components/ImageSlider.css'
const images = [
  image2,
  image3];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    // <div>
    //   <Slider {...settings}>
    //     {images.map((image, index) => (
    //       <div key={index}>
    //         <img src={image} alt={`Slide ${index}`} style={{ width: '700px', height: '500px' }} />
    //       </div>
    //     ))}
    //   </Slider>

    // </div>
    <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto', maxHeight: '600px' }} />
        </div>
      ))}
    </Slider>
  </div>

  );
};

export default ImageSlider;
