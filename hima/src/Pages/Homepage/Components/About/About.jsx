import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Asset1 from "./Assets/asset1.png";
import Asset2 from "./Assets/cielingsystems.png";
import AboutCarousel from "./AboutCarousel";
import ytbe from "../Achievements/Assets/ytbe.png";
import AMD from "./Assets/amd.png";
import AirNoise from "../../../InspiringDesign/Assets/img11.png";

const images = [Asset2, Asset2, Asset2, Asset2, Asset2];
export default function About() {
  return (
    <div className="about">
      <div className="achievements-body h-[22.4rem] container px-2 grid lg:grid-cols-2 grid-cols-1 2xl:px-0 gap-20">
        <Link to="/inspiring-design" className="about-head">
          <img src={AMD} className="" alt="" />
          <h1 className="">Acoustic Meet's Design</h1>
        </Link>
        <div className="flex w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tTbwhk2Lkuo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="achievements-body h-auto my-16 container px-2 grid lg:grid-cols-2 grid-cols-1 2xl:px-0 gap-20">
        <Link to="" className="about-head about-head2">
          <img src={AirNoise} alt="" />
          <h1 className="font1 font-bold text-[22px] color1">
            Introducing Carbon Adsorb Panels
            <br />
            for Air & Noise Pollution
          </h1>
        </Link>

        <div className="achievements-body container px-2 grid grid-cols-1 2xl:px-0 gap-20">
          <div className="flex flex-col gap-2 w-full">
            <h1 className="about-head 2xl:text-[28px] color1">
              Featured Projects
            </h1>
            <div className="flex gap-[0.4rem] border-2 p-2 border-gray-200 w-full">
              <div className="banner flex flex-col justify-centre justify-center items-center w-28">
                <img src={Asset1} alt="" className="max-w-[14.5rem]" />
                <div className="banner-in top-2 flex flex-col items-start p-2">
                  <span className="text-[23px] font-bold mt-0 color1">
                    Aphony Fibrete Panels
                  </span>
                  <span className="font3 text-[26px] mt-4 color3 font-black">
                    1 NRC
                  </span>
                  <span className="text-[23px] leading-8 mt-5 color3 font-extralight">
                    Wood Fibre Cement
                  </span>
                  <span className="text-[23px] leading-6 color3 font-extralight">
                    Bonded Cieling Systems
                  </span>
                  <span className="text-[23px] leading-3 mt-7 color3 font-extralight">
                    excellent absorption
                  </span>
                </div>
              </div>
              <div className="banner flex flex-col justify-centre justify-center items-center w-36">
                <img src={Asset1} alt="" className="max-w-[14.5rem]" />
                <div className="banner-in1 w-[78%] flex flex-col items-start top-2">
                  <span className="text-[23px] font-bold mt-2 color1">
                    Silent Series
                  </span>
                  <span className="font3 text-[26px] mt-4 color3 font-black">
                    UPTO 60 STC
                  </span>
                  <span className="text-[23px] leading-8 mt-5 color3 font-extralight">
                    Partitions &
                  </span>
                  <span className="text-[23px] leading-6 color3 font-extralight">
                    Door Systems
                  </span>
                  <span className="text-[23px] leading-5 mt-7 color3 font-extralight">
                    optimized insulation
                  </span>
                </div>
              </div>
              <div className="banner flex flex-col justify-centre justify-center items-center w-36">
                <img src={Asset1} alt="" className="max-w-[14.5rem]" />
                <div className="banner-in1 w-[78%] flex flex-col items-start top-2">
                  <span className="text-[23px] font-bold mt-2 color1">
                    Silent Series
                  </span>
                  <span className="font3 text-[26px] mt-4 color3 font-black">
                    UPTO 60 STC
                  </span>
                  <span className="text-[23px] leading-8 mt-5 color3 font-extralight">
                    Partitions &
                  </span>
                  <span className="text-[23px] leading-6 color3 font-extralight">
                    Door Systems
                  </span>
                  <span className="text-[23px] leading-5 mt-7 color3 font-extralight">
                    optimized insulation
                  </span>
                </div>
              </div>
            </div>
            <Link className="color4 text-[24px]" to="">
              Read More...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
