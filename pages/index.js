import RootLayout from "@/libs/Layout/RootLayout";
import Footer from "@/libs/components/Footer/Footer";
import Banner from "@/libs/components/Home/Banner/Banner";
import Navbar from "@/libs/components/Navbar/Navbar";
import ProductCard from "@/libs/components/ProductCard/ProductCard";
import { componentCategories } from "@/libs/constant/categoryData";
import Head from "next/head";
import Image from "next/image";
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
              Products that are loved by the community.
              Updated every hour.
            </p>
          </div>
          <div className="w-[90%] mx-auto ">
            <div className="grid gap-y-5 grid-cols-12 mt-10">
              {data?.data?.map((product) => {
                return (
                  <div
                    key={product?.id}
                    className="col-span-12 md:col-span-4 "
                  >
                    <ProductCard data={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Category */}

        <div className="mt-20 w-[90%] mx-auto">
          <div className="text-center">
            <h1 className="text-3xl text-gray-800 font-semibold">
              Featured Categories
            </h1>

            <div className="mt-10 grid grid-cols-12 gap-y-5 w-[90%] mx-auto ">
              {componentCategories &&
                componentCategories.map((i, index) => (
                  <div
                    key={index}
                    className={` col-span-3 `}
                    onClick={() => submitHandle(i)}
                  >
                    <h3 className="p-2 h-20 w-40 flex items-center justify-center bg-white rounded-md shadow-md transition-all duration-300  mx-3 cursor-pointer select-none text-black text-base ">
                      {i}
                    </h3>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* CTA Section  */}
        <div className="mt-20">
          <section className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
              <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                <div className="flex-1 sm:hidden lg:block">
                  <Image
                    src="https://cdn.wallpapersafari.com/88/10/vVGQbW.jpg"
                    className="md:max-w-lg sm:rounded-lg"
                    alt=""
                    height={500}
                    width={500}
                  />
                </div>
                <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                  <h3 className="text-indigo-600 font-semibold">
                    Professional services
                  </h3>
                  <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Build your PC with help from our experts
                  </p>
                  <p className="mt-3 text-gray-600">
                    Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim
                    id est laborum, sed ut perspiciatis unde
                    omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium
                  </p>
                </div>
              </div>
            </div>
          </section>
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
  // Fetch data from an API
  const response = await fetch(
    `${process.env.NEXT_FRONTEND_BASE_URL}/api/home-products`
  );
  const data = await response.json();

  // Return the fetched data as props
  return {
    props: {
      data,
    },
  };
}
