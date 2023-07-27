import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Asset1 from "./Assets/asset1.png";
import Asset2 from "./Assets/cielingsystems.png";
import AboutCarousel from "./AboutCarousel";
import ytbe from "../Achievements/Assets/ytbe.png";

const images = [Asset2, Asset2, Asset2, Asset2, Asset2];
export default function About() {
  return (
    <div className="about">
      <div className="achievements-body container px-2 grid lg:grid-cols-2 grid-cols-1 my-10 2xl:px-0 gap-20">
        <div className="div-1 flex flex-col 2xl:w-full w-full px-2">
          <h1 className="about-head 2xl:text-[28px] color1">
            Acoustic Meet's Design
          </h1>
          <span className="about-desc text-xs flex flex-col gap-2 leading-5 sm:text-[14px] sm:leading-6 lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 2xl:leading-8">
            <span className="font1 text-justify 2xl:text-[26px] font-light leading-10">
              In years past, acoustic treatments were all about form and
              function. But new materials are changing the way the wall and
              ceiling industry can use acoustic treatments as part of the
              aesthetics of a space, and the sky is the limit. Acoustical
              treatment solutions are no exception, and play an important role
              in the redesign of workspaces, schools, healthcare facilities,
              hospitality venues, and soon.
              <br />
              <Link to="/" className="tracking-wide">
                Read More...
              </Link>
            </span>
          </span>
        </div>
        <div className="flex w-full">
          <img src={ytbe} className="w-full" alt="" />
        </div>
      </div>
      <div className="achievements-body container px-2 grid lg:grid-cols-2 grid-cols-1 my-10 2xl:px-0 gap-20">
        <div className="flex flex-col w-full z-10">
          <h3 className="font1 font-bold text-[28px] color1">
            Introducing Carbon Adsorb Panels for Air
          </h3>
          <h2 className="font1 font-bold text-[28px] mt-2 leading-3 color1">
            & Noise Pollution
          </h2>
          <p className="text-justify color3 font1 font-light leading-10 text-[26px] mt-6">
            Stabilized by chemical impregnation, Sound Barrier Acoustical
            Facades panel made of long, strong wood fiber and cement. Good heat
            resistance and high noise reduction performance are two of the
            advantages of these barriers. Since sound insulation and acoustic
            treatment of rooms like wall and ceiling are common, it is commonly
            used.
          </p>
          <Link className="color3 text-[22px]" to="">
            Read More...
          </Link>
        </div>

        <div className="achievements-body container px-2 grid lg:grid-cols-2 grid-cols-1 2xl:px-0 gap-20">
          <div className="flex flex-col gap-2">
            <h1 className="about-head 2xl:text-[28px] color1">
              Featured Projects
            </h1>
            <div className="flex gap-6">
              <div className="banner flex flex-col justify-centre justify-center items-center w-36">
                <img src={Asset1} alt="" className="max-w-[18rem]" />
                <div className="banner-in top-2 flex flex-col items-start">
                  <span className="text-[26px] font-bold mt-2 color1">
                    Aphony Fibrete Panels
                  </span>
                  <span className="font3 text-[26px] mt-4 color3 font-black">
                    1 NRC
                  </span>
                  <span className="text-[26px] leading-8 mt-5 color3 font-extralight">
                    Wood Fibre Cement
                  </span>
                  <span className="text-[26px] leading-8 color3 font-extralight">
                    Bonded Cieling Systems
                  </span>
                  <span className="text-[26px] leading-5 mt-7 color3 font-extralight">
                    excellent absorption
                  </span>
                </div>
              </div>
              <div className="banner flex flex-col justify-centre justify-center items-center w-36">
                <img src={Asset1} alt="" className="max-w-[18rem]" />
                <div className="banner-in1 w-[78%] flex flex-col items-start top-2">
                  <span className="text-[26px] font-bold mt-2 color1">
                    Silent Series
                  </span>
                  <span className="font3 text-[26px] mt-4 color3 font-black">
                    UPTO 60 STC
                  </span>
                  <span className="text-[26px] leading-8 mt-5 color3 font-extralight">
                    Partitions &
                  </span>
                  <span className="text-[26px] leading-8 color3 font-extralight">
                    Door Systems
                  </span>
                  <span className="text-[26px] leading-5 mt-7 color3 font-extralight">
                    optimized insulation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-4 my-4 border-solid border-[2px] w-full" />
      <div className="flex px-24 gap-16">
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
          <Link className="color3 text-[22px]" to="">
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
