import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SimpleNav from "../components/Navbar/SubNav";

const RootLayout = ({ children }) => {
  return (
    <div className="">
      <div>
        <Navbar />
        <div className="mt-14">
          <div className="hidden md:block">
            <SimpleNav />
          </div>
        </div>
        <div className="w-[90%] mx-auto mt-20 md:mt-10">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
