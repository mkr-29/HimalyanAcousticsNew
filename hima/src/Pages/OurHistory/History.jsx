import React from "react";
import "./History.css";

import BG from "./Assets/bg.png";
import Asset1 from "./Assets/asset1.png";
import Asset2 from "./Assets/asset2.png";
import Asset3 from "./Assets/asset3.png";
import Asset4 from "./Assets/asset4.png";
import Asset5 from "./Assets/asset5.png";
import Asset6 from "./Assets/asset6.png";
import Asset7 from "./Assets/asset7.png";
import Asset8 from "./Assets/asset8.png";
import Asset9 from "./Assets/asset9.png";
import Asset10 from "./Assets/asset10.png";
import Asset11 from "./Assets/asset11.png";
import Asset12 from "./Assets/asset12.png";
import Asset13 from "./Assets/asset13.png";
import Asset14 from "./Assets/asset14.png";
import Asset15 from "./Assets/asset15.png";
import Asset16 from "./Assets/asset16.png";

import Team1 from "./Assets/team1.png";
import Team2 from "./Assets/team2.png";
import Team3 from "./Assets/team3.png";
import Team4 from "./Assets/team4.png";
import Team5 from "./Assets/team5.png";
import Team6 from "./Assets/team6.png";
import Team7 from "./Assets/team7.png";
import Team8 from "./Assets/team8.png";
import Team9 from "./Assets/team9.png";
import Team10 from "./Assets/team10.png";
import Team11 from "./Assets/team11.png";
import Team12 from "./Assets/team12.png";
import Team13 from "./Assets/team13.png";
import Team14 from "./Assets/team14.png";
import Team15 from "./Assets/team15.png";
import Team16 from "./Assets/team16.png";
import Team17 from "./Assets/team17.png";
import Team18 from "./Assets/team18.png";
import Team19 from "./Assets/team19.png";
import Team20 from "./Assets/team20.png";
import Team21 from "./Assets/team21.png";
import Team22 from "./Assets/team22.png";
import Team23 from "./Assets/team23.png";

import Makin from "./Assets/makein.png";
import HisCarousel from "./HisCarousel";

const images = [
  Asset7,
  Asset8,
  Asset9,
  Asset10,
  Asset11,
  Asset12,
  Asset13,
  Asset14,
  Asset15,
  Asset16,
];

const data = [
  "Experts In Acoustic Treatments Since 15+ Years",
  "In house Acoustic Engineers & Architects",
  "In - House Product R&d, Manufacturing, Installation & Commissioning",
  "Wide Range of Products for Acoustic treatments",
  "Green Certified Products With Documented Sustainability",
  "Lab Certified Products",
  "Healthy Indoor Air Quality",
  "Anti Fungal, Anti Bacterial & CO2 Adsorbing Properties",
  "Bespoke Product Solutions As Per Design",
  "In-house Installation Team",
];

