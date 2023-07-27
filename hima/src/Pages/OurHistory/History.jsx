import React from "react";
import "./History.css";

import CEO from "./Assets/Images/ceo.png";
import TeamCard from "./Components/TeamCard";
import { coreTeam, haTeam } from "./Components/images";
import BG from "./Assets/bg.png";
import Asset1 from "./Assets/asset1.png";
import Asset2 from "./Assets/asset2.png";
import Asset3 from "./Assets/asset3.png";
import Asset4 from "./Assets/asset4.png";
import Asset5 from "./Assets/asset5.png";
import Asset6 from "./Assets/asset6.png";

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
    </div>
  );
}
