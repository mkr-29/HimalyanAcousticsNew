import React from "react";
import Slider from "react-slick";

export default function HisCarousel({ images, data }) {
  return (
    <div>
      <Slider
        autoplay={true}
        autoplaySpeed={2000}
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={6}
        slidesToScroll={1}
      >
        {images.map((image, index) => (
          <div className="my-20" key={index}>
            <div className="flex flex-col border-2 relative border-black items-center bg-white w-[11rem] h-[10rem] justify-end pb-4">
              <img
                src={image}
                className="w-[80%] absolute top-[-5rem]"
                alt=""
              />
              {data[index] && (
                <h2 className="font2 text-[18px] color3 text-center">
                  {data[index]}
                </h2>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
