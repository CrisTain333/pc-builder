import RootLayout from "@/libs/Layout/RootLayout";
import Image from "next/image";
import React from "react";

const ProductDetailsPage = ({ product }) => {
  const productDetails = product?.data;

  const keyFeaturesArray = Object.entries(
    productDetails?.keyFeatures
  ).map(([key, value]) => ({
    key,
    value,
  }));

  if (product?.success === false) {
    return (
      <div className="h-[30vh] flex items-center justify-center">
        <p className="text-3xl text-red-600 font-semibold">
          Product Not Found
        </p>
      </div>
    );
  }
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              height={1000}
              width={1000}
              alt="ecommerce"
              className="lg:w-1/2 h-[80vh] w-full object-contain object-center rounded border border-gray-200"
              src={productDetails?.Image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className="flex items-center justify-between">
                <div className="text-sm title-font text-green-700 bg-green-200 p-2 my-2 rounded-md w-20 tracking-widest flex items-center justify-center">
                  {productDetails?.keyFeatures?.Brand}
                </div>
                <span
                  className={`text-lg font-semibold ${
                    productDetails?.Status === "In Stock"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {productDetails?.Status}
                </span>
              </div>

              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {productDetails?.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">
                    {productDetails?.Reviews?.length}{" "}
                    Reviews
                  </span>
                </span>
              </div>
              <p className="leading-relaxed">
                {productDetails?.Description}
              </p>
              <div className="mt-6  pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <div>
                    <h2>Key Features</h2>
                    <ul className="ml-10">
                      {keyFeaturesArray.map(
                        (feature, index) => (
                          <li
                            key={index}
                            className="my-2"
                          >
                            {" "}
                            <strong>
                              {" "}
                              &gt; {feature.key}:
                            </strong>{" "}
                            {feature.value}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
                <div className="my-5 flex items-center justify-between">
                  <h2 className="my-2">
                    Individual Rating :{" "}
                    <strong>
                      {" "}
                      {productDetails?.individualRating}
                    </strong>
                  </h2>
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${productDetails?.Price}
                  </span>
                </div>
              </div>
              <div className="">
                {/* <!-- Item Container --> */}
                <div class="flex flex-col gap-3 mt-5">
                  <h2 className="text-center text-base font-semibold">
                    Reviews
                  </h2>
                  <div class="flex flex-col gap-4  p-4">
                    {/* <!-- Profile and Rating --> */}
                    {productDetails?.Reviews?.map(
                      (review, index) => (
                        <div
                          class="flex justify justify-between shadow-md p-2 rounded-md"
                          key={index}
                        >
                          <div class="flex items-start justify-start gap-2">
                            <Image
                              className=" hidden md:block h-10 w-10 rounded-full ring-2 ring-[#28afa8] p-1 "
                              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                              alt="Image Description"
                              width={500}
                              height={500}
                            />
                            <div className="ml-2">
                              <span className="text-sm font-semibold ">
                                {review?.username}
                              </span>
                              <div className="text-xs">
                                {review?.comment}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsPage;
ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  const response = await fetch(
    `https://digital-cow-hut-eta.vercel.app/api/v1/products/all-products`
  );

  const data = await response.json();

  const paths = data?.data?.map((product) => ({
    params: { id: product?.id },
  }));

  return {
    paths,
    fallback: false, // Set to true to enable fallback for paths not generated at build time
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const product = await fetch(
    `https://digital-cow-hut-eta.vercel.app/api/v1/products/${params.id}`
  );
  const productData = await product.json();

  return {
    props: {
      product: productData,
    },
  };
}
