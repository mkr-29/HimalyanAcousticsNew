import React from "react";
import "./Landing.css";
import BG from "./Assets/landing.png";

export default function Landing() {
  return (
    <div>
      <img src={BG} className="px-16 w-full" alt="" />
    </div>
  );
}
