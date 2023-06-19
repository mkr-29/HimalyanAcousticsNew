import React from "react";
import "./Sustainability.css";
import Navbar from "../Homepage/Components/Navbar/Navbar";
import SLanding from "./Components/SLanding";
import SAbout from "./Components/SAbout";
import SProducts from "./Components/SProducts";
import Footer from "../Homepage/Components/Footer/Footer";

export default function Sustainability() {
  return (
    <div>
      <Navbar />
      <SLanding/>
      <SAbout/>
      <SProducts/>
      <Footer/>
    </div>
  );
}
