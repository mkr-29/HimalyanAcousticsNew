import React, { Component } from "react";
import "./Certifications.css";
import Antibacterial from "./Assets/antibacterial.png";
import Griha from "./Assets/griha.png";
import Iso from "./Assets/iso.png";

class Certifications extends Component {
  render() {
    return (
      <div className="certifications">
        <div id="certifications-body" className="container my-10">
          <h1 className="certi-head">Certifications</h1>
          <div className="card-container grid md:grid-cols-2 xl:grid-cols-4 gap-10">
            <div className="container shadow-lg p-10 my-5">
              <span className="block w-20 h-20 items-center mx-auto my-4">
                <img
                  src={Griha}
                  alt="Griha"
                  className=" w-full h-full object-cover rounded-full"
                />
              </span>
              <h2 className="certi-name">GRIHA</h2>
              <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                exercitationem id laboriosam adipisci cumque nisi molestiae
                consequatur perspiciatis tempore laudantium? Animi sed hic atque
                accusamus natus quasi iusto quis similique.
              </p>
            </div>
            <div className="container shadow-lg p-10 my-5">
              <span className="block w-20 h-20 items-center mx-auto my-4">
                <img
                  src={Iso}
                  alt="Iso"
                  className=" w-full h-full object-cover rounded-full"
                />
              </span>
              <h2 className="certi-name">ISO</h2>
              <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                exercitationem id laboriosam adipisci cumque nisi molestiae
                consequatur perspiciatis tempore laudantium? Animi sed hic atque
                accusamus natus quasi iusto quis similique.
              </p>
            </div>
            <div className="container shadow-lg p-10 my-5">
              <span className="block w-20 h-20 items-center mx-auto my-4">
                <img
                  src={Antibacterial}
                  alt="Antibacterial"
                  className=" w-full h-full object-cover rounded-full"
                />
              </span>
              <h2 className="certi-name">ANTIBACTERIAL</h2>
              <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                exercitationem id laboriosam adipisci cumque nisi molestiae
                consequatur perspiciatis tempore laudantium? Animi sed hic atque
                accusamus natus quasi iusto quis similique.
              </p>
            </div>
            <div className="container shadow-lg p-10 my-5">
              <span className="block w-20 h-20 items-center mx-auto my-4">
                <img
                  src={Iso}
                  alt="Iso"
                  className=" w-full h-full object-cover rounded-full"
                />
              </span>
              <h2 className="certi-name">ISO</h2>
              <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                exercitationem id laboriosam adipisci cumque nisi molestiae
                consequatur perspiciatis tempore laudantium? Animi sed hic atque
                accusamus natus quasi iusto quis similique.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Certifications;
