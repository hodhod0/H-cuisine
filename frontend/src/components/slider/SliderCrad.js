import React from 'react'
import Slider from "react-slick";



const SliderCard = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 300
      };
  return (
    <div>
    <h2>Center Mode</h2>
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
    </Slider>
  </div>
  )
}

export default SliderCard