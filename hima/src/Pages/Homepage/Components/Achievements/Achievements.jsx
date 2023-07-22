import React, { Component } from "react";
import "./Achievements.css";
import Yamaha from "./Assets/yamaha.png";
import Dlf from "./Assets/dlf.png";
import Inox from "./Assets/inox.png";
import Reliance from "./Assets/rel.png";
import Mcd from "./Assets/mcd.png";
import Pag from "./Assets/pag.png";

class Achievements extends Component {
  render() {
    return (
      <div className="achievements">
        <div className="achievements-body container px-2 grid lg:grid-cols-2 grid-cols-1 my-10 2xl:px-4 gap-20">
          <div className="achievements-container">
            <h1 className="2xl:text-[28px] font1 color1 font-bold">
              Achievements
            </h1>
            <div className="achievement-container">
              <div className="ach-cont-1">
                <div className="achievement py-4 pb-6">
                  <h3 className="font-black font3 color4 text-[38px] leading-10">
                    18+
                  </h3>
                  <p className="color3 font1 text-[16px] mt-1">Years of R&D</p>
                  <p className="color3 font1 text-[16px] leading-4">
                    & Manufacturing
                  </p>
                </div>
                <div className="achievement py-4 pb-6">
                  <h3 className="font-black font3 color4 text-[38px] leading-10">
                    10+
                  </h3>
                  <p className="color3 font1 text-[16px] leading-5 mt-1">Major &</p>
                  <p className="color3 font1 text-[16px] leading-5">
                    Metropolitan
                  </p>
                  <p className="color3 font1 text-[16px] leading-5">
                    Cities Direct
                  </p>
                  <p className="color3 font1 text-[16px] leading-5">Presence</p>
                </div>
                <div className="achievement py-4 pb-6">
                  <h3 className="font-black font3 color4 text-[38px] leading-10">
                    100+
                  </h3>
                  <p className="color3 font1 text-[16px] leading-5 mt-1">
                    Lab, Quality
                  </p>
                  <p className="color3 font1 text-[16px] leading-5">
                    Certifications &
                  </p>
                  <p className="color3 font1 text-[16px] leading-5">
                    Government
                  </p>
                  <p className="color3 font1 text-[16px] leading-5">
                    Approvals
                  </p>
                </div>
              </div>
              <div className="ach-cont-2 pb-6">
                <div className="achievement py-4 pb-6">
                  <h3 className="font-black font3 color4 text-[38px] leading-10">
                    360<sup>o</sup>
                  </h3>
                  <p className="color3 font1 text-[16px] leading-5 mt-[6px]">
                    Approact With
                  </p>
                  <p className="color3 font1 text-[16px] leading-5">
                    In House R&D,
                  </p>
                  <p className="color3 font1 text-[16px] leading-5">
                    Manufacturing,
                  </p>
                  <p className="color3 font1 text-[16px] leading-5">
                    Supply + Application
                  </p>
                </div>
                <div className="achievement py-4 pb-6">
                  <h3 className="font-black font3 color4 text-[38px] leading-10">
                    150+
                  </h3>
                  <p className="color3 font1 text-[16px] leading-5 mt-1">Bespoke</p>
                  <p className="color3 font1 text-[16px] leading-5">
                    Product Genres
                  </p>
                  <p className="color3 font1 text-[16px] leading-5">
                    & Application
                  </p>
                  <p className="color3 font1 text-[16px] leading-5">Areas</p>
                </div>
                <div className="achievement py-4 pb-6">
                  <h3 className="font-black font3 color4 text-[38px] leading-10">
                    500++
                  </h3>
                  <p className="color3 font1 text-[16px] leading-5 mt-1">Projects</p>
                  <p className="color3 font1 text-[16px] leading-5">
                    Delivered
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="References flex flex-col justify-start">
            <h1 className="2xl:text-[28px] font1 color1 font-bold">References</h1>
            <div className="grid grid-cols-3">
              <span className="m-2 p-2">
                <span className="reflogos block items-center mx-auto my-4flex flex-col">
                  <img src={Reliance} alt="Random" className="refimg" />
                </span>
                <h1 className="text-center text-xs font-bold mt-2">YAMAHA</h1>
              </span>
              <span className="m-2 p-2">
                <span className="reflogos block items-center mx-auto my-4flex flex-col">
                  <img src={Dlf} alt="Random" className="refimg" />
                </span>
                <h1 className="text-center text-xs font-bold mt-2">DLF</h1>
              </span>
              <span className="m-2 p-2">
                <span className="reflogos block items-center mx-auto my-4flex flex-col">
                  <img src={Inox} alt="Random" className="refimg" />
                </span>
                <h1 className="text-center text-xs font-bold mt-2">INOX</h1>
              </span>
              <span className="m-2 p-2">
                <span className="reflogos block items-center mx-auto my-4flex flex-col">
                  <img src={Yamaha} alt="Random" className="refimg" />
                </span>
                <h1 className="text-center text-xs font-bold mt-2">INOX</h1>
              </span>
              <span className="m-2 p-2">
                <span className="reflogos block items-center mx-auto my-4flex flex-col">
                  <img src={Pag} alt="Random" className="refimg" />
                </span>
                <h1 className="text-center text-xs font-bold mt-2">INOX</h1>
              </span>
              <span className="m-2 p-2">
                <span className="reflogos block items-center mx-auto my-4flex flex-col">
                  <img src={Mcd} alt="Random" className="refimg" />
                </span>
                <h1 className="text-center text-xs font-bold mt-2">INOX</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Achievements;
