import React from "react";
import "./History.css";

import CEO from "./Assets/Images/ceo.png";
import TeamCard from "./Components/TeamCard";
import { coreTeam, haTeam } from "./Components/images";
import BG from "./Assets/bg.png";

export default function History() {
  return (
    <div className="flex flex-col items-center">
      <img src={BG} className="w-[94%]" alt="" />
      <div className="w-[94%]">
        <h1 className="font2 text-[28px]">
          Who <span className="font3">we are</span>
        </h1>
      </div>
      <div className="relative w-[94%]">
        <span className="w-full h-[3px] bg3" />
      </div>
    </div>
  );
}
