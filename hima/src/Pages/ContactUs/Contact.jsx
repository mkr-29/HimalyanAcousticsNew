import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-s1 text-white 2xl:pl-24 py-10 flex flex-col 2xl:gap-4 px-4">
        <span className="2xl:text-5xl font-bold text-3xl">
          We’d love to hear
          <br />
          from you
        </span>
        <br />
        <span className="s1text 2xl:text-lg">
          There’s always something worth saying
          <br />
          but only to the right people
        </span>
      </div>
      <div className="contact-s2 2xl:px-24 px-6 text-white flex 2xl:gap-32 gap-4 flex-wrap">
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
        <h5 className="2xl:text-6xl text-3xl mb-10">
          Stay <span className="font-bold">Connected</span>
        </h5>
        <form
          action=""
          className="flex flex-col 2xl:w-4/5 justify-center flex-wrap w-full items-center"
        >
          <div className="flex flex-wrap 2xl:gap-10 gap-4 2xl:w-4/5 w-full 2xl:justify-between flex-col px-4">
            <div className="flex flex-col 2xl:w-1/3">
              <label htmlFor="fname" className="font-bold 2xl:ml-4 mb-1">
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
            <div className="flex flex-col 2xl:w-1/3">
              <label htmlFor="email" className="font-bold 2xl:ml-4 mb-1">
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
            <div className="flex flex-col 2xl:w-1/3">
              <label htmlFor="interest" className="font-bold 2xl:ml-4 mb-1">
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
      <div className="contact-s3 bg-black text-white flex flex-col items-center 2xl:px-24 pb-14 px-4">
        <h4 className="2xl:text-6xl text-3xl mt-10">
          Office <span className="font-bold">Directory</span>
        </h4>
        <p className="font-bold 2xl:text-2xl mt-6">
          To Speak with a Himalyan Acoustics Representative, Please Contact
          Nearest Oce (Business Queries Only).
          <br />
          <br />
          To Reach Us After Normal Business Hours, Including Nights, Weekends, &
          Holidays, Please Contact Dharampur (HP) Head Oce.
        </p>
        <div className="con-cards flex flex-wrap gap-10 text-xl mt-16 justify-between">
          <div className="flex flex-col gap-2">
            <h6>DHARAMPUR, HEAD OFFICE, INDIA</h6>
            <hr />
            <p className="font-bold">
              To Speak with a Himalya
              <br />
              Acoustics Representative,
              <br />
              Please Contact Nearest Oce
              <br />
              (Business Queries Only).
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="font-bold">GOVERNMENT PROJECT, PAN INDIA</h6>
            <hr />
            <p className="font-bold">
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
            <h6>MUMBAI (WEST INDIA)</h6>
            <hr />
            <p className="font-bold">
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
            <h6>BENGALURU (SOUTH INDIA)</h6>
            <hr />
            <p className="font-bold">
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
            <h6>DELHI (NORTH INDIA)</h6>
            <hr />
            <p className="font-bold">
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
            <h6 className="font-bold">INDORE (CENTRAL INDIA)</h6>
            <hr />
            <p className="font-bold">
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
    </>
  );
}
