import React, { Component } from "react";
import "./Footer.css";
import FB from "../Navbar/Assets/fb.png";
import LN from "../Navbar/Assets/ln.png";
import IN from "../Navbar/Assets/in.png";
import YT from "../Navbar/Assets/yt.png";
import HABW from "./Assets/ha-bw.png";
import Mail from "./Assets/mail.png";
import Tel from "./Assets/tel.png";
import Web from "./Assets/web.png";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer bg1 px-4 pb-32">
        <footer className="flex">
          <div className="w-1/2 flex flex-col mt-10 gap-16">
            <div className="flex gap-20">
              <img src={FB} className="w-10 h-10" alt="" />
              <img src={IN} className="w-10 h-10" alt="" />
              <img src={LN} className="w-10 h-10" alt="" />
              <img src={YT} className="w-10 h-10" alt="" />
            </div>
            <div className="flex flex-col color2">
              <img src={HABW} className="aspect-auto w-40" alt="" />
              <div className="color2 font1 leading-6 mt-4 tracking-wide">
                <h2 className="font-bold text-[18px]">
                  KOOL PACK ALLIED INDUSTRIES
                </h2>
                <p className="font1 text-[18px]">
                  Subathu Road, Dharampur - 173-209
                </p>
                <p className="font1 text-[18px]">
                  Distt. Solan, Himachal Pradesh (India)
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <div className="flex gap-4 items-center">
                  <img src={Mail} className="aspect-auto h-[10px]" alt="" />
                  <a
                    href="mailto: sales@kpaiindia.com"
                    className="font1 text-[16px]"
                  >
                    sales@kpaiindia.com
                  </a>
                </div>
                <div className="flex gap-4 items-center">
                  <img src={Tel} className="aspect-auto h-[10px]" alt="" />
                  <div className="flex gap-2">
                    <a
                      href="callto: +919815072135"
                      className="font1 text-[16px]"
                    >
                      +91 98150 72135,
                    </a>
                    <a
                      href="callto: +919779512233"
                      className="font1 text-[16px]"
                    >
                      +91 97795 12233
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <img src={Web} className="aspect-auto h-[10px]" alt="" />
                  <Link
                    to="//www.himalyanacoustics.com"
                    className="font1 text-[16px]"
                  >
                    www.himalyanacoustics.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex font1 color2 gap-28 mt-12">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[18px]">INSIDE HA</h3>
              <Link className="font1 text-[18px] font-light mt-2" to="">About Us</Link>
              <Link className="font1 text-[18px] font-light" to="">Our Presence</Link>
              <Link className="font1 text-[18px] font-light" to="">Certifications</Link>
              <Link className="font1 text-[18px] font-light" to="">Sustainability</Link>
              <Link className="font1 text-[18px] font-light" to="">Inspiring Design</Link>
              <Link className="font1 text-[18px] font-light" to="">Featured Projects</Link>
              <Link className="font1 text-[18px] font-light" to="">Faq</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[18px]">DOWNLOADS</h3>
              <Link className="font1 text-[18px] font-light mt-2" to="">Accreditations</Link>
              <Link className="font1 text-[18px] font-light" to="">Company Profile</Link>
              <Link className="font1 text-[18px] font-light" to="">Design Book</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[18px]">PARTNERSHIPS</h3>
              <Link className="font1 text-[18px] font-light mt-2t" to="">Partner With Us</Link>
              <Link className="font1 text-[18px] font-light" to="">Global Collaboration</Link>
              <Link className="font1 text-[18px] font-light" to="">Newsroom</Link>
              <Link className="font1 text-[18px] font-light" to="">Newsletter</Link>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