export default function History() {
  return (
    <div className="flex flex-col items-center">
      <img src={BG} className="w-[94%]" alt="" />
      <div className="w-[94%]">
        <h1 className="font2 text-[52px] color3">
          Who <span className="font3">we are</span>
        </h1>
      </div>
      <div className="relative w-[94%] my-16">
        <span className="w-full h-[5px] bg-grey block" />
        <div className="absolute top-[-4rem] left-[0%]">
          <div className="relative flex flex-col items-center gap-[0.7rem]">
            <img src={Asset1} className="w-12" alt="" />
            <span className="w-4 h-4 bg6 block rounded-full" />
            <div className="color3">
              <p>Dharampur HO | R&D | Manufacturing</p>
              <p className="text-sm leading-3">(Solan) Himachal Pradesh</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[-4rem] left-[30%]">
          <div className="relative flex flex-col items-center gap-[0.7rem]">
            <img src={Asset2} className="w-12" alt="" />
            <span className="w-4 h-4 bg6 block rounded-full" />
            <div className="color3">
              <p>New Delhi</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[-4rem] left-[51%]">
          <div className="relative flex flex-col items-center gap-[0.7rem]">
            <img src={Asset3} className="w-12" alt="" />
            <span className="w-4 h-4 bg6 block rounded-full" />
            <div className="color3">
              <p>Mumbai</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[-2.8rem] left-[65%]">
          <div className="relative flex flex-col items-center gap-[0.7rem]">
            <img src={Asset4} className="w-12" alt="" />
            <span className="w-4 h-4 bg6 block rounded-full" />
            <div className="color3">
              <p>Bengaluru</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[-4rem] left-[78%]">
          <div className="relative flex flex-col items-center gap-[0.7rem]">
            <img src={Asset5} className="w-12" alt="" />
            <span className="w-4 h-4 bg6 block rounded-full" />
            <div className="color3">
              <p>Kolkata</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[-4rem] left-[92%]">
          <div className="relative flex flex-col items-center gap-[0.7rem]">
            <img src={Asset6} className="w-12" alt="" />
            <span className="w-4 h-4 bg6 block rounded-full" />
            <div className="color3">
              <p>Indore</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[94%] relative mt-20">
        <div className="w-[18%] relative flex justify-end">
          <span className="w-[13px] h-full bg-grey block mr-10" />
          <div className="absolute flex right-[13%] top-[-2.1rem]">
            <div className="flex flex-col w-[12rem]">
              <h4 className="color7 font3 text-[26px]">2022</h4>
              <hr className="w-full border-[3px]" />
              <p className="color3 text-[24px] leading-9">With technical</p>
              <p className="color3 text-[24px] leading-5">excellence</p>
              <p className="color3 text-[24px] leading-9">and cutting</p>
              <p className="color3 text-[24px] leading-5">edge</p>
            </div>
            <span className="border-4 rounded-full border-[#feae46] block w-5 h-5 ml-7 mt-[2rem]" />
          </div>
          <div className="absolute flex right-[13%] top-[17%]">
            <div className="flex flex-col w-[12rem]">
              <h4 className="color7 font3 text-[26px]">2018</h4>
              <hr className="w-full border-[3px]" />
              <p className="color3 text-[24px] leading-9">With technical</p>
              <p className="color3 text-[24px] leading-5">excellence</p>
              <p className="color3 text-[24px] leading-9">and cutting</p>
              <p className="color3 text-[24px] leading-5">edge</p>
            </div>
            <span className="border-4 rounded-full border-[#feae46] block w-5 h-5 ml-7 mt-[2rem]" />
          </div>
          <div className="absolute flex right-[13%] top-[36%]">
            <div className="flex flex-col w-[12rem]">
              <h4 className="color7 font3 text-[26px]">2015</h4>
              <hr className="w-full border-[3px]" />
              <p className="color3 text-[24px] leading-9">With technical</p>
              <p className="color3 text-[24px] leading-5">excellence</p>
              <p className="color3 text-[24px] leading-9">and cutting</p>
              <p className="color3 text-[24px] leading-5">edge</p>
            </div>
            <span className="border-4 rounded-full border-[#feae46] block w-5 h-5 ml-7 mt-[2rem]" />
          </div>
          <div className="absolute flex right-[13%] top-[57%]">
            <div className="flex flex-col w-[12rem]">
              <h4 className="color7 font3 text-[26px]">2013</h4>
              <hr className="w-full border-[3px]" />
              <p className="color3 text-[24px] leading-9">With technical</p>
              <p className="color3 text-[24px] leading-5">excellence</p>
              <p className="color3 text-[24px] leading-9">and cutting</p>
              <p className="color3 text-[24px] leading-5">edge</p>
            </div>
            <span className="border-4 rounded-full border-[#feae46] block w-5 h-5 ml-7 mt-[2rem]" />
          </div>
          <div className="absolute flex right-[13%] top-[77%]">
            <div className="flex flex-col w-[12rem]">
              <h4 className="color7 font3 text-[26px]">2010</h4>
              <hr className="w-full border-[3px]" />
              <p className="color3 text-[24px] leading-9">With technical</p>
              <p className="color3 text-[24px] leading-5">excellence</p>
              <p className="color3 text-[24px] leading-9">and cutting</p>
              <p className="color3 text-[24px] leading-5">edge</p>
            </div>
            <span className="border-4 rounded-full border-[#feae46] block w-5 h-5 ml-7 mt-[2rem]" />
          </div>
          <div className="absolute flex right-[13%] top-[97%]">
            <div className="flex flex-col w-[12rem]">
              <h4 className="color7 font3 text-[26px]">2005</h4>
              <hr className="w-full border-[3px]" />
              <p className="color3 text-[24px] leading-9">With technical</p>
              <p className="color3 text-[24px] leading-5">excellence</p>
              <p className="color3 text-[24px] leading-9">and cutting</p>
              <p className="color3 text-[24px] leading-5">edge</p>
            </div>
            <span className="border-4 rounded-full border-[#feae46] block w-5 h-5 ml-7 mt-[2rem]" />
          </div>
        </div>

        <div className="flex flex-col w-[72%] relative">
          <div className="flex gap-20">
            <div className="flex w-[70%]">
              <img src={Team1} className="w-full" alt="" />
            </div>
            <div className="flex flex-col w-[80%] gap-4 items-center justify-center">
              <img src={Makin} className="w-48" alt="" />
              <div className="w-full">
                <h6 className="font3 text-[28px]">
                  Designers and Developers of Innovative,
                </h6>
                <h6 className="font3 text-[28px]">
                  World-Class Sound Proofing Solutions
                </h6>
              </div>
              <hr className="w-full border-2" />
              <p className="text-[26px]">
                With technical excellence and cutting edge solutions, our team
                with a commitment to build future-ready spaces.
              </p>
              <h5 className="w-full font3 text-[28px] mt-2">
                By Mohit Munshi - CEO
              </h5>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font3 text-[42px] color3">
              Core Leadership <span className="font2">Team</span>
            </h1>
            <div className="flex gap-4">
              <img src={Team2} className="w-[17%] h-full" alt="" />
              <img src={Team3} className="w-[17%] h-full" alt="" />
              <img src={Team4} className="w-[17%] h-full" alt="" />
              <img src={Team5} className="w-[17%] h-full" alt="" />
              <img src={Team6} className="w-[17%] h-full" alt="" />
              <img src={Team7} className="w-[17%] h-full" alt="" />
            </div>
          </div>
          <div className="mt-28">
            <h1 className="font3 text-[42px] color3">
              Meet Team <span className="font2">Himalyan Acoustics</span>
            </h1>
            <div className="flex gap-4">
              <img src={Team8} className="w-[12.5%] h-full" alt="" />
              <img src={Team9} className="w-[12.5%] h-full" alt="" />
              <img src={Team10} className="w-[12.5%] h-full" alt="" />
              <img src={Team11} className="w-[12.5%] h-full" alt="" />
              <img src={Team12} className="w-[12.5%] h-full" alt="" />
              <img src={Team13} className="w-[12.5%] h-full" alt="" />
              <img src={Team14} className="w-[12.5%] h-full" alt="" />
              <img src={Team15} className="w-[12.5%] h-full" alt="" />
            </div>
            <div className="flex gap-4 mt-4">
              <img src={Team16} className="w-[12.5%] h-full" alt="" />
              <img src={Team17} className="w-[12.5%] h-full" alt="" />
              <img src={Team18} className="w-[12.5%] h-full" alt="" />
              <img src={Team19} className="w-[12.5%] h-full" alt="" />
              <img src={Team20} className="w-[12.5%] h-full" alt="" />
              <img src={Team21} className="w-[12.5%] h-full" alt="" />
              <img src={Team22} className="w-[12.5%] h-full" alt="" />
              <img src={Team23} className="w-[12.5%] h-full" alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-10 w-[94%] mt-40 border-2" />
      <div className="w-[94%] flex flex-col items-center">
        <h2 className="font3 text-[42px]">
          <span className="font2">10 </span>Good Reasons to Choose Himalyan
          Acoustics
        </h2>
        <div className="our-his-carousel w-full overflow-hidden">
          <HisCarousel
            images={images}
            data={data}
            className="mt-10"
          ></HisCarousel>
        </div>
      </div>
    </div>
  );
}
