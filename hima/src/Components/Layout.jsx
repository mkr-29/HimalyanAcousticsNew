import React from "react";
import Navbar from "../Pages/Homepage/Components/Navbar/Navbar";
import Footer from "../Pages/Homepage/Components/Footer/Footer";
import WhatsappButton from "./Whatsapp";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <WhatsappButton />
    </>
  );
};

export default Layout;
