import RootLayout from "@/libs/Layout/RootLayout";
import Footer from "@/libs/components/Footer/Footer";
import Banner from "@/libs/components/Home/Banner/Banner";
import Navbar from "@/libs/components/Navbar/Navbar";
import ProductCard from "@/libs/components/ProductCard/ProductCard";
import Head from "next/head";
import React from "react";

const index = ({ data }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>MasterBuild</title>
      </Head>
      <div className="">
        {/* Hero */}
        <Banner />

        {/* Featured Section */}

        <div className="mt-20 w-[90%] mx-auto">
          <div className="text-center">
            <h1 className="text-3xl text-gray-800 font-semibold">
              Featured Products
            </h1>
            <p className="mt-3 text-gray-500">
              Blogs that are loved by the community. Updated
              every hour.
            </p>
          </div>
          <div className="w-[90%] mx-auto ">
            <div className="grid gap-y-5 grid-cols-12 mt-10">
              {data?.data?.map((product) => {
                return (
                  <div
                    key={product?.id}
                    className="col-span-4"
                  >
                    <ProductCard data={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
index.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  // Fetch data from an API or any data source
  const response = await fetch(
    `${process.env.NEXT_FRONTEND_BASE_URL}/api/home-products`
  );
  const data = await response.json();

  // Return the fetched data as props
  return {
    props: {
      data,
    },
    // Revalidate the page every 10 seconds (optional)
    revalidate: 10,
  };
}
