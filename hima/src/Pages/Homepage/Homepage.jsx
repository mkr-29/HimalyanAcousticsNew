import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Certifications from "./Components/Certifications/Certifications";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Achievements from "./Components/Achievements/Achievements";

export default function Homepage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Landing/>
      <About />
      <Achievements />
      <Certifications />
      <Footer />
    </div>
  );
}
