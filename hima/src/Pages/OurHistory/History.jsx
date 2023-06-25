import React from "react";
import "./History.css";

import CEO from "./Assets/Images/ceo.png";
import TeamCard from "./Components/TeamCard";
import { coreTeam, haTeam } from "./Components/images";

export default function History() {
  return (
    <>
      <div className="history flex flex-col lg:flex-row px-4 2xl:px-24 py-8 my-8 mt-24 gap-20">
        <div className="flex-col lg:max-w-[45%]">
          <h1 className="text-5xl lg:text-8xl mb-10 mt-10">
            Our <br />
            <span className="font-bold">History</span>
          </h1>
          <span className="font-medium mr-4">
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
        <div className="years-ha grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 2xl:gap-0 2xl:ml-44">
          <div className="flex gap-4 justify-center items-center">
            <span className="flex justify-center items-center rounded-full w-20 h-20 2xl:w-24 px-2 2xl:h-24 text-2xl">
              2008
            </span>
            <div>
              <h3 className="text-2xl font-medium">Himalyan Acoustics</h3>
              <p>This is a sample text insert your desired text here.</p>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <span className="flex justify-center items-center rounded-full px-2 w-20 h-20 2xl:w-24 2xl:h-24 text-2xl">
              2009
            </span>
            <div>
              <h3 className="text-2xl font-medium">Himalyan Acoustics</h3>
              <p>This is a sample text insert your desired text here.</p>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <span className="flex justify-center items-center rounded-full px-3 w-20 h-20 2xl:w-24 2xl:h-24 text-2xl">
              2010
            </span>
            <div>
              <h3 className="text-2xl font-medium">Himalyan Acoustics</h3>
              <p>This is a sample text insert your desired text here.</p>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <span className="flex justify-center items-center rounded-full px-4 w-20 h-20 2xl:w-24 2xl:h-24 text-2xl">
              2011
            </span>
            <div>
              <h3 className="text-2xl font-medium">Himalyan Acoustics</h3>
              <p>This is a sample text insert your desired text here.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="who-wr flex flex-col gap-4 px-4 md:px-24 py-8 ">
        <h2 className="text-xl font-bold 2xl:text-3xl">who we are</h2>
        <h1 className="lg:text-6xl text-2xl font-bold">
          Designers and Developers of Innovative,
          <br /> World-Class Space
        </h1>
        <div className="founder-image self-center">
          <img src={CEO} alt="Mohit Munshi" className="w-80 mt-10" />
        </div>
        <p className="text-right font-semibold text-sm">
          With technical excellence and cutting-edge solutions, our team with a
          commitment to build future-ready spaces.
        </p>
        <p className="quote-by-ceo text-right 2xl:text-2xl text-xl font-bold 2xl:mr-[25%]">
          By Mohit Munshi - CEO
        </p>
      </div>
      <h2 className="core-team text-5xl mt-10 font-light text-center">
        CORE <span className="font-bold">TEAM</span>
      </h2>
      <div className="history-team grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-8 md:px-24 py-16 justify-center items-center">
        {coreTeam.map((image) => (
          <TeamCard key={image.id} name={image.title} image={image.image} />
        ))}
      </div>
      <h2 className="meet-team text-5xl font-light text-center">
        MEET TEAM <span className="font-bold">HIMALAYAN ACOUSTICS</span>
      </h2>
      <div className="history-team grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-8 md:px-24 py-16 ">
        {haTeam.map((image) => (
          <TeamCard key={image.id} name={image.title} image={image.image} />
        ))}
      </div>
    </>
  );
}
