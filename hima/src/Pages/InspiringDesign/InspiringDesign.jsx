import React from "react";
import Footer from "../Homepage/Components/Footer/Footer";
import Navbar from "../Homepage/Components/Navbar/Navbar";
import "./InspiringDesign.css";

export default function InspiringDesign() {
  return (
    <div>
      <Navbar />
      <div className="inspiring-design">
        <div className="flex flex-col w-1/2 ml-24">
          <h1 className="text-7xl mt-20 mb-12">
            Acoustic
            <br />
            <span className="font-bold">Meet Design</span>
          </h1>
          <p>
            In years past, acoustic treatments were all about form and function.
            But new materials are changing the way the wall and ceiling industry
            can use acoustic treatments as part of the aesthetics of a space,
            and the sky is the limit.
          </p>
          <br />
          <p>
            Acoustical treatment solutions are no exception, and play an
            important role in the redesign of workspaces, schools, healthcare
            facilities, hospitality venues, and so on. Now acoustic products are
            getting the attention they deserve and are no longer an
            afterthought, acoustical treatments are just as important as décor
            and aesthetics & décor while controlling sound.
          </p>
          <br />
          <p>
            Acoustical products are moving beyond functionality and are being
            used as art, advertising images and decoration.
          </p>
          <br />
          <p>
            Our new ranges of products are an amalgamation of Acoustics + Design
            delivering high performance and yet a design option to be
            incorporated in a space, making our solution easier for the A&D
            Community to specify.
          </p>
        </div>
      </div>
      <div className="ins-design-below flex flex-wrap bg-black px-24 py-20 justify-between gap-10">
        <div className="flex flex-col text-white">
          <span className="text-4xl mb-4">#perform</span>
          <img src="https://source.unsplash.com/random/600x400" alt="perform" />
          <span>Rohmd</span>
        </div>
        <div className="flex flex-col text-white">
          <span className="text-4xl mb-4">#wood</span>
          <img src="https://source.unsplash.com/random/600x400" alt="perform" />
          <span>Rohmd</span>
        </div>
        <div className="flex flex-col text-white">
          <span className="text-4xl mb-4">#cloud&baffles</span>
          <img src="https://source.unsplash.com/random/600x400" alt="perform" />
          <span>Rohmd</span>
        </div>
        <div className="flex flex-col text-white">
          <span className="text-4xl mb-4">#fabric</span>
          <img src="https://source.unsplash.com/random/600x400" alt="perform" />
          <span>Rohmd</span>
        </div>
        <div className="flex flex-col text-white">
          <span className="text-4xl mb-4">#silent</span>
          <img src="https://source.unsplash.com/random/600x400" alt="perform" />
          <span>Rohmd</span>
        </div>
        <div className="flex flex-col text-white">
          <span className="text-4xl mb-4">#expose</span>
          <img src="https://source.unsplash.com/random/600x400" alt="perform" />
          <span>Rohmd</span>
        </div>
      </div>
      <div className="bg-black flex gap-8 justify-between flex-wrap px-24 py-20 text-white">
        <div className="flex flex-col w-1/4 justify-center items-center">
          <img
            className="w-1/2"
            src="https://source.unsplash.com/random/200x200"
            alt="perform"
          />
          <div>
            <span>HA Acoustic Drywall Partition & Door System </span>
            <span>PDF</span>
          </div>
        </div>
        <div className="flex flex-col w-1/4 justify-center items-center">
          <img
            className="w-1/2"
            src="https://source.unsplash.com/random/200x200"
            alt="perform"
          />
          <div>
            <span>HA Acoustic Drywall Partition & Door System </span>
            <span>PDF</span>
          </div>
        </div>
        <div className="flex flex-col w-1/4 justify-center items-center">
          <img
            className="w-1/2"
            src="https://source.unsplash.com/random/200x200"
            alt="perform"
          />
          <div>
            <span>HA Acoustic Drywall Partition & Door System </span>
            <span>PDF</span>
          </div>
        </div>
        <div className="flex flex-col w-1/4 justify-center items-center">
          <img
            className="w-1/2"
            src="https://source.unsplash.com/random/200x200"
            alt="perform"
          />
          <div>
            <span>HA Acoustic Drywall Partition & Door System </span>
            <span>PDF</span>
          </div>
        </div>
        <div className="flex flex-col w-1/4 justify-center items-center">
          <img
            className="w-1/2"
            src="https://source.unsplash.com/random/200x200"
            alt="perform"
          />
          <div>
            <span>HA Acoustic Drywall Partition & Door System </span>
            <span>PDF</span>
          </div>
        </div>
        <div className="flex flex-col w-1/4 justify-center items-center">
          <img
            className="w-1/2"
            src="https://source.unsplash.com/random/200x200"
            alt="perform"
          />
          <div>
            <span>HA Acoustic Drywall Partition & Door System </span>
            <span>PDF</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
