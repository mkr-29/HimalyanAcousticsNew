import React from "react";
import Footer from "../Homepage/Components/Footer/Footer";
import Navbar from "../Homepage/Components/Navbar/Navbar";
import "./InspiringDesign.css";
import Img1 from "./Assets/img1.png";
import Img2 from "./Assets/img2.png";
import Img3 from "./Assets/img3.png";
import Img4 from "./Assets/img4.png";
import Img5 from "./Assets/img5.png";
import Img6 from "./Assets/img6.png";
import Img7 from "./Assets/img7.png";
import Img8 from "./Assets/img8.png";
import Img9 from "./Assets/img9.png";
import Img10 from "./Assets/img10.png";
import Img11 from "./Assets/img11.png";
import Img12 from "./Assets/img12.png";

export default function InspiringDesign() {
  return (
    <div>
      <Navbar />
      <div className="inspiring-design">
        <div className="flex flex-col w-1/2 ml-24 pt-14 pr-20">
          <h1 className="inspd-head">
            Acoustic
            <br />
            <span className="font-bold">Meet Design</span>
          </h1>
          <p className="text-justify pt-10">
            In years past, acoustic treatments were all about form and function.
            But new materials are changing the way the wall and ceiling industry
            can use acoustic treatments as part of the aesthetics of a space,
            and the sky is the limit.
          <br />
          <br />
            Acoustical treatment solutions are no exception, and play an
            important role in the redesign of workspaces, schools, healthcare
            facilities, hospitality venues, and so on. Now acoustic products are
            getting the attention they deserve and are no longer an
            afterthought, acoustical treatments are just as important as décor
            and aesthetics & décor while controlling sound.
          <br />
          <br />
            Acoustical products are moving beyond functionality and are being
            used as art, advertising images and decoration.
          <br />
          <br />
            Our new ranges of products are an amalgamation of Acoustics + Design
            delivering high performance and yet a design option to be
            incorporated in a space, making our solution easier for the A&D
            Community to specify.
          </p>
        </div>
      </div>
      <div className="designs">
        <div className="des-1">
          <h2>#1 NRC</h2>
          <img src={Img1} alt="" />
        </div>
        <div className="des-1">
          <h2>#seamless chroma wall</h2>
          <img src={Img2} alt="" />
        </div>
        <div className="des-1">
          <h2>#plan system</h2>
          <img src={Img3} alt="" />
        </div>
        <div className="des-1">
          <h2>#exposed system</h2>
          <img src={Img4} alt="" />
        </div>
        <div className="des-1">
          <h2>#creative</h2>
          <img src={Img5} alt="" />
        </div>
        <div className="des-1">
          <h2>#wood</h2>
          <img src={Img6} alt="" />
        </div>
        <div className="des-1">
          <h2>#float</h2>
          <img src={Img7} alt="" />
        </div>
        <div className="des-1">
          <h2>#clouds & shape</h2>
          <img src={Img8} alt="" />
        </div>
        <div className="des-1">
          <h2>#baffles & cells</h2>
          <img src={Img9} alt="" />
        </div>
        <div className="des-1">
          <h2>#fabric</h2>
          <img src={Img10} alt="" />
        </div>
        <div className="des-1">
          <h2>#sound barrier (Co2 absorbent)</h2>
          <img src={Img11} alt="" />
        </div>
        <div className="des-1 des-2">
          <h2>#silent (acoustic drywall partion & door)</h2>
          <img src={Img12} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
