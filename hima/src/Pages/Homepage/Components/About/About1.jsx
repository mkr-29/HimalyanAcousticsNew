import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Asset2 from "./Assets/cielingsystems.png";
import AboutCarousel from "./AboutCarousel";

const images = [Asset2, Asset2, Asset2, Asset2, Asset2];

export default function About1() {
  return (
    <div>
      <div className="flex px-24 gap-16 bg-[#f5f5f5] items-center justify-center py-10">
        <div className="flex flex-col w-[35rem] z-10">
          <h2 className="font1 font-bold text-[28px] w-[70%] color1">
            Get Inspired with our Acoustical Seamless Ceiling Systems
          </h2>
          <p className="text-justify color3 font1 font-light leading-10 text-[26px] mt-6">
            Our Acoustical Seamless Ceiling provides excellent and high
            performance for Acoustics and Fire Retardant, yet it offers array of
            designs that can match with the design and aesthetics of the space.
            Flexibility in design with ample choices of technical parameters,
            allows to deliver the best solution with an excellent asthetic
            appeal, for all kinds of spaces.
          </p>
          <Link className="color3 text-[22px] color4" to="">
            Read More...
          </Link>
        </div>

        <div className="about-carousel">
          <AboutCarousel images={images} />
        </div>
      </div>
    </div>
  );
}
