import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

const AboutCarousel = ({ images }) => {
  return (
    <Slider
      autoplay={true}
      autoplaySpeed={3000}
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      customPaging={(slick, index) => {
        const currentSlide = slick.activeSlide;
        return index === currentSlide ? (
          <div
            key={index}
            className="active-dot"
            style={{
              width: "15px",
              height: "15px",
              border: "1px solid #727271",
              borderRadius: 50,
              background: {
                color: currentSlide === index ? "#727271" : "white",
              },
            }}
          />
        ) : (
          <div
            key={index}
            className=""
            style={{
              width: "15px",
              border: "1px solid #727271",
              height: "15px",
              borderRadius: 50,
              background: {
                color: "",
              },
            }}
          />
        );
      }}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt="Image" />
        </div>
      ))}
    </Slider>
  );
};

export default AboutCarousel;
