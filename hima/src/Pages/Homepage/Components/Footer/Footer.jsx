import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer className="footer-body container px-10 grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 pb-10">
          <div className="link-section flex justify-start flex-col">
            <h3 className="text-gray-400 font-bold py-2 px-1">Inside HA</h3>
            <h3 className="py-2 px-1">
              <a href="/">Our Company</a>
            </h3>
            <h3 className="py-2 px-1">
              <a href="/">Test Report</a>
            </h3>
            <h3 className="py-2 px-1">
              <a href="/">FAQ's</a>
            </h3>
            <h3 className="py-2 px-1">
              <a href="/">Awards & Exhibitions</a>
            </h3>
            <h3 className="py-2 px-1">
              <a href="/">HA Infrastructure</a>
            </h3>
          </div>
          <div className="link-section flex justify-start flex-col">
            <h3 className="text-gray-400 font-bold py-2 px-1">Activities</h3>
            <h3 className="py-2 px-1">
              <a href="/">Blog</a>
            </h3>
            <h3 className="py-2 px-1">
              <a href="/">Featured Projects</a>
            </h3>
          </div>
          <div className="link-section flex justify-start flex-col">
            <h3 className="text-gray-400 font-bold py-2 px-1">
              Partner With Us
            </h3>
            <h3 className="py-2 px-1">
              <a href="/">Text</a>
            </h3>
            <h3 className="py-2 px-1">
              <a href="/">Text</a>
            </h3>
            <h3 className="py-2 px-1">
              <a href="/">Text</a>
            </h3>
            <h3 className="py-2 px-1">
              <a href="/">Text</a>
            </h3>
          </div>
          <div className="link-section flex justify-start flex-col">
            <h3 className="text-gray-400 font-bold py-2 px-1">Get In Touch</h3>
            <h3 className="py-2 px-1">
              <a href="/">Careers</a>
            </h3>
            <h3 className="py-2 px-1">
              <a href="/">Contact Us</a>
            </h3>
            <h3 className="py-2 px-1">
              <a href="/">Get a Free Quotes</a>
            </h3>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
