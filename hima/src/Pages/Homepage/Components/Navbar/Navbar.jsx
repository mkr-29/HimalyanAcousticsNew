import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import Facebook from "./Assets/fb.svg";
import Linkedin from "./Assets/ln.svg";
import Twitter from "./Assets/tw.svg";
import Instagram from "./Assets/in.svg";
import HimalyanLogo from "./Assets/hima-logo.png"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-up">
        <div className="nav-up-left">
          <Link className="nav-up-links" to="/">SUSTAINABILITY</Link>
          <Link className="nav-up-links" to="/">OUR ASSOCIATE PROGRAMME</Link>
          <Link className="nav-up-links" to="/">GLOBAL PARTNERS</Link>
          <Link className="nav-up-links" to="/">DOWNLOAD</Link>
          <Link className="nav-up-links" to="/">CARRIERS@HA</Link>
        </div>
        <div className="nav-up-right">
          <Link className="nav-up-links" to="/"><img src={Facebook} alt="fb" /></Link>
          <Link className="nav-up-links" to="/"><img src={Linkedin} alt="ln" /></Link>
          <Link className="nav-up-links" to="/"><img src={Twitter} alt="tw" /></Link>
          <Link className="nav-up-links" to="/"><img src={Instagram} alt="in" /></Link>
        </div>
      </div>
      <div className="nav-down">
        <img src={HimalyanLogo} alt="himalyan-logo" />
        <div className="icos"></div>
        <Link to="/">Home</Link>
        <Link className="nav-down-links" to="/">OUR HISTORY</Link>
        <Link className="nav-down-links" to="/">INSPIRING DESIGN</Link>
        <Link className="nav-down-links" to="/">PRODUCT FINDER</Link>
        <Link className="nav-down-links" to="/">REFERENCES</Link>
        <Link className="nav-down-links" to="/">Contact Us</Link>
      </div>
    </div>
  );
}
