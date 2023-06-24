import React from "react";
import Navbar from "../Pages/Homepage/Components/Navbar/Navbar";
import Footer from "../Pages/Homepage/Components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
