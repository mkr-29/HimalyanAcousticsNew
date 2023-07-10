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
          <h1 className="about-head text-[30px] leading-7 flex flex-col sm:flex-row sm:gap-2 lg:flex-col md:text-[30px] md:leading-8 md:m-0 lg:leading-6 2xl:text-[40px] 2xl:leading-8">
            acoustic
            <span> meet's design!!</span>
          </h1>
          <span className="about-desc text-xs flex flex-col gap-2 leading-5 text-justify sm:text-[14px] sm:leading-6 lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 2xl:leading-7">
            <span className="font-normal">
              In years past, acoustic treatments were all about form and
              function. But new materials are changing the way the wall and
              ceiling industry can use acoustic treatments as part of the
              aesthetics of a space, and the sky is the limit.
            </span>
            <span>
              Acoustical treatment solutions are no exception, and play an
              important role in the redesign of workspaces, schools, healthcare
              facilities, hospitality venues, and so on.
            </span>
            <span>
              Vents are just as important as décor and aesthetics & décor while
              controlling sound.
              <Link to="/"> Read More...</Link>
            </span>
          </span>
        </div>
        <div className="div-1 flex flex-col 2xl:w-1/2 w-full px-2">
          <h1 className="about-head mb-10 text-[30px] leading-7 flex flex-col gap-1 sm:flex-row sm:gap-2 lg:flex-col 2xl:text-[40px] 2xl:leading-8">
            performance
            <span>based solutions</span>
          </h1>
          <div className="flex justify-between gap-1">
            <div className="banner flex flex-col justify-centre 2xl:w-auto justify-center items-center w-36">
              <img
                src={Asset1}
                alt=""
                className="max-w-[5rem] sm:max-w-[6rem] 2xl:max-w-[7rem]"
              />
              <div className="banner-in top-2 flex flex-col items-center text-white 2xl:top-4">
                <span className="text-[14.5px] leading-3 sm:text-[17px] 2xl:text-[19px]">ONE OF</span>
                <span className="text-[13px] leading-4 sm:text-[15px] sm:leading-6 2xl:text-[17px] 2xl:leading-7">INDIA'S</span>
                <span className="text-black text-[32px] leading-7 2xl:text-[40px]">
                  CO<sub className="text-sm">2</sub>
                </span>
                <span className="text-black text-[12px] leading-3 sm:leading-5 2xl:text-[14px] 2xl:leading-6">
                  absorbant
                </span>
                <span className="text-[19.7px] leading-5 sm:text-[23px] 2xl:text-[27px] 2xl:leading-6">
                  SOUND
                </span>
                <span className="leading-4 sm:text-[18.5px] sm:leading-6 2xl:text-[22px] 2xl:leading-7">
                  BARRIER
                </span>
                <span className="leading-5 text-[22px] sm:text-[26px] 2xl:text-[30.5px] 2xl:leading-6">
                  system
                </span>
              </div>
            </div>
            <div className="banner flex flex-col justify-centre 2xl:w-auto justify-center items-center w-36">
              <img
                src={Asset1}
                alt=""
                className="max-w-[5rem] sm:max-w-[6rem] 2xl:max-w-[7rem]"
              />
              <div className="banner-in1 flex flex-col items-center text-white top-2 2xl:top-4">
                <span className="text-[15px] leading-3 text-black sm:text-[17px] sm:leading-4 2xl:text-[18px]">
                  excellent
                </span>
                <span className="text-[16px] leading-4 text-black sm:text-[18px] sm:leading-6 2xl:text-[19.4px] 2xl:leading-7">
                  acoustic
                </span>
                <span className="text-[10.6px] text-black leading-3 sm:text-[11.6px] sm:leading-4 2xl:text-[12.8px]">
                  performance
                </span>
                <span className="text-black text-[16.5px] leading-5 sm:text-[17.8px] sm:leading-6 2xl:text-[19.8px]">
                  with our
                </span>
                <span className="text-[24px] leading-6 sm:text-[28px] sm:leading-7 2xl:text-[33px] 2xl:leading-8">1 NRC</span>
                <span className="leading-3 text-[9.4px] sm:text-[10.7px] sm:leading-4 2xl:text-[12.8px] 2xl:leading-6">LAB-CERTIFIED</span>
                <span className="text-[31px] leading-7 sm:text-[36px] 2xl:text-[43px] 2xl:leading-9">panel</span>
              </div>
            </div>
            <div className="banner flex flex-col justify-centre 2xl:w-auto justify-center items-center w-36">
              <img
                src={Asset1}
                alt=""
                className="max-w-[5rem] sm:max-w-[6rem] 2xl:max-w-[7rem]"
              />
              <div className="banner-in2 flex flex-col items-center text-white top-2 2xl:top-4">
                <span className="text-[8px] leading-4 text-black sm:text-[10px] 2xl:text-[12px]">
                  get the best of
                </span>
                <span className="text-[13.5px] leading-3 sm:text-[16px] sm:leading-4 2xl:text-[18px]">ACOUSTIC</span>
                <span className="text-[10.1px] leading-3 sm:text-[12px] sm:leading-4 2xl:text-[13.5px] 2xl:leading-5">PERFORMANCE</span>
                <span className="text-black text-[19.5px] leading-4 sm:text-[23px] 2xl:text-[25.6px] 2xl:leading-5">
                  with our
                </span>
                <span className="text-[20px] leading-4 sm:text-[23.5px] sm:leading-7 2xl:text-[26.2px]">SILENT</span>
                <span className="leading-3 text-[7.5px] sm:text-[8.8px] 2xl:text-[10px] 2xl:leading-4">ACOUSTIC DRYWALL</span>
                <span className="leading-4 text-[17.5px] sm:text-[20.6px] sm:leading-5 2xl:text-[23px] 2xl:leading-6">Partition</span>
                <span className="leading-3 text-black text-[15.3px] sm:text-[18px] 2xl:text-[20.2px] 2xl:leading-4">
                  range with
                </span>
                <span className="leading-3 text-[12px] sm:text-[14.35px] sm:leading-6 2xl:text-[16px] 2xl:leading-6">UPTO 65 STC</span>
              </div>
            </div>
            <div className="banner flex flex-col justify-centre 2xl:w-auto justify-center items-center w-36">
              <img
                src={Asset1}
                alt=""
                className="max-w-[5rem] sm:max-w-[6rem] 2xl:max-w-[7rem]"
              />
              <div className="banner-in3 flex flex-col items-center text-white top-2 2xl:top-4">
                <span className="text-[14px] leading-3 text-black sm:text-[16.2px] 2xl:text-[18px]">
                  featuring
                </span>
                <span className="leading-4 text-[11px] text-black sm:text-[13px] sm:leading-5 2xl:text-[14.6px] 2xl:leading-6">
                  remarkably
                </span>
                <span className="leading-3 text-[9px] sm:text-[11px] sm:leading-4 2xl:text-[13px]">SUSTAINABLE &</span>
                <span className="leading-3 text-[7.8px] sm:text-[9.5px] sm:leading-4 2xl:text-[11.5px]">GREEN CERTIFIED</span>
                <span className="leading-3 text-[8.9px] sm:text-[10.8px] sm:leading-4 2xl:text-[13px] 2xl:leading-5">CEMENT FIBRES</span>
                <span className="leading-4 text-black text-[16px] sm:text-[18.6px] 2xl:text-[22.5px] 2xl:leading-5">
                  one of the
                </span>
                <span className="leading-4 text-black text-[10.7px] sm:text-[12.5px] sm:leading-5 2xl:text-[15px]">
                  1ST IN INDIA
                </span>
                <span className="leading-4 text-[17px] sm:text-[19.4px] sm:leading-5 2xl:text-[24px] 2xl:leading-6">APHONY</span>
                <span className="leading-4 text-[14.8px] sm:text-[17px] sm:leading-5 2xl:text-[20.8px] 2xl:leading-6">FIBRETTE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-2 flex flex-col px-2 mt-2 gap-10 sm:px-8 lg:px-14 lg:gap-20 lg:flex-row">
        <div className="flex w-full items-center lg:w-1/2">
          <img src={Asset2} alt="" className="w-[38%] lg:w-[36%]" />
          <span className="flex flex-col text-[#818181] text-[14px] font-[Arial] sm:text-[22px] md:text-[24px] lg:text-[18px] xl:text-[22px]">
            <span>
              <span className="font-semibold">HIMALYAN ACOUSTICS</span> is proud
            </span>
            <span>
              to launch <span className="font-semibold">CARBON ADSORBER</span>
            </span>
            <span>
              <span className="font-semibold">PANELS</span>, first of its kinds
              panels
            </span>
            <span>high on performance for</span>
            <span>NOISE + AIR POLLUTION</span>
            <Link className="text-[14px] font-semibold text-[#E23424] sm:text-[16px]" to="">
              Read More...
            </Link>
          </span>
        </div>
        <div className="flex flex-col gap-2 justify-center lg:w-1/2">
          <h1 className="about-sub-head text-[24px] leading-5 sm:text-[28px] sm:leading-7">
            INDOOR AIR QUALITY
            <br />
            <span className="text-[22px] leading-4 sm:text-[24px] sm:leading-5 md:text-[24px] lg:text-[26px]">
              at our best green standards
            </span>
          </h1>
          <span className="about-desc text-justify max-[1250px]:text-[14px] xl:text-[16px]">
            Environmental noise and air pollution, as well as poor green
            infrastructure quality, are major concerns for the new spaces being
            designed in the contemporary era.This issue is further stressed for
            urban areas located close to aggressive sources of such pollutants,
            such as airports, railways, highways, or leisure areas.
            <Link to="/" className="">
              Read More...
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
