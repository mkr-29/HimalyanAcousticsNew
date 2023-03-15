import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Certifications from "./Components/Certifications";
import Footer from "./Components/Footer";
import Achievements from "./Components/Achievements";
import Landing from "./Components/Landing/Landing";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Landing/>
      <Achievements />
      <Certifications />
      <Footer />
    </div>
  );
}
