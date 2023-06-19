import React from "react";
import Navbar from "../Homepage/Components/Navbar/Navbar";
import "./Projects.css";
import Carousel1 from "./CarouselCard/Carousel1";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="projs-landing">
        <h2 className="projs-head">
          featured
          <br />
          <span>Projects</span>
        </h2>
        <p>
          In years past, acoustic treatments were all about form and function.
          But new materials are changing the way the wall and ceiling industry
          can use acoustic treatments as part of the aesthetics of a space, and
          the sky is the limit.
          <br />
          <br />
          Acoustical treatment solutions are no exception, and play an important
          role in the redesign of workspaces, schools, healthcare facilities,
          hospitality venues, and so on.
          <br />
          <br />
          Now acoustic products are getting the attention they deserve and are
          no longer an afterthought, acoustical treatments are just as important
          as décor and aesthetics & décor while controlling sound.
          <br />
          <br />
          Acoustical products are moving beyond functionality and are being used
          as art, advertising images and decoration.
          <br />
          <br />
          Our new ranges of products are an amalgamation of Acoustics + Design
          delivering high performance and yet a design option to be incorporated
          in a space, making our solution easier for the A&D Community to
          specify.
        </p>
      </div>
      <div className="projs-cars">
        <Carousel1/>
      </div>
    </div>
  );
}
