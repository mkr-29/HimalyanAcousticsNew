import React, { Component } from "react";

class Achievements extends Component {
  render() {
    return (
      <div className="container grid lg:grid-cols-2 grid-cols-1 my-10 px-6 gap-4">
        <div className="achievements">
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
              <p className="font-normal text-center">HNI Projects Delivered</p>
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
        <div className="References">
          <h1 className="text-3xl font-bolder mx-6">References</h1>
        </div>
      </div>
    );
  }
}

export default Achievements;
