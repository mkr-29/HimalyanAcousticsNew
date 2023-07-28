import React from "react";
import "./Landing.css";
import BG from "./Assets/landing.png";
import LandingCarousel from "./LandingCarousel";

const images = [BG, BG, BG, BG, BG];
export default function Landing() {
  return (
    <div className="ha-landing mt-[5.3rem]">
      <LandingCarousel images={images} />
    </div>
  );
}
