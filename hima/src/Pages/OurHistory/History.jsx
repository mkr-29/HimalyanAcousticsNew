import React from "react";
import Footer from "../Homepage/Components/Footer/Footer";
import Navbar from "../Homepage/Components/Navbar/Navbar";
import "./History.css";

export default function History() {
  return (
    <div>
      <Navbar />
      <div className="history flex gap-24 px-24 pt-16">
        <div className="flex-col w-1/2">
          <h1 className="text-8xl mb-10">
            Our <br />
            <span className="font-bold">History</span>
          </h1>
          <span className="font-medium">
            <p>
              In years past, acoustic treatments were all about form and
              function. But new materials are changing the way the wall and
              ceiling industry can use acoustic treatments as part of the
              aesthetics of a space, and the sky is the limit.
            </p>
            <br />
            <p>
              Acoustical treatment solutions are no exception, and play an
              important role in the redesign of workspaces, schools, healthcare
              facilities, hospitality venues, and so on.
            </p>
            <br />
            <p>
              Now acoustic products are getting the attention they deserve and
              are no longer an afterthought, acoustical treatments are just as
              important as décor and aesthetics & décor while controlling sound.
            </p>
            <br />
            <p>
              Acoustical treatment solutions are no exception, and play an
              important role in the redesign of workspaces, schools, healthcare
              facilities, hospitality venues, and so on.
            </p>
          </span>
        </div>
        <div className="his-right flex flex-col gap-10">
          <div className="flex gap-16 justify-center items-center">
            <span className="flex justify-center items-center bg-red-600 rounded-full w-20 h-20 text-2xl">
              2008
            </span>
            <div>
              <h3 className="text-2xl font-medium">Himalyan Acoustics</h3>
              <p>This is a sample text insert your desired text here.</p>
            </div>
          </div>
          <div className="flex gap-16 justify-center items-center">
            <span className="flex justify-center items-center bg-red-500 rounded-full w-20 h-20 text-2xl">
              2009
            </span>
            <div>
              <h3 className="text-2xl font-medium">Himalyan Acoustics</h3>
              <p>This is a sample text insert your desired text here.</p>
            </div>
          </div>
          <div className="flex gap-16 justify-center items-center">
            <span className="flex justify-center items-center bg-red-400 rounded-full w-20 h-20 text-2xl">
              2010
            </span>
            <div>
              <h3 className="text-2xl font-medium">Himalyan Acoustics</h3>
              <p>This is a sample text insert your desired text here.</p>
            </div>
          </div>
          <div className="flex gap-16 justify-center items-center">
            <span className="flex justify-center items-center bg-red-300 rounded-full w-20 h-20 text-2xl">
              2011
            </span>
            <div>
              <h3 className="text-2xl font-medium">Himalyan Acoustics</h3>
              <p>This is a sample text insert your desired text here.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="who-wr flex flex-col gap-8 px-24 pt-16 bg-indigo-900 pb-48">
        <h2 className="text-5xl text-white font-bold">who we are</h2>
        <p className="w-1/2 text-white ">
          We are a curated team of international expertd united by a single
          goal, to create Category defining brands and digital experience that
          make an impact, shape culture and connect people.
        </p>
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <img src="https://source.unsplash.com/random/300x400" alt="" />
            <div className="text-white">
              <h3>Mohit Munshi</h3>
              <p>CEO</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img src="https://source.unsplash.com/random/300x400" alt="" />
            <div className="text-white">
              <h3>Vishwajit Sandal</h3>
              <p>Joint Director</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img src="https://source.unsplash.com/random/300x400" alt="" />
            <div className="text-white">
              <h3>Madanjit Singh</h3>
              <p>HR Head</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img src="https://source.unsplash.com/random/300x400" alt="" />
            <div className="text-white">
              <h3>Vinay Sharma</h3>
              <p>HR Head</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
