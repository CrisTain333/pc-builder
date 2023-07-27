import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RootLayout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <div className="my-5 mt-10 md:mt-32">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
