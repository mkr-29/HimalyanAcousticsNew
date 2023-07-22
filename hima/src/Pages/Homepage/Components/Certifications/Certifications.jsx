import React, { Component } from "react";
import "./Certifications.css";
import Griha from "./Assets/griha.png";
import Iso from "./Assets/iso.png";
import CBRI from "./Assets/cbri.png";
import NPL from "./Assets/npl.png";

class Certifications extends Component {
  render() {
    return (
      <div className="certifications xl:px-4">
        <div id="certifications-body" className="container 2xl:my-10">
          <h1 className="2xl:text-[28px] font1 color1 font-bold">
            Accredations
          </h1>
          <div className="card-container grid md:grid-cols-2 xl:grid-cols-4 gap-10">
            <div className="container shadow-lg p-10 py-16 my-5">
              <span className="block w-28 h-28 items-center mx-auto my-4">
                <img
                  src={Iso}
                  alt="Griha"
                  className=" w-full h-full object-cover rounded-full"
                />
              </span>
            </div>
            <div className="container shadow-lg p-10 py-16 pt-6 my-5">
              <span className="block w-28 h-28 items-center mx-auto my-4">
                <img
                  src={Griha}
                  alt="Iso"
                  className=" w-[200px] h-[200px] object-cover rounded-full"
                />
              </span>
            </div>
            <div className="container shadow-lg p-10 py-16 pt-6 my-5">
              <span className="block w-34 h-28 items-center mx-auto my-4">
                <img
                  src={NPL}
                  alt="Antibacterial"
                  className="w-[250px] h-[200px] object-cover rounded-full"
                />
              </span>
            </div>
            <div className="container shadow-lg p-10 py-16 pt-6 my-5">
              <span className="block w-30 h-28 items-center mx-auto my-4">
                <img
                  src={CBRI}
                  alt="Iso"
                  className="w-[230px] ml-2 h-[200px] object-cover rounded-full"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Certifications;
