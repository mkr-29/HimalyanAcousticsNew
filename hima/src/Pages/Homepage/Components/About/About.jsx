import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Asset1 from "./Assets/asset1.png";
import Asset2 from "./Assets/asset2.png";

export default function About() {
  return (
    <div className="about">
      <div className="about-1 gap-7 flex flex-col px-4 lg:flex-row lg:gap-20">
        <div className="div-1 flex flex-col 2xl:w-1/2 w-full px-2">
          <h1 className="about-head 2xl:text-[28px]">Acoustic Meet's Design</h1>
          <span className="about-desc text-xs flex flex-col gap-2 leading-5 sm:text-[14px] sm:leading-6 lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 2xl:leading-8">
            <span className="font-normal text-justify 2xl:text-[22px]">
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
            <h1 className="about-head 2xl:text-[28px]">
              Featured Projects
            </h1>
            <div className="flex gap-6">
              <div className="banner flex flex-col justify-centre justify-center items-center w-36">
                <img
                  src={Asset1}
                  alt=""
                  className="max-w-[14rem]"
                />
                <div className="banner-in top-2 flex flex-col items-start">
                  <span className="text-[18px] font-bold mt-2">
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
                <img
                  src={Asset1}
                  alt=""
                  className="max-w-[14rem]"
                />
                <div className="banner-in1 w-[78%] flex flex-col items-start top-2">
                  <span className="text-[18px] font-bold mt-2">
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
      <div className="about-2 flex flex-col px-2 mt-2 gap-8 sm:px-8 lg:px-14 lg:gap-20 lg:flex-row">
        <div className="flex flex-col justify-start items-start w-full lg:w-1/2">
          <h3 className="font-bold text-lg xl:text-[24px] leading-3">
            meet our new
          </h3>
          <h2 className="font-bold text-[22px] xl:text-[34px] xl:leading-[54px]">
            CARBON ADSORBER PANELS
          </h2>
          <p className="text-[15px] xl:text-[21px]">
            first of its kinds panels high on performance for NOISE + AIR
            POLLUTION
          </p>
          <Link className="text-[15px] xl:text-[21px]" to="">
            Real More...
          </Link>
        </div>
        <div className="flex flex-col gap-2 justify-center lg:w-1/2">
          <h1 className="about-sub-head text-[22px] leading-5 sm:text-[28px] sm:leading-7 xl:text-[34px]">
            INDOOR AIR QUALITY
            <br />
            <span className="text-[18px] mt-1 font-extrabold leading-4 sm:text-[24px] sm:leading-5 md:text-[24px] lg:text-[22px]">
              at our best green standards & lab certifications...
            </span>
          </h1>
          <span className="about-desc xl:mt-2 text-justify max-[1250px]:text-[14px] xl:text-[19px]">
            Environmental noise and air pollution, as well as poor green
            infrastructure quality, are major concerns for the new spaces being
            designed in the contemporary era.This issue is further stressed for
            urban areas located close to aggressive sources of such pollutants,
            such as airports, railways, highways, or leisure areas.
            <br />
            <Link to="/" className="">
              Read More...
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
