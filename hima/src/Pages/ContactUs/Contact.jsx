import React from "react";
import "./Contact.css";
import Navbar from "../Homepage/Components/Navbar/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contact-s1 text-white pl-24 py-10 flex flex-col gap-4">
        <span className="text-5xl font-bold">
          We’d love to hear
          <br />
          from you
        </span>
        <br />
        <span className="s1text text-lg">
          There’s always something worth saying
          <br />
          but only to the right people
        </span>
      </div>
      <div className="contact-s2 px-24 text-white flex gap-32 flex-wrap">
        <div className="flex flex-col text-xl">
          <span>TIMING</span>
          <span className="font-bold">9AM to 6 PM</span>
        </div>
        <div className="flex flex-col text-xl">
          <span>EMAIL US</span>
          <span className="font-bold">sales@kpaiindia.com</span>
        </div>
        <div className="flex flex-col text-xl">
          <span>CALL US</span>
          <span className="font-bold">+91 98161 44050</span>
        </div>
        <div className="flex flex-col text-xl">
          <span>FOR CAREERS</span>
          <span className="font-bold">hr@kpaiworld.com</span>
        </div>
      </div>
      <div className="contact-form bg-black text-white flex flex-col justify-center items-center py-14">
        <h5 className="text-6xl mb-10">
          Stay <span className="font-bold">Connected</span>
        </h5>
        <form
          action=""
          className="flex flex-col w-4/5 justify-center items-center"
        >
          <div className="flex gap-10 w-4/5 justify-between">
            <div className="flex flex-col w-1/3">
              <label htmlFor="fname" className="font-bold ml-4 mb-1">
                FIRST NAME
              </label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="First Name"
                className="border-2 border-white rounded-lg px-2 py-2 bg-black"
              />
            </div>
            <div className="flex flex-col w-1/3">
              <label htmlFor="email" className="font-bold ml-4 mb-1">
                YOUR EMAIL ID
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="sample@xyz.com"
                className="border-2 border-white rounded-lg px-2 py-2 bg-black"
              />
            </div>
            <div className="flex flex-col w-1/3">
              <label htmlFor="interest" className="font-bold ml-4 mb-1">
                INTREST
              </label>
              <select
                name="interest"
                id="interest"
                className="border-2 border-white rounded-lg px-2 py-2 bg-black"
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
            className="mt-10 border-solid border-2 text-2xl font-bold px-24 py-2"
          >
            Confirm
          </button>
        </form>
      </div>
      <div className="contact-s3 bg-black text-white flex flex-col items-center px-24">
        <h4 className="text-6xl mt-10">
          Office <span className="font-bold">Directory</span>
        </h4>
        <p className="font-bold text-2xl mt-6">
          To Speak with a Himalyan Acoustics Representative, Please Contact
          Nearest Oce (Business Queries Only).
          <br />
          <br />
          To Reach Us After Normal Business Hours, Including Nights, Weekends, &
          Holidays, Please Contact Dharampur (HP) Head Oce.
        </p>
        <div className="flex flex-wrap gap-10 font-bold text-xl mt-16 justify-between">
          <div className="flex flex-col w-1/2 gap-2">
            <h6>DHARAMPUR, HEAD OFFICE, INDIA</h6>
            <hr />
            <p>
              To Speak with a Himalya
              <br />
              Acoustics Representative,
              <br />
              Please Contact Nearest Oce
              <br />
              (Business Queries Only).
            </p>
          </div>
          <div className="flex flex-col w-1/2 gap-2">
            <h6>DHARAMPUR, HEAD OFFICE, INDIA</h6>
            <hr />
            <p>
              To Speak with a Himalya
              <br />
              Acoustics Representative,
              <br />
              Please Contact Nearest Oce
              <br />
              (Business Queries Only).
            </p>
          </div>
          <div>
            <h6>DHARAMPUR, HEAD OFFICE, INDIA</h6>
            <hr />
            <p>
              To Speak with a Himalya
              <br />
              Acoustics Representative,
              <br />
              Please Contact Nearest Oce
              <br />
              (Business Queries Only).
            </p>
          </div>
          <div>
            <h6>DHARAMPUR, HEAD OFFICE, INDIA</h6>
            <hr />
            <p>
              To Speak with a Himalya
              <br />
              Acoustics Representative,
              <br />
              Please Contact Nearest Oce
              <br />
              (Business Queries Only).
            </p>
          </div>
          <div>
            <h6>DHARAMPUR, HEAD OFFICE, INDIA</h6>
            <hr />
            <p>
              To Speak with a Himalya
              <br />
              Acoustics Representative,
              <br />
              Please Contact Nearest Oce
              <br />
              (Business Queries Only).
            </p>
          </div>
          <div>
            <h6>DHARAMPUR, HEAD OFFICE, INDIA</h6>
            <hr />
            <p>
              To Speak with a Himalya
              <br />
              Acoustics Representative,
              <br />
              Please Contact Nearest Oce
              <br />
              (Business Queries Only).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
