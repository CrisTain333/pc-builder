import RootLayout from "@/libs/Layout/RootLayout";
import Footer from "@/libs/components/Footer/Footer";
import Banner from "@/libs/components/Home/Banner/Banner";
import Navbar from "@/libs/components/Navbar/Navbar";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>MasterBuild</title>
      </Head>
      <div className="text-center h-[100vh]">
        {/* Hero */}
        <Banner />
      </div>
    </>
  );
};

export default index;
index.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
