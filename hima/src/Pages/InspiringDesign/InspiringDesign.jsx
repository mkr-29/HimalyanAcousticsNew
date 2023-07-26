import React from "react";
import Image1 from "./Assets/img1.png";
import Image2 from "./Assets/img2.png";
import Image3 from "./Assets/img3.png";
import Image4 from "./Assets/img4.png";
import Image5 from "./Assets/img5.png";
import Image6 from "./Assets/img6.png";
import Image7 from "./Assets/img7.png";
import Image8 from "./Assets/img8.png";
import Image9 from "./Assets/img9.png";
import Image10 from "./Assets/img10.png";
import Image11 from "./Assets/img11.png";
import InspCarousel from "./InspCarousel";
import Asset1 from "./Assets/asset1.png";
import Asset2 from "./Assets/asset2.png";
import Asset3 from "./Assets/asset3.png";
import Asset4 from "./Assets/asset4.png";
import Asset5 from "./Assets/asset5.png";
import Asset6 from "./Assets/asset6.png";
import Asset7 from "./Assets/asset7.png";
import Asset8 from "./Assets/asset8.png";
import Asset9 from "./Assets/asset9.png";
import Asset10 from "./Assets/asset10.png";
import Asset11 from "./Assets/asset11.png";
import Asset12 from "./Assets/asset12.png";

const assets = [
  Asset1,
  Asset2,
  Asset3,
  Asset4,
  Asset5,
  Asset6,
  Asset7,
  Asset8,
  Asset9,
  Asset10,
  Asset11,
  Asset12,
];

const data = [
  "Healthcare",
  "Corporate Office",
  "Cinemas",
  "Auditoriums",
  "Lecture Hall",
  "Disco's",
  "Worship Hall",
  "Banquet Hall",
  "Hotels",
  "Gymnasium",
  "Home Theatre",
  "Studio's",
];

export default function InspiringDesign() {
  return (
    <div className="mt-[7rem] bg-grey px-4">
      <h1 className="font2 text-[32px] color3 py-10 pt-12">
        Inspiring <span className="font3">Design</span>
      </h1>
      <div>
        <div className="flex gap-4">
          <img src={Image1} className="w-[49.5%] h-[49.5%]" alt="" />
          <img src={Image2} className="w-[49.5%] h-[49.5%]" alt="" />
        </div>
        <div className="mt-4 flex gap-4">
          <img src={Image3} className="w-[49.5%]" alt="" />
          <div className="w-[49.5%] relative flex gap-4 flex-wrap">
            <img src={Image4} className="w-[48.9%] h-[48.4%]" alt="" />
            <img src={Image5} className="w-[48.9%] h-[48.4%]" alt="" />
            <img src={Image6} className="w-[48.9%] h-[48.4%]" alt="" />
            <img src={Image7} className="w-[48.9%] h-[48.4%]" alt="" />
          </div>
        </div>
        <div className="flex mt-4">
          <img src={Image8} alt="" />
        </div>
        <div className="flex gap-4 mt-4 relative h-[50rem]">
          <img src={Image9} className="w-[34%] h-auto" alt="" />
          <img src={Image10} className="w-[65%] h-auto" alt="" />
        </div>
        <div className="flex mt-4">
          <img src={Image11} className="w-full" alt="" />
        </div>
      </div>
      <h1 className="font3 text-[32px] pt-14 pb-2 color3">Application</h1>
      <div className="inspiring-design-carousel pb-24">
        <InspCarousel images={assets} data={data} />
      </div>
    </div>
  );
}
