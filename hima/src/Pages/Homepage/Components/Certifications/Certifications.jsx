import React, { Component } from "react";
import "./Certifications.css"

class Certifications extends Component {
  render() {
    return (
      <div className="certifications">
        <div id="certifications-body" className="container my-10">
          <h1 className="text-3xl font-bolder mx-6">Certifications</h1>
          <div className="card-container grid md:grid-cols-2 xl:grid-cols-4 gap-10 mx-6">
            <div className="container shadow-lg p-10 my-5">
              <h2 className="text-2xl uppercase text-center">GRIHA</h2>
              <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                exercitationem id laboriosam adipisci cumque nisi molestiae
                consequatur perspiciatis tempore laudantium? Animi sed hic atque
                accusamus natus quasi iusto quis similique.
              </p>
            </div>
            <div className="container shadow-lg p-10 my-5">
              <h2 className="text-2xl uppercase text-center">ISO</h2>
              <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                exercitationem id laboriosam adipisci cumque nisi molestiae
                consequatur perspiciatis tempore laudantium? Animi sed hic atque
                accusamus natus quasi iusto quis similique.
              </p>
            </div>
            <div className="container shadow-lg p-10 my-5">
              <h2 className="text-2xl uppercase text-center">ANTIBACTERIAL</h2>
              <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                exercitationem id laboriosam adipisci cumque nisi molestiae
                consequatur perspiciatis tempore laudantium? Animi sed hic atque
                accusamus natus quasi iusto quis similique.
              </p>
            </div>
            <div className="container shadow-lg p-10 my-5">
              <h2 className="text-2xl uppercase text-center">ISO</h2>
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
