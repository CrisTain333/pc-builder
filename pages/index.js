import RootLayout from "@/libs/Layout/RootLayout";
import Footer from "@/libs/components/Footer/Footer";
import Navbar from "@/libs/components/Navbar/Navbar";
import React from "react";

const index = () => {
  return (
    <div className="text-center h-[100vh]">
      <p className="text-6xl ">Hellos</p>
    </div>
  );
};

export default index;
index.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
