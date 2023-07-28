import RootLayout from "@/libs/Layout/RootLayout";
import ProductCard from "@/libs/components/ProductCard/ProductCard";
import Head from "next/head";
import React from "react";

const ProductCategory = ({ products, category }) => {
  return (
    <div className="w-[90%]  mx-auto">
      <Head>
        <title>{category}</title>
      </Head>
      <div className="mt-10">
        <h1 className="text-center text-5xl font-semibold">
          {category}
        </h1>

        <div className="mt-10 w-[90%] mx-auto ">
          <div className="grid gap-y-5 grid-cols-12 mt-10">
            {products.map((product) => {
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
    </div>
  );
};

export default ProductCategory;
ProductCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  const componentCategories = [
    "Processor",
    "Motherboard",
    "RAM",
    "Power Supply",
    "Storage Device",
    "Monitor",
    "Others",
  ];
  const paths = componentCategories.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false, // Set to true to enable fallback for paths not generated at build time
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const Products = await fetch(
    `${process.env.NEXT_FRONTEND_BASE_URL}/api/products/category/${params.category}`
  );
  const categoryData = await Products.json();

  return {
    props: {
      category: params.category,
      products: categoryData?.data,
    },
  };
}
