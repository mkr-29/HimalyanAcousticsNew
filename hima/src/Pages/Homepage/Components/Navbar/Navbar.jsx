import "./Navbar.css";
import Facebook from "./Assets/fb.png";
import Linkedin from "./Assets/ln.png";
import Whatsapp from "./Assets/wa.png";
import Instagram from "./Assets/in.png";
import Home from "./Assets/home.png";
import HomeAc from "./Assets/home-ac.svg";
import HomeIn from "./Assets/home-in.svg";
import HimalyanLogo from "./Assets/hima-logo.png";
import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon1 from "./Assets/logo1.png";
import Icon2 from "./Assets/logo2.png";
import Icon3 from "./Assets/logo3.png";
import Icon4 from "./Assets/logo4.png";

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

  const location = useLocation();

  // Define a helper function to determine if a link is active
  const isLinkActive = (path) => {
    if (path === '/') {
      return location.pathname === path ? 'active-home' : 'home-icon';
    }
    else {
      return location.pathname === path ? 'active-navs' : 'nav-down-links';
    }
  };

  const isUpLinkActive = (path) => {
    return location.pathname === path ? 'active-up-navs' : 'nav-up-links';
  };
  return (
    <div className="navbar">
      <div className="nav-up">
        <div className="nav-up-left">
          <NavLink className={isUpLinkActive('./sustainability')} to="/sustainability">
            SUSTAINABILITY
          </NavLink>
          <Link className="nav-up-links" to="/">
            PARTNER WITH US
          </Link>
          <Link className="nav-up-links" to="/">
            INTERNATIONAL COLLABORATION
          </Link>
          <NavLink className={isUpLinkActive('./certification')} to="/certification">
            CERTIFICATION
          </NavLink>
          <Link className="nav-up-links" to="/">
            CARRIERS@HA
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
            <img src={Whatsapp} alt="tw" />
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
                <li className="nav-icos">
                  <div className="icos">
                    <Link className="nav-down-icos" to="/">
                      {/* random image from the internet */}
                      <img
                        src={Icon1}
                        alt="himalyan-logo"
                        className="himalyan-logo"
                        />
                    </Link>
                    <Link className="nav-down-icos" to="/">
                      <img
                        src={Icon2}
                        alt="himalyan-logo"
                        className="himalyan-logo"
                      />
                    </Link>
                    <Link className="nav-down-icos" to="/">
                      <img
                        src={Icon3}
                        alt="himalyan-logo"
                        className="himalyan-logo"
                      />
                    </Link>
                    <Link className="nav-down-icos" to="/">
                      <img
                        src={Icon4}
                        alt="himalyan-logo"
                        className="himalyan-logo"
                      />
                    </Link>
                  </div>
                </li>
                <li>
                  <NavLink exact to="/" className="home-icon">  
                    <img src={Home} alt="home" />
                    {/* if path===/ then display HomeAc else HomeIn */}
                    {isLinkActive('/') === 'active-home' ? <img src={HomeAc} alt="home" /> : <img src={HomeIn} alt="home" />}
                  </NavLink>
                </li>
                <li>
                  <NavLink className={isLinkActive('/our-history')} to="/our-history">
                    OUR HISTORY
                    <span className="active-navline"/>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={isLinkActive('/projects')} to="/projects">
                    PROJECTS
                    <span className="active-navline"/>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={isLinkActive('/inspiring-design')} to="/inspiring-design">
                    INSPIRING DESIGN
                    <span className="active-navline"/>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={isLinkActive('/contact-us')} to="/contact-us">
                    CONTACT US
                    <span className="active-navline"/>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}
