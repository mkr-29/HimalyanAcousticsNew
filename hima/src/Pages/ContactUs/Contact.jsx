import React from "react";
import "./Contact.css";
import Call from "./Assets/call.png";
import Querry from "./Assets/querry.png";
import Wa from "./Assets/wa.png";

const GoogleMap = () => {
  const iframe = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27385.254139127293!2d77.01758906992463!3d30.910241940800464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f863b6fa559d1%3A0x285b469c81fb7688!2sKool%20Pack%20And%20Allied%20Industries.!5e0!3m2!1sen!2sin!4v1691063740155!5m2!1sen!2sin"
      width="1000"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
  return <div>{iframe}</div>;
};
export default function Contact() {
  return (
    <>
      <div className="contact-s1 2xl:pl-24 py-20 flex flex-col 2xl:gap-4 px-4 text-gray-800">
        <span className="2xl:text-6xl font-bold text-3xl color3">
          We'd love to hear
          <br />
          from you
        </span>
        <br />
        <span className="s1text 2xl:text-3xl mb-8 color3">
          There's always something worth saying
          <br />
          but only to the right people
        </span>
        <div className="contact-s2 color3 flex 2xl:gap-20 gap-4 mr-60 flex-wrap items-start justify-between">
          <div className="flex flex-col text-2xl">
            <span>TIMING</span>
            <span className="font-bold">9AM to 6 PM</span>
          </div>
          <div className="flex flex-col text-2xl">
            <span>EMAIL US</span>
            <a href="mailto:sales@kpaiindia.com" className="font-bold">
              sales@kpaiindia.com
            </a>
          </div>
          <div className="flex flex-col text-2xl">
            <span>CALL US</span>
            <a href="tel:+919816144050" className="font-bold">
              +91 98161 44050
            </a>
            <a href="tel:+919779512233" className="font-bold">
              +91 97795 12233
            </a>
          </div>
          <div className="flex flex-col text-2xl">
            <span>FOR CAREERS</span>
            <a href="mailto:hr@kpaiworld.com" className="font-bold">
              hr@kpaiworld.com
            </a>
          </div>
        </div>
      </div>
      <div className="contact-form flex md:flex-row flex-col justify-between">
        <div className="contact-form text-gray-900 flex flex-col justify-center items-center py-14 lg:pl-20">
          <h5 className="2xl:text-6xl text-3xl mb-10 mr-10 color3">
            Stay <span className="font-bold">Connected</span>
          </h5>
          <form
            action=""
            className="flex flex-col justify-center flex-wrap w-full items-center"
          >
            <div className="flex flex-col flex-wrap 2xl:gap-10 gap-4 w-full 2xl:justify-between px-8">
              <div className="flex flex-col">
                <label
                  htmlFor="fname"
                  className="font-bold 2xl:ml-4 mb-1 color3"
                >
                  FIRST NAME
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="First Name"
                  className="border-2 border-[#2b2a29] rounded-lg px-2 py-2 "
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="font-bold 2xl:ml-4 mb-1 color3"
                >
                  YOUR EMAIL ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="sample@xyz.com"
                  className="border-2 border-[#2b2a29] rounded-lg px-2 py-2"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="mobile"
                  className="font-bold 2xl:ml-4 mb-1 color3"
                >
                  Mobile No.
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="+XX-XXXXX-XXXXX"
                  className="border-2 border-[#2b2a29] rounded-lg px-2 py-2"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="interest"
                  className="font-bold 2xl:ml-4 mb-1 color3"
                >
                  INTEREST
                </label>
                <select
                  name="interest"
                  id="interest"
                  className="border-2 border-[#2b2a29] rounded-lg px-2 py-2"
                >
                  <option value="Services">Services</option>
                  <option value="Intrest">Intrest</option>
                  <option value="Partner">Partner</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="mt-10 border-solid bg-[#2b2a29] text-white border-2 text-2xl font-bold px-28 py-2"
            >
              Confirm
            </button>
          </form>
        </div>
        <div className="contact-map text-gray-900 py-14 flex flex-col justify-between p-4 lg:p-20">
          <h5 className="2xl:text-4xl text-3xl items-end color3">
            Head Office | R&D | Manufacturing
          </h5>
          <div className="contact-map-main">
            <GoogleMap />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-2xl">
              KOOL PACK ALLIED INDUSTRIES
            </span>
            <span className="text-xl">
              Subathu Road, Dharampur - 173-209, Distt. Solan, Himachal Pradesh
              (India)
            </span>
          </div>
          <hr />
          <div className="contact-cities md:flex justify-around hidden">
            <h3 className="font-semibold text-gray-500 text-xl">New Delhi</h3>
            <h3 className="font-semibold text-gray-500 text-xl">Mumbai</h3>
            <h3 className="font-semibold text-gray-500 text-xl">Bengaluru</h3>
            <h3 className="font-semibold text-gray-500 text-xl">Kolkata</h3>
          </div>
        </div>
      </div>
      <div className="contact-cards bg-gray-300 w-full">
        <div className="contact-card">
          <div className="card-image">
            <img src={Call} alt="" />
          </div>
          <h2>By Phone</h2>
          <button>Call</button>
        </div>
        <div className="contact-card">
          <div className="card-image">
            <img src={Querry} alt="" />
          </div>
          <h2>Start For Inquiry</h2>
          <button>Start Here</button>
        </div>
        <div className="contact-card">
          <div className="card-image">
            <img src={Wa} alt="" />
          </div>
          <h2>Live Chat</h2>
          <button>Start Chat</button>
        </div>
      </div>
    </>
  );
}
