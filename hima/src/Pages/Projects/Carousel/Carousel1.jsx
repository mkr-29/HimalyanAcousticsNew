import React from "react";
import Slider from "react-slick";
// import Image1 from "./Assets/img1.jpg";
import "./Carousel1.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Prev from "./Assets/back.svg";
import Next from "./Assets/next.svg";

export default function Carousel1(parse) {
  // const images = parse.imgs;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <img src={Next} alt="next" className="mts-next-btn" />,
    prevArrow: <img src={Prev} alt="prev" className="mts-prev-btn" />,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {parse.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="img" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
