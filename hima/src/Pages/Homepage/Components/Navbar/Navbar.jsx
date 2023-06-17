import "./Navbar.css";
import Facebook from "./Assets/fb.svg";
import Linkedin from "./Assets/ln.svg";
import Twitter from "./Assets/tw.svg";
import Instagram from "./Assets/in.svg";
import HimalyanLogo from "./Assets/hima-logo.png";
import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const [isOpen, setOpen] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);

  const onClickHeader = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <div className="navbar">
      <div className="nav-up">
        <div className="nav-up-left">
          <Link className="nav-up-links" to="/">
            SUSTAINABILITY
          </Link>
          <Link className="nav-up-links" to="/">
            PARTNER WITH US
          </Link>
          <Link className="nav-up-links" to="/">
            INTERNATIONAL COLLABORATION
          </Link>
          <Link className="nav-up-links" to="/">
            CERTIFICATION
          </Link>
          <Link className="nav-up-links" to="/">
            CARRIERS@HA
          </Link>
        </div>
        <div className="nav-up-right">
          <Link className="nav-up-links" to="/">
            <img src={Facebook} alt="fb" />
          </Link>
          <Link className="nav-up-links" to="/">
            <img src={Linkedin} alt="ln" />
          </Link>
          <Link className="nav-up-links" to="/">
            <img src={Twitter} alt="tw" />
          </Link>
          <Link className="nav-up-links" to="/">
            <img src={Instagram} alt="in" />
          </Link>
        </div>
      </div>

      <div className="nav-down">
        {/* <div className={header ? "header active" : "header"}> */}
          <div
            className={`header-wrapper ${
              isOpen1 ? "header-wrapper active" : ""
            } `}
          >
            <NavLink to="/" className="header-logo">
              <img
                src={HimalyanLogo}
                alt="himalyan-logo"
                className="himalyan-logo"
              />
            </NavLink>

            <div onClick={onClickHeader} className="menu">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                className="ham-menu-hima"
              />
            </div>

            <div className="nav-items">
              <ul>
                <li>
                  <div className="icos"></div>
                </li>
                <li>
                  <Link activeClassName="active-nav-home" className="home-icon" exact to="/">
                    H
                  </Link>
                </li>
                <li>
                  <Link activeClassName="active-nav" className="nav-down-links" to="/our-history">
                    OUR HISTORY
                  </Link>
                </li>
                <li>
                  <Link activeClassName="active-nav" className="nav-down-links" to="/projects">
                    PROJECTS
                  </Link>
                </li>
                <li>
                  <Link activeClassName="active-nav" className="nav-down-links" to="/inspiring-design">
                    INSPIRING DESIGN
                  </Link>
                </li>
                <li>
                  <Link activeClassName="active-nav" className="nav-down-links" to="/">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}
