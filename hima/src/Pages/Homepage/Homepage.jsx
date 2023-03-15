import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Certifications from "./Components/Certifications";
import Footer from "./Components/Footer";
import Achievements from "./Components/Achievements";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Achievements />
      <Certifications />
      <Footer />
    </div>
  );
}
