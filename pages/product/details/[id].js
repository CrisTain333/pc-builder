import RootLayout from "@/libs/Layout/RootLayout";
import Image from "next/image";
import React from "react";

const ProductDetailsPage = ({ product }) => {
  const productDetails = product?.data;
  console.log(product);

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
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
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
                <div className="my-5">
                  <h2 className="my-2">
                    Individual Rating :{" "}
                    <strong>
                      {" "}
                      {productDetails?.individualRating}
                    </strong>
                  </h2>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${productDetails?.Price}
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
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
  const ids = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7,8",
    "9",
    "10",
    "11",
    "12,13",
    "14",
    "15,16",
    "17",
    "18,19",
    "20",
    "21",
    "22,23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
  ];

  const paths = ids?.map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false, // Set to true to enable fallback for paths not generated at build time
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const product = await fetch(
    `${process.env.NEXT_FRONTEND_BASE_URL}/api/products/${params.id}`
  );
  const productData = await product.json();

  return {
    props: {
      product: productData,
    },
  };
}
