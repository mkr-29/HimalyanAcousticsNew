import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="div-1">
          <h1 className="about-head">
            acoustic
            <br />
            meet's design!!
          </h1>
          <span className="about-desc">
          In years past, acoustic treatments were all about form and function. But new materials
are changing the way the wall and ceiling industry can use acoustic treatments as part
of the aesthetics of a space, and the sky is the limit.<br/>
Acoustical treatment solutions are no exception, and play an important role in the
redesign of workspaces, schools, healthcare facilities, hospitality venues, and so on.<br/>
ents are just as important as décor and aesthetics & décor while controlling sound.
            <Link to="/">Read More...</Link>
          </span>
        </div>
        <div className="div-2">
          <h1 className="about-sub-head">
            INDOOR AIR QUALITY
            <br /> at our best green standards
          </h1>
          <span className="about-desc">
          Environmental noise and air pollution, as well as poor green infrastructure quality, are
major concerns for the new spaces being designed in the contemporary era.This issue
is further stressed for urban areas located close to aggressive sources of such
pollutants, such as airports, railways, highways, or leisure areas.
            <Link to="/">Read More...</Link>
          </span>
        </div>
      </div>
      <div className="about-left">
        <div className="div-1">
          <h1 className="about-head">
          performance
            <br />
            based solutions
          </h1>
          <span className="about-desc">
            
          </span>
        </div>
        <div className="div-3">
          <div>
            <div className="about-sub-head">STC 60</div>
            <span className="about-sub-desc">
              llorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum
            </span>
          </div>
          <div>
            <div className="about-sub-head">STC 55</div>
            <span className="about-sub-desc">
                llorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                ipsum
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
