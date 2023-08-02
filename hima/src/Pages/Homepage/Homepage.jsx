import React from "react";
import Certifications from "./Components/Certifications/Certifications";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Achievements from "./Components/Achievements/Achievements";
import About1 from "./Components/About/About1";

export default function Homepage() {
  return (
    <div className="overflow-x-hidden">
      <Landing />
      <About />
      <About1 />
      <Achievements />
      <Certifications />
    </div>
  );
}
