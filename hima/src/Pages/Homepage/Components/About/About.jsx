import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Asset1 from "./Assets/asset1.png";
import Asset2 from "./Assets/cielingsystems.png";

export default function About() {
  return (
    <div className="about">
      <div className="about-1 gap-7 flex flex-col px-4 lg:flex-row lg:gap-20">
        <div className="div-1 flex flex-col 2xl:w-1/2 w-full px-2">
          <h1 className="about-head 2xl:text-[28px] color1">
            Acoustic Meet's Design
          </h1>
          <span className="about-desc text-xs flex flex-col gap-2 leading-5 sm:text-[14px] sm:leading-6 lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 2xl:leading-8">
            <span className="font1 font-normal text-justify 2xl:text-[22px]">
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

        <div className="div-1 flex flex-col justify-between 2xl:w-1/2 w-full px-2">
          <div className="flex flex-col gap-2">
            <h1 className="about-head 2xl:text-[28px] color1">
              Featured Projects
            </h1>
            <div className="flex gap-6">
              <div className="banner flex flex-col justify-centre justify-center items-center w-36">
                <img src={Asset1} alt="" className="max-w-[14rem]" />
                <div className="banner-in top-2 flex flex-col items-start">
                  <span className="text-[18px] font-bold mt-2 color1">
                    Aphony Fibrete Panels
                  </span>
                  <span className="text-[20px] mt-4 color3 font-black">
                    1 NRC
                  </span>
                  <span className="text-[18px] leading-5 mt-5 color3">
                    Wood Fibre Cement
                  </span>
                  <span className="text-[18px] leading-6 color3">
                    Bonded Cieling Systems
                  </span>
                  <span className="text-[18px] leading-5 mt-6 color3">
                    excellent absorption
                  </span>
                </div>
              </div>
              <div className="banner flex flex-col justify-centre justify-center items-center w-36">
                <img src={Asset1} alt="" className="max-w-[14rem]" />
                <div className="banner-in1 w-[78%] flex flex-col items-start top-2">
                  <span className="text-[18px] font-bold mt-2 color1">
                    Silent Series
                  </span>
                  <span className="text-[20px] mt-4 color3 font-black">
                    UPTO 60 STC
                  </span>
                  <span className="text-[18px] leading-5 mt-5 color3">
                    Partitions &
                  </span>
                  <span className="text-[18px] leading-6 color3">
                    Door Systems
                  </span>
                  <span className="text-[18px] leading-5 mt-6 color3">
                    optimized insulation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-2 flex flex-col mt-2 gap-8 sm:px-8  lg:gap-20 lg:flex-row 2xl:px-4">
        <div className="flex flex-col justify-start items-start w-full lg:w-1/2">
          <h3 className="font1 font-bold text-[28px] color1">
            Introducing Carbon Adsorb Panels
          </h3>
          <h2 className="font1 font-bold text-[28px] leading-3 color1">
            for Air & Noise Pollution
          </h2>
          <p className="font1 2xl:text-[22px] mt-6 color3 text-justify">
            Stabilized by chemical impregnation, Sound Barrier Acoustical
            Facades panel made of long, strong wood fiber and cement. Good heat
            resistance and high noise reduction performance are two of the
            advantages of these barriers. Since sound insulation and acoustic
            treatment of rooms like wall and ceiling are common, it is commonly
            used.
          </p>
          <Link className="font1 xl:text-[22px] color3" to="">
            Real More...
          </Link>
        </div>
        <div className="flex flex-col justify-start items-start w-full lg:w-1/2">
          <h3 className="font1 font-bold text-[28px] color1">
            Indoor Air Quality at its best with
          </h3>
          <h2 className="font1 font-bold text-[28px] leading-3 color1">
            our Green Standards & Lab. Certifications
          </h2>
          <span className="text-justify color3 font1 text-[22px] mt-6">
            Environmental noise and air pollution, as well as poor green
            infrastructure quality, are major concerns for the new spaces being
            designed in the contemporary era. This issue is further stressed for
            urban areas located close to aggressive sources of such pollutants,
            such as airports, railways, highways, or leisure areas.
            <br />
            <Link to="/" className="">
              Read More...
            </Link>
          </span>
        </div>
      </div>
      <hr className="mx-4 my-4 border-solid border w-full" />
      <div className="flex px-24 gap-20">
        <div className="flex flex-col w-1/2">
          <h2 className="font1 font-bold text-[28px] w-3/5 color1">
            Get Inspired with our Acoustical Seamless Ceiling Systems{" "}
          </h2>
          <p className="text-justify color3 font1 text-[22px] mt-6">
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
        <img src={Asset2} className="w-[47%]" alt="" />
      </div>
    </div>
  );
}
