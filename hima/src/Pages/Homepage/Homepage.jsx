import React from "react";
import Certifications from "./Components/Certifications/Certifications";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Achievements from "./Components/Achievements/Achievements";

export default function Homepage() {
  return (
    <div className="overflow-x-hidden">
      <Landing />
      <About />
      <hr className="mx-4 my-8 mt-12 border-solid border w-full" />
      <Achievements />
      <Certifications />
    </div>
  );
}
