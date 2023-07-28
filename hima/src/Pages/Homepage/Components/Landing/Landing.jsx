import React from "react";
import "./Landing.css";
import BG from "./Assets/landing.png";

export default function Landing() {
  return (
    <div>
      <img src={BG} className="px-40 w-full" alt="" />
    </div>
  );
}
