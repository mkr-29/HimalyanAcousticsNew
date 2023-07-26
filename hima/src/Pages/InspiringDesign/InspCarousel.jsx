import React from "react";
import Slider from "react-slick";

export default function InspCarousel({ images, data }) {
  return (
    <div>
      <Slider
        autoplay={true}
        autoplaySpeed={3000}
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={4}
        slidesToScroll={1}
      >
        {images.map((image, index) => (
          <div className="insp-des-car" key={index}>
            <div className="flex flex-col items-center bg-white w-[22rem] h-[17rem] justify-between pb-4">
              <img src={image} className="w-[50%]" alt="" />
              {data[index] && (
                <h2 className="font3 text-[32px] color3">{data[index]}</h2>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
