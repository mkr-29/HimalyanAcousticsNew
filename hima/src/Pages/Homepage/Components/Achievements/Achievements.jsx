import React, { Component } from "react";
import "./Achievements.css";
import Random from "../../Assets/random.jpg";

class Achievements extends Component {
  render() {
    return (
      <div className="achievements">
        <div className="achievements-body container grid lg:grid-cols-2 grid-cols-1 my-10 px-6 gap-4">
          <div className="achievements-container">
            <h1 className="ach-head">Achievements</h1>
            <div className="achievement-container">
              <div className="ach-cont-1">
                <div className="achievement">
                  <h3>500+</h3>
                  <p>Projects Delivered Still expanding</p>
                </div>
                <div className="achievement">
                  <h3>
                    4.0 <span className="text-sm text-bold">Million</span>
                  </h3>
                  <p>Soft Delivered & Still Counting</p>
                </div>
                <div className="achievement">
                  <h3>50+</h3>
                  <p>HNI Projects Delivered</p>
                </div>
                <div className="achievement">
                  <h3>15+</h3>
                  <p>Years & Still Counting</p>
                </div>
              </div>
              <div className="ach-cont-2">
                <div className="achievement">
                  <h3>60+</h3>
                  <p>Metropolitan Cities Presence</p>
                </div>
                <div className="achievement">
                  <h3>100+</h3>
                  <p>Effects</p>
                </div>
                <div className="achievement">
                  <h3>3</h3>
                  <p>Collaborations of European Origin</p>
                </div>
                <div className="achievement">
                  <h3>0</h3>
                  <p>VOC</p>
                </div>
              </div>
            </div>
          </div>
          <div className="References flex flex-col justify-start">
            <h1 className="ach-head">References</h1>
            <div className="grid grid-cols-3">
              <span className="m-2 p-2">
                <span className="block w-20 h-20 items-center mx-auto my-4flex flex-col">
                  <img
                    src={Random}
                    alt="Random"
                    className=" w-full h-full object-cover rounded-full border-2 border-gray-700"
                  />
                </span>
                <h1 className="text-center font-bold mt-2">YAMAHA</h1>
              </span>
              <span className="m-2 p-2">
                <span className="block w-20 h-20 items-center mx-auto my-4flex flex-col">
                  <img
                    src={Random}
                    alt="Random"
                    className=" w-full h-full object-cover rounded-full border-2 border-gray-700"
                  />
                </span>
                <h1 className="text-center font-bold mt-2">YAMAHA</h1>
              </span>
              <span className="m-2 p-2">
                <span className="block w-20 h-20 items-center mx-auto my-4flex flex-col">
                  <img
                    src={Random}
                    alt="Random"
                    className=" w-full h-full object-cover rounded-full border-2 border-gray-700"
                  />
                </span>
                <h1 className="text-center font-bold mt-2">YAMAHA</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Achievements;
