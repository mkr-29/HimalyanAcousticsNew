import React, { Component } from "react";
import "./Achievements.css";
import Random from "../../Assets/random.jpg";

class Achievements extends Component {
  render() {
    return (
      <div className="achievements">
        <div className="achievements-body container grid lg:grid-cols-2 grid-cols-1 my-10 px-6 gap-4">
          <div className="achievements-container">
            <h1 className="text-3xl font-bolder mx-6">Achievements</h1>
            <div className="achievement-container grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
              <div className="achievement shadow-md p-4 inline-block">
                <h1 className="font-normal text-red-500 text-3xl text-center">
                  500+
                </h1>
                <p className="font-normal text-center">
                  Products developed Still Expanding
                </p>
              </div>
              <div className="achievement shadow-md p-4 inline-block">
                <h1 className="font-normal text-red-500 text-3xl text-center">
                  4.0 <span className="text-sm text-bold">Million</span>
                </h1>
                <p className="font-normal text-center">
                  Products developed Still Expanding
                </p>
              </div>
              <div className="achievement shadow-md p-4 inline-block">
                <h1 className="font-normal text-red-500 text-3xl text-center">
                  50+
                </h1>
                <p className="font-normal text-center">
                  HNI Projects Delivered
                </p>
              </div>
              <div className="achievement shadow-md p-4 inline-block">
                <h1 className="font-normal text-red-500 text-3xl text-center">
                  15+
                </h1>
                <p className="font-normal text-center">
                  Years and still counting
                </p>
              </div>
              <div className="achievement shadow-md p-4 inline-block">
                <h1 className="font-normal text-red-500 text-3xl text-center">
                  60+
                </h1>
                <p className="font-normal text-center">
                  Metropolitan Cities progressed
                </p>
              </div>
              <div className="achievement shadow-md p-4 inline-block">
                <h1 className="font-normal text-red-500 text-3xl text-center">
                  100+
                </h1>
                <p className="font-normal text-center">Effects</p>
              </div>
              <div className="achievement shadow-md p-4 inline-block">
                <h1 className="font-normal text-red-500 text-3xl text-center">
                  3
                </h1>
                <p className="font-normal text-center">
                  Collaborations of European Origin
                </p>
              </div>
              <div className="achievement shadow-md p-4 inline-block">
                <h1 className="font-normal text-red-500 text-3xl text-center">
                  0
                </h1>
                <p className="font-normal text-center">VOC</p>
              </div>
            </div>
          </div>
          <div className="References flex flex-col justify-start">
            <h1 className="text-3xl font-bolder mx-6">References</h1>
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
