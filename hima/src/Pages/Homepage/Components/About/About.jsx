import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Asset1 from "./Assets/asset1.png";
import Asset2 from "./Assets/asset2.png";

export default function About() {
  return (
    <div className="about">
      <div className="about-1 flex flex-col sm:flex-row px-4 sm:px-24 sm:gap-20">
        <div className="div-1 flex flex-col w-1/2">
          <h1 className="about-head">
            acoustic
            <br />
            meet's design!!
          </h1>
          <span className="about-desc text-xs xl:text-sm 2xl:text-[17px] flex flex-col gap-5">
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
        <div className="div-1 flex flex-col w-1/2">
          <h1 className="about-head mb-10">
            performance
            <br />
            based solutions
          </h1>
          <div className="flex 2xl:gap-10 gap-2">
            <div className="banner flex flex-col justify-centre 2xl:w-auto justify-center items-center w-36">
              <img src={Asset1} alt="" className="max-w-[6.8rem]" />
              <div className="banner-in flex flex-col items-center text-white">
                <span className="text-xl leading-5">ONE OF</span>
                <span className="text-lg leading-5">INDIA'S</span>
                <span className="text-black text-4xl leading-9">
                  CO<sub className="text-sm">2</sub>
                </span>
                <span className="text-black text-sm leading-4">absorbant</span>
                <span className="text-2xl leading-5">SOUND</span>
                <span className="leading-4">BARRIER</span>
                <span className="leading-5">system</span>
              </div>
            </div>
            <div className="banner flex flex-col justify-centre 2xl:w-auto justify-center items-center w-36">
              <img src={Asset1} alt="" className="max-w-[6.8rem]" />
              <div className="banner-in1 flex flex-col items-center text-white">
                <span className="text-lg leading-4 text-black">excellent</span>
                <span className="leading-5 text-black">acoustic</span>
                <span className="text-black leading-4">performance</span>
                <span className="text-black text-xl leading-4">with our</span>
                <span className="text-[2rem] leading-8">1 NRC</span>
                <span className="leading-3 text-[12.2px]">LAB-CERTIFIED</span>
                <span className="leading-10">panel</span>
              </div>
            </div>
            <div className="banner flex flex-col justify-centre 2xl:w-auto justify-center items-center w-36">
              <img src={Asset1} alt="" className="max-w-[6.8rem]" />
              <div className="banner-in2 flex flex-col items-center text-white">
                <span className="text-xs leading-4 text-black">
                  get the best of
                </span>
                <span className="leading-4">ACOUSTIC</span>
                <span className="leading-4">PERFORMANCE</span>
                <span className="text-black text-2xl leading-5">with our</span>
                <span className="text-2xl leading-4">SILENT</span>
                <span className="leading-4">ACOUSTIC DRYWALL</span>
                <span className="leading-4">Partition</span>
                <span className="leading-4 text-black text-lg">range with</span>
                <span className="leading-4">UPTO 65 STC</span>
              </div>
            </div>
            <div className="banner flex flex-col justify-centre 2xl:w-auto justify-center items-center w-36">
              <img src={Asset1} alt="" className="max-w-[6.8rem]" />
              <div className="banner-in3 flex flex-col items-center text-white">
                <span className="text-lg leading-4 text-black">featuring</span>
                <span className="leading-5 text-sm text-black">remarkably</span>
                <span className="leading-3">SUSTAINABLE &</span>
                <span className="leading-3">GREEN CERTIFIED</span>
                <span className="leading-3">CEMENT FIBRES</span>
                <span className="leading-5 text-black">one of the</span>
                <span className="leading-5 text-black">1ST IN INDIA</span>
                <span className="leading-5">APHONY</span>
                <span className="leading-5">FIBRETTE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-2 sm:px-24 flex gap-20">
        <div className="flex w-1/2 items-center">
          <img src={Asset2} alt="" className="w-[40%]" />
          <span className="flex flex-col text-[#818181] font-[Arial] text-xl">
            <span>
              <span className="font-semibold">HIMALYAN ACOUSTICS</span> is proud
            </span>
            <span>
              to launch <span className="font-semibold">CARBON ADSORBER</span>
            </span>
            <span>
              <span className="font-semibold">PANELS</span>, first of its kinds panels
            </span>
            <span>
              high on performance for
            </span>
            <span>
              NOISE + AIR POLLUTION
            </span>
            <Link className="text-lg font-semibold text-[#E23424]" to="">Read More...</Link>
          </span>
        </div>
        <div className="w-1/2 flex flex-col gap-2 justify-center">
          <h1 className="about-sub-head">
            INDOOR AIR QUALITY
            <br />
            <span>at our best green standards</span>
          </h1>
          <span className="about-desc">
            Environmental noise and air pollution, as well as poor green
            infrastructure quality, are major concerns for the new spaces being
            designed in the contemporary era.This issue is further stressed for
            urban areas located close to aggressive sources of such pollutants,
            such as airports, railways, highways, or leisure areas.
            <Link to="/">Read More...</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
