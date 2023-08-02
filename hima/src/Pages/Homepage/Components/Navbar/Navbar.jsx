import "./Navbar.css";
import Facebook from "./Assets/fb.png";
import Linkedin from "./Assets/ln.png";
import Youtube from "./Assets/yt.png";
import Instagram from "./Assets/in.png";
import HimalyanLogo from "./Assets/hima-logo.png";
import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);

  const onClickHeader = () => {
    setIsOpen1(!isOpen1);
  };

  const location = useLocation();

  const isLinkActive = (path) => {
    return location.pathname === path ? "active-navs" : "nav-down-links";
  };

  const isUpLinkActive = (path) => {
    return location.pathname === path ? "active-up-navs" : "nav-up-links";
  };
  return (
    <div className="navbar">
      <div className="nav-up">
        <div class="menu-bar">
          <ul>
            <li>
              <a href="#">QUICK LINKS &#9660;</a>
              <div class="dropdown-menu">
                <ul>
                  <li>
                    <Link className="nav-up-links" to="/">
                      Partner With Us
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-up-links" to="/">
                      Global Collaboration
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-up-links" to="/">
                      Carriers
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="nav-up-left">
          {/* <NavLink
            className={isUpLinkActive("./sustainability")}
            to="/sustainability"
          >
            Sustainability
          </NavLink> */}
          <Link className="nav-up-links" to="/">
            Partner With Us
          </Link>
          <span className="bg-white w-[0.1px] h-full" />
          <Link className="nav-up-links" to="/">
            Global Collaboration
          </Link>
          <span className="bg-white w-[1px] h-full" />
          <Link className="nav-up-links" to="/">
            Carriers
          </Link>
        </div>
        <div className="nav-up-right">
          <Link className="nav-up-links" to="/">
            <img src={Facebook} alt="fb" />
          </Link>
          <Link className="nav-up-links" to="/">
            <img src={Instagram} alt="in" />
          </Link>
          <Link className="nav-up-links" to="/">
            <img src={Linkedin} alt="ln" />
          </Link>
          <Link className="nav-up-links" to="/">
            <img src={Youtube} alt="tw" />
          </Link>
        </div>
      </div>

      <div className="nav-down">
        {/* <div className={header ? "header active" : "header"}> */}
        <div
          className={`header-wrapper ${isOpen ? "header-wrapper active" : ""} `}
        >
          <div className="nav-lg">
            <NavLink to="/" className="header-logo">
              <img
                src={HimalyanLogo}
                alt="himalyan-logo"
                className="himalyan-logo"
              />
            </NavLink>
          </div>

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
                <NavLink exact to="/" className={isLinkActive("/")}>
                  Home
                  <span className="active-navline" />
                </NavLink>
                <span className="bg-black w-[1px] h-full" />
              </li>
              <li>
                <NavLink
                  className={isLinkActive("/our-history")}
                  to="/our-history"
                >
                  Our History
                  <span className="active-navline" />
                </NavLink>
              </li>
              <li>
                <NavLink className={isLinkActive("/projects")} to="/projects">
                  Projects
                  <span className="active-navline" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={isLinkActive("/inspiring-design")}
                  to="/inspiring-design"
                >
                  Inspiring Design
                  <span className="active-navline" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={isLinkActive("/contact-us")}
                  to="/contact-us"
                >
                  Contact Us
                  <span className="active-navline" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
