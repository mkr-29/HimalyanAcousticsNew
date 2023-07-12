import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Asset1 from "./Assets/asset1.png";
import Asset2 from "./Assets/asset2.png";

export default function About() {
  return (
    <div className="about">
      <div className="about-1 gap-7 flex flex-col lg:flex-row px-4 sm:px-8 lg:px-14 lg:gap-20">
        <div className="div-1 flex flex-col 2xl:w-1/2 w-full px-2">
          <h1 className="about-head text-[22px] leading-7 flex flex-col sm:flex-row sm:gap-2 lg:flex-col md:text-[30px] md:leading-8 md:m-0 lg:leading-6 2xl:text-[34px] 2xl:leading-8">
            acoustic meet's design!!
          </h1>
          <span className="about-desc text-xs flex flex-col gap-2 leading-5 sm:text-[14px] sm:leading-6 lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 2xl:leading-8">
            <span className="font-normal">
              In years past, acoustic treatments were all about form and
              function. But new materials are changing the way the wall and
              ceiling industry can use acoustic treatments as part of the
              aesthetics of a space, and the sky is the limit.Acoustical
              treatment solutions are no exception, and play an important role
              in the redesign of workspaces, schools, healthcare facilities,
              hospitality venues, and so on.Vents are just as important as décor
              and aesthetics & décor while controlling sound.
              <br />
              <Link to="/" className="tracking-wide">
                Read More...
              </Link>
            </span>
          </span>
        </div>

        <div className="div-1 flex flex-col justify-between 2xl:w-1/2 w-full px-2">
          <div className="flex flex-col gap-2">
            <h1 className="about-head mb-10 text-black text-[22px] leading-7 flex flex-col gap-1 sm:flex-row sm:gap-2 lg:flex-col 2xl:text-[34px] 2xl:leading-8">
              performance based solutions
            </h1>
            <div className="flex gap-2 xl:gap-4">
              <div className="banner flex flex-col justify-centre justify-center items-center w-36">
                <img
                  src={Asset1}
                  alt=""
                  className="max-w-[5rem] sm:max-w-[6rem]"
                />
                <div className="banner-in top-2 flex flex-col items-center text-white">
                  <span className="text-[14.5px] leading-3 sm:text-[17px]">
                    ONE OF
                  </span>
                  <span className="text-[13px] leading-4 sm:text-[15px] sm:leading-6">
                    INDIA'S
                  </span>
                  <span className="text-black text-[32px] leading-7">
                    CO<sub className="text-sm">2</sub>
                  </span>
                  <span className="text-black text-[12px] leading-3 sm:leading-5">
                    absorbant
                  </span>
                  <span className="text-[19.7px] leading-5 sm:text-[23px]">
                    SOUND
                  </span>
                  <span className="leading-4 sm:text-[18.5px] sm:leading-6">
                    BARRIER
                  </span>
                  <span className="leading-5 text-[22px] sm:text-[26px]">
                    system
                  </span>
                </div>
              </div>
              <div className="banner flex flex-col justify-centre justify-center items-center w-36">
                <img
                  src={Asset1}
                  alt=""
                  className="max-w-[5rem] sm:max-w-[6rem]"
                />
                <div className="banner-in1 flex flex-col items-center text-white top-2">
                  <span className="text-[15px] leading-3 text-black sm:text-[17px] sm:leading-4">
                    excellent
                  </span>
                  <span className="text-[16px] leading-4 text-black sm:text-[18px] sm:leading-6">
                    acoustic
                  </span>
                  <span className="text-[10.6px] text-black leading-3 sm:text-[11.6px] sm:leading-4">
                    performance
                  </span>
                  <span className="text-black text-[16.5px] leading-5 sm:text-[17.8px] sm:leading-6">
                    with our
                  </span>
                  <span className="text-[24px] leading-6 sm:text-[28px] sm:leading-7">
                    1 NRC
                  </span>
                  <span className="leading-3 text-[9.4px] sm:text-[10.7px] sm:leading-4">
                    LAB-CERTIFIED
                  </span>
                  <span className="text-[31px] leading-7 sm:text-[36px]">
                    panel
                  </span>
                </div>
              </div>
              <div className="banner flex flex-col justify-centre justify-center items-center w-36">
                <img
                  src={Asset1}
                  alt=""
                  className="max-w-[5rem] sm:max-w-[6rem]"
                />
                <div className="banner-in2 flex flex-col items-center text-white top-2">
                  <span className="text-[8px] leading-4 text-black sm:text-[10px]">
                    get the best of
                  </span>
                  <span className="text-[13.5px] leading-3 sm:text-[16px] sm:leading-4">
                    ACOUSTIC
                  </span>
                  <span className="text-[10.1px] leading-3 sm:text-[12px] sm:leading-4">
                    PERFORMANCE
                  </span>
                  <span className="text-black text-[19.5px] leading-4 sm:text-[23px]">
                    with our
                  </span>
                  <span className="text-[20px] leading-4 sm:text-[23.5px] sm:leading-7">
                    SILENT
                  </span>
                  <span className="leading-3 text-[7.5px] sm:text-[8.8px]">
                    ACOUSTIC DRYWALL
                  </span>
                  <span className="leading-4 text-[17.5px] sm:text-[20.6px] sm:leading-5">
                    Partition
                  </span>
                  <span className="leading-3 text-black text-[15.3px] sm:text-[18px]">
                    range with
                  </span>
                  <span className="leading-3 text-[12px] sm:text-[14.35px] sm:leading-6">
                    UPTO 65 STC
                  </span>
                </div>
              </div>
              <div className="banner flex flex-col justify-centre justify-center items-center w-36">
                <img
                  src={Asset1}
                  alt=""
                  className="max-w-[5rem] sm:max-w-[6rem]"
                />
                <div className="banner-in3 flex flex-col items-center text-white top-2">
                  <span className="text-[14px] leading-3 text-black sm:text-[16.2px]">
                    featuring
                  </span>
                  <span className="leading-4 text-[11px] text-black sm:text-[13px] sm:leading-5">
                    remarkably
                  </span>
                  <span className="leading-3 text-[9px] sm:text-[11px] sm:leading-4">
                    SUSTAINABLE &
                  </span>
                  <span className="leading-3 text-[7.8px] sm:text-[9.5px] sm:leading-4">
                    GREEN CERTIFIED
                  </span>
                  <span className="leading-3 text-[8.9px] sm:text-[10.8px] sm:leading-4">
                    CEMENT FIBRES
                  </span>
                  <span className="leading-4 text-black text-[16px] sm:text-[18.6px]">
                    one of the
                  </span>
                  <span className="leading-4 text-black text-[10.7px] sm:text-[12.5px] sm:leading-5">
                    1ST IN INDIA
                  </span>
                  <span className="leading-4 text-[17px] sm:text-[19.4px] sm:leading-5">
                    APHONY
                  </span>
                  <span className="leading-4 text-[14.8px] sm:text-[17px] sm:leading-5">
                    FIBRETTE
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Link to="">Read More...</Link>
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
            such as airports, railways, highways, or leisure areas.<br/>
            <Link to="/" className="">
              Read More...
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
